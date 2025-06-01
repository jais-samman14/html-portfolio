let btn1 = document.getElementById("myBtn1");//referenceofbutton1
let btn2 = document.getElementById("myBtn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "rgb(81,147,155)"
let rgb2 = "rgb(0,135,147)"
//generate 6 digit hexcode(0123456789abcdef)
const hexValue = () => {
    let myHexValue = "0123456789abcdef";
    let color = "#"
    for(let i=0;i<6;i++){
        let a = myHexValue[Math.floor(Math.random()*16)]
        color += a;
    }
    return color;
}

const handleButton1 = () => {
    rgb1 = hexValue();
    console.log(rgb1)
    btn1.innerText = rgb1;
    btn1.style.backgroundColor = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
};

const handleButton2 = () => {
    rgb2 = hexValue();
    console.log(rgb2);
    btn2.innerText = rgb2;
    btn2.style.backgroundColor = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;
};


btn1.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);

copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
})


