---
title: "Tips for reading code (for new developers)"
date: "2022-09-16"
---

## Tips for reading code (for new developers)

One of the most important transitions new developers need to make is from working on their own projects to existing codebases within larger teams. Most often working as a developer involves extending and maintaining code that’s already been written. This means that being able to read other people’s code is an important skill. Looking at code and trying to understand it can often be difficult and intimidating but there are ways to make the process easier.

![](https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80)

Photo by <a href="https://unsplash.com/@olidale?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Oli Dale</a> on <a href="https://unsplash.com/collections/4621741/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
### Read the documentation 📖
If there is documentation available for a project it’s important to read it. Established frameworks, libraries and APIs will usually have well maintained and extensive documentation to help the millions of developers who use them. Even on smaller projects READMEs often contain set up instructions and list the technologies and dependencies used. 

### Download the code and run it locally 🚂
To understand how code works there’s nothing better than downloading and running it locally. It’s helpful to start with a small piece of the code that you understand and trace it carefully back through the application. Examine each unknown part in the context of what you already know and gradually the whole picture will start to appear.

### Use debugging tools 🔍
When you run into an error or something you don’t understand in the code you can use debugging tools like VS Code Debugger or Browser Dev Tools. Set breakpoints in the debugger to inspect variables as you run the programme. Viewing computed styles using the CSS panel in Dev Tools is a really helpful way of seeing which CSS properties are being applied and how by the browser.

### Take a higher level approach ☁️
Stepping through the code is important but you also need to get a sense of how the whole project fits together. Is there a database and if so what type? Does the project have a front end and back end? How is it deployed and hosted? Where is the business logic contained? Try talking through this out loud or drawing it out on a piece of paper.

### Read comments, commit messages, GitHub discussions and code reviews 📜
Comments can clarify what code is intended to do and why the developer(s) may have made certain choices over others. Commit messages record the evolution of the project and the scope and purpose of changes. Developers working on a project will often discuss their approaches in issues and when reviewing each other's PRs. 

### Look at the tests 🧪
Tests are another indication of the purpose of a programme. Test suites often have statements that assert what a feature does for example the below in the popular testing library Cypress:

```
describe("Testing the application", function() {
    it("should login with username and password", function() {

        // visit the test page
        cy.visit('https://demo.com/')

        cy.get('#username').type('test123')

        cy.get('#password').type('123')

        cy.get('#log-in').click();

        cy.url().should('include', '/app')

    });
});

```

Edge cases used in tests show the boundaries of what the code is expected to be able to deal with. Rarely is everything in a codebase tested so they can point you towards the most critical parts. 

The best way to get better at reading code is practice. Expose yourself to high quality code samples regularly whether at work or in open source projects. Reading code will help you write better and more maintainable code yourself. 





