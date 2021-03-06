module.exports = {
  'fail-zero': false,
  parallel: false,
  spec: ['tests/**/*.test.ts'],
  require: [
    'tests/mocha.env',
    'ts-node/register'
  ],
  extension: [
    'ts'
  ],
  exit: true,
  recursive: true,
  jobs: '1',
  timeout: '20000'
};
