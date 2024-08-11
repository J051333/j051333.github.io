---
title: "Didj Hacking"
published: true
type: posts
layout: single
categories:
  - Projects
tags:
  - Hacking
particles: true
---

# How I Hacked my Didj

The LeapFrog Didj was released on August 22, 2008, a small handheld linux device, but designed to be used by children for learning.

I had an old one of these lying around from when I was young and decided to see what I could do with it.

The Didj conveniently has serial pins that expose root access to the console in the cartridge slot!

Not my image, I suck at soldering :)
[![Didj UART pins](https://elinux.org/images/thumb/b/b8/Didj-uart.jpg/750px-Didj-uart.jpg)](https://elinux.org/LeapFrog_Pollux_Platform:_Hardwire_Serial_Connection)

As per the image above, 
 - the UART TX pin is the leftmost green wire (Didj transmits serial from here), connects to RX on the Arduino
 - RX is the white wire (your serial input goes here), connects to TX on the Arduino
 - black is ground, connects to gnd on the Arduino
 - and red is VCC +3.3v—only necessary if your FTDI needs a reference voltage, Arduinos do not
 
The ground *is* necessary because the Arduino and the Didj need a common ground. This just means connect the Didj ground to the Arduino ground. This way they both have a common `low` voltage.

These use UART to for communicating with the console. UART is really simple and is what Arduinos use to communicate with computers as well (through the serial to USB converter chip CP2102). Conveniently, I had a Keyestudio Arduino Uno lying around and I set it up to communicate with the Didj (just connected the three pins). I later picked up an Arduino Mega instead (also Keyestudio, about $20 from [Amazon](https://www.amazon.com/KEYESTUDIO-Arduino-Type-C-Powerful-Contoller/dp/B08V4RCRS2/ref=sr_1_5?refinements=p_36%3A-2600&rnid=386442011&sr=8-5)). It has more Serial connections so I don't have to use software serial.

I like the Arduinos as opposed to FTDI breakout boards because they're a single (relatively cheap) board and can be used for so many other projects, but an FTDI breakout board with PuTTY would also work just fine.
{: .notice--info}

```cpp
// Code to turn the serial monitor into a terminal //
void setup() {
  Serial.begin(115200);   // Communication with the PC
  Serial1.begin(115200);  // Communication with the Didj 
  // Use Serial1 for boards with multiple serial ports
  // Otherwise consider SoftwareSerial
}

void loop() {
  if (Serial.available()) {
    byte byteToWrite = Serial.read();
    Serial1.write(byteToWrite);
  }

  if (Serial1.available()) {
    byte byteToWrite = Serial1.read();
    Serial.write(byteToWrite);
  }
}
```

The Didj uses a baud rate of 115200 with 8 bits of data 1 stop bit, no parity, and no flow control (115200 8N1). Other than the baud rate, this is the default on arduinos. The serial connection from the Arduino to the PC (unless this is also your connection to the Didj) can be any baud rate since it won't impact the communication with the Didj.

Warning: Arduinos typically use 5v logic, which you might want to step down to communicate with the Didj. I used 5v and suffered no consequences but ymmv. Stepping down the voltage with a voltage divider is pretty simple, I used one 1K ohm resistor and one 2K ohm resistor. (I've read that other methods of voltage stepping can hurt signal integrity)
{: .notice--warning}

Now, here's where my issues began. When I first tried connecting to the Didj, it didn't work so well. I got no response at all. I swapped to the Mega to see if it was the lack of extra serial connections and it worked! I would advise using SoftwareSerial if you're using an Uno or other board with a single serial port. I tried using the connection being used for the USB and uh yeah, not so great.

Now that I was getting console output from the Didj, I tried getting input. To get a normal looking terminal from the Didj, you should press enter a few times so the `#` pops up for root access. 

However, this didn't work for me. Turns out, due to my lack of soldering expertise, I had separated the solder pad from the PCB! Soooo I scraped some of the lacquer off of the trace to that pad and held the jumper wire I was using against the trace instead and it worked like a charm (albeit huring my fingers a little)! 

Be careful soldering! You can damage the board too!
{: .notice--warning}

At this point, you're seeing the `#`. You can try a normal linux command like `echo` or `ls` to make sure that your input is working. Now you have root access to your Didj!

I may work more on this project at a later date.