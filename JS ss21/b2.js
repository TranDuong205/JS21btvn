var a;

a = prompt("nhap vao so a:",);

a = parseInt(a);

if(!isNaN(a)) {
    if(a %2 == 0) {
        document.write("a la so chan");
    } else {
        document.write("a la so le");
    }
} else {
    document.write("khong hop le");
}