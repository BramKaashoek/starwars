# Greenberry Wars

## How to run?

Use `yarn` to install dependencies for both packages and then use `yarn start` to start both dev servers simultaneously. Or `npm install` and `npm start` if you prefer.
You can also run `yarn start` in the seperate packages to start the individual servers.
Run `yarn cypress` to run the E2E specs.

## Why lerna? Isn't that meant for NPM packages?

Testing with jest when the project is not in the root dir is a major pain.
Since one of the requests is to be able to start both servers with one command while still having tests, lerna seemed the easiest solution to me.

## More documentation

See the readmes in de project folders
