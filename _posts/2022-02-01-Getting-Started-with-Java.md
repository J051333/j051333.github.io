---
title: "Getting Started with Java"
published: true
type: posts
layout: single
categories:
  - Tutorials
tags:
  - Java
  - Setup
---

## Picking your IDE

Your IDE is the tool you'll be using to write Java code. For Java, there are quite a few options. The most well-known ones are IntelliJ IDEA, VSCode, Eclipse, and NetBeans.

### [<img src="/assets/imgs/intellij_logo.png" width="20"/> IntelliJ](https://www.jetbrains.com/idea/)

IntelliJ, my IDE of choice, has an amazing code completion system, comparable to VSCode and Visual Studio. It's built specifically for Java and has a large variety of [plugins](https://plugins.jetbrains.com/idea). These provide additional language support for Kotlin, Scala, Bash, Markdown, etc. IntelliJ is also the editor packaged with [Android Studio](https://developer.android.com/studio), so if you plan to be doing any Android or [Flutter](https://flutter.dev/?gclsrc=ds&gclsrc=ds) app development, you'll likely be using IntelliJ one way or another.

IntelliJ also has integrated version control; support for Gradle, Maven, Ant, and Gant; a built in terminal; Docker integration; breakpoint debugging; real-time collaboration; and [more](https://www.jetbrains.com/idea/features/).

Keep in mind that if you're looking into real-time collaboration, IntelliJ Community Edition (free) only supports up to three collaborators for 30 minutes at a time.

It has support for [Windows](https://www.jetbrains.com/idea/download/#section=windows), [MacOS](https://www.jetbrains.com/idea/download/#section=mac), and [Linux](https://www.jetbrains.com/idea/download/#section=linux).

### [<img src="/assets/imgs/vscode_logo.png" width="20"/> Visual Studio Code](https://www.jetbrains.com/idea/)

Visual Studio Code, commonly referred to as VSCode, is a fairly lightweight all around code editor. It's very quick and easy to install and is usable almost immediately.

In contrast to many other IDEs, VSCode to get the most out of it, you need to install language support extensions. These allow VSCode to provide syntax highlighting, IntelliSense—their awesome implementation of code completion, debugging tools, and more. For Java, VSCode bundles several into the [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack). This extension pack should give you everything you need to get started writing Java code.

In addition to IntelliSense (or their newer [IntelliCode](https://docs.microsoft.com/en-us/visualstudio/intellicode/intellicode-visual-studio-code)), VSCode also supports breakpoint debugging and built-in Git.

VSCode also has a high level of customization with [themes](https://code.visualstudio.com/docs/getstarted/themes). 

It's available for [Windows, MacOS, and Linux](https://code.visualstudio.com/Download).

### [<img src="/assets/imgs/eclipse_logo.png" width="20"/> Eclipse](https://www.eclipse.org/ide/)

Eclipse is a free and open source Java IDE. Like both IDEs mentioned above, Eclipse supports [plugins](https://marketplace.eclipse.org/). Eclipse's code completion is not as extensive as the ones in VSCode and IntelliJ, however, it has a clean and simple UI and supports languages other than Java (like [C++](https://www.eclipse.org/downloads/packages/release/2021-12/r/eclipse-ide-cc-developers)). Eclipse is **not** a lightweight IDE, it can become very resource-heavy at times. 

Although Eclipse is a very well known IDE, it's looks can seem dated at times. If you're looking for something more modern looking, this may not be the IDE for you.

Eclipse is available on [Windows, MacOS, and Linux](https://www.eclipse.org/downloads/packages/installer).

### [<img src="/assets/imgs/netbeans_logo.png" width="20"/> NetBeans](https://netbeans.apache.org/)

NetBeans is an IDE developed by Apache. It's main language (and language it's written in) is Java. It has automated code-formatting, code completion, parameter suggestions, support for both other languages and [plugins](https://plugins.netbeans.apache.org/), and powerful refactoring tools.

Like Eclipse, NetBeans is [open source](https://github.com/apache/netbeans). It's available on all operating systems that support java, so [Windows, MacOS, Linux, BSD, and more](https://netbeans.apache.org/download/nb126/nb126.html).