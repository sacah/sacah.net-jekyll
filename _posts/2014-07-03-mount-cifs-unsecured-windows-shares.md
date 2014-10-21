---
layout: post
title: Mount CIFS Unsecured Windows Shares Arch Linux
date: '2014-07-03T22:12:00.000+10:00'
author: sacah
tags:
- linux
- software
modified_time: '2014-07-03T22:12:01.418+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-9188391757293817006
blogger_orig_url: http://www.sacah.net/2014/07/mount-cifs-unsecured-windows-shares.html
---

I was trying to mount a samba share from ArchLinux, this share is unsecured, with a username of guest.

I tried a range of options

{% highlight io %}
mount.cifs -o guest //ip/hdd /mnt/hdd
mount.cifs -o username=guest //ip/hdd /mnt/hdd
mount.cifs -o username=guest,password= /ip/hdd /mnt/hdd
{% endhighlight %}

Plus a bunch of other iterations and I kept getting
{% highlight io %}
mount error(13): Permission denied'
{% endhighlight %}

After a bunch of searching I found a post that said you sometimes need to include sec=ntlm, and with this I got it to work

{% highlight io %}
mount.cifs -o username=guest,sec=ntlm //ip/hdd /mnt/hdd
{% endhighlight %}