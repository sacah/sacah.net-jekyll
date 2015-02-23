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

*Update*

So it started crashing again, I was able to narrow it down to PSU. If I started the Pc after it had been off for 20min, I could run FurMark+PostFX no problem. Let the Pc warm up a bit and run FurMark+PostFX again after 15min and it would turn off.

Ordered a new PSU, installed, no more Pc turning off with FurMark+PostFX.

Some interesting stats on power draw, taken from the plug.

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Power Draw</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th>Watts</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">FurMark + PostFX + Prime95</span><span class="result">615</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 81%"><span class="key">FurMark + PostFX</span><span class="result">500</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 81%"><span class="key">FurMark + Prime95</span><span class="result">500</span></div>
                <div class="graph-bar-hor graph-color-1" style="width: 37%"><span class="key">Prime95</span><span class="result">230</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 17%"><span class="key">Idle</span><span class="result">100</span></div>
            </td>
        </tr>
    </tbody>
</table>

Hopefully this is helpful to someone else (-: