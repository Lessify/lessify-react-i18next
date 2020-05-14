# lessify-react-i18next

This library is library for integration of your React and `react-i18next` project with [Lessify](https://lessify.io/).

# Integration

## Testing
In your project, link the `@lessify/react-i18next` we just built:

``npm link $PATH_TO_PROJECT``

Replace **$PATH_TO_PROJECT** with the path to the `@lessify/react-i18next` project’s root.
Note that users will install instead of linking, this is just to iterate faster locally while developing.

## NPM Publish

`npm init --scope=lessify`
`npm run build`
`npm publish --access public`
