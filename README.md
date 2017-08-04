# Phonebook with search capabilities

[![Build Status](https://travis-ci.org/gustavodido/phone-book-search.svg?branch=master)](https://travis-ci.org/gustavodido/phone-book-search)

## Goal

NDA.

Effort limit: 15 hours. (I know that it was supposed to be 8 hours, but I had to work multiple days
and just a few hours each one of them).

## Resources

**Github**: https://github.com/gustavodido/phone-book-search

**Travis**: http://travis-ci.org/gustavodido/phone-book-search

**Heroku**: https://phone-book-search.herokuapp.com

## How to run?

**Requirements:**

1. It is a Java application.
2. Docker (Docker for Mac).

**How to run?**

1. Application: ./gradlew bootRun
2. Build with tests: ./gradlew build
3. Front-end hot loader: npm run dev
4. Shutdown spring boot: please use the /shutdown endpoint to properly stop the docker container.

## What is missing and why?

**Reason**: just time.

**1. Front-end tests (Enzyme).**

**2. E2E tests (Selenium + PhantomJS).**

Writing the tests is really cool and easy. The problem is that to have a front-end test pipeline wired-up in my gradle pipeline would require a couple hours.

**2. Back-end integration tests.**

The back-end is so simple and configuring a integration test infrastructure and writing them would require one hour of work.

**3. HATEOAS.**

An elegant RESTFul solution should implement HATEOAS.

**4. CSS bundling and modularization.**

If I had time to make the application fancy. I would add CCS minification and component modularization.

**5. Typescript**

Javascript ES6 is great. Typescript is even greater.

**6. NPM vs YARN**

I am fluent with NPM, but the new fancy web applications are using YARN. It is simple, but again, I would spend an hour to bind YARN into gradle and test it. I have not done it before.

## Q&A

**1. Where is the Service/Repository pattern?**

I do prefer to se the Command & Query object model. In my experience, the Service/Repository
pattern always end up with large Service classes working as Wrappers for Repositories and without a clear boundary between what should be inside each component.
Using this approach you really have self-contained small components with a single responsibility.

**2. Why Postgres?**

For this problem, the database solution is literally irrelevant. Anyway, in a couple minutes you can change to something else, just change the docker image and the configuration properties.

**3. Is the front-end search a good idea?**

Again, a personal phone book will not scale to a large amount of entries. And if it does, than we can act and make a more interesting search component using the database, full-text search capabilities or other fancy indexing solutions.

**4. Why there is a complete pipeline for it (Github, Travis, Heroku) ?**

I am familiar with the tools, so it is not a huge time investment.
