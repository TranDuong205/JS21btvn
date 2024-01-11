let weight = parseFloat(prompt("nhap can nang cua ban (kg"))
let height = parseFloat(prompt("nhap chieu cao cua ban (kg"))

let bmi = weight / (height + height)

if (bmi < 18.5) {
    console.log("can nang thap (gay)");
} else if (bmi >= 18.5 && bmi < 24.9){
    console.log("binh thuong");
} else if (bmi >= 25 & bmi <29.9) {
    console.log("tien beo phi");
} else if (bmi >= 30 && bmi < 34.9) {
    console.log("beo phi do 1");
} else if (bmi >= 35 && bmi < 39.9){
    console.log("beo phi do 2");
} else if (bmi >= 40){
    console.log(" beo phi do 3");
}