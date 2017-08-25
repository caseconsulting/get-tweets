
# DEPRICATED



# get-tweets

1. [Caution](#caution)
1. [Installation](#installation)
1. [Running](#running)
1. [Todo](#todo)

## Caution

Ensure that you read the [API Docs](https://dev.twitter.com/docs), most importantly the [rate limiting and black listing](https://dev.twitter.com/rest/public/rate-limiting).

## Installation

```sh
npm install --global yarn
git clone git@github.com:caseconsulting/get-tweets.git
cd get-tweets
yarn install 
gulp task-list
```

Create an .env file. See the [sample](env.example) for more information.

## Running

```sh
./bin/gt --help
```

or 

```sh
yarn gt -- -d -o output.json friends consultwithcase
```

A good example is:

```sh
./bin/gt -d -o output.json friends nodejs
```

## Todo

1. add a formatting flag
1. add more commands
1. add tests
