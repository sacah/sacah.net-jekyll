---
layout: post
title: ! 'Javascript: Finding jQuery bound functions (bind)'
date: '2011-01-13T19:02:00.000+10:00'
author: sacah
tags:
- javascript
- programming
- sacah
modified_time: '2011-01-13T19:02:09.028+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-4957319241134033179
blogger_orig_url: http://www.sacah.net/2011/01/javascript-finding-jquery-bound.html
---

When using jQuery to bind events, such as click, mouseup, mousedown etc jQuery stores them in an object, using Firebug plugins that detect bound functions will usually just tell you a function is bound, but using Firebugs console you can find each function and it's actual code.

{% highlight javascript %}
jQuery('#id-of-object').data('events')
{% endhighlight %}

~~~fold~~~

This will show you an object which contains all bound events, such as click, mouseover etc, that are currently bound to #id-of-obj.

{% highlight javascript %}
Object { click=}
{% endhighlight %}

{% highlight javascript %}
jQuery('#id-of-object').data('events').click
{% endhighlight %}

Displays an array of each function bound to the click event of #id-of-obj. There is only one function bound to this object.

{% highlight javascript %}
[Object { type="click", guid=2}]
{% endhighlight %}

If you click on the object in the Firebug console you'll see it has a few properties, 'data', 'guid', 'namespace', 'type' and 'handler'. The one we're interested in is 'handler'.

{% highlight javascript %}
jQuery('#id-of-object').data('events').click[0].handler.toString()
{% endhighlight %}

This will output the code of the function bound to the object. If there are more than one function bound to the click event of the object you can find each one by incrementing the array number.

{% highlight javascript %}
jQuery('#id-of-object').data('events').click[1].handler.toString()
{% endhighlight %}

This will get the second function bound to the #id-of-object object.

So hopefully this will help anyone trying to debug a site using jQuery and bound functions, let me know if you have any further questions.