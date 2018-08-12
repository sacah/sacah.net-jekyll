---
layout: post
title: Linux Batch Thumbnail Creation of folder with subdirectories
date: '2014-04-13T12:36:00.000+10:00'
author: sacah
tags:
- bash
- programming
- photos
- raspberry pi
- linux
- hack
- sacah
modified_time: '2014-04-13T12:41:13.928+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-592268148388679244
blogger_orig_url: http://www.sacah.net/2014/04/linux-batch-thumbnail-creation-of.html
---

I have a RaspberryPi with a 750gb attached HDD, on this drive I store a folder called Photos, it contains many sub-directories with photos in them.

I wanted to create a new directory that had the same structure of Photos, but all the images are smaller thumbnailed versions.

To accomplish this I tried a number of programs and scripts I found online for linux, but most didn't handle sub-directories, I then tried to find programs on Windows that would do this across the network, but they either didn't handle sub-directories or didn't handle errors in network traffic and would bomb out.

thisisafold

So I wrote my own Bash script

{% highlight perl %}
#!/bin/bash

find $1 -type f -iname '*.jpg' -print0 | while IFS= read -r -d '' file; do
  newFile="${file/$1/$1Thumbs}"
  if [ ! -f "$newFile" ]
  then
    echo "$newFile"
    mkdir -p "$(dirname "$newFile")"
    convert -sample 1024x1024 "$file" "$newFile"
  fi
done
{% endhighlight %}

I called this batch-photos.sh, so if I want to create thumbnails of /mnt/sda1/Photos I run

{% highlight io %}
./batch-photos.sh /mnt/sda1/Photos
{% endhighlight %}

It will then create a folder /mnt/sda1/PhotosThumbs and do all the sub-directory creation and save the thumbnails there.

For now it resizes to a max width/height of 1024, maintaining the photos aspect. It also uses 'sample' method of ImageMagicks convert, as this is the fastest and still gave a good result when making photos smaller.

It will also skip over thumbnails that already exist, it does a simple check if that filename, in the matching sub-directory exists.

Here are the various convert methods I used to get a speedy result

|---
| convert -size 1024x1024 -sample 1024x1024 -quality 80
|:-|-:
| mnt/sda1/PhotosThumbs/DSC00412.JPG | 6799ms
| mnt/sda1/PhotosThumbs/100702/100_6722.JPG | 2391ms
| mnt/sda1/PhotosThumbs/100702/100_6687.JPG | 2676ms
| mnt/sda1/PhotosThumbs/100702/100_6671.JPG | 2492ms
| mnt/sda1/PhotosThumbs/100702/100_6683.JPG | 2669ms
| mnt/sda1/PhotosThumbs/100702/F1000004.JPG | 1502ms
| mnt/sda1/PhotosThumbs/100702/100_6686.JPG | 4278ms
| mnt/sda1/PhotosThumbs/100702/100_6704.JPG | 2408ms
| mnt/sda1/PhotosThumbs/100702/F1000013.JPG | 1562ms

|---
| convert -size 1024x1024 -sample 1024x1024
|:-|-:
| mnt/sda1/PhotosThumbs/DSC00412.JPG | 6598ms
| mnt/sda1/PhotosThumbs/100702/100_6722.JPG | 2382ms
| mnt/sda1/PhotosThumbs/100702/100_6687.JPG | 2711ms
| mnt/sda1/PhotosThumbs/100702/100_6671.JPG | 2571ms
| mnt/sda1/PhotosThumbs/100702/100_6683.JPG | 3920ms
| mnt/sda1/PhotosThumbs/100702/F1000004.JPG | 1507ms
| mnt/sda1/PhotosThumbs/100702/100_6686.JPG | 2843ms
| mnt/sda1/PhotosThumbs/100702/100_6704.JPG | 2442ms
| mnt/sda1/PhotosThumbs/100702/F1000013.JPG | 1570ms

|---
| convert -sample 1024x1024
|:-|-:
| mnt/sda1/PhotosThumbs/DSC00412.JPG | 6515ms
| mnt/sda1/PhotosThumbs/100702/100_6722.JPG | 2376ms
| mnt/sda1/PhotosThumbs/100702/100_6687.JPG | 3561ms
| mnt/sda1/PhotosThumbs/100702/100_6671.JPG | 3042ms
| mnt/sda1/PhotosThumbs/100702/100_6683.JPG | 2694ms
| mnt/sda1/PhotosThumbs/100702/F1000004.JPG | 1514ms
| mnt/sda1/PhotosThumbs/100702/100_6686.JPG | 2867ms
| mnt/sda1/PhotosThumbs/100702/100_6704.JPG | 2428ms
| mnt/sda1/PhotosThumbs/100702/F1000013.JPG | 1560ms

|---
| convert -size 1024x1024 -resize 1024x1024
|:-|-:
| mnt/sda1/PhotosThumbs/DSC00412.JPG | 34815ms
| mnt/sda1/PhotosThumbs/100702/100_6722.JPG | 8996ms
| mnt/sda1/PhotosThumbs/100702/100_6687.JPG | 9305ms
| mnt/sda1/PhotosThumbs/100702/100_6671.JPG | 10490ms
| mnt/sda1/PhotosThumbs/100702/100_6683.JPG | 9287ms
| mnt/sda1/PhotosThumbs/100702/F1000004.JPG | 5494ms
| mnt/sda1/PhotosThumbs/100702/100_6686.JPG | 11137ms
| mnt/sda1/PhotosThumbs/100702/100_6704.JPG | 9061ms
| mnt/sda1/PhotosThumbs/100702/F1000013.JPG | 5596ms

|---
| convert -resize 1024x1024
|:-|-:
| mnt/sda1/PhotosThumbs/DSC00412.JPG | 33566ms
| mnt/sda1/PhotosThumbs/100702/100_6722.JPG | 10510ms
| mnt/sda1/PhotosThumbs/100702/100_6687.JPG | 9336ms
| mnt/sda1/PhotosThumbs/100702/100_6671.JPG | 9072ms
| mnt/sda1/PhotosThumbs/100702/100_6683.JPG | 10677ms
| mnt/sda1/PhotosThumbs/100702/F1000004.JPG | 5540ms
| mnt/sda1/PhotosThumbs/100702/100_6686.JPG | 9707ms
| mnt/sda1/PhotosThumbs/100702/100_6704.JPG | 10465ms
| mnt/sda1/PhotosThumbs/100702/F1000013.JPG | 5561ms