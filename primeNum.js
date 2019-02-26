function sieveOfEratosthenes(n) {
    var prime = [];
    var primeNum = [];
    var sum = 0;
    for (let i = 0; i < n; i++) {
        prime[i] = true;
    }
    for (let p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (let j = p * p; j <= n; j += p) {
                prime[j] = false;
            }
        }
    }
    for (let i = 2; i <= n; i++) {
        if (prime[i] == true) {
            primeNum.push(i);
        }
    }

    console.log(primeNum);
}
sieveOfEratosthenes(200);