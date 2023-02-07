const  container = document.querySelector(".kontener");
const  refreshbtn = document.querySelector(".zmiana-kolorku");

const maxPaletterBoxes = 14;

const generatePalette = () =>{
    container.innerHTML= "";
    for (let i=0; i< maxPaletterBoxes; i++){
        let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;

        const color = document.createElement("li");
        color.classList.add("kolor");
        color.innerHTML= `<div class="prostok" style="background: ${randomHex}"></div>
                            <span class="szescian">${randomHex}</span>`;
        color.addEventListener("click", () => copyColor(color,randomHex));
        container.appendChild(color);
    }
}
generatePalette();

const copyColor = (elem, szescian) => {
    const colorElemnet = elem.querySelector(".szescian");
    navigator.clipboard.writeText(szescian).then(() =>{
        colorElemnet.innerText = "Skopiowane";
        setTimeout(()=> colorElemnet.innerText = szescian, 1000);
    }).catch(()=> alert("kopiowanie nie powiodło się!"));
}

refreshbtn.addEventListener("click", generatePalette);
