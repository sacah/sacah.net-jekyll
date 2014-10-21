---
layout: post
title: Jekyll - Inline include SASS/SCSS to HTML
date: '2014-10-20T10:55:27.290Z'
author: sacah
tags:
- programming
- hack
- jekyll
modified_time: '2014-10-20T10:55:27.290Z'
---

{% highlight html %}
{% raw %}{% capture critcss %}{% include critical.scss %}{% endcapture %}{% endraw %}
<style type="text/css">
{% raw %}{{ critcss | scssify }}{% endraw %}
</style>
{% endhighlight %}