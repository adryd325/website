---
title: why the twitter embeds bot is broken
excerpt: >-
  As of June 30th, 2023, Twitter has made the decision to require users to log in to access the site. This breaks 3rd party clients such as Nitter and embeds on many sites including with my video embeds bot.
layout: post
---

As of June 30th, 2023, Twitter has made the decision to require users to log in to access the site. This breaks 3rd party clients such as ~~[Nitter](https://nitter.net/)~~ [Update: things are very inconsistent with nitter and it seems to depend on instance configuration. I'll have to look into it later] and embeds on many sites including with my [video embeds bot](https://github.com/adryd325/discord-twitter-video-embeds).

The video embeds bot relied on Twitter's guest tokens, which are API tokens that allow access to the site for logged out users. It allowed me to bypass dealing with official API keys and still access most of the API. It's also why the embeds bot had managed to survite twitter's move to paid API access. 

Discord is paying for Twitters API which is why Discord's embeds still work. I, however, cannot afford and am not interested in paying Twitter for API access for a hobby project.

## what comes next

I'll probably be abandoning the project. Reddit embeds broke when they decided to introduce paid API access, and TikTok IP bans me after a few hundred requests. Internet services have become so protective of their content now that it's hard to make external embeds anymore.

## a personal note

I want to give thanks to everyone who's used and appreciated the embeds bot. Self-worth has been something I've struggled with; and knowing that thousands of people appreciate the work I do has really helped me. I'm not sure what else I can provide at the moment in terms of services, however I will continue working on open source projects as it brings me a lot of happiness doing so.