let a = prompt("nhap so a:")
let b = prompt("nhap so b:")
let c = prompt("nhap so c:")

if (a >= b && a >= c) {
    console.log("so lon nhat la" + a);
} else if (b >= a && b >= c){
    console.log("so lon nhat la" + b);
} else {
    console.log("so lon nhat la" + c);
}