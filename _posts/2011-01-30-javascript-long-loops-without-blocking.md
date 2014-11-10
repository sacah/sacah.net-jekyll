---
layout: post
title: ! 'Javascript: Long loops without blocking UI updates'
date: '2011-01-30T22:49:00.002+10:00'
author: sacah
tags:
- javascript
- programming
- sacah
modified_time: '2011-01-30T23:26:31.219+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-5937584465739117041
blogger_orig_url: http://www.sacah.net/2011/01/javascript-long-loops-without-blocking.html
---

Browsers like to finish running JavaScript before they update the UI, which makes sense when majority of JavaScript is dealing with DOM manipulation.

The problem this causes is the UI becoming unresponsive when JavaScript takes too long to execute. Many times it's looping through an array of objects and performing the same operations on each object that causes this the UI to hang.

~~~fold~~~

So for a new project I'm working on I decided to write an easy to use looping library that would take care of the pausing of loops to allow the UI tasks to complete, thus stopping the browser from being unresponsive during big loops.

It has 3 functions, *sl*, *loop* and *asyLoop*.

*sl* is short for Start Loop, you pass it a settings object that contains

* *fn* which is a function to do what you want to each object, this function can accept one parameter, which will be the object if the loop is passed objects, or the current count if it's passed *cnt*.
* *objs* which is a list of objects, though you don't need to pass this if you simply want it to loop through, by passing it a *cnt* setting. You can also pass a function that will return a list of objects, this function will be run when the loop starts.
* *cnt* is how many times it will loop through executing the fn
* *async* is a Boolean, letting you decide if it should be a blocking or non-blocking loop
* *debug* is a Boolean, which will output to console.log when a task starts, and finishes, run time and when it shifts from the looping queue
* *callback* is a function that will be called once the loop has completed

*sl* will decide which *loop* or *asyLoop* to call depending on the async option passed.

So what's the difference between *loop* and *asyLoop*? *loop* is a normal blocking loop, *asyLoop* will pause the loop every 50ms for 35ms to allow the UI to update, after 35ms the loop will continue for another 50ms.

So why have a *loop* when it doesn't pause looping? It adds the operation to the queue, for the times you need a function to occur after other large loop occurs. This could also be accomplished using the callback option.

How long extra will loops take using asyncLoops? It depends on how long the UI events take each time we pause. If the person isn't doing anything on the page it will be about 35% longer, if the user is scrolling the page up and down it took about 50% longer. For point of reference, to append the 25,000 DIVs it took 2,135ms for *loop* compared to 3,251ms for *asyLoop* and I was scrolling up and down while it was occurring.

Is this script optimised? No, I will release a minified, optimised version shortly.

**Download the script at [BitBucket](https://bitbucket.org/sacah/asyncloop)**

Thanks:
I've been reading through some Javascript blogs lately, not sure why I've never looked for them before, and found [DailyJS: Let's make a framework](http://dailyjs.com/2010/02/25/djscript-part-1-structure/). I noticed he checked if the *window* object existed and either passed it, or *this* if *window* doesn't exist, so the library would work outside of browsers, something I hadn't considered before.