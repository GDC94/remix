/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  extends: [
    "eslint:recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
  ],

  overrides: [
    // React
    {
      files: [
        "**/*.{js,jsx,ts,tsx}, **/__tests__/**/*.[jt]s?(x)', **/?(*.)+(spec|test).[jt]s?(x)",
      ],
      plugins: ["react", "jsx-a11y"],
      extends: [
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:testing-library/react",
      ],
      settings: {
        react: {
          version: "detect",
        },
        formComponents: ["Form"],
        linkComponents: [
          { name: "Link", linkAttribute: "to" },
          { name: "NavLink", linkAttribute: "to" },
        ],
        "import/resolver": {
          typescript: {},
        },
      },
    },

    // Typescript
    {
      files: ["**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint", "import"],
      parser: "@typescript-eslint/parser",
      settings: {
        "import/internal-regex": "^~/",
        "import/resolver": {
          node: {
            extensions: [".ts", ".tsx"],
          },
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
      ],
    },

    // Node
    {
      files: [".eslintrc.js"],
      env: {
        node: true,
      },
    },
  ],
  rules: {
    eqeqeq: ["error", "always"],
    "no-empty-function": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "import/no-default-export": "off",
    "no-console": "warn",
    "react/prop-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "prettier/prettier": [
      "warn",
      {
        printWidth: 100,
        trailingComma: "all",
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        bracketSpacing: false,
        arrowParens: "always",
        endOfLine: "auto",
        plugins: ["prettier-plugin-tailwindcss"],
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "type",
          "builtin",
          "object",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "~/**",
            group: "external",
            position: "after",
          },
        ],
        "newlines-between": "always",
      },
    ],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "*", next: ["return", "export"] },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "react/jsx-sort-props": [
      "off",
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_.*?$",
      },
    ],
  },
};
