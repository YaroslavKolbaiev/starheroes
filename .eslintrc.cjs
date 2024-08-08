module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb-typescript",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:react/recommended",
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    '@stylistic',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ["src/cache/*"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.app.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react/react-in-jsx-scope': 0,
    "react/jsx-newline": 2,
    "import/prefer-default-export": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "react/jsx-max-props-per-line": [2, { "maximum": 2, "when": "always" }],
  }
}
