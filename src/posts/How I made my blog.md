---
title: 'How I made my blog'
date: '2022-02-19'
---

## How I made my blog

When I decided to start blogging I knew that I wanted to build the site myself. I chose to use the Gatsby framework as I had been learning JavaScript for a while and I already had a project built in React.

Gatsby is an open source framework that helps you create a static website easily and quickly.

[The Gatsby docs](https://www.gatsbyjs.com/docs) have a tutorial that can get you started with a blog site within minutes. [The Gatsby Starters Library](https://www.gatsbyjs.com/starters/) has templates for e-commerce, portfolio, blog and other sites.

![](/images/Gatsby_site.png)

To make the site I followed this [YouTube tutorial](https://youtu.be/8t0vNu2fCCM) closely. The creator, Andrew Mead, has more courses on the JavaScript ecosystem on his [blog](https://mead.io/). I also had a lot of fun with the whole open source ecosystem around Gatsby including the many plugins.

### Challenges ⛰️

There were many things I found difficult about the project.

-   I struggled with the conceptual difference between components and pages. This meant I had code on my pages that should have been in components.
-   I used CSS modules but there were still too many styles in the global scope. Remembering to write classNames in the JSX way was another headache.
-   Basically anything that didn’t follow the tutorial exactly…This taught me a lesson about understanding the code (and not simply copying it) before I tried to build on or debug it.

### Things I like ❤️

-   I’m still pleased with how the site looks and performs. I like the minimal design and Gatsby’s speed makes browsing pleasingly snappy.
-   It’s easy to add posts and markdown is a distraction free and intuitive writing experience.
-   It works well with [Netlify](https://www.netlify.com/) which is a super efficient and easy to use hosting platform.

### Things I want to add 🚧

There are of course things I want to add to or improve about the site.

-   Security vulnerabilities are the most urgent. One drawback of the framework is that it has a bunch of dependencies that have to be maintained and in some cases replaced.
-   I would like to create a reusable sidebar component to abstract some of the site’s duplicated code.
-   It would be great to have pagination on the blog index page and set a maximum number of listings per page.

I enjoyed developing with Gatsby and I would make another site with the framework. I hope that I’ll have enough time soon to make the improvements I listed above. If you have any questions about the process let me know on Twitter at [@MollyBloom1989](https://twitter.com/MollyBloom1989)

Good luck with your projects!
