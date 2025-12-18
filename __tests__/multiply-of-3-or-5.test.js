const solution = require('../src/6kyu-multiply-of-3-or-5');

test('Returns sum of for muiltples of 3 or 5', () => {
    expect(solution(10)).toEqual(23)
    expect(solution(16)).toEqual(60)
});

test('If number is nagative, return 0', () => {
    expect(solution(-5)).toEqual(0)
})