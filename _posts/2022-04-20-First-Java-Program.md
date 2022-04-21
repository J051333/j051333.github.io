---
title: "First Java Program"
published: true
type: posts
layout: single
categories:
  - Tutorials
tags:
  - Java
  - Programming
---

## Starting off

Let's write a simple print program and then we'll go over its anatomy.

To begin, create a file called `Main.java`. This will contain our `Main` class.

Next, edit the file to reflect the following:

```java
public class Main {

}
```

The file name doesn't _have_ to be `Main.java`, but what you name your file **must** match your class name (the word after `class`). This applies to all classes in Java. 
{: .notice--info}

Conventionally, Java classes start with capital letters and methods with lowercase letters. This helps differentiate between the two.
{: .notice--info}

Now, we create what's referred to as the main method. This is where the program starts, or the entry point. Any code that runs will stem from here.

Change `Main.java` to reflect the following:

```java
public class Main {
  public static void Main(String[] args) {

  }
}
```

Now we have a class containing a static method called `main()`. All that's left is to tell the `main()` method to print something to the console. To do that, we use the `println()` method of  `System.out` (the standard output stream):

```java
public class Main {
  public static void Main(String args[]) {
    System.out.println("Hi!!");
  }
}
```

Now, we run it! To do so, you can either use your IDE's run tool or run it using the command line. 

[Press to skip command line instructions.](#program-anatomy)

## Run With Command Line

To run your program with the command line, `cd` to the path of your project:

```
cd "C:\Users\%username%\Documents\%project-source-folder%"
```

Compile your program using the `javac` command.

```
javac Main.java
```

This will compile your code down to java bytecode, or code that the Java Virtual Machine (JVM) can read. Then to run it, use the `java` command on the newly generated `Main.class` file:

```
java Main.class
```

## Program Anatomy

Alright, now that we've written some code, lets talk about what that code means.

### Classes

Starting with the keyword `class`. A class is a blueprint for an information container. Say you wanted to represent an animal in code. You'd create an `Animal` class that would hold things like the animal's name, sex, species, size, and so on. 

In our program, though, `class` isn't the first keyword we see. First, we see `public`; one of many of what we call access specifiers or access modifiers. These change what can see the class, field, or method.

### Methods

Next, we see the line:

```java
public static void main(String[] args) {

}
```

As you can probably guess, `main()` is the name of the method. Methods are collections of statements we name to cut down on code repetition. For example, we may have a method that takes a number and converts it into a Roman numeral.

This is an element of DRY, or Don't Repeat Yourself. Cutting down on repetition makes your code cleaner and easier to read.
{: .notice--info}

#### Access Modifiers

We also see a familiar `public`. Like before, this changes what all can see `main()`. Below is a list of access specifiers and what can see members (things belonging to a class) using them.

|Specifier|Class|Package|Subclass|Everything|
|:---|:---:|:---:|:---:|:---:|
|`public`|✓|✓|✓|✓|
|`protected`|✓|✓|✓|X|
|`default`|✓|✓|X|X|
|`private`|✓|X|X|X|

Members using `public` will be way more accessible than members using `private`.

#### The Static Keyword

We'll cover these more when we get to multi-class programs. Next, we see `static`. Again, this becomes more important when discussing multi-class programs. The `static` keyword means that you don't have to have an instance of a class to use the member. For example, if we had a method to add two numbers:

```java
public class Add {
  public int add(int a, int b) {
    return a + b;
  }
}
```

We would have to create an instance, or a built version, of the `Add` class in order to reach the `add()` method:

```java
Add adder = new Add();
adder.Add(1, 2);
```

That seems overly tedious. Instead, we could use the `static` keyword:

<a id="add-method"></a>

```java
public class Add {
  public static int add(int a, int b) {
    return a + b;
  }
}
```
Then, inside our `main()` method, all we need is:

```java
Add.add(1, 2);
// returns 3
```
Now comes the fun part: return types. 

#### Return Types

The next keyword we see is `void`. However strongly I wish it were, this isn't a reference to the haunting abyss that grows closer each day to bringing humanity to extinction. Instead, this simply tells the program that this method doesn't say anything when it finishes. It simply executes and goes away. Let's take a look at some others:

- int
- String
- double
- long
- short
- byte
- float

All of these have their own meanings, and we'll get to that when we go over variables. For now though, we'll stick to the first two: String and int.

`String`s are collections of characters that represent text. Text surrounded in double quotes is what we call a `String` literal (ex. `"hi there"`). `int`s, short for integer, store numbers. They can't store decimal points (floating point values) though. Therefore `1` would be a valid `int` literal while `1.023` would not.

That's why our [`add()`](#add-method) method uses the return type `int`.

But say we wanted to add two strings together and return the result? We can do that too:

```java
public class Add {
  public static int add(int a, int b) {
    return a + b;
  }

  public static int addStrings(String a, String b) {
    return a + b;
  }
}
```

Now, if we were to call the `addStrings()` method:

```java
Add.addStrings("hiya ", "there");
```

We would return `"hiya there"`!

And that's pretty much it for our first program! Next, learn about variables.