const botao = document.getElementById("tema");

//carregar preferência
if (localStorage.getItem("tema") === "dark"){
    document.body.classList.add("dark")
}

//alternar tema
botao.addEventListener("click",() => {
    document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")){}

const botao= document.getElementById("tema");

constupdateBUttomIcon = () => {
    if (button) return;
const darkmode = document.body.classList.contains("dark");
botao.textContent = darkmode? "☀️" : "🌕";
botao.title = darkmode? "mudar para modo escuro":"mudar para modo claro" ;
}:

const 

}

)