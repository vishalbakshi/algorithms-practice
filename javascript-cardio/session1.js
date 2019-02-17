// Challenge 1: Reverse a String
// Return a string in reverse
// ex. reverseString('hello') === 'elloh'

function reverseString(str, approach) {
    switch (approach) {
        case 'reverse array':
            return str.split('').reverse().join('');

        case 'forward for-loop':
            {
                let revString = '';
                for (let i = str.length - 1; i >= 0; i--){
                    revString = revString + str[i];
                };
                return revString;
            }

        case 'reverse for-loop':
            {
                let revString = '';
                for (let i = 0; i <= str.length - 1; i++){
                    revString = str[i] + revString;
                }
                return revString;
            }
        
        case 'for-of loop':
            {
                let revString = '';
                for (let char of str){
                    revString = char + revString;
                }
                return revString;
            }
        
        case 'for-each loop':
            {
                let revString = '';
                str.split('').forEach(function(char) {
                    revString = char + revString;
                });
                return revString;
            }
        
        case 'reduce':
            str.split('').reduce(function(revString, char){
                    return char + revString;
                }, '');
        default:
            return str.split('').reverse().join('')

    }
    
}

module.exports = { reverseString: reverseString }