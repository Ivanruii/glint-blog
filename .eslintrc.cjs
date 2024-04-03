module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next",
    "prettier",
    "standard-with-typescript",
    "plugin:react/recommended",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
