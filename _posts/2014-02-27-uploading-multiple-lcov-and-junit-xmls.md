---
layout: post
title: Uploading multiple LCOV and JUnit XMLs for the same source to Grunt-Karma-Sonar
date: '2014-02-27T20:07:00.000+10:00'
author: sacah
tags:
- karma
- grunt
- sonar
- software
- programming
- sacah
modified_time: '2014-02-27T20:07:07.010+10:00'
blogger_id: tag:blogger.com,1999:blog-4605009901196846959.post-7622101453688572351
blogger_orig_url: http://www.sacah.net/2014/02/uploading-multiple-lcov-and-junit-xmls.html
---

I recently needed to upload 2 LCOV files, and 2 JUnit XML files up to Sonar. The problem was both LCOV and JUnit XMLs covered the same JS source files, so if I'd configured grunt-karma-sonar like normal, with the JS source path in the 'path' option, Sonar would throw an error about duplicate source files.

So I comment out the 'path' option for the second set, but then the LCOV file has the wrong path when it gets uploaded to Sonar, meaning Sonar doesn't count those coverage results.

thisisafold

What I ended up doing, was adding the full path to the 'prefix' option, and commenting out 'path'.

This means it merges both LCOV and JUnit XMLs and uploads with the 1 lot of JS source files.

Here is the config I used

{% highlight javascript %}
karma_sonar: {
    options: {
        instance: {
            hostUrl: 'http://localhost:9000',
            jdbcUrl: 'jdbc:h2:tcp://localhost:9092/sonar',
            login: 'sonar',
            password: 'sonar'
        }
    },
    your_target: {
        project: {
            key: 'project-name',
            name: 'Full project name',
            version: grunt.file.readJSON('package.json').version
        },
        sources: [
            {
                path: 'web/src',
                prefix: '...',
                coverageReport: 'coverage/ui/PhantomJS 1.9 (Windows)/lcov.info',
                testReport: 'web/test/ui/test-output/test-ui.xml'
            },
            {
                prefix: 'C:/Development/project-name/web',
                coverageReport: 'coverage/js/PhantomJS 1.9 (Windows)/lcov.info',
                testReport: 'web/test/js/test-output/test-js.xml'
            }
        ],
        exclusions: []
    }
}
{% endhighlight %}