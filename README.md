# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

Docusaurus utiliza NodeJs y Yarn, se pueden instalar con el siguiente comando:

```
$ brew install yarn
```

### Local Development

```
$ yarn install
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

```
$ yarn install
yarn install v1.22.5
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
warning " > @docusaurus/preset-classic@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/plugin-content-blog@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/plugin-content-docs@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/plugin-content-pages@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/plugin-debug@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/plugin-google-analytics@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/plugin-google-gtag@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/plugin-sitemap@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/theme-classic@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia@2.0.0-alpha.58" has incorrect peer dependency "@docusaurus/core@^2.0.0".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia@2.0.0-alpha.58" has unmet peer dependency "@docusaurus/utils@^2.0.0-alpha.54".
[4/4] 🔨  Building fresh packages...
✨  Done in 46.87s.
```

```
$ yarn start
yarn run v1.22.5
$ docusaurus start
Starting the development server...

✔ Client
  Compiled successfully in 14.06s

ℹ ｢wds｣: Project is running at http://localhost:3000/
ℹ ｢wds｣: webpack output is served from /apis/
ℹ ｢wds｣: Content not from webpack is served from /Users/Shared/Yaipan/proyectos/apis
ℹ ｢wds｣: 404s will fallback to /index.html

✔ Client
  Compiled successfully in 50.17ms
```

Luego de que arranca, se puede acceder a http://localhost:3000.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
