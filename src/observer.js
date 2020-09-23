module.exports = ({
  selector = ".sticky",
  stuckClass = "is-stuck",
  helperClass = "stuck-observer-helper",
  createHelperElement = true,
} = {}) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const isStuck = 1 > entry.intersectionRatio;
        el.classList.toggle(stuckClass, isStuck);
      });
    },
    {
      rootMargin: "-1px 0px 0px 0px",
      threshold: [0, 1],
    }
  );

  [...document.querySelectorAll(selector)].forEach((el) => {
    if (createHelperElement && helperClass) {
      if (
        !(
          el.previousElementSibling &&
          el.previousElementSibling.matches(`.${helperClass}`)
        )
      ) {
        const helper = document.createElement("div");
        helper.classList.add(helperClass);
        el.parentNode.insertBefore(helper, el);
      }
    }
    observer.observe(el);
  });
};
