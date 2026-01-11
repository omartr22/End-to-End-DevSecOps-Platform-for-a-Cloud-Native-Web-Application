// app/backend/eslint.config.js
module.exports = [
  {
    files: ["**/*.js"],         // lint all JS files
    ignores: ["node_modules/**", "README.md"],  // move ignores here
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

