---
title: 'I discovered Raylib today!'
description: 'JavaScript on the machine and the machine that runs JavaScript'
pubDate: 'Mar 02 2023'
categories: ['Programming', "C", "Recreational Programming"]
---

**GUI in C has always been a headache but I recently came across a video of [tsoding](https://www.youtube.com/tsoding) and I loved the way he used raylib for his music visualizer**

As a C programmer, I've always found GUI development to be a bit of a challenge. The low-level nature of C, while powerful, often makes creating user interfaces a time-consuming and complex task.

## What is Raylib?

Raylib is a simple and easy-to-use library for videogame programming, primarily focused on graphics but creating windows and GUIs is just as easy.

## My Raylib Revelation

What immediately struck me was its simplicity. With just a few lines of code, I had a window up and running

**A Simple Setup,** <br/>
no need for IDEs and heavy machinary, no CMake or anything just a smoll smoll build script.
I like to build my libs and link them, 
This script compiles our main.c file with Raylib, handling all necessary flags and dependencies.

```build.sh
#!/bin/bash

gcc -Wall -Werror --pedantic main.c -o main -std=c99 -I ./raylib/src -L ./raylib/src -lraylib -lGL -lm -lpthread -ldl -lrt -lX11
```

**The Magic of Raylib** <br/>
With Raylib, creating a basic GUI application becomes remarkably simple. Here's a basic example structure, just a few lines of code:

```main.c

#include "raylib.h"

int main(void)
{
    InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, "window name");
    ...Load textures and sprites

    SetTargetFPS(X);

    // Detect window close button or ESC key
    while (!WindowShouldClose())  
    {
        ...logic
	    BeginDrawing();
        ...render textures here
        EndDrawing();
    }

    ... Unload textures 
    return 0;
}
```

### Why I like Raylib 
As I delved deeper into Raylib, I began to appreciate the thought that went into its structure. It's clear that it was designed with C programmers in mind.

The minimal boilerplate is a breath of fresh air. With just a few lines of code, you can have a window up and running, allowing you to focus on what really matters - your application logic. The main loop structure is concise yet powerful, striking a perfect balance between simplicity and functionality.

What really stands out is the intuitive nature of the API. Functions like `InitWindow()`, `BeginDrawing()`, and `EndDrawing()` do exactly what you'd expect. This clarity not only makes the code more readable but also easier to maintain in the long run.

I've found that the structure naturally guides you towards good coding practices. It encourages a clear separation between initialization, update, and rendering logic. This separation makes it easier to organize code and maintain a clean architecture, something that's often challenging in larger C projects.

Resource management, often a pain point in C programming, is straightforward with Raylib. The library provides clear functions for loading and unloading resources, simplifying memory management without hiding the process from the programmer.

Perhaps most importantly, the structure feels flexible. While it provides a solid foundation, it doesn't box you in. I've found it easy to extend my projects, add new features, or integrate other libraries without fighting against the framework.

For beginners, this structure serves as an excellent introduction to game loops and real-time application design. For experienced developers, it provides the transparency and control we often crave in C programming.

In essence, Raylib's structure embodies what many C programmers value: clarity, control, and efficiency, all without unnecessary complexity. It's this thoughtful design that makes working with Raylib not just productive, but genuinely enjoyable.

### I Found a Sprite!

Digging through examples I found a simple sprite!

![scarfy-image](/blog/post/scarfy.png)
***he's scarfy***

So naturally we tried making a game, checkout [scarfy-run](https://github.com/DHRMKJ/scarfy-run)
on my github.
<hr/>