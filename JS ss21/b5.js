var month = prompt("nhap so thang trong nam:");
if(month === "1" || month === "3" || month === "5" || month === "7" || month === "8" || month === "10" || month === "12"){
    console.log("Thang" + month + "co 31 ngay");
} else if(month === "4" || month === "6" || month === "9" || month === "11"){
    console.log("Thang" + month + "co 30 ngay");
} else if(month === "2"){
    console.log("Thang 2 co 28 hoac 29 ngay");
} else {
    console.log("nhap sai roi. nhap lai so thang de");
}