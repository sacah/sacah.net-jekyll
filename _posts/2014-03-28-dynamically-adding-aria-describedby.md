---
layout: post
title: Dynamically adding aria-describedby using JavaScript
date: '2014-03-28T19:39:00.000+10:00'
author: sacah
tags:
- javascript
- programming
- sacah
modified_time: '2014-03-28T19:39:21.754+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-7877386414537382778
blogger_orig_url: http://www.sacah.net/2014/03/dynamically-adding-aria-describedby.html
---

Just a quick one to let others know what I've found, while it seems many of the ARIA tags work happily when added dynamically, aria-describedby will only work if it's present when the DOM is rendered, after that screen readers just won't see it.

The simple ways around this seem to be adding random unique aria-describedbys to all your elements, then dynamically changing the ID of what you want to point too.

Or use a global aria-live element that you change the text in to match the text you would have pointed to with aria-describedby.