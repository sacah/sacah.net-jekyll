---
layout: post
title: Filter Keys jQuery Plugin
date: '2011-03-01T21:47:00.000+10:00'
author: sacah
tags:
- javascript
- programming
- sacah
modified_time: '2011-03-01T21:47:37.735+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-2303905983773998322
blogger_orig_url: http://www.sacah.net/2011/03/filter-keys-jquery-plugin.html
---

To help users fill in a form, you can filter out keys you don't want them to try and use. If it's a numeric field, supply the data-filterkeys='[0-9]' and they can only enter numbers. If it's a price, use data-filterkeys='[0-9$\.]' and they can enter numbers and $ and .

I have written it to also use a class of .filterkeys on each input, rather than just searching for inputs with a custom attribute, simply because the class search is faster. If you really don't want to have a filterkey class on all inputs requiring the filterkeys functionality, it's an easy change:

$('.filterkeys', this)

to

$('[data-filterkeys]', this)

Download from [BitBucket](https://bitbucket.org/sacah/filterkeystrokes/src)