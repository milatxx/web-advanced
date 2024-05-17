
function fib(a) {
    if (a == 0 || a == 1) {
        return 1
    }

    return fib(a-1) + fib(a-2)
}


const fibNummer = []

for (i=0; i < 20; i++){
    fibNummer.push(fib(i))
}

let [eerste, tweede, derde,  ...rest] = fibNummer;

const somEersteDrie = som(eerste, tweede, derde)
const somVanRest = som(...rest)


function som(...nummers) {
    let sum = 0;

    for (const nummer of nummers) {
        sum += nummer
    }

    return sum;
}