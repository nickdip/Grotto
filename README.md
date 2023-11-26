
GROTTO

## Introduction

Live Demo: https://grotto-psi.vercel.app/

This is project for the Northcoders Hackathon 2023.

Theme: Green (christmas/sustainability)

Grotto is an appliction to help make Christmas more sustainable. The application designed for children to write a letter to Santa, the application will then analyse the letter and suggest potential presents based on what the child has asked for. All gifts available on the website are from sustainable sources (i.e second-hand, recycled etc.)

Parents can then log in and see the childs letter, if a child has indicated they would like any of the available gifts, they will be available for the parents to 'buy' on the website (for the demo, you cannot actually buy any items!)


## Tech Stacks

React, NextJS, Supabase

## Key Features
- Christmas countdown!
- Write a letter to Santa that is analysed by our application
- Children can choose sustainable gifts they may be interested in 
- Adults can buy gifts for their children

## Installation

Once you have cloned the repo, run 'npm install/yarn run' to install the relevant dependencies.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing Our Application

Our application already has a dummy account logged in. Write a letter to Santa and see what items are suggested.

Examples of what you could ask for:

1. A bike
2. A bike and a cat 
3. A dollhouse, a book and some crayons

Four items will always be suggested. The fourth item will be randomly selected based on categories the child seems to like.


## Future Considerations 

1. To commericalise the application, this would likely be integration in the existing shopping platforms rather than a stand alone shop
2. There is future potential to use AI for the text analysing
3. Currently, a parent can be only have one child. This will be expanded in the future 
4. Add the ability to log in
