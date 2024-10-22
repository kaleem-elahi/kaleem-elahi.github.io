
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/kaleemshaikh/Desktop/kaleem-elahi.github.io/src/pages/404.js")),
  "component---src-pages-articles-js": preferDefault(require("/Users/kaleemshaikh/Desktop/kaleem-elahi.github.io/src/pages/articles.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/kaleemshaikh/Desktop/kaleem-elahi.github.io/src/pages/experience.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/kaleemshaikh/Desktop/kaleem-elahi.github.io/src/pages/index.js")),
  "component---src-pages-talks-js": preferDefault(require("/Users/kaleemshaikh/Desktop/kaleem-elahi.github.io/src/pages/talks.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/kaleemshaikh/Desktop/kaleem-elahi.github.io/src/pages/work.js"))
}

