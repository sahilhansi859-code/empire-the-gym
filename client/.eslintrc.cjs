module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: ['eslint:recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off'
  },
  settings: { react: { version: '18' } }
}
