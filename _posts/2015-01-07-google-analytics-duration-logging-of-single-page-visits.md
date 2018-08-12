---
layout: post
title: Google Analytics - How to log duration of a single page visit
date: '2015-01-07T10:55:27.290Z'
author: sacah
tags:
- programming
- google analytics
- javascript
modified_time: '2015-01-07T10:55:27.290Z'
---

So no doubt you are here because of Google Analytics showing you Avg Session Duration being 00:00:00 and Bounce Rates of 100%. You are thinking, surely people aren't that turned off my site that they are leaving instantly.

Google Analytics calculates a users time on your site (session duration) by comparing the time from the first page view to the second. This is fine for sites where people browser content, most of the views will be accurate. But for sites with a variety of information in single pages, like blogs, you may be like me and find people enter 1 page, find their answer and leave. But without knowing how long someone spent reading your page you don't really know if they took 1 look and figured it wasn't right for them, or if they spent 15min carefully reading everything.

thisisafold

![100% Bounce Rate and 0 Second Visit Duration](/img/GoogleAnalytics0SecondAvgSessionDuration.png)

So looking into how others have solved this, here are the solutions I found others using:

## beforeunload or unload events

The listener function usually fires anothe page view or a custom event, either the old ga.js code of 

{% highlight javascript %}
_gaq.push(['_trackPageview', 'track']);
{% endhighlight %}

Or the newer analytics.js code of 

{% highlight javascript %}
ga('send', 'pageview');
{% endhighlight %}

The issue I have with this is it seems to create another pageview record, and there is no guarantee any requests will complete before the browser destroys your page, so depending on the users machine and network, the event may never reach Google to be recorded.

In the future when more browsers support beacons this will be a great way to do it.

## custom events from user interactions

They would fire a custom event on some user interaction, such as scrolling, mouse move or click.

The issue I have with this is it's not hugely accurate, they might not click and on a large monitor they might not scroll, but still have spent a good amount of time reading. And for mouse moves, you could be  firing many events.

## my solution

Google Analytics will count any event as an interaction, so this will increase the Session Duration to the time of the last fired event.

I fire an event every 30 seconds, which means for single page visits, I'll be accurate to the nearest multiple of 30 seconds. Depending on the range of your content, you may find you want to decrease this number. 30 seconds seemed to be a good number of not spamming a users network, while still getting reasonable statistics of visitor duration.

Below is the code I used

{% highlight javascript %}
    setInterval(function () {
        ga('send', 'event', 'beacon', 'page', 'open');
    }, 30000);
{% endhighlight %}

Here is where I put it in relation to the Google Analytics code

{% highlight javascript %}
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-XXXXXXXX-X', 'auto');
    ga('send', 'pageview');
    setInterval(function () {
        ga('send', 'event', 'beacon', 'page', 'open');
    }, 30000);
{% endhighlight %}

Here are the results after a few days

![Visit Duration after 30sec custom events](/img/GoogleAnalyticsAvgSessionDuration.png)