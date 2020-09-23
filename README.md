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

## Usage

```html
<!-- Add shadow when the header is stuck. -->
<header class="sticky top-0 group stuck:shadow">
  <!-- Take the full height when its parent is stuck. -->
  <div class="h-12 group-stuck:h-8">Brand</div>
</header>
```
