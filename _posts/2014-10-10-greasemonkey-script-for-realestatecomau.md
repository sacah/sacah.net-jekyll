---
layout: post
title: Greasemonkey script for RealEstate.com.au - Hide previously viewed properties
  from map
date: '2014-10-10T21:28:00.003+10:00'
author: sacah
tags:
- programming
- hack
modified_time: '2014-10-10T21:28:46.465+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-5238677357286080681
blogger_orig_url: http://www.sacah.net/2014/10/greasemonkey-script-for-realestatecomau.html
---

Looking for a new house, and got sick of having to wade through the same listings every few days. So this script stops pins showing up in the map if I've already viewed them on the map.

Previously viewed properties are stored in your browsers local storage, so easiest way to clear is pasting the code below into the console while on RealEstate.com.au

{% highlight javascript %}
localStorage.setItem('viewedProps', '');
{% endhighlight %}

Can get script at [https://gist.github.com/sacah/49cb7073605513af76a1#file-hide-previously-viewed-properties-realestate-com-au-user-js](https://gist.github.com/sacah/49cb7073605513af76a1#file-hide-previously-viewed-properties-realestate-com-au-user-js)