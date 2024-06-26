module.exports = {
    root: true,
    ignorePatterns: ['**/*'],
    plugins: ['@nx'],
    globals: {
      NodeJS: true,
    },
    overrides: [
      {
        files: ['*.ts', '*.js'],
        rules: {
          '@nx/enforce-module-boundaries': [
            'error',
            {
              enforceBuildableLibDependency: true,
              allow: [],
              depConstraints: [
                {
                  sourceTag: '*',
                  onlyDependOnLibsWithTags: ['*'],
                },
              ],
            },
          ],
        },
      },
      {
        files: ['*.ts'],
        extends: ['plugin:@nx/typescript'],
        rules: {},
      },
      {
        files: ['*.js'],
        extends: ['plugin:@nx/javascript'],
        rules: {},
      },
      {
        files: ['*.spec.ts', '*.spec.js'],
        env: {
          jest: true,
        },
        rules: {},
      },
    ],
  };
  