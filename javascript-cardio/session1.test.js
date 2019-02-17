const session1 = require('./session1.js')

test('returns a string', () =>{
    expect(typeof session1.reverseString('hello')).toBe('string');
});

test('returns reverse of a given input string', () =>{
    expect(session1.reverseString('hello', 'reverse array')).toBe('olleh');
    expect(session1.reverseString('hello', 'forward for-loop')).toBe('olleh');
    expect(session1.reverseString('hello', 'reverse for-loop')).toBe('olleh');
    expect(session1.reverseString('hello', 'for-of loop')).toBe('olleh');
    expect(session1.reverseString('hello', 'for-each loop')).toBe('olleh');
    expect(session1.reverseString('hello', 'reduce')).toBe('olleh');
})

