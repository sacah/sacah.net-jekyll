---
layout: post
title: Intermittent NVidia 970 SLI Crashes Post-FX Full System Reset
date: '2015-01-31T10:55:27.290Z'
author: sacah
tags:
- hardware
- fixes
- nvidia
modified_time: '2015-01-31T10:55:27.290Z'
---

After upgrading to 2 Galax GTX 970 OC EX gpus and setting up SLI, I found that occasionally while gaming in Surround, I'd get a full system crash, black screens, hard system reset, the works.

This first heppened in BF4 and GW2, though it was hard to figure out exactly what the issue was, I tried various driver reinstalls, under-clocking, closing all background programs, even going back 3 versions of NVidia drivers, to no avail.

~~~fold~~~

One way I found to consistently crash it was Geeks3D FurMark, setting Resolution to 5760x1080, Anti-aliasing to 8x MSAA and in the Settings, Dynamic background, Burn-in, Xtreme burn-in and Post-FX. It's the Post-FX that is what would cause it to crash.

![Geeks3D FurMark Settings](/img/FurMark-Crash.png)

I monitored voltages &amp; temperatures, all seemed normal, so as a last resort I tried swapping the GPUs around. While doing this I noticed some writting on my PSU, as I'd installed it upside down I couldn't read it, so I took a photo and realised it said each column was a different 12v line, so I was supplying half the power to the second card from the first 12v line, and half from the second 12v line. The CPU and first GPU were on the first 12v line.

I swapped the power cable so the second card was powered fully from the second 12v line and was able to run FurMark with Post-FX no problem.

Hopefully this is helpful to someone else (-: