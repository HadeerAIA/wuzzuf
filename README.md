# Wuzzuf Colne

The source code of `Wuzzuf` ITI final Project

## Table of contents

1. [Installation](#install)
1. [Usage](#use)
1. [Dependencies](#dependencies)
1. [Structure](#structure)
1. [Our Style Guide](#General)

## Installation

Make sure to have [Node.js](https://nodejs.org/en/download/)

1. Clone this repo `$ https://github.com/leenaAhmed/wuzzuf.git` or using `ssh`.

2. `$ cd Wuzzuf`.

3. Run `$ npm install` to install dependencies and packages.

<a name="install"></a>

## Usage

Run `$ npm start` to start serving the app, then go to `https://localhost:3000` to view the app.

## Dependencies

This app uses some dependencies:

1. [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - to implement routing in the app.

1. [react-redux](https://react-redux.js.org/) - to implement routing in the app.

1. [Bootstrap](https://getbootstrap.com/) - to add visual designs to the app and helps making css better and easier.

1. [axios](https://github.com/axios/axios) - to consume APIs and integrate with the `back-end`.

1. [fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) - to add descriptive icons.

1. [Firestore](https://www.npmjs.com/package/firebase) - to add backend .

# Our Style Guide

### General requirements

1. Take care about `semantics` rules.
1. Take care about `accessibility` rules.
1. The names of functions, variables, components and css classes should be descriptive.
1. No unnecessary comments.
1. The maximum numbers of arguments is 3, it's preferred to minimize the number of arguments.
1. No global css classes names.

## Layout

- We'll rely on `Bootstrap`'s `container`, `grid` & `devices breakpoints`
- Each `section` in the home page should have padding-y(top & bottom) 6rem - 8rem
  - `--section-y-spacing: 8rem;`
- Each `heading` of a section should have space between it and the content of the section 4rem - 5rem
  - `--section-heading-spacing: 5rem;`

## Colors

- `--layout-primary`:
- `--layout-secondary`:
- `--text-primary`:
- `--text-secondary`:
- `--background-secondary`:
- `--btn-hover`:

## Typography

### Family

- `--heading-font-family`: 'Rubik', sans-serif;
- `--body-font-family`: 'PT Sans', sans-serif;

### Size

- `--main-font-size`: 1.2rem;
- `--heading-2-font-size`: 2rem;
- `--heading-3-font-size`: 1.8rem;

## General rules

- Paragraphs `line-height`: 1.5;
- `letter-spacing`: 0.12rem;
- `word-spacing`: 0.16rem;
- All styles should have one line space between each other

## Naming Conventions

- Class names should follow [BEM](https://en.bem.info/methodology/quick-start/) Methodology. You can also read this [Cheat sheet](https://9elements.com/bem-cheat-sheet/).
- Variable, Functions, Methods & components names' should be in `camelCase`.

## Structure

The folder structure of the application. Each module contains `components` has own style.sass

```
.

├── package.json
├── package-lock.json
├── public
|
├── README.md
├── src
│   ├── App.js
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │  
│   ├── globals
│   │   ├── contexts
│   │   │   └── theme.context.js
│   │   └── routes.js
│   ├── index.js
│   ├── modules
│   │   ├── Explore
│   │   │   ├── components
│   │   │   │   ├── ExplorCard
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   ├── ExplorListPage
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   └── ExplorPage
│   │   │   │       ├── index.js
│   │   │   │       └── style.sass
│   │   │  
│   │   ├── settings
│   │   │   ├── components
│   │   │   │   ├── form
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   ├── icon
│   │   │   │   │   ├── index.js
│   │   │   │   │   └── style.sass
│   │   │   │   └── page
│   │   │   │       ├── index.js
│   │   │           └── style.sass
│   │   └── store
│   │   |   ├── Combine
│   │   |   │   ├── action
│   │   |   │   │   ├── index.js
│   │   |   │   │  
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
│   │   |   │   ├── reducer
│   │   |   │     ├── index.js
│   │   |   │      
│   │   |   │  
│   │   |   └── store.js
│   │   |
│   │   └── config
│   │       ├── index.js
│   │  
│   │  
│   │  
|   |
|   |
│   ├── shared
│   │   ├── footer
│   │   │   ├── index.js
│   │   │   └── style.sass
│   │   ├── Navbar
│   │   │   ├── index.js
│   │   │   └── style.sass
│   └── styles.sass
└── package-lock.json
```
