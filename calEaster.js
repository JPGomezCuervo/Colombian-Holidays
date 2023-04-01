function calEaster(A) {
    const a = A % 19;
    const b = A % 4;
    const c = A % 7;
    const k = Math.floor(A / 100);
    const p = Math.floor((13 + (8 * k)) / 25);
    const q = Math.floor(k / 4);
    const M = (15 - p + k - q) % 30;
    const N = (4 + k - q) % 7;
    const d = (19 * a + M) % 30;
    const e = (2 * b + 4 * c + 6 * d + N) % 7;

    if (d + e < 10) {
        return new Date(A, 2, d + e + 22);
    }

    if (d + e > 10){
        return new Date(A, 3, d + e - 9);
    }

    if (d + e === 10) {
        return new Date(A, 3, 19);
    }
}
module.exports = calEaster;