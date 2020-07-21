---
template: BlogPost
path: /a11y-cypress-testing
date: 2020-07-21T10:12:39.791Z
title: Accessibility testing with Cypress & aXe
metaDescription: In this post we will discuss automated accessibility (a11y)
  testing using [Cypress.io](https://cypress.io) and the
  [cypress-axe](https://github.com/avanslaars/cypress-axe) library and how you
  can integrate this into you application, blog, website etc..
thumbnail: /assets/david-travis-wc6mj0krzgw-unsplash-1-.jpg
---
In this post we will discuss automated accessibility (a11y) testing using [Cypress.io](https://cypress.io) and the [cypress-axe](https://github.com/avanslaars/cypress-axe) library and how you can integrate this into you application, blog, website etc..

# First let's get everything setup.

Let's install Cypress first:

```jsx
// Create a folder to keep your tests
mkdir cypress-a11y

// then change directory into it and create a node project
npm init -y

// lastly install cypress as a dev dependency
npm install -D cypress
```

Once that has completed we need to edit our package.json scripts to run and open Cypress like so:

```jsx
"scripts": {
    "cy:open": "npx cypress open",
    "cy:run": "npx cypress run"
  },
```

Big thanks to [Andy Van Slaars](https://twitter.com/avanslaars) for creating the next package we are about to install:

```jsx
npm install -D cypress-axe
```

This comes with pretty much all we need to get started with our automated accessibility testing with very minimal setup required to get going.

You should now be able to run Cypress from your terminal using the following command:

```jsx
npm run cy:open
```

You should now see the Cypress UI (as below) pop up and create some example tests demonstrating all it can do. These example tests are an amazing resource for learning what Cypress can do but for now go ahead and delete those by removing the examples folder from your project.

![Cypress user interface](/assets/screenshot_from_2020-07-17_15-59-00.png "Cypress user interface")

Go ahead and exit out of Cypress for now, as we need to wire a few things up in our code for everything to work. We will start by importing the `cypress-axe` library into our Cypress commands [(See the docs for more info on commands)](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax).

Go to the `support/commands.js` file and just below the comment block we will import cypress-axe:

```jsx
import "cypress-axe"
```

This sets up the library to be loaded by the `index.js` file (in the same folder) before our tests run to ensure we have everything we need. In-fact you will see that our `commands.js` is imported by the `index.js` file.

Now time for the fun bit. Let's write our first test. Create a file in the `integration` folder called `a11y.spec.js`, ( it can be called whatever you like). By default Cypress will pickup any test files in this folder if they are suffix'd with `.spec.js`.

Let's create our `Describe` block which allows us to logically group our tests together like so:

```jsx
describe("Accessibility tests", () => {

});
```

Now we can create our `BeforeEach` which like it sounds, will run before each test in this file.

```jsx
describe("Accessibility tests", () => {
    beforeEach(() => {
      cy.visit("https://google.com") // visit the google homepage
      cy.injectAxe() // inject aXe into the page
    });
  });
```

We have now setup our tests to navigate to the Google homepage and to inject aXe into the page. Next we setup our actual test using the `it` keyword as shown:

```jsx
describe("Accessibility tests", () => {
    beforeEach(() => {
      cy.visit("https://google.com")
      cy.injectAxe()
    });

    it("Has no detectable accessibility violations on load", () => {
      cy.checkA11y(); // checks and asserts that no violations occurred
    });
  });
```

Now our test will navigate to the google homepage, inject aXe and all it's commands and magic, then check that no accessibility violations occurred on that page occurred.

You can now run your test using:

```jsx
npm run cy:run
```

It should look something like this:

![Cypress running in the terminal](/assets/screenshot_from_2020-07-17_16-33-16.png "Cypress running in the terminal")

Shocker! Google has some violations for shame 🙂. You can also run the same test using the Cypress user interface:

```jsx
npm run cy:open
```

This will open the interface like before, but we should see our `a11y.spec.js` file there. Click on it and your test will start running in the browser like so:

![Cypress test runner](/assets/screenshot-from-2020-07-21-11-26-36.png "Cypress test runner")

Congratulations! You have written your first automated accessibility check using Cypress.

## Next Steps

Have a look at the documentation for [cypress-axe](https://github.com/avanslaars/cypress-axe) for more examples of what you can do, as well has configuring things to your liking.

Lastly, you can not automate all possible accessibility scenarios and don't let this lure you into thinking if you make everything pass that there are no issues. Have a read of this awesome post by [Manuel Matuzovic](https://www.matuzo.at/blog/building-the-most-inaccessible-site-possible-with-a-perfect-lighthouse-score/) which demonstrates this point very well. Always test your things yourself and/or with other humans 🙂

If you would like me to continue this kind of thing, then please let me know.