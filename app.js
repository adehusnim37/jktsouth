function validate(input) {
    if (typeof input !== 'string') {
        return false;
    }

    const bracket = [];
    const openBrackets = ['(', '[', '{'];
    const closeBrackets = [')', ']', '}'];

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (openBrackets.includes(char)) { // kondisi jika char ada di openBracket
            bracket.push(char);
        } else if (closeBrackets.includes(char)) { // kondisi jika char ada di closeBracket
            if (bracket.length === 0) {
                console.log('bracket tidak boleh kosong');
                return false;
            }
            console.log(bracket)
            const top = bracket.pop();
            console.log(top)

            const lastOpen = openBrackets.indexOf(top);
            const lastClose = closeBrackets.indexOf(char);

            console.log(lastOpen)
            console.log(lastClose)

            if (lastOpen !== lastClose) {
                return false;
            }
        } else {
            console.log('Invalid input');
            return false;  // Added return statement for invalid input
        }
    }

    return bracket.length === 0;
}

console.log(validate("{[]}"));      // Valid
// console.log(validate("{{{[]}}}"));  // Valid
// console.log(validate("[[{}]]"));     // Valid
// console.log(validate("{[[}]}"));     // Not Valid
