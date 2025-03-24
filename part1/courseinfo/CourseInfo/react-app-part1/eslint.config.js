import js from '../courseinfo/CourseInfo/react-app-part1/node_modules/@eslint/js/types';
import globals from '../courseinfo/CourseInfo/react-app-part1/node_modules/globals';
import reactHooks from '../courseinfo/CourseInfo/react-app-part1/node_modules/eslint-plugin-react-hooks';
import reactRefresh from '../courseinfo/CourseInfo/react-app-part1/node_modules/eslint-plugin-react-refresh';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
