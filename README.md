# pjsv (package json semantic versioner)

organize your package.json's version from the command line 💻

### motivation

whenever I work on a specific project, I tend to forget to update my package.json's version so I automated the entire process so that whenever I build and push to the server, the package.json's version is always up to date

### what is semantic versioning ?

each project has a version which consist of three important stages: major, minor, patch

major is when you make incompatible changes that cannot be backwards compatible

minor is when you add a functionality or feature that offers it in a backwards compatible way

patch is when you do bug fixes that is backwards compatible

```
a typical version will look like this: major.minor.patch

example: 1.2.5 (which is the first major release, 2 added functionalities on top of the original release, 5 bug fixes)
```

you can read more about semantic versioning [here](https://semver.org/)

### installation

It is ideal to install it as a dev dependency in your project
`npm install pjsv -D`

and you can use npx if you don't want to install it in your project
`npx pjsv upgrade` or `npx pjsv downgrade`

and last but not least, you can install it globally but it is the least recommended method since not all developers upgrade their global npm packages, either use it as a dev dependency in your project or use npx
`npm install pjsv -g`

### commands

pjsv has two commands

`pjsv upgrade` which prompts you to upgrade your package.json based on your current stage (major/minor/patch)

`pjsv downgrade` which prompts you to downgrade your package.json based on your current stage

#### why there is a downgrade command ?

all though you will be using git to manage your project's version but it is there incase you have to downgrade your package.json's version. Ideally you will revert back to a specific git commit and continue from there.

### best practice

I would highly recommend to use [Husky](https://github.com/typicode/husky) along with pjsv

in your package.json:

```
"husky": {
    "hooks": {
      "pre-commit": "pjsv upgrade",
    }
  }
```

using Husky on the pre-commit command, pjsv will always be executed before commiting a message to your changes

### documentation

the entire codebase is documented using [typedoc](https://typedoc.org/) so all you have to do is pull the project from github and run the `doc` command

```
npm run doc
```

it will create a doc folder that contains all of the information needed

### compilation

if you pulled the project and wanted to compile your changes, run the `compile` command

```
npm run compile
```

then to test your changes, the project uses [Nodemon](https://www.npmjs.com/package/nodemon) and [ts-node](https://github.com/TypeStrong/ts-node)

```
npm run dev:upgrade  // test out the upgrade command
npm run dev:downgrade // test out the downgrade command
```

### I faced an issue or I would love to contribute!

if you faced an issue, kindly send a pull request here on github and we get back to you as soon as possible!

and if you wish to contribute then welcome aboard! we recommend to read the documentation and the code to get a better understanding on how the project works but we also accept contributions like feature suggestions and improvements. Kindly send a pull request and we will get back to you as soon as possible!
