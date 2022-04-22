---
title: "Access Modifiers"
published: true
type: posts
layout: single
categories:
  - Documentation
tags:
  - Java
  - Programming
---

## Access Modifiers 

<a name="i"> </a>

Access modifiers control what can access class members. Java has the following access modifiers:

|Specifier|Class|Package|Subclass|Everything|
|:---|:---:|:---:|:---:|:---:|
|`public`|✓|✓|✓|✓|
|`protected`|✓|✓|✓|X|
|`default`|✓|✓|X|X|
|`private`|✓|X|X|X|

Any `public` member can be referenced anywhere in the code.

Any `protected` member can be referenced anywhere in the package it belongs to.

Any member without a modifier can be seen anywhere in the package it belongs to other than subclasses.

Any `private` member can be referenced only within the class it belongs to.
