let a = prompt("nhap so a:")
let b = prompt("nhap so b:")
let c = prompt("nhap so c:")

a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)

let min,med,max

if (a <= b && a <= c && b <= c) {
    min = a
    med = b
    max = c
} else if (c <= b && c <= a && b <= a) {
    min = c
    med = b
    max = a
} else if (b <= a && b <= c && a <= c) {
    min = b
    med = a
    max = c
} else if (b <= c && b <= a && c <= a) {
    min = b
    med = c
    max = a
} else if (a <= c && a <= b && c <= b) {
    min = a
    med = c
    max = b
} else {
    min = c
    med = a
    max = b
}

console.log("thu tu tang dan la " + min + "," + med + "," + max)