function tinhdiemtrungbinh(toan,van,anh) {
    var diemtrungbinh = (toan + van + anh) / 3;
    return diemtrungbinh;
}

function xeploai(diemtrungbinh){
    if(diemtrungbinh >= 8.0 && diemtrungbinh <= 10){
        return "xep loai: Gioi";
    } else if (diemtrungbinh >= 6.5 && diemtrungbinh <= 7.9){
        return "xeploai: Kha";
    } else if (diemtrungbinh >= 5.0 && diemtrungbinh <= 6.4){
        return "xeploai: Trung binh";
    } else if (diemtrungbinh < 5.0){
        return "xep loai: Yeu";
    }
}

var toan = parseFloat(prompt("nhap diem mon toan:"))
var van = parseFloat(prompt("nhap diem mon van:"))
var anh = parseFloat(prompt("nhap diem mon anh:"))

var diemtb = tinhdiemtrungbinh(toan,van,anh)
var xeploaidiem = xeploai(diemtb)

console.log("diem trung binh:" + diemtb.toFixed(2))
console.log(xeploaidiem)