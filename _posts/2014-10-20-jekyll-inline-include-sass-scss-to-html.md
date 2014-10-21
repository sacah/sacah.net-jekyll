---
layout: post
title: Jekyll - Inline include SASS/SCSS to HTML
date: '2014-10-20T10:55:27.290Z'
author: sacah
tags:
- programming
- jekyll
modified_time: '2014-10-20T10:55:27.290Z'
---

Playing around with some mobile first, basic design using Jekyll and Github for my new blog. I wanted to have the critical CSS inlined into the HTML for speedy delivery.

So I created a critical.scss file with my mobile first styles in it, and figured out the code below to include them in the head.html

~~~fold~~~

{% highlight html %}
{% raw %}{% capture critcss %}{% include critical.scss %}{% endcapture %}{% endraw %}
<style type="text/css">
{% raw %}{{ critcss | scssify }}{% endraw %}
</style>
{% endhighlight %}

The capture tag assigns the contents of critical.scss into the variable critcss.

Then I display critcss passing it through the scssify filter, which turns SASS into CSS.