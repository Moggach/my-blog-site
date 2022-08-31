---
title: "How to Structure Your CSS"
date: "2022-07-13"
---

CSS is a very powerful and flexible language but it needs to be organised. Adding rules to the end of a single file will quickly become difficult to read. Making changes to one part of the code may have unintended consequences elsewhere. By adopting one of the many established CSS conventions your code will become easier to scale and maintain.

![computer screen displaying CSS code](https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80)

Photo by <a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pankaj Patel</a> on <a href="https://unsplash.com/s/photos/css?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

There are some general tips for making your work with CSS easier. If you are working on an existing project within a team there will be a code style already to follow. It can be helpful to add comments to your CSS to break up the sections for example base styles, layouts, call to action blocks etc. Comments can be broken onto multiple lines:

    /*
    This is
    a multi-line
    comment
    */

and you can also insert special characters like ‘||’ to make it easier to jump between sections.

**There are several widely used methods for structuring CSS.**

### OOCSS

Object Oriented CSS aims to apply the principles of object oriented programming to CSS. OOCSS reduces repetition by treating page elements as objects that it classifies as belonging to either the structure (height, width, margins, padding etc) or the skin (colours, fonts etc) of the page.
​

### SMACSS

Scalable and Modular Architecture for CSS is also object oriented but gives us more structure by dividing CSS rules into the following five categories:

1. Base - default styles for things like the body, headers or links
2. Layout - the main components of the page layout
3. Module - a self contained component of a page such as a widget or a carousel
4. State - whether an element like a drop down menu is open or closed
5. Theme - a set of colours or images that gives a site its look and feel

### BEM

Block Element Modifier is a CSS convention for class names. Blocks are independent, reusable parts of a website such as a nav or sidebar. Elements are context dependent - they only make sense within a given block, for example a menu item or header title. Modifiers such as disabled or highlighted are used to change an element’s look or behaviour.

### Atomic CSS

Atomic CSS tries to break down CSS into its smallest possible components. Each class only has one function and their name usually reflects that such as .padding-bottom-10 or .background-blue. A major benefit of this approach is that classes are immutable - they do not change - and so unpredictability is reduced.

### Pre-processors e.g. SASS

SASS (Syntactically Awesome Stylesheets) is a preprocessor that compiles to CSS. It allows CSS to behave more like a programming language with features like variables, nesting, mixins and inline imports. SASS (and other frameworks like LESS) super-charge CSS and make debugging much easier.

There isn’t a right or wrong choice among these options (and the many others that are available) and what you use is down to personal preference.
