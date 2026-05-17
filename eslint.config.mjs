import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const ignoredPaths = [
  '.next/**',
  'node_modules/**',
  'next-env.d.ts',
];

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: ignoredPaths,
  },
];

export default eslintConfig;
