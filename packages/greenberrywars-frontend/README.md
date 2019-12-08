## folder structure

I like to use a modules folder where each modules are stored per route. Each module has 1 or more scenes (views/pages) and scenes are made up of components. components are placed at the lowest possible level, so either within a scene folder, within a module folder or within the common folder if they are shared amongst multiple modules.

## Why emotion?

I prefer JSS over CSS (precurors) and I had never used emotion, despite its populairity. I saw this as a great chance to try it out.

## Why apollo boost?

Apollo boost is the easiest way to get started with Apollo. For a bigger app I would not have used boost, since I would have wanted to use Apollo middleware such as apollo-cache, apollo-link, apollo-link-error, etc.

## tests

The frontend specs are mainly E2E tests. Run `yarn cypress` in the the root dir (the lerna dir), or start both front and backend and then run `yarn cypress` in the frontend folder.
