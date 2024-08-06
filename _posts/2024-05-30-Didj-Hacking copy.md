---
title: "Windows Modern Standby"
published: true
type: posts
layout: single
categories:
  - Projects
particles: true
---

# My experience with Windows Modern Standby and How I "Fixed" it

I use a Lenovo Gaming IdeaPad 3i, which has an Intel Core i5-12500H and a 3050 Ti. It uses Windows Modern Standby as its sleep mode.

This sucks. Why? Well the 12500H is a pretty fast chip. Consequently, it gets hot. Really hot. Normally, that's fine, my IdeaPad has a fantastic cooler.

**But**. What happens when the laptop goes to sleep? Well, normally modern standby turns off the fans and stops listening to network traffic, just keeping the RAM powered so that your software stays open.

Unless it's plugged in.

If the laptop is plugged in, standby keeps listening to network traffic. It has a solid power supply, right? So surely the extra power needed for that networking is fine!

No. Remember what standby does? **It turns off the fans.** Again, the 12500H is a *fast* chip. So what does the laptop do? It basically cooks itself. With no running fans, the cpu gets up to 100 celcius. And it'll stay that way until you come back. Wake the computer, and the laptop fans start *roaring*. 

I recently reapplied the thermal paste on my laptop, because modern standby had cooked it and made it pretty bad (spikes upward of 94C that I wasn't happy with). I ran Furmark 2 on it for a bit (CPU burner with 40 threads) to check how it would handle the temps, and it was fine! Didn't get up past 73C. But then I went to sleep. Luckily, with HWMonitor open.

What did I find when I woke up? That for roughly seven hours, my CPU had been cooking at 100C. Yay! I reran that thermal test once it had cooled down, and whaddya know, temps pinned at 95C. So now, I'm going to have to re-reapply thermal paste.

***But!*** One way to solve this going-to-sleep-with-fans-off issue, at least when plugged in, is to just literally tell Windows to not go to sleep while the power cord is plugged in.

![Windows Sleep Settings](/assets/imgs/windows-sleep.png)

I left my laptop on last night with this setting, and when I checked it in the morning, while it was still on, the temps hadn't skyrocketed and the laptop was just barely warm, as it's supposed to be. This fixes the overheating-while-plugged-in issue that cooked my thermal paste.

However, it's worth noting that Modern-Standby, as noted by a [Linus Tech Tips video](https://www.youtube.com/watch?v=OHKKcd3sx2c), there's another problem. If you put your laptop to sleep and *then* unplug it, it will not notice and will continue doing it's networking stuff. And overheat. Potentially, while in your bag (suffocating itself of any passive cooling). If that's a problem for you, they have a "solution" in their video regarding swapping sleep modes (run `powercfg /a` in command prompt or PS while plugged in to check if your FW supports S3). I typically just power down my laptop if I'm unplugging it so it doesn't waste its battery in sleep mode.