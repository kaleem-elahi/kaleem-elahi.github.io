// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/404.js")),
  "component---src-pages-articles-js": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/articles.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/experience.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/index.js")),
  "component---src-pages-talks-js": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/talks.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/src/pages/work.js"))
}

exports.json = {
  "layout-index.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/404.json"),
  "articles.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/articles.json"),
  "experience.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/experience.json"),
  "index.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/index.json"),
  "talks.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/talks.json"),
  "work.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/work.json"),
  "404-html.json": require("/Users/kaleemelahi/workspace/kaleem-elahi.github.io/.cache/json/404-html.json")
}