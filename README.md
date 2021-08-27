# Tailwind CSS stuck variant

Adds a `stuck:` and `group-stuck:` variant to Tailwind CSS to style elements and child nodes which use the `.sticky` utility. Unfortunately since there is currently no CSS selector for `:stuck` Elements, this variant relies on a JavaScript helper, which uses the `IntersectionObserver` on those elements.

## Installation

```sh
# Using npm
npm install @zirkeldesign/tailwindcss-stuck-variant

# Using yarn
yarn add @zirkeldesign/tailwindcss-stuck-variant
```

```js
// tailwind.config.js
module.exports = {
  variants: {
    height: ["responsive", "stuck"],
    // or with extending the default variants
    // @see https://tailwindcss.com/docs/configuring-variants#extending-default-variants
    backgroundColor: ({ after }) => after(["stuck", "group-stuck"]),
    // or in Tailwind CSS >= v2.0
    extend: {
      backgroundColor: ["stuck", "group-stuck"],
    },
  },
  plugins: [
    // Other plugins...
    require("@zirkeldesign/tailwindcss-stuck-variant"),
  ],
};
```

```js
// app.js
require("@zirkeldesign/tailwindcss-stuck-variant/src/observer")();
```

OR

```js
// Vue 2 app.js
import stuck from "@zirkeldesign/tailwindcss-stuck-variant/src/observer";

const app = new Vue({
  el: "#app",
  mounted() {
    stuck();
  },
});
```

## Usage

```html
<!-- Add shadow when the header is stuck. -->
<header class="sticky top-0 group stuck:shadow">
  <!-- Take the full height when its parent is stuck. -->
  <div class="h-12 group-stuck:h-8">Brand</div>
</header>
```

## Passing custom parameters

Under the hood, the following defaults are set:

```js
{
  selector = ".sticky",
  stuckClass = "is-stuck",
  helperClass = "stuck-observer-helper",
  createHelperElement = true,
  rootMargin = "-1px 0px 0px 0px",
}
```

These may be overridden by passing a configuration object to the initializer:

```js
import stuck from "@zirkeldesign/tailwindcss-stuck-variant/src/observer";

stuck({
  rootMargin: "-50px 0px 0px 0px",
});
```
