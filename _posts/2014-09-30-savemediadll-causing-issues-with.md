---
layout: post
title: SaveMedia.dll causing issues with Playfire and CorsairLink
date: '2014-09-30T18:27:00.002+10:00'
author: sacah
tags:
- software
- fixes
- sacah
modified_time: '2014-09-30T18:27:29.095+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-2693447678978897979
blogger_orig_url: http://www.sacah.net/2014/09/savemediadll-causing-issues-with.html
---

Just recently had this issue, programs crashing and reporting
{% highlight bash %}
Faulting module name: SaveMedia.dll, version: 1.38.0.0 
{% endhighlight %}
in the event viewer.

Turns out it's an issue with RivaTuner, I added both Playfire and CorsairLink to the application list in RivaTuner and choose 'None' on the 'Application detection level'.

Seems to have fixed the issue.