const arttirBtn = document.getElementById("arttir");
const azaltBtn = document.getElementById("azalt");
const resetBtn = document.getElementById("sifirla");

const sayi = document.getElementById("sayac");
arttirBtn.addEventListener('click',()=>{
    sayi.innerText = parseInt(sayi.innerText)  + 1;

});
azaltBtn.addEventListener('click',()=>{
    if(parseInt(sayi.innerText)>0)
        sayi.innerText = parseInt(sayi.innerText) - 1;
    else
        alert("- zikir cekilemez"); 
});
resetBtn.addEventListener('click',()=>{
    sayi.innerText = 0;

});

