---
layout: post
title: ! 'Javascript: Format Number, Price, Amount'
date: '2011-01-04T20:19:00.003+10:00'
author: sacah
tags:
- javascript
- programming
- sacah
modified_time: '2011-10-20T22:13:51.768+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-6100093295903381648
blogger_orig_url: http://www.sacah.net/2011/01/javascript-format-number-price-amount.html
---

After looking around at many different number formatting scripts, I figured surely the joy of regular expressions could do this is far fewer lines of code, so off I set and below is my creation. First is the two line function, below that I have put each statement on a new line for ease of explaining what/how it does its formatting.

{% highlight javascript %}
function formatNumber(number) {
    number=number+'';
    return number.replace(/[^\d\.\-]/g, '').replace(/(\.\d{2})[\W\w]+/g, '$1').split('').reverse().join('').replace(/(\d{3})/g, '$1,').split('').reverse().join('').replace(/^([\-]{0,1}),/, '$1').replace(/(\.\d)$/, '$1'+'0').replace(/\.$/, '.00');
}

formatNumber(-1234.56);
formatNumber(1234567.890);
formatNumber(123.3);
formatNumber('4423897544352423434');
{% endhighlight %}

~~~fold~~~

Output
{% highlight html %}
-1,234.56
1,234,567.89
123.30
4,423,897,544,352,423,434
{% endhighlight %}


{% highlight javascript %}
function formatNumber(number) {
    number=number+'';
    return number.replace(/[^\d\.\-]/g, '')
    .replace(/(\.\d{2})[\W\w]+/g, '$1')
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})/g,'$1,')
    .split('')
    .reverse()
    .join('')
    .replace(/^([\-]{0,1}),/, '$1')
    .replace(/(\.\d)$/, '$1'+'0')
    .replace(/\.$/, '.00');
}
{% endhighlight %}


{% highlight javascript %}
number=number+'';
{% endhighlight %}


Simply converts number into a string.

{% highlight javascript %}
return number.replace(/[^\d\.\-]/g, '')
{% endhighlight %}


Replaces anything that isn't a digit (\d), a full stop (\.) or a minus sign (\-) with an empty string (''). This will get rid of dollar signs, already existing formatting like commas etc.

{% highlight javascript %}
.replace(/(\.\d{2})[\W\w]+/g, '$1')
{% endhighlight %}

Detects the first 2 digits after the first full stop (\.\d{2}) and captures this info. Then detects all characters after the first two digits till the end of the line [\W\w]+. All this gets replaced with the first match. eg 100.1234 (\.\d{2}) matches .12 and [\W\w]+ matches 34. Then .1234 gets replaced with .12

{% highlight javascript %}
.split('')
{% endhighlight %}

Split the string into an Array.

{% highlight javascript %}
.reverse()
{% endhighlight %}

Reverse the array.

{% highlight javascript %}
.join('')
{% endhighlight %}

Join the array back into a String.

{% highlight javascript %}
.replace(/(\d{3})/g,'$1,')
{% endhighlight %}

Match groups of 3 digits (\d{3}), and replace them with the matches text followed by a comma $1,.

{% highlight javascript %}
.split('')
{% endhighlight %}

Split the string into an Array again.

{% highlight javascript %}
.reverse()
{% endhighlight %}

Reverse the array again.

{% highlight javascript %}
.join('')
{% endhighlight %}

Join the array back to a string.

{% highlight javascript %}
.replace(/^([\-]{0,1}),/, '$1')
{% endhighlight %}

Matches 0 to 1 occurrences of a minus sign ([\-]{0,1}) at the start of a line (^), followed by a comma. This gets replaced by the first match, which is either an empty string or a minus sign. -,123 becomes -123.

{% highlight javascript %}
.replace(/(\.\d)$/, '$1'+'0')
{% endhighlight %}

Matches a single digit following a full stop (\.\d) at the end of the line ($), and replaces this with the full stop and digit plus a 0. 1.1 becomes 1.10

{% highlight javascript %}
.replace(/\.$/, '.00');
{% endhighlight %}

Matches a full stop at the end of the line, and replaces it with .00