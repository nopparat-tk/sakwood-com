const { defineRouting } = require("next-intl/routing");

export const routing = defineRouting({
  locales: ["th", "en"],
  defaultLocale: "th",
  localeDetection: false,
  alternateLinks: false,
});
