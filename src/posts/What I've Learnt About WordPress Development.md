---
title: "What I’ve learnt about WordPress development since working at Common Knowledge"
date: "2023-11-05"
---

At Common Knowledge we work with organisers and grassroots groups to improve their websites and digital infrastructure to maximise the impact of their work. We think that WordPress is a good solution for many of our collaborators as it’s easy to use and has a powerful content management system. This post is about what I’ve learned about the modern WordPress ecosystem since joining Common Knowledge and how it has improved my work.


![](https://images.unsplash.com/photo-1566207462754-97c86c31db3d?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Photo by <a href="https://unsplash.com/@tozakfikret?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Fikret tozak</a> on <a href="https://unsplash.com/photos/turned-on-monitor-rfNLa1HL7eY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  

### Bedrock
Bedrock is a WordPress boilerplate with an improved folder structure that separates the application code from core WordPress files and plugins. It uses Dotenv to manage environment specific variables and keep sensitive data out of version control. It also means that I can manage dependencies like plugins and WordPress/PHP versions via Composer. Using the Bedrock set of standards helps me to get closer to a 12-Factor App methodology with WordPress.

### Block editor
The block editor (also known as Gutenberg editor) is now the default content editor in WordPress. It uses a modular approach where content is organised into individual blocks to create complex layouts with a drag and drop interface. The real time preview feature allows users to see what the content will look like on the page without previewing or saving. I do a lot of my development work in the block editor to create reusable patterns for our collaborators to customise as they wish.

### Full Site Editing
Full Site Editing builds on the block editor to allow users to edit every element of a WordPress website including headers, footers and content templates. I use the theme.json file to define settings such as colours, typography and spacing to ensure design consistency. I try to write as little custom CSS as possible and allow all styling to be done within the editor.  Setting up the site in this way means that when I hand it over, collaborators can easily generate new pages and content without needing any coding skills. 

### Custom Gutenberg blocks
Gutenberg is built in React which means it’s highly extensible for developers to create their own blocks. I’ve been learning how to use the @wordpress/create-block package to make reusable blocks with custom design and functionality.  For example, a campaign site may want a custom sign up block that integrates with a third party mailing list service or a block that displays a real time map of member activities. It also means that I have to rely less on third party plugins.

### Renovate 
I use the Renovate package to help me automate dependency updates for Composer in my WordPress repositories. Renovate runs scheduled checks to extract the project dependencies from the composer.json file which it then checks against a directory like WP Packagist. If it identifies an update it creates a PR for the latest version and often includes a change log or release notes. A complaint about WordPress historically has been the security risks from out of date plugins so Renovate is really important in managing this risk.

All of the above techniques and tools have helped me to build bespoke WordPress projects faster and with a better developer experience. I’m hoping to start writing my own plugins for the Gutenberg editor and will be writing a blog about that experience.

Links and tutorials to check out 
- https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/
- https://fullsiteediting.com/
- https://roots.io/bedrock/
- https://docs.renovatebot.com/


