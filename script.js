let home = document.getElementById("home");

//COMIC 1
let i1 = 0;
let paginas1 = [
    "./COMICS/1COMIC/Abuela.jpg",
    "./COMICS/1COMIC/Pag1.jpeg",
    "./COMICS/1COMIC/Pag2.jpeg",
    "./COMICS/1COMIC/Pag3.jpeg",
    "./COMICS/1COMIC/Pag4.jpeg",
];

function abrirComic1(){
    home.style.display = "none";
    document.getElementById("ventana1").style.display = "flex";
    i1 = 0;
    actualizar1();
}
function actualizar1(){
    document.getElementById("paginas1").src = paginas1[i1];
    document.getElementById("anteriorBTN1").disabled = (i1 === 0);
    document.getElementById("siguienteBTN1").disabled = (i1 === paginas1.length - 1);
}
function siguientePagina1(){ if(i1 < paginas1.length - 1){ i1++; actualizar1(); } }
function anteriorPagina1(){ if(i1 > 0){ i1--; actualizar1(); } }


//COMIC 2
let i2 = 0;
let paginas2 = [
    "./COMICS/2COMIC/Comic-portada1.jpg",
    "./COMICS/2COMIC/Compañia_Inesperada_1.jpg",
    "./COMICS/2COMIC/Compañia_Inesperada_2.jpg",
    "./COMICS/2COMIC/Compañia_Inesperada_3.jpg",
];

function abrirComic2(){
    home.style.display = "none";
    document.getElementById("ventana2").style.display = "flex";
    i2 = 0;
    actualizar2();
}
function actualizar2(){
    document.getElementById("paginas2").src = paginas2[i2];
    document.getElementById("anteriorBTN2").disabled = (i2 === 0);
    document.getElementById("siguienteBTN2").disabled = (i2 === paginas2.length - 1);
}
function siguientePagina2(){ if(i2 < paginas2.length - 1){ i2++; actualizar2(); } }
function anteriorPagina2(){ if(i2 > 0){ i2--; actualizar2(); } }


//COMIC 3
let i3 = 0;
let paginas3 = [
    "./COMICS/3COMIC/David1.jpg",
    "./COMICS/3COMIC/David2.jpg",
    "./COMICS/3COMIC/David3.jpg",
    "./COMICS/3COMIC/David4.jpg",
    "./COMICS/3COMIC/David5.jpg",
    "./COMICS/3COMIC/David6.jpg",
    "./COMICS/3COMIC/David7.jpg",
    "./COMICS/3COMIC/David8.jpg",
];

function abrirComic3(){
    home.style.display = "none";
    document.getElementById("ventana3").style.display = "flex";
    i3 = 0;
    actualizar3();
}
function actualizar3(){
    document.getElementById("paginas3").src = paginas3[i3];
    document.getElementById("anteriorBTN3").disabled = (i3 === 0);
    document.getElementById("siguienteBTN3").disabled = (i3 === paginas3.length - 1);
}
function siguientePagina3(){ if(i3 < paginas3.length - 1){ i3++; actualizar3(); } }
function anteriorPagina3(){ if(i3 > 0){ i3--; actualizar3(); } }

//COMIC 4
let i4 = 0;
let paginas4 = [
    "./COMICS/4COMIC/PAGINA 1.jpg",
    "./COMICS/4COMIC/PAGINA 2.jpg",
    "./COMICS/4COMIC/PAGINA 3.jpg",
];

function abrirComic4(){
    home.style.display = "none";
    document.getElementById("ventana4").style.display = "flex";
    i4 = 0;
    actualizar4();
}
function actualizar4(){
    document.getElementById("paginas4").src = paginas4[i4];
    document.getElementById("anteriorBTN4").disabled = (i4 === 0);
    document.getElementById("siguienteBTN4").disabled = (i4 === paginas4.length - 1);
}
function siguientePagina4(){ if(i4 < paginas4.length - 1){ i4++; actualizar4(); } }
function anteriorPagina4(){ if(i4 > 0){ i4--; actualizar4(); } }

//COMIC 5
let i5 = 0;
let paginas5 = [
    "./COMICS/5COMIC/PORTADA Emilio.jpg",
    "./COMICS/5COMIC/pagina emilio (1).jpg",
    "./COMICS/5COMIC/pagina emilio (2).jpg",
    "./COMICS/5COMIC/pagina emilio (3).jpg"
];

function abrirComic5(){
    home.style.display = "none";
    document.getElementById("ventana5").style.display = "flex";
    i5 = 0;
    actualizar5();
}
function actualizar5(){
    document.getElementById("paginas5").src = paginas5[i5];
    document.getElementById("anteriorBTN5").disabled = (i5 === 0);
    document.getElementById("siguienteBTN5").disabled = (i5 === paginas5.length - 1);
}
function siguientePagina5(){ if(i5 < paginas5.length - 1){ i5++; actualizar5(); } }
function anteriorPagina5(){ if(i5 > 0){ i5--; actualizar5(); } }

//COMIC 6
let i6 = 0;
let paginas6 = [
    "./COMICS/6COMIC/Gaby1.jpg",
    "./COMICS/6COMIC/Gaby2.jpg",
    "./COMICS/6COMIC/Gaby3.jpg",
    "./COMICS/6COMIC/Gaby4.jpg",
    "./COMICS/6COMIC/Gaby5.jpg",
    "./COMICS/6COMIC/Gaby6.jpg",
];

function abrirComic6(){
    home.style.display = "none";
    document.getElementById("ventana6").style.display = "flex";
    i6 = 0;
    actualizar6();
}
function actualizar6(){
    document.getElementById("paginas6").src = paginas6[i6];
    document.getElementById("anteriorBTN6").disabled = (i6 === 0);
    document.getElementById("siguienteBTN6").disabled = (i6 === paginas6.length - 1);
}
function siguientePagina6(){ if(i6 < paginas6.length - 1){ i6++; actualizar6(); } }
function anteriorPagina6(){ if(i6 > 0){ i6--; actualizar6(); } }

//COMIC 7
let i7 = 0;
let paginas7 = [
    "./COMICS/7COMIC/La Ultima Migaja_AraiVazquez_Portada.jpg",
    "./COMICS/7COMIC/La Ultima Migaja_AraiVazquez_Pagina 1.jpg",
    "./COMICS/7COMIC/La Ultima Migaja_AraiVazquez_Pagina 2.jpg",
    "./COMICS/7COMIC/La Ultima Migaja_AraiVazquez_Pagina 3.jpg",
];

function abrirComic7(){
    home.style.display = "none";
    document.getElementById("ventana7").style.display = "flex";
    i7 = 0;
    actualizar7();
}
function actualizar7(){
    document.getElementById("paginas7").src = paginas7[i7];
    document.getElementById("anteriorBTN7").disabled = (i7 === 0);
    document.getElementById("siguienteBTN7").disabled = (i7 === paginas7.length - 1);
}
function siguientePagina7(){ if(i7 < paginas7.length - 1){ i7++; actualizar7(); } }
function anteriorPagina7(){ if(i7 > 0){ i7--; actualizar7(); } }

//COMIC 8
let i8 = 0;
let paginas8 = [
    "./COMICS/8COMIC/COMIC 1.jpg",
    "./COMICS/8COMIC/COMIC 2.jpg",
    "./COMICS/8COMIC/COMIC 3.jpg",
];

function abrirComic8(){
    home.style.display = "none";
    document.getElementById("ventana8").style.display = "flex";
    i8 = 0;
    actualizar8();
}
function actualizar8(){
    document.getElementById("paginas8").src = paginas8[i8];
    document.getElementById("anteriorBTN8").disabled = (i8 === 0);
    document.getElementById("siguienteBTN8").disabled = (i8 === paginas8.length - 1);
}
function siguientePagina8(){ if(i8 < paginas8.length - 1){ i8++; actualizar8(); } }
function anteriorPagina8(){ if(i8 > 0){ i8--; actualizar8(); } }

//COMIC 9
let i9 = 0;
let paginas9 = [
    "./COMICS/9COMIC/COMIC ELI_1.jpg",
    "./COMICS/9COMIC/COMIC ELI_2.jpg",
    "./COMICS/9COMIC/COMIC ELI_3.jpg",
    "./COMICS/9COMIC/COMIC ELI_4.jpg",
    "./COMICS/9COMIC/COMIC ELI_5.jpg",
];

function abrirComic9(){
    home.style.display = "none";
    document.getElementById("ventana9").style.display = "flex";
    i9 = 0;
    actualizar9();
}
function actualizar9(){
    document.getElementById("paginas9").src = paginas9[i9];
    document.getElementById("anteriorBTN9").disabled = (i9 === 0);
    document.getElementById("siguienteBTN9").disabled = (i9 === paginas9.length - 1);
}
function siguientePagina9(){ if(i9 < paginas9.length - 1){ i9++; actualizar9(); } }
function anteriorPagina9(){ if(i9 > 0){ i9--; actualizar9(); } }

//COMIC 10
let i10 = 0;
let paginas10 = [
    "./COMICS/10COMIC/Pag 1.jpg",
    "./COMICS/10COMIC/Pag 2.jpg",
    "./COMICS/10COMIC/Pag 3.png",
];

function abrirComic10(){
    home.style.display = "none";
    document.getElementById("ventana10").style.display = "flex";
    i10 = 0;
    actualizar10();
}
function actualizar10(){
    document.getElementById("paginas10").src = paginas10[i10];
    document.getElementById("anteriorBTN10").disabled = (i10 === 0);
    document.getElementById("siguienteBTN10").disabled = (i10 === paginas10.length - 1);
}
function siguientePagina10(){ if(i10 < paginas10.length - 1){ i10++; actualizar10(); } }
function anteriorPagina10(){ if(i10 > 0){ i10--; actualizar10(); } }

//COMIC 11
let i11 = 0;
let paginas11 = [
    "./COMICS/11COMIC/Comic Georgy 1.jpg",
    "./COMICS/11COMIC/Comic Georgy 2.jpg",
    "./COMICS/11COMIC/Comic Georgy 3.jpg",
];

function abrirComic11(){
    home.style.display = "none";
    document.getElementById("ventana11").style.display = "flex";
    i11 = 0;
    actualizar11();
}
function actualizar11(){
    document.getElementById("paginas11").src = paginas11[i11];
    document.getElementById("anteriorBTN11").disabled = (i11 === 0);
    document.getElementById("siguienteBTN11").disabled = (i11 === paginas10.length - 1);
}
function siguientePagina11(){ if(i11 < paginas10.length - 1){ i11++; actualizar11(); } }
function anteriorPagina11(){ if(i11 > 0){ i11--; actualizar11(); } }

//COMIC 12
let i12 = 0;
let paginas12 = [
    "./COMICS/12COMIC/1_joss.jpg",
    "./COMICS/12COMIC/2_joss.jpg",
    "./COMICS/12COMIC/3_joss.jpg",
];

function abrirComic12(){
    home.style.display = "none";
    document.getElementById("ventana12").style.display = "flex";
    i12 = 0;
    actualizar12();
}
function actualizar12(){
    document.getElementById("paginas12").src = paginas12[i12];
    document.getElementById("anteriorBTN12").disabled = (i12 === 0);
    document.getElementById("siguienteBTN12").disabled = (i12 === paginas10.length - 1);
}
function siguientePagina12(){ if(i12 < paginas12.length - 1){ i12++; actualizar12(); } }
function anteriorPagina12(){ if(i12 > 0){ i12--; actualizar12(); } }

//COMIC 13
let i13 = 0;
let paginas13 = [
    "./COMICS/13COMIC/LeonRugiente-1.jpg",
    "./COMICS/13COMIC/LeonRugiente-2.jpg",
    "./COMICS/13COMIC/LeonRugiente-3.jpg",
];

function abrirComic13(){
    home.style.display = "none";
    document.getElementById("ventana13").style.display = "flex";
    i13 = 0;
    actualizar13();
}
function actualizar13(){
    document.getElementById("paginas13").src = paginas13[i13];
    document.getElementById("anteriorBTN13").disabled = (i13 === 0);
    document.getElementById("siguienteBTN13").disabled = (i13 === paginas10.length - 1);
}
function siguientePagina13(){ if(i13 < paginas13.length - 1){ i13++; actualizar13(); } }
function anteriorPagina13(){ if(i13 > 0){ i13--; actualizar13(); } }

//COMIC 14
let i14 = 0;
let paginas14 = [
    "./COMICS/14COMIC/Laucomic1.jpg",
    "./COMICS/14COMIC/Laucomic2.jpg",
    "./COMICS/14COMIC/Laucomic3.jpg",
    "./COMICS/14COMIC/Laucomic4.jpg",
];

function abrirComic14(){
    home.style.display = "none";
    document.getElementById("ventana14").style.display = "flex";
    i14 = 0;
    actualizar14();
}
function actualizar14(){
    document.getElementById("paginas14").src = paginas14[i14];
    document.getElementById("anteriorBTN14").disabled = (i14 === 0);
    document.getElementById("siguienteBTN14").disabled = (i14 === paginas14.length - 1);
}
function siguientePagina14(){ if(i14 < paginas14.length - 1){ i14++; actualizar14(); } }
function anteriorPagina14(){ if(i14 > 0){ i14--; actualizar14(); } }

function cerrar(){

    for(let n = 1; n <= 14; n++){
        let ventana = document.getElementById("ventana" + n);
        if(ventana){
            ventana.style.display = "none";
        }
    }
    home.style.display = "block";
}