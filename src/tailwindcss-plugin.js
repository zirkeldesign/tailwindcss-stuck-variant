const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, addVariant, e }) {
  addVariant("stuck", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.is-stuck.${e(`stuck${separator}${className}`)}`;
    });
  });

  addVariant("group-stuck", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `.group.is-stuck .${e(`group-stuck${separator}${className}`)}`;
    });
  });
});
