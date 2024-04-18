---
title: "TETRA Research (Draft)"
date: "2024-04-16"
layout: post
draft: true
---
### If you are reading this right now, this is an unpublished DRAFT. We have not successfully exploited the radios yet

Since 2020 I've had an interest in listening to the radios of the TTC (Toronto Transit Commission). I wanted to better understand why my train would randomly stop at certain stations when signals ahead said it was all clear, or why trains would occasionally roll into stations very slowly. There are online streams of their radio system, however most of the network does not support cellular data. My solution for that was a very scary looking setup using an RTL-SDR, Raspberry Pi, and USB power bank. I never use that setup because it was clunky and hard to take with me; and battery life was abysmal.

I've never attempted any project like this before, so great thanks given to cbax, Connor, Anze for collaborating with me on this.

Thanks as well to Manoel for being welcoming into Ham TETRA communities and providing guidance, as well as Midnight Blue for discovering the exploits we're exploiting.

## Initial research and acquiring radios

The idea for this project started when [cbax](https://cbax.dev) mentioned to me a really affordable listing (aprox 60 USD per radio) for STP8040 radios on idlefish (A chinese market similar to Ebay). These radios are the same model used by the TTC and I figured I could get some kind of non-affiliate scanning working if I bought them. Unfortunately for us, this listing was too good to be true. The seller had mistaken their SBP8040 radios (a DMR radio) for the STP8040 and cancelled our order once we asked to verify the model; However the idea of repurposing an existing TETRA handheld was already in my head.

We then pivoted to looking at MTH800 and MTP850 radios due to their affordability and wide availability compared to other models. [Connor](https://connormcf.com) ordered some MTP850s and MTH800s from Alibaba and Ebay. Unfortunately, once I had figured out how to decrypt the firmwares (By setting a breakpoint for the set password function of the ZIP library) I had discovered that these radios were using some weird "Patriot" archetecture and would be difficult to modify. 

> "The microprocessor is a dual-core processor that contains a DSP56600 core and an MCORE microcontroller with custom peripherals."
(source: http://manuals.repeater-builder.com/mo-files2/-ASTRO%20XTL%20Series/ASTRO%20XTL1500%20Detailed%20Service%20Manual%206815854H01-A.pdf)

```xml
<?xml version="1.0" encoding="utf-8"?>
<XMLConfigOfCPUTypeRecord xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <RecordsList>
    <CPUTypeRecord CPUType="RED_CAP" ByteOrder="BigEndian" StartAddress="1073741824" PlatformList="4,3,2,1,5,6" ReleaseIDPtr="268501204"/>
    <CPUTypeRecord CPUType="OMAP" ByteOrder="LittleEndian" StartAddress="201326592" PlatformList="14" ReleaseIDPtr="201850944"/>
    <CPUTypeRecord CPUType="PATRIOT" ByteOrder="BigEndian" StartAddress="268435456" PlatformList="7,8,10,11,12,13,15,16,17,26,28,29,31" ReleaseIDPtr="268501204"/>
    <CPUTypeRecord CPUType="FREON" ByteOrder="LittleEndian" StartAddress="16777216" PlatformList="27,33,34,35" ReleaseIDPtr="50331648"/>
  </RecordsList>
</XMLConfigOfCPUTypeRecord>
```
*MTH800 and MTP850 are platform 7 and 13 respectively*
TODO: Edit with the global stylesheet for my site so that the above formatting doesnt look terrible

In disassembling random radio firmwares [Anze](https://anze.dev) noticed one of the firmwares contained a Linux squashfs image and our research pivoted. Anze pointed out some stuff from [Midnight Blue's RE:TETRA](https://midnightblue.nl/retetra) project and we pivoted to following their research closely. We finally decided on working with MTP3000 and MTP6000 series radios since they have an ARM CPU and use Linux.

In disassembling the primary executable that runs on the radio "teds_app" I had accidentally found reference to a "bluetooth linux shell" and through further digging found that its configurable in one of the hidden parts of the code plug (radio configuration). The bluetooth shell is locked behind a check if a file exists (/etc/debugfs), and so our plan to get root on the radios would be to patch that function to return true.

At this point I've decided that the end goal of this project will be to get a root shell on the radios and play bad apple on the display. I feel as if modifying the DSP to be able to monitor systems without registration will be beyond what I'm able to learn in a short period of time, and will probably be relegated to a future project.

After finding this I decided to buy a MTP3000 radio with bluetooth to begin working on the exploit. Sellers on idlefish were uncooperative, often not replying to our messages, or raising the price after we inquire to purchase. Eventually someone in the HAM TETRA group chats was offering to sell an MTP3250 with accessories, and I jumped on the offer.

### If you are reading this right now, this is an unpublished DRAFT. We have not successfully exploited the radios yet