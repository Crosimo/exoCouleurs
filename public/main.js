let divTitre = document.createElement("div");
let myTitre= document.createElement("h1");
myTitre.style = "display:flex; align-items : start; border-bottom: 1.5px rgb(135,206,250) solid; color: black; margin-bottom: 20px;";
myTitre.textContent= "Le Dom - Exo: StyleGenerator";
divTitre.classList.add("container");
divTitre.append(myTitre)




let mySection = document.createElement("section");
mySection.style = "display:flex; align-items : center; ";
mySection.classList.add("container");


let colori = document.createElement("div");
colori.textContent = "W";
colori.style = "background-color : gray; width :25px; text-align: center; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.35rem; cursor: pointer";

let colori1 = document.createElement("div");
colori1.textContent = "R";
colori1.style = "background-color : red; width :25px; text-align: center; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.35rem; cursor: pointer";

let colori2 = document.createElement("div");
colori2.textContent = "G";
colori2.style = "background-color : green; width :25px; text-align: center; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.35rem; cursor: pointer";

let colori3 = document.createElement("div");
colori3.textContent = "B";
colori3.style = "background-color : blue; width :25px; text-align: center; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.35rem; cursor: pointer";





// ? boutons border

let myBorder = document.createElement("div");
myBorder.style = " width :25px; height: 15px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border: 1px black solid";

let myBorder1 = document.createElement("div");
myBorder1.style = " width :25px; height: 15px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border: 1px black dotted";

let myBorder2 = document.createElement("div");
myBorder2.style = " width :25px; height: 15px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-left: 1px  black solid; border-right: 1px  black solid; border-bottom: 1px  black solid";







// ! border-top


let myBorderTop = document.createElement("div");
myBorderTop.textContent = "top";
myBorderTop.style = " width :30px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-top: red 1.5px solid; box-sizing: border-box";


let myBorderTop1 = document.createElement("div");
myBorderTop1.textContent = "top";
myBorderTop1.style = " width :30px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-top: red 3px solid; box-sizing: border-box";



let myBorderTop2 = document.createElement("div");
myBorderTop2.textContent = "top";
myBorderTop2.style = " width :30px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-top: red 4.5px solid; box-sizing: border-box";





// ! Section 2




let mySection2 = document.createElement("section");
mySection2.style = "display:flex; align-items : center; margin-top: 15px";
mySection2.classList.add("container");



let selectorAllColor = document.createElement("input");
selectorAllColor.setAttribute("type", "color")
selectorAllColor.style = "width :200px; height: 30px;  border-radius: 0.1rem; border: white 2px double;  box-sizing: content-box; display: inline-block; padding: 0";





// ! suiveur de selectorAll





let myChiffreBorder = document.createElement("input");
myChiffreBorder.setAttribute("type", "number")
// myChiffreBorder.textContent = "top";
myChiffreBorder.style = " width :40px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border: 3px solid black; box-sizing: border-box";


let myChiffreBorderTop = document.createElement("input");
myChiffreBorderTop.setAttribute("type", "number")

myChiffreBorderTop.style = " width :40px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-top: black 3px solid; box-sizing: border-box";


let myChiffreBorderRight = document.createElement("input");
myChiffreBorderRight.setAttribute("type", "number")

myChiffreBorderRight.style = " width :40px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-right: black 3px solid; box-sizing: border-box";



let myChiffreBorderBottom = document.createElement("input");
myChiffreBorderBottom.setAttribute("type", "number")

myChiffreBorderBottom.style = " width :40px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-bottom: black 3px solid; box-sizing: border-box";



let myChiffreBorderLeft = document.createElement("input");
myChiffreBorderLeft.setAttribute("type", "number")

myChiffreBorderLeft.style = " width :40px; display: inline-block; margin-right: 3.5px; border-radius: 0.2rem; padding: 0.2rem; border-left: black 3px solid; box-sizing: border-box";






// ! Section 3

let mySection3 = document.createElement("section");
mySection3.style = "display:flex; align-items : center; margin-top: 15px";
mySection3.classList.add("container");





// ! Juste au-dessus du rectangle


let myBorderRadius = document.createElement("input");
myBorderRadius.setAttribute("type", "number")
myBorderRadius.style = " width :40px; display: inline-block; margin-right: 3.5px; padding: 0.2rem; border-radius: 2px; box-sizing: border-box";

let myBorderRadiusTopRight = document.createElement("input");
myBorderRadiusTopRight.setAttribute("type", "number")
myBorderRadiusTopRight.style = " width :40px; display: inline-block; margin-right: 3.5px;  padding: 0.2rem; border-top-right-radius: 7px; box-sizing: border-box";

let myBorderRadiusBottomRight = document.createElement("input");
myBorderRadiusBottomRight.setAttribute("type", "number")
myBorderRadiusBottomRight.style = " width :40px; display: inline-block; margin-right: 3.5px;  padding: 0.2rem; border-bottom-right-radius: 7px; box-sizing: border-box";

let myBorderRadiusBottomLeft = document.createElement("input");
myBorderRadiusBottomLeft.setAttribute("type", "number")
myBorderRadiusBottomLeft.style = " width :40px; display: inline-block; margin-right: 3.5px;  padding: 0.2rem; border-bottom-left-radius: 7px; box-sizing: border-box";


let myBorderRadiusTopLeft = document.createElement("input");
myBorderRadiusTopLeft.setAttribute("type", "number")
myBorderRadiusTopLeft.style = " width :40px; display: inline-block; margin-right: 3.5px;  padding: 0.2rem; border-top-left-radius: 7px; box-sizing: border-box";









let grosRectangle = document.createElement("div");
grosRectangle.style = "width :250px; height: 80px;  border-radius: 5px; border: black 1px solid; margin-top : 15px; box-sizing: border-box; margin-left: 35px";







// ! append




document.body.append(divTitre, mySection, mySection2, mySection3, grosRectangle)

mySection.append(colori, colori1, colori2, colori3, myBorder, myBorder1, myBorder2, myBorderTop, myBorderTop1, myBorderTop2);


mySection2.append(selectorAllColor, myChiffreBorder, myChiffreBorderBottom, myChiffreBorderLeft, myChiffreBorderRight, myChiffreBorderTop);

mySection3.append(myBorderRadius, myBorderRadiusTopRight, myBorderRadiusBottomRight, myBorderRadiusBottomLeft, myBorderRadiusTopLeft);










// // ! Boucles

// // selectorAllColor.addEventListener("input", (e) => {
// //     grosRectangle.style.backgroundColor = e.target.value
// // })

// // myChiffreBorder.addEventListener('input', (e)=>{
// //   grosRectangle.style.border = grosRectangle.style.border.replace(parseInt( grosRectangle.style.border), e.target.value )
// // })



// let AllPremiereLigne = Array.from(document.querySelectorAll("div")).slice(1, 11);
// console.log(AllPremiereLigne);
// console.log(AllPremiereLigne[6]);
// for (i in AllPremiereLigne) {
   
//     AllPremiereLigne[i].addEventListener("click", (e) => {
        
//         if (AllPremiereLigne.includes(e.target) && AllPremiereLigne.indexOf(e.target) < 4) {
//             grosRectangle.style.cssText += `background-color: ${e.target.style.backgroundColor}; border: none`;   
//         } else if (AllPremiereLigne.includes(e.target ) && (AllPremiereLigne.indexOf(e.target) >= 4) && (AllPremiereLigne.indexOf(e.target) < 7 )) {
//             grosRectangle.style.cssText += `border-left: ${e.target.style.borderLeft};border-bottom : ${e.target.style.borderBottom};border-right : ${e.target.style.borderRight}; border-top : ${e.target.style.borderTop}`
//         } else {
//             grosRectangle.style.cssText += `border-top: ${e.target.style.borderTop};border-top : ${e.target.style.borderTop};border-top : ${e.target.style.borderTop}`
//         }
//     })
// }




// // ! Section 2 For in


// let AllSecondeLigne = Array.from(document.getElementsByTagName("section")[1].children);

// console.log(AllSecondeLigne);
// for (i in AllSecondeLigne) {
//     console.log("heyo");
//     AllSecondeLigne[i].addEventListener("input", (e) => {
//         switch (e.target) {
//             case AllSecondeLigne[0]: 
//                 grosRectangle.style.backgroundColor = e.target.value;
//                 break;
//             case AllSecondeLigne[1]:
//                 grosRectangle.style.border = "1px solid black";
//                 grosRectangle.style.border = grosRectangle.style.border.replace(parseInt(grosRectangle.style.border), e.target.value*5)
//                 break;
//             case AllSecondeLigne[2]:  grosRectangle.style.borderBottom = grosRectangle.style.borderBottom.replace(parseInt( grosRectangle.style.borderBottom), e.target.value*5 )
//                 break;
//             case AllSecondeLigne[3]: grosRectangle.style.borderLeft = grosRectangle.style.borderLeft.replace(parseInt(grosRectangle.style.borderLeft), e.target.value * 5);
//                 console.log(grosRectangle.style.borderLeft);
//                 break;
//             case AllSecondeLigne[4]:  grosRectangle.style.borderRight = grosRectangle.style.borderRight.replace(parseInt( grosRectangle.style.borderRight), e.target.value*5 )
//                 break;
//             case AllSecondeLigne[5]:  grosRectangle.style.borderTop = grosRectangle.style.borderTop.replace(parseInt( grosRectangle.style.borderTop), e.target.value*5 )
//                 break;
//         }
       
//     })
// }






// // ! Section 3 dude






// let AllTroisiemeLigne = Array.from(document.getElementsByTagName("section")[2].children);

// console.log(AllTroisiemeLigne);
// for (i in AllTroisiemeLigne) {
//     console.log("heyo");
//     AllTroisiemeLigne[i].addEventListener("input", (e) => {
//         switch (e.target) {
//             case AllTroisiemeLigne[0]:
//                 grosRectangle.style.borderRadius = "1px";
//             grosRectangle.style.borderRadius = grosRectangle.style.borderRadius.replace(parseInt(grosRectangle.style.borderRadius), e.target.value*5)
//                 break;
//             case AllTroisiemeLigne[1]:
//                 grosRectangle.style.borderTopRightRadius = grosRectangle.style.borderTopRightRadius.replace(parseInt( grosRectangle.style.borderTopRightRadius), e.target.value*5 )
                
//                 break;
//             case AllTroisiemeLigne[2]:  grosRectangle.style.borderBottomRightRadius = grosRectangle.style.borderBottomRightRadius.replace(parseInt( grosRectangle.style.borderBottomRightRadius), e.target.value*5 )
//                 break;
//             case AllTroisiemeLigne[3]:  grosRectangle.style.borderBottomLeftRadius = grosRectangle.style.borderBottomLeftRadius.replace(parseInt( grosRectangle.style.borderBottomLeftRadius), e.target.value*5 )
//                 break;
//             case AllTroisiemeLigne[4]:  grosRectangle.style.borderTopLeftRadius = grosRectangle.style.borderTopLeftRadius.replace(parseInt( grosRectangle.style.borderTopLeftRadius), e.target.value*5 )
//                 break;
          
//         }
       
//     })
// }
document.querySelectorAll("div")[0].classList.add("divid")
console.log(document.querySelectorAll("div")[0].classList.cssText);