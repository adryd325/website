---
title: Thoughts on moving back to MacOS
date: "2024-07-31"
layout: post
draft: true
---

A few weeks ago water from my water bottle spilled onto my laptop (a Thinkpad X1 Extreme Gen 2) due to pressure difference in the plane. After drying it as best I could, it did not survive. Since then I've been on a 2019 13 inch Macbook Pro and I wanted to write some comments about things I really missed about MacOS when on Linux, and my plans to fix some of these problems when I move back.

Tangent I wanted to speak about _somewhere_: The person who gave this Macbook to me gave it to me because it would kernel panic 3 minutes after boot and they had bought a replacement. The touch bar had experienced some sort of failure, and MacOS (and RecoveryOS) [will kernel panic if "dfrd" hasn't responded to the watchdog daemon within 3 minutes](https://apple.stackexchange.com/questions/440480/monterey-repeated-kernel-panics-watchdog-timeout-no-successful-checkins-fro). dfrd seems to be what's in charge of communication with the touch bar. The solution to this was simply to unplug the touch bar, and now the system works fine.

So here's what I really feel is missing on Linux that MacOS has:

Preview.app is one of the things I missed the most on Linux. Being able to make quick adjustments like rotations or drawing a circle over something in a screenshot is incredibly useful. Launching a whole photo editor like GIMP and then [being unable to intuitively draw a circle](https://pub.mastodon.sleeping.town/@adryd/112816485242526999) was a huge disappointment when I first moved to Linux. The most fitting tool I've found is [Obfuscate](https://flathub.org/apps/com.belmoussaoui.Obfuscate), and I'm considering forking it to add a few more features such as EXIF editing, a simple drawing tool, text tool and cropping. (If I can find the motivation)

As for PDFs in Preview.app, I typically used either Xournal++ or Firefox to edit/fill out PDFs. Xournal++ has a bit of a dated apperance, and a few unintuitive features, but otherwise serves its purpose well.

A lot of open-source software tends to have pretty terrible UX. I'm not sure how this problem might be addressed, but it's something I felt the need to comment on.
