let obj = {
    a: 'f',
    b: 78,
    c: 'R',
    d: {
        a: {
            a: null,
            b: 'E',
            c: {
                a: true,
                b: 'C',
                c: 'test'
            },
            d: 'U'
        },
        b: {
            a: 'R',
            b: ['S', 4, 6, 'I'],
            c: 0,
        },
        c: ['O'],
        d: null,
        e: 'N'
    }
}

function concatUpperCase(obj) {
    let result = '';

    if (typeof obj === 'object') {
        for (let key in obj) {
            result += concatUpperCase(obj[key]);
        }
    } else if (typeof obj === 'string') {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i] === obj[i].toUpperCase()) {
                result += obj[i];
            }
        }
    }

    return result;
}

let result = concatUpperCase(obj);
console.log(result);

