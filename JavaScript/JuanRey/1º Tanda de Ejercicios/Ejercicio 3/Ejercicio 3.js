
const arraynumeros = [1,3,4,5,23,42,13,41,12,122,61,9,72,1];


function esprimo (n) {
    for (let i = 2; i < n; i++) {
        if(n%2 == 0)return false;

        return n > 1;
        
    }
}

const numerosprimos = arraynumeros.filter(esprimo);