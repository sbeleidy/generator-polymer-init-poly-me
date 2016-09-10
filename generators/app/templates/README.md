# <%= yourName %>

Welcome to your `<poly-me>` repository!

## Editing

All you need to do to edit, is modify the `me.json` file in the root directory. If you want to link to images, you can add them in the images folder. (You can also add any folder you want, as long as you refer to it in `me.json`)

## Previewing locally

1. Run `bower install`
1. Make sure you have `polymer-cli`. If you don't, run `npm install -g polymer-cli`
1. Run `polymer serve`
1. Go to [http://localhost:8080](http://localhost:8080)

## Building

Run `polymer build`

## Deploying to FireBase

### Setup (Do this once)

1. If you don't have firebase tools, run `npm install -g firebase-tools`
1. Run `firebase login`
1. Run `firebase init`
1. Select `Hosting` only. You can deselect Database by hitting spacebar
1. Select a project you want to use or create a new one
1. For the public directory enter `build/bundled` - you can find out more about this on the [polymer site](https://www.polymer-project.org/1.0/start/toolbox/deploy#deploy-with-firebase)
1. Select `y` for rewriting all urls to `index.html`

#### Whenever you want to deploy

You can run `firebase deploy` from the project directory. Make sure you've built your project before deploying (run `polymer build`).

#### Automatically deploying with Travis CI & FireBase

This assumes you're publicly hosting your code on GitHub.

There should already be a `.travis.yml` file in your directory.

1. Run `firebase login:ci`, and allow it in your browser.
1. Copy the code you get then go to [Travis CI](https://travis-ci.org)
1. Sign in with GitHub
1. Turn on travis for your repository
1. Go to the repository page on travis. Usually something like https://travis-ci.org/githubUserName/githubRepoName
1. Click on "More options">"Settings"
1. Add an environment variable called FIREBASE_TOKEN with the value of the code you copied

That's it! Now when you commit to the master branch, Travis should automatically deploy to FireBase
