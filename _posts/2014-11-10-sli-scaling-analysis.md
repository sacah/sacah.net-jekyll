---
layout: post
title: SLI scaling analysis with GTX 780
date: '2014-11-10T09:03:18.534Z'
author: adrian
tags:
- hardware
- testing
- review
- adrian
modified_time: '2014-11-10T09:03:18.534Z'
---

In this SLI scaling analysis, I have selected a number of different variables to test, which all come into play with SLI scaling in games.

The cards used to test are Nvidia GeForce GTX 780's (yes they are not the most powerful cards, but still up to the task, and this is about scalability, not brute power).
These are tested in single, dual and triple card configurations, in a variety of different games. 

Settings were chosen which work well with a dual card configuration, designed to maximise all available graphics settings whilst still being playable. 
This allows the cards to be pushed extremely hard, which also allows the different variables to show their effects on scaling, while producing a more accurate result. 

My definition of playable is not an arbitrary number of frames, but the subjective user experience of the game feeling smooth enough to be an enjoyable experience. 

The following variables have been chosen to assess their impact on fps, perceived smoothness i.e. with microstuttering etc and to discover any bottlenecks which may impact on 2-way and 3-way SLI, for instance: is a quad core hyperthreaded processor capable of keeping up with 3 demanding cards, I've read many reviews that have often made assumptions about where the bottleneck (if any) is occuring, the data presented here will hopefully shed some more light on these factors.

|---
| **What we're testing**
|:-
| Frame rates; minimum, average and maximum, of course the minimum and average fps is more important to playability. 
| Each graphics cards maximum temperatures during play. 
| Each GPU's load. 
| Each GPU's core clock rate. 
| The amount of gpu memory used. 
| The CPU's load and frequency (frequency is shown as a % of the CPU clock rate, which is at 4.4Ghz)

thisisafold

|---
| **Test rig**
|:-|-:
| OS | Windows 8.1
| CPU | Core i7 4820k OC'd to 4.4Ghz
| Mobo | Asrock x79 Extreme 6
| RAM | 16GB of G.Skill Sniper 1866Mhz in quad channel configuration
| HDD | Samsung 840pro 250GB HDD (System & BF4) W.D. Black 7200rpm 3TB
| Case | Thermaltake Overseer (Closed to represent a normal gaming setup)
| Monitors | 3 x 1920 x 1080 res in surround for res of 5760 x 1080
| GPUs | Gigabyte Windforce GTX 780 OC (Boost clock of 1058Mhz)
|| Gigabyte Windforce GTX 780 OC (Boost clock of 1085Mhz)
|| Palit GeForce GTX 780 with reference cooler (Boost clock of 1006Mhz)

In the 3 card config, a fan is placed on the side of the case to help control temps, however temps are still pushed to achieve throttling where possible, GPU3's boost clock was also lowered from 1085 to 1032 to assist with heat. The graphics cards were also moved around to also facilitate better heat management.

*With the three card config, I had to override the default nvidia SLI rendering setting to SLI_Rendering_Mode_Force_AFR_OF_SFR_Fallback_3AFR*

**Software used to gather testing results and edit the the profile settings:**

* Nvidia Inspector
* MSI Afterburner
* Windows Resource Monitor
* Battlefield 4
* Batman: Arkam City
* Farcry 3
* Metro Last Light Redux
* Tomb Raider
* Watch Dogs

I am not responsible for any damage caused by using these programs


![BF4 Image](/img/bf4_hero.jpg)

## Battlefield 4:

* Res 5760 x 1080
* Res scale 100%
* Motion blur off
* Everything on ultra
* MSAA x 4
* AA post off
* Ambient occlusion HBAO
* Multiplayer map - Siege of Shanghai, ~60 players in map.

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Battlefield 4 FPS Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">110fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 73%"><span class="key">Dual</span><span class="result">80fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 40%"><span class="key">Single</span><span class="result">45fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 68%"><span class="key">Triple</span><span class="result">75fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 59%"><span class="key">Dual</span><span class="result">65fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 36%"><span class="key">Single</span><span class="result">40fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 36%"><span class="key">Triple</span><span class="result">40fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 50%"><span class="key">Dual</span><span class="result">55fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 28%"><span class="key">Single</span><span class="result">31fps</span></div>
            </td>
        </tr>
    </tbody>
</table>

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Battlefield 4 SLI Scaling Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">244%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 72%"><span class="key">Dual</span><span class="result">177%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 41%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 76%"><span class="key">Triple</span><span class="result">187%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 66%"><span class="key">Dual</span><span class="result">162%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 41%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 53%"><span class="key">Triple</span><span class="result">129%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 72%"><span class="key">Dual</span><span class="result">177%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 41%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
    </tbody>
</table>

### Single configuration

* GPU1 - Temp: 65 degrees. Load: 98-99%. Core clock: 1058Mhz. Mem: 2800Mb
* CPU - Load: 50-80%. Frequency: 100%
* FPS: min - 31, average - 40, max 45.
* Complete maps played: 1
            
In the single run, the GPU load was very good and stable, only varying between 98 and 99%. The CPU was worked fairly hard, but never reached levels to bottleneck and frequency never dropped below 100%. The memory use got quite high, but didn't quite max out the 3GB on board the 780. The GPU temperature was quite cool throughout the game, settling on 65 degrees celcius and the core clock remained stable at 1058Mhz with GPU boost, never showing signs of throttling.

Game play with the single card was manageable but certainly not optimal, the fps dropped to noticeable ranges fairly consistently, and the change in frame rates was quite noticeable. Lowering settings such as MSAA would make it run smoothly.

### Dual GPU configuration
*Note second GPU's clock normally 1006 at boost this can produce a variance of up to 2.5% less compared to both GPU's clocked at 1058Mhz.*

* GPU1 - temp: 79 degrees. Load: 90-95. Core clock: 1058Mhz. mem: 2800Mb
* GPU2 - temp: 79 degrees. Load: 95-99. Core clock: 1006Mhz. mem: 2800Mb
* CPU - Load: 60-70%. Frequency: 100%
* FPS: min - 55/65/80
* Complete maps played: 2

In the dual test, the GPU loads remained very stable with neither dropping below 90% load and spending the majority of the time 95% load and above for both. The temperatures did get warm, but stopped just short of reaching the throttling point of 80 degrees. GPU core clocks remained at their respective optimals of 1058 and 1006Mhz, memory remained just short of max. The CPU load of this run stayed between 60-70% (keep in mind all BF4 multiplayer games are different and will have a difference in CPU load depending on what is happening). The FPS remained respectable with min-55, average of 65 and max of 80. Gameplay felt smooth for the most part with only a very occasional notice of slowdown when it dipped to 55 which, while noticeable, did not effect gameplay.

### Triple GPU configuration
*Note With adjusted clocks, 3GPU config can produce a variance of up to 2.5% less than with all GPU's at 1058Mhz.*

* GPU1 - temp: 67 degrees. Load: 70-90%. Core clock: 1006Mhz. mem: 2800Mb
* GPU2 - temp: 77 degrees. Load: 70-90%. Core clock: 1058Mhz. mem 2800Mb
* GPU3 - temp: 80 degrees. Load: 80-95%. Core clock: 875-1032Mhz. mem 2800Mb
* CPU - Load: 80-90%. Frequency: 100%.
* FPS: min - 40. Average: 75. max - 110
* Complete maps played: 3

With 3 graphics cards, things get a bit more unpredictable. I had to play this map from start to finish 3 times to get the proper data, which includes two of those being done after a restart. All 3 times, the tower went down, each game lasted from 20-30 minutes. As evidenced by the graph, the frame rate would drop to as low as 40, this wasn't very often, but still happened enough that it had to be declared the minimum frame rate. For the most part, the minimum frames didn't drop below 60, and gameplay was fairly smooth for much of the time, however there were periods microstuttering which happened fairly often, while it was certainly still playable, the microstuttering did make it feel less smooth than playing with two cards. 

The CPU load went from 80% up to a whopping 90% with 100% frequency, however at no point did any of the threads reach 100%, indicating that the slow downs are a scaling issue rather than a CPU bottleneck issue. The GPU temps were good, with two of the GPU's staying below throttling temp, the third however did reach 80 degrees and did throttle to as low as 875Mhz, however the temp didn't go any higher. While having 3 cards was playable, two cards is optimal for BF4 at these settings.

![Batman: Arkam City Image](/img/BatmanAC_hero.jpg)

## Batman: Arkam City

* Res - 5760 x 1080
* AA = CSAA x16
* Dx11 = MVSS & HBAO
* Tesellation / Detail = Maximum
* Physx = High
* Everything else maxed out
* Built in benchmark tool, run several times to warm the cards up

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Batman: Arkam City FPS Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">150fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 58%"><span class="key">Dual</span><span class="result">87fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 29%"><span class="key">Single</span><span class="result">44fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 80%"><span class="key">Triple</span><span class="result">121fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 52%"><span class="key">Dual</span><span class="result">79fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 26%"><span class="key">Single</span><span class="result">40fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 50%"><span class="key">Triple</span><span class="result">75fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 36%"><span class="key">Dual</span><span class="result">54fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 26%"><span class="key">Single</span><span class="result">39fps</span></div>
            </td>
        </tr>
    </tbody>
</table>

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Batman: Arkam City SLI Scaling Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">200%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 80%"><span class="key">Dual</span><span class="result">161%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 50%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 80%"><span class="key">Triple</span><span class="result">161%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 73%"><span class="key">Dual</span><span class="result">146%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 50%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 56%"><span class="key">Triple</span><span class="result">112%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 51%"><span class="key">Dual</span><span class="result">102%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 50%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
    </tbody>
</table>

### Single GPU configuration

* GPU1 - Temp: 62 degrees. Load: 70-98%. Core clock: 1058Mhz. Mem: 2000Mb
* CPU - Load: 40-60%. Frequency: 100%
* FPS: min - 39, average - 54, max 75
* Runs: 3

In the benchmark run. The Gpu's temperature stayed cool, even after a few runs. The load on the GPU varied from 70-98% with most of the time it being in the 90's. The time that it did drop in load and to it's minimum frames was during a section that involved a lot of physx, the section also had the feel of being less than fully optimised, considering the same section produced almost identical frames in the dual test. The core clock never bottlenecked, remaining at 1058Mhz and the memory stopped at 2000Mb, leaving plenty of headroom.
The CPU load was fairly average, staying between 40-60% with the frequency never below 100%. The scene was fairly smooth for the most part, however one scene with lots of particle effects and physx was noticeably chunkier.

### Dual GPU configuration
*Second GPU boost clock: 1006Mhz) This can create a variance of up to 2.5% decrease in performance compared to both cards at GPU1 clocks.*

* GPU1 - temp: 77 degrees. Load 85-95%. Core clock 1058. Mem: 2000mb
* GPU2- temp: 75 degrees. Load 90-99%. Core clock 1006. mem: 2000mb
* CPU - load: 50-70%. Frequency: 100%.
* FPS: min - 40, average - 79, max - 121
* Runs: 3

In the dual card benchmark. The GPU's temperature stayed just short of throttling temps, even after several runs. The load of both the GPU's varied, but not nearly as much as with the single GPU. The core clock showed no signs of throttling and the CPU load stayed in the 50 - 70% range with the frequency at 100%. The scaling from 1 to 2 GPU's was quite poor, the minimum being almost the same as with a single card, suggesting some poor optimisation. The average increase was quite poor at a meager 46.2% over 1 card. The scene was quite smooth, with the only noticeable slowdown being the same scene with lots of particle and physx effects.

### Triple GPU configuration
*Note With adjusted clocks, 3GPU config can produce a variance of up to 2.5% less than with all GPU's at 1058Mhz.*

* GPU1: temp - 57 degrees. Load: 50-70%. Core clock: 1006Mhz. mem: 2000Mb
* GPU2: temp - 65 degrees. Load: 50-70%. Core clock: 1058Mhz. mem: 2000Mb
* GPU3: temp - 73 degrees. Load: 50-70%. Core clock: 1032Mhz. mem: 2000Mb
* CPU: Load: 50-70%. Frequency: 100%.
* FPS: min - 44, average - 87, max - 150
* Runs: 3

When I ran with 3 GPU's, the load on each GPU dropped to 50-70%, resulting in relatively poor scaling, particularly for the minimum fps. The temps stayed all under control with the help of the side fan, and the cpu ranged between 50-70% usage with 100% frequency, indicating no CPU bottleneck, however 1 thread did reach 95% for a moment, however that was only for a second and didn't result in any decrease of frames that lined up with the benchmark. The whole benchmark was smooth with only a little stuttering noticed when it was transitioning  at a couple of points. The particle and physx effects scene from the earlier benchmarks where I noticed the slowdown, was far smoother with 3 cards.


![Farcry 3 Image](/img/farcry3_hero.jpg)

## Farcry 3

* Res: 5760 x 1080
* MSAA x 2
* Alpha to coverage = Enhanced
* SSAO = HBAO
* Every other setting = maxed out
* Random driving and explosions

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Farcry 3 FPS Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">86fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 70%"><span class="key">Dual</span><span class="result">60fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 46%"><span class="key">Single</span><span class="result">40fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 85%"><span class="key">Triple</span><span class="result">73fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 64%"><span class="key">Dual</span><span class="result">55fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 37%"><span class="key">Single</span><span class="result">32fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 69%"><span class="key">Triple</span><span class="result">60fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 57%"><span class="key">Dual</span><span class="result">49fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 32%"><span class="key">Single</span><span class="result">28fps</span></div>
            </td>
        </tr>
    </tbody>
</table>

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Farcry 3 SLI Scaling Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 94%"><span class="key">Triple</span><span class="result">215%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 65%"><span class="key">Dual</span><span class="result">150%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 43%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">228%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 75%"><span class="key">Dual</span><span class="result">171%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 43%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 93%"><span class="key">Triple</span><span class="result">214%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 76%"><span class="key">Dual</span><span class="result">175%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 43%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
    </tbody>
</table>

### Single GPU configuration

* GPU: Temp - 68 degrees. Load: 99%. Core clock - 1058Mhz. GPU mem - 2000Mb
* CPU: Load - 40%. Frequency - 100%
* FPS: min - 28, average - 32, max - 40
* Time played: 15mins

In this benchmark run, gameplay was rarely smooth due to the high settings for a single card. The GPU load and core clock showed no throttling and that the load was stable, maintaining 99% the entire time. The CPU load stayed fairly low and consistent at 40% and the frequency never dipped below 100%. While the gameplay was hardly ideal, there wasn't too much variation between min and max frames which shows good optimisation and stability.

### Dual GPU configuration
*(Second GPU clock rate normally at 1085Mhz) This can create a variance of up to 1.2% increase in the performance compared to both cards being at GPU1 clocks.*

* GPU1: Temp - 85 degrees. Load - 99%. Core clock - 1058 - 1045Mhz, mem - 2000Mb
* GPU2: Temp - 77 degrees. Load - 98-99%. Core clock - 1085Mhz, mem - 2000Mb
* CPU: Load - 50%. Frequency - 100%
* FPS: min - 49, average - 55, max - 60
* Time played: 30mins

In the dual GPU benchmark. Gameplay maintained being smooth for much of the time, occasionally a slight slowdown was noticed, but did little to effect gameplay, as listed, the min and max framerates were fairly close so it maintained good stability. Of note is GPU1 which became very hot, this game does push the GPU's very hard and this is the problem with having GPU's with aftermarket coolers in a closed case, the top card did throttle, however only 1.2%, it was able to stay well above stock clocks and still deliver a very stable experience. 

### Triple GPU configuration
*Note With adjusted clocks, 3GPU config can produce a variance of up to 2.5% less than with all GPU's at 1058Mhz.*

* GPU1: temp - 73 degrees. Load - 85-98%. Core clock - 1006Mhz, mem - 2000Mb
* GPU2: temp - 79 degrees. Load - 85-98%. Core clock - 1058Mhz. Mem - 2000Mb
* GPU3: temp - 86 degrees. Load - 90-98%. Core clock - 1032Mhz. Mem - 2000Mb
* CPU: Load: 50%. Frequency - 100%
* FPS: min - 60, average - 73, max - 86
* Time played: 30mins

With 3 graphics cards. Gameplay was very smooth for the most part, there were very rare micro-stutters, and the frame rates never dropped below 60, if you have the standard 60hz monitors, then this would be an ideal game and settings to cap the fps to 60, it would also save on some of the heat, which did get rather warm, with one of the cards reaching 86 degrees, that's still pretty good for a tri sli setup. I did install a 200mm case fan onto the side to pull warm air away from the cards which seems to have helped, otherwise it would likely have gone higher. The other two cards stopped at 73 and 79 degrees. Without capping the frames, 3 cards felt smoother than 2, only just though, capping the frames at a suitable level will make both better.

![Metro Last Light Redux Image](/img/metro_hero.jpg)

## Metro Last Light Redux

* Res - 5760 x 1080
* SSAA = off
* Advanced physx = on
* TF = 16x
* Tesselation = very high
* Motion blur = normal
* Quality = Very high.
* Heavy squad mission

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Metro Last Light Redux FPS Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">64fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 70%"><span class="key">Dual</span><span class="result">45fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 36%"><span class="key">Single</span><span class="result">23fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 86%"><span class="key">Triple</span><span class="result">55fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 65%"><span class="key">Dual</span><span class="result">42fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 34%"><span class="key">Single</span><span class="result">22fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 75%"><span class="key">Triple</span><span class="result">48fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 62%"><span class="key">Dual</span><span class="result">40fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 29%"><span class="key">Single</span><span class="result">19fps</span></div>
            </td>
        </tr>
    </tbody>
</table>

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Metro Last Light Redux SLI Scaling Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">265%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 73%"><span class="key">Dual</span><span class="result">195%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 37%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 94%"><span class="key">Triple</span><span class="result">250%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 71%"><span class="key">Dual</span><span class="result">190%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 37%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 95%"><span class="key">Triple</span><span class="result">252%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 79%"><span class="key">Dual</span><span class="result">210%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 37%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
    </tbody>
</table>

### Single GPU configuration

* GPU: Temp - 65 degrees. Load - 98%. Core clock - 1058Mhz. Mem - 1600Mb
* CPU: Load - 30%. Frequency - 100%
* FPS: min - 19, average - 22, max - 23
* Runs: 3

In the single GPU benchmark, the game was noticeably slow and would need to have the settings turned down considerably to make it playable. The GPU temp stayed a cool 65 degrees. The load remained steady at 98% and the core clock stayed at 1058Mhz. The CPU was idling away at 30% load and 100% frequency.

### Dual GPU configuration
*(second GPU's normal clock rate is 1085Mhz, this can create a variance of up to 1.2% increase over both GPU's being clocked at 1058Mhz)*

* GPU1: Temp - 79 degrees. Load - 80-90%. Core clock - 1058Mhz. Mem - 1600Mb
* GPU2: Temp - 69 degrees. Load - 98%. Core clock - 1085Mhz. Mem - 1600Mb
* CPU: Load - 50%. Frequency 100%
* FPS: min - 40, average - 42, max - 45
* Runs: 3

In the Dual GPU benchmark, we notice something odd, aside from the fact that the average and maximum scaling is extremely good, the minimum scaling as increased to 210% of the single card. Some of the improvement can be attributed to the second card having a slightly higher clock rate, amounting to a possible increase in performance of 1.2%, there is also the possibility of a small difference in performance which can happen as well. However I have seen this replicated in benchmarks that others have made, possibly having the additional card was able to deal with the regular textures and calculations as well as the Advanced physx in a more efficient manner than simply 1 card attempting to manage all of those elements at once (Note that the GTX 970 and 980 handle physx considerably better and the benchmarks that I have seen with them, the minimum scaling isn't quite as high). 

Regardless, the results are exceptional and the gaming experience is vastly improved by having a second card, while it does feel a little "chunky" due to the fps being a little lower than optimal, it doesn't effect gameplay too badly and is certainly vastly better than a single card. 


The GPU's temp gets very close to throttling but thankfully doesn't. The load fluctuates a little, but as you can see from the scaling and the closeness of the min and max frames, it's keeps everything stable. Notice the CPU use has increased substantially from a single card, still no evidence of any bottleneck.

### Triple card configuration
*Note With adjusted clocks, 3GPU config can produce a variance of up to 2.5% less than with all GPU's at 1058Mhz.*

* GPU1: temp - 62 degrees. Load - 70-85%. Core clock 1006Mhz
* GPU2: temp - 71 degrees. Load 70-85%. Core clock 1058Mhz
* GPU3: temp - 80 degrees. Load 85-95%. Core clock 967-1032Mhz
* CPU: Load - 50%. Frequency - 100%
* FPS - min - 47, average - 52, max - 60
* Runs: 3

Playing the same mission with 3 cards, the GPU usage was a little lower per card, but still delivered more power, while the scaling wasn't nearly as impressive from 2-3 as it was from 1-2, it's still a very impressive improvement with solid increases across the min, average and max fps. The framerates were all improved but also had more variation from the min to the max, which was noticeable only on occasion, mainly at the very start of the mission where all 3 screens were full of explosions.

![Tomb Raider Image](/img/TombRaider_hero.jpg)

## Tomb Raider

* Res - 5760 x 1080
* Motion blur = on
* Screen effects = on
* Texture Quality = Ultra
* Anistropic filtering - 16x
* AA = SSAA 2x
* Everything else maxed out
* Built in benchmark tool

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Tomb Raider FPS Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">76fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 71%"><span class="key">Dual</span><span class="result">54fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 38%"><span class="key">Single</span><span class="result">29fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 79%"><span class="key">Triple</span><span class="result">60fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 57%"><span class="key">Dual</span><span class="result">44fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 30%"><span class="key">Single</span><span class="result">23fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 60%"><span class="key">Triple</span><span class="result">46fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 40%"><span class="key">Dual</span><span class="result">35fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 23%"><span class="key">Single</span><span class="result">18fps</span></div>
            </td>
        </tr>
    </tbody>
</table>

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Tomb Raider SLI Scaling Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">262%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 71%"><span class="key">Dual</span><span class="result">186%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 38%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 99%"><span class="key">Triple</span><span class="result">260%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 73%"><span class="key">Dual</span><span class="result">191%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 38%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 97%"><span class="key">Triple</span><span class="result">255%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 74%"><span class="key">Dual</span><span class="result">194%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 38%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
    </tbody>
</table>

### Single card configuration

* GPU: Temp - 65 degrees. Load 99%. Core clock - 1058Mhz. Mem - 2000Mb
* CPU: Load - 20%. Frequency 80-100%.
* FPS: min - 18, average - 23, max - 29
* Runs: 3

In the single GPU benchmark. The scene was noticeably choppy, understanding from the strain put on the graphics card. The temp stayed cool at 65 degrees, core clock stayed stable at 1058Mhz. The CPU idled at 20% and in fact had so little to do that the frequency dropped to 80% at times. The GPU's load stayed steady at 99% indicating that it was handling almost everything.

### Dual card configuration
*(second GPU's normal clock rate is 1085Mhz, this can create a variance of up to 1.2% increase over both GPU's being clocked at 1058Mhz)*

* GPU1: Temp - 79 degrees. Load 99%. Core clock - 1058Mhz. Mem - 2000Mb
* GPU2: Temp - 70 degrees. Load 99%. Core clock - 1085Mhz. Mem - 2000Mb
* CPU: Load - 30%. Frequency - 100%.
* FPS: min - 35, average - 44, max - 54
* Runs: 3

This is a game that scaled extremely well. The scene was smooth for the most part, there was the occasional point where the slow down was noticeable, the settings are probably a little high, however AA goes from FX AA (blurry edges) straight to SSAA x2 (nice crisp textures, but huge impact on performance). GPU1 stayed just short of throttling. Both GPU's stayed on a constant load of 99% and maintained their respective core clocks. The CPU had to wake up a bit with dual cards, increasing to 30% load and 100% frequency.

### Triple card configuration
*Note With adjusted clocks, 3GPU config can produce a variance of up to 2.5% less than with all GPU's at 1058Mhz.*

* GPU1: Temp - 65 degrees. Load 90-99%. Core clock 1006Mhz
* GPU2: Temp - 75 degrees. Load 90-97%. Core clock 1058Mhz
* GPU3: Temp - 80 degrees. Load 90-98% Core clock 928-1032Mhz
* CPU: Load 30%. Frequency - 100%.
* FPS: min - 46, average - 60, max - 76
* Runs: 3

Tomb Raider scales excellently to 3 cards. There was only a very small amount of micro stuttering, that I had to look for. Overall the benchmark felt smooth and certainly was smoother with 3 cards than with 2, and significantly better than 1, with most frames sitting around the 60 mark. The GPU's load all stayed 90% and above, the 3rd card did throttle a little when it hit 80 degrees after running the benchmark 3 times, but still managed to remain smooth. These extremely high settings are definately something three cards feels suited to manage.

![Watch Dogs Image](/img/Watch_Dogs_hero.jpg)

## Watch Dogs

* Res - 5760 x 1080
* Textures = high
* AA = FXAA
* GPU max buffered frames = 1
* HBAO+ low
* Everything else on and maxed out
* Driving around the city, using same route for each test

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Watch Dogs FPS Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">80fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 68%"><span class="key">Dual</span><span class="result">55fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 56%"><span class="key">Single</span><span class="result">45fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 43%"><span class="key">Triple</span><span class="result">35fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 56%"><span class="key">Dual</span><span class="result">45fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 43%"><span class="key">Single</span><span class="result">35fps</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 28%"><span class="key">Triple</span><span class="result">23fps</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 43%"><span class="key">Dual</span><span class="result">35fps</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 35%"><span class="key">Single</span><span class="result">28fps</span></div>
            </td>
        </tr>
    </tbody>
</table>

<table class="graph-container">
    <thead>
        <tr>
            <th colspan="6">Watch Dogs SLI Scaling Results</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Max</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 100%"><span class="key">Triple</span><span class="result">177%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 69%"><span class="key">Dual</span><span class="result">122%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 56%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Avg</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 56%"><span class="key">Triple</span><span class="result">100%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 72%"><span class="key">Dual</span><span class="result">128%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 56%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
        <tr>
            <th>Min</th>
            <td>
                <div class="graph-bar-hor graph-color-1" style="width: 46%"><span class="key">Triple</span><span class="result">82%</span></div>
                <div class="graph-bar-hor graph-color-2" style="width: 70%"><span class="key">Dual</span><span class="result">125%</span></div>
                <div class="graph-bar-hor graph-color-3" style="width: 56%"><span class="key">Single</span><span class="result">100%</span></div>
            </td>
        </tr>
    </tbody>
</table>

### Single GPU configuration

* GPU: Temp - 60 degrees. Load 98%. Core clock - 1058Mhz. Mem - 3000Mb
* CPU: Load - 50-60%. Frequency - 100%.
* FPS: min - 28, average - 35, max - 45
* Time spent in game: 20mins

The single GPU run, while having overall fairly low frames, did feel a little smoother than the dual GPU run, as there were less wild fluctuations in fps. The GPU load stayed steady at 98% and the core clock didn't move off of 1058Mhz. The memory maxed out at 3000Mb. The CPU maintained a steady load of 50-60% and 100% frequency. While it was noticeably slow, it was still playable.

### Dual GPU configuration
*(Note second card boost clock is 1085Mhz, this can create a variance of up to 1.2% increase performance compared to both at 1058Mhz)*

* GPU1 - 79 degrees. Load 50-85%. GPU core clock - 1058-797Mhz. Mem 3000Mb
* GPU2 - 69 degrees. Load 50-85%. Core clock 1085Mhz. Mem - 3000Mb
* CPU - Load - 50-60%. Frequency 100%
* FPS: min - 35, average - 45, max - 55. Drop to 17-30fps in one area
* Time spent in game: 20mins

The dual GPU run wasn't overly ideal. The GPU load dropped significantly and fluctuated wildly depending on which area of the city you were in and what you were doing. Loading the Farcry 3 SLI profile helped in some areas of the city, and hindered in others (same thing happened when using the Assassins Creed Black Flag profile), I found it was best just to run with the default profile. 

There were certain areas of the city which showed poor optimisation, with the primary GPU dropping it's clock rate to 797Mhz before returning to 1058 shortly afterwards, with no identifiable reason why. GPU load for both GPU's would go from being relatively stable around 85-95% to fluctuating wildly between 50-80%, and the frames along with it. The CPU load stayed fairly stable at 50-60% and the frequency at 100%. temps stayed just short of throttling for the period of testing. Stuttering happened occasionally. 

The game was playable but the stuttering and slow downs would get rather frustrating at times, particularly when you could drive through a very busy section with lots of textures, to another area of the city which didn't appear to have anything more going on and in some cases, had less going on, and yet would stutter and slow down. Playing with the single card actually felt smoother for the most part, despite having lower frames. There was a section in which the frames dropped as low as 17/sec, coinciding with the drop in GPU1's slowed down clock rate, this didn't happen with the single card. I left this off the chart because it was the only area I found which did it and putting it in would skew the results, as normally it was fine.

### Triple GPU configuration
*Note With adjusted clocks, 3GPU config can produce a variance of up to 2.5% less than with all GPU's at 1058Mhz.*

* GPU1: Temp - 60 degrees. Load - 30-70-80%. Core clock - 863Mhz
* GPU2: Temp - 68 degrees. Load - 30-70-80%. Core clock - 954Mhz
* GPU3: Temp - 80 degrees. Load - 30-70-80%. Core clock - 954Mhz
* CPU: Load - 50-70%. Frequency 100%
* FPS: min - 23, average - 35, max 80
* Time played: 2 hours

The scaling for 3 cards is absolutely abysmal, I checked the individual CPU thread loads to look for any signs of a bottleneck and they all stayed 70% or below. The GPU loads were pathetic, as well as the game slowing all cards to their base clocks. Most areas were very stuttery and slow, felt worse than both 1 and 2 cards were. Occasionally the fps would pick up briefly, then drop again, rain or shine, the results were the same. Basically this is a game to steer clear of if you intend to go more than 2 cards (Or disable SLI).

## Conclusion

Some interesting results were found throughout the tests performed, with the different games all scaling slightly differently, at no point did the CPU ever show itself as being a bottleneck, even in BF4 where the load got to 90%, none of the threads reached 100%, and in all of the games tested, every thread had something to do, even if in some games, they were considerably lower load than others. The way the GPU's behaved in different games showed the difference between a well optimised game and a poorly optimised game. 

Tomb Raider showed itself to be an excellently optimised game with fantastic scaling, while Watch Dogs proved to be the exact opposite, with wildly fluctuating GPU loads and clocks, as well as some clear evidence of poor texture optimisation, while true that the GPU memory did max out in Watch Dogs, the way the GPU's behaved in 2-way and 3 way, particularly with their load and clock rates, and in certain areas of the city, shows that memory is only 1 piece of the puzzle. 

For people thinking about going 2-way or 3-way SLI, I found that a few tweaks such as the SLI rendering tweak mentioned earlier, and capping the fps at an acceptable level, proved a much more enjoyable experience, for instance, playing Seige of Shanghai in BF4 with 3 cards and the fps capped at 60, proved a much smoother result, eliminating almost all of the micro stuttering, the minimum fps was 57, that was when the tower went down, the rest of the time it never moved off of 60, this prevents the cards from wasting precious power and time rendering frames that will never be displayed on the monitors, as well as helping to keep them a little cooler. Finding an acceptable spot between min and average fps works very well. I hope this has shed some light on what really goes on with SLI scaling in games, and show that by analysis far more than just a couple of common factors, we get a much better picture of what is effecting the way multi card systems behave with different games. 
