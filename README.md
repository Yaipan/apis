# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

Docusaurus utiliza NodeJs y Yarn, se pueden instalar con el siguiente comando:

```
$ brew install yarn
```

### Local Development

Install node using nvm:

```
$ curl -L https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh -o nvm_install.sh
$ chmod +x nvm_install.sh
$ ./nvm_install.sh

# Reopen terminal to reload profile

$ nvm install lts/gallium
$ nvm use lts/gallium

$ node --version
v16.18.0
$ npm --version
v8.19.2
```

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

**NOTA:** Se debe ejecutar en radar.

```
$ GIT_USER=mangulof USE_SSH=true yarn deploy
```

```
$ GIT_USER=mangulof USE_SSH=true yarn deploy
yarn run v1.22.5
$ docusaurus deploy
Deploy command invoked ...
master
git@github.com:Yaipan/apis.git
929b4c4f822311f9c45120f4d5de8296cbc70bc4
Creating an optimized production build...

✔ Client
  Compiled successfully in 8.58s

✔ Server
  Compiled successfully in 10.21s


Success! Generated static files in build.

Cloning into 'apis-gh-pages'...
master
Note: checking out 'origin/gh-pages'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch-name>

HEAD is now at 60eba39 Deploy website - based on 12819393ec9ea75e357d76b46cdc8f9fee4feda5
Switched to a new branch 'gh-pages'
Branch 'gh-pages' set up to track remote branch 'gh-pages' from 'origin'.
rm '.nojekyll'
rm '1.8e9e26ef.js'
rm '15.979b14b2.js'
rm '16.948745f1.js'
rm '17896441.3fa91858.js'
rm '2.48de87fd.js'
rm '2.48de87fd.js.LICENSE.txt'
rm '3d9afffb.2b831143.js'
rm '404.html'
rm '4343555c.feca3a9e.js'
rm 'c4f5d8e4.1fb15957.js'
rm 'cea2ed0a.728960e9.js'
rm 'd248a48e.42953bee.js'
rm 'd671a605.6b383faf.js'
rm 'df3d73dd.77d15622.js'
rm 'docs/autenticacion/index.html'
rm 'docs/constancias/index.html'
rm 'docs/declaraciones/index.html'
rm 'docs/dominio/index.html'
rm 'docs/errores/index.html'
rm 'docs/integracion-conectividad/index.html'
rm 'docs/web-conectividad/index.html'
rm 'e4018408.d4db1197.js'
rm 'ed261d41.c5cc9d33.js'
rm 'img/favicon.ico'
rm 'img/logo.svg'
rm 'img/undraw_docusaurus_mountain.svg'
rm 'img/undraw_docusaurus_react.svg'
rm 'img/undraw_docusaurus_tree.svg'
rm 'img/yaipan-favicon.png'
rm 'img/yaipan-icon.png'
rm 'index.html'
rm 'main.4008127d.js'
rm 'main.4008127d.js.LICENSE.txt'
rm 'runtime~main.3b9afb9e.js'
rm 'sitemap.xml'
rm 'styles.61ad20ac.css'
rm 'styles.9d20b4e5.js'
[gh-pages 60b042b] Deploy website - based on 929b4c4f822311f9c45120f4d5de8296cbc70bc4
 41 files changed, 255 insertions(+), 221 deletions(-)
 create mode 100644 1.008b52b5.js
 delete mode 100644 1.8e9e26ef.js
 delete mode 100644 15.979b14b2.js
 create mode 100644 16.2ddd0ab2.js
 rename 16.948745f1.js => 17.c0703d9d.js (76%)
 delete mode 100644 17896441.3fa91858.js
 create mode 100644 17896441.f3bf3a3a.js
 delete mode 100644 2.48de87fd.js
 create mode 100644 2.b7dfb35e.js
 rename 2.48de87fd.js.LICENSE.txt => 2.b7dfb35e.js.LICENSE.txt (100%)
 create mode 100644 32777d40.71058b36.js
 rename 3d9afffb.2b831143.js => 3d9afffb.176d93d5.js (95%)
 rename 4343555c.feca3a9e.js => 4343555c.2f8b4c17.js (54%)
 create mode 100644 c4f5d8e4.1e635fb7.js
 delete mode 100644 c4f5d8e4.1fb15957.js
 rename cea2ed0a.728960e9.js => cea2ed0a.6eeba348.js (99%)
 rename d248a48e.42953bee.js => d248a48e.3beaee25.js (95%)
 delete mode 100644 d671a605.6b383faf.js
 create mode 100644 d671a605.ce9f3aea.js
 rename df3d73dd.77d15622.js => df3d73dd.46ab4c8c.js (96%)
 rewrite docs/autenticacion/index.html (60%)
 rewrite docs/constancias/index.html (62%)
 create mode 100644 docs/reconexion-hidrometros/index.html
 rewrite docs/web-conectividad/index.html (81%)
 rename e4018408.d4db1197.js => e4018408.064a2317.js (99%)
 delete mode 100644 ed261d41.c5cc9d33.js
 create mode 100644 ed261d41.f5c4b7e0.js
 create mode 100644 main.34bca5db.js
 rename main.4008127d.js.LICENSE.txt => main.34bca5db.js.LICENSE.txt (100%)
 delete mode 100644 main.4008127d.js
 delete mode 100644 runtime~main.3b9afb9e.js
 create mode 100644 runtime~main.d1f14d31.js
 create mode 100644 styles.0b14a746.js
 delete mode 100644 styles.9d20b4e5.js
remote: This repository moved. Please use the new location:
remote:   git@github.com:Yaipan/apis.git
To github.com:yaipan/apis.git
   60eba39..60b042b  gh-pages -> gh-pages
Website is live at https://yaipan.github.io/apis/
Done in 16.20s.
```
