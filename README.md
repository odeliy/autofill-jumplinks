# Jumplink Generator

## What is this?

As of now, this webapp extracts url enpoints from a \<a href=".../#endpoint">...\</a> type structure. And then inserts the endpoints as IDs into \<h3> tags. A very specific task for the content ops dreamteam!

## Deployment

A live version of this repo is available on [Netlify](https://prismatic-basbousa-767168.netlify.app/)

## Getting started

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/odeliy/autofill-jumplinks

# Go into the repository
$ cd autofill-jumplinks

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies using NPM:

```bash
# Install dependencies
$ npm install

# Start development server
$ npm start
```