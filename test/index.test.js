import helloWorld from '../src/index';

describe('Seed test.', () => {
  test('at least one test', () => {
    expect(helloWorld()).toBe("Hello, World!");
  });
});
