console.log("Merhaba Kodlama.io")
//JavaScript' te type safe yoktur!
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
}
//"let" kullandığımızda Süslü parantez içinde ki 
//dolarDun ' u yazmaz!
//"var" yazdığımızda ise Süslü parantez içinde ki 
//dolarDun ' u 9.10 olarak yazdırır.
//Bu durum istemediğmiz bir sonuçtur!
console.log(dolarDun)
//var dolarDun = 9.20
//undefined hatası verir.
//Çünkü komut satırı öncesinde tanımlı değil
//Günümüzde artık "var" key word'u yerine "let" kullanılır!
//"npm run dev" ile local host çalıştırılır!


const euroDun = 11.2 //const key word' u kullanıldığında değişkene başka değer atayamazsın!
// euroDun = 11 Bu değeri tanımaz!
console.log(euroDun)

//--------------------------------
let konutKredileri = ["Konut kredisi", "Emlak konut Kredisi","Kamu Konut kredisi"]

console.log("<ul>")
for(let i = 0;i<3;i++){  //for(let i = 0;i<konutKredileri.length;i++)
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)