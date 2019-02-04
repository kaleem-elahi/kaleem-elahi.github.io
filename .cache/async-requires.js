// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/404.js"),
  "component---src-pages-articles-js": require("gatsby-module-loader?name=component---src-pages-articles-js!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/articles.js"),
  "component---src-pages-experience-js": require("gatsby-module-loader?name=component---src-pages-experience-js!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/experience.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/index.js"),
  "component---src-pages-talks-js": require("gatsby-module-loader?name=component---src-pages-talks-js!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/talks.js"),
  "component---src-pages-work-js": require("gatsby-module-loader?name=component---src-pages-work-js!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/work.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/404.json"),
  "articles.json": require("gatsby-module-loader?name=path---articles!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/articles.json"),
  "experience.json": require("gatsby-module-loader?name=path---experience!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/experience.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/index.json"),
  "talks.json": require("gatsby-module-loader?name=path---talks!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/talks.json"),
  "work.json": require("gatsby-module-loader?name=path---work!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/work.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/layouts/index.js")
}