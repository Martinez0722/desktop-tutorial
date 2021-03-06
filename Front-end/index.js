let titlePage = document.querySelector("title")
let principalPage = document.getElementById("html")
let home = document.getElementById("home")
let dashboard = document.getElementById("dashboard")
let clientes = document.getElementById("clientes")
let empresas = document.getElementById("empresas")
let resultados = document.getElementById("resultados")
let pageLogin = document.getElementById("pageLogin")
let login = document.getElementById("login")
let erroLogin = document.getElementById("erroLogin")
let pageRegister = document.getElementById("pageRegister")
let inputCad = document.getElementsByClassName("inputCad")
let campo = document.getElementsByClassName("campo")

//MANIPULANDO O HOVER

home.addEventListener("click", function(){
    home.classList.add("text-white")
    dashboard.classList.remove("text-white")
    clientes.classList.remove("text-white")
    empresas.classList.remove("text-white")
    resultados.classList.remove("text-white")
})

dashboard.addEventListener("click", function(){
    home.classList.remove("text-white")
    dashboard.classList.add("text-white")
    clientes.classList.remove("text-white")
    empresas.classList.remove("text-white")
    resultados.classList.remove("text-white")
})

clientes.addEventListener("click", function(){
    home.classList.remove("text-white")
    dashboard.classList.remove("text-white")
    clientes.classList.add("text-white")
    empresas.classList.remove("text-white")
    resultados.classList.remove("text-white")
})

empresas.addEventListener("click", function(){
    home.classList.remove("text-white")
    dashboard.classList.remove("text-white")
    clientes.classList.remove("text-white")
    empresas.classList.add("text-white")
    resultados.classList.remove("text-white")
})

resultados.addEventListener("click", function(){
    home.classList.remove("text-white")
    dashboard.classList.remove("text-white")
    clientes.classList.remove("text-white")
    empresas.classList.remove("text-white")
    resultados.classList.add("text-white")
})

//REDIRECIONANDO PARA A PAGINA PRINCIPAL

function paginaHome() {
    principalPage.classList.remove("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.add("ocult")
    titlePage.innerHTML = "Global Stream"
}

// REDIRECIONANDO PARA A PAGINA DE LOGIN

function paginaLogin() {
    principalPage.classList.add("ocult")
    pageRegister.classList.add("ocult")
    pageLogin.classList.remove("ocult")
    titlePage.innerHTML = "Login"
}

login.addEventListener("click", () => {
    if(authEmail.value.length == 0 && authPassword.value.length == 0){
        erroLogin.classList.remove("ocult")
    }else{
        paginaHome()
    }
})

//REDIRECIONANDO PARA A PAGINA DE CADASTRO

function paginaCadastro(){
    principalPage.classList.add("ocult")
    pageLogin.classList.add("ocult")
    pageRegister.classList.remove("ocult")
    titlePage.innerHTML = "Cadastre-se"
}

//FAZENDO CADASTRO

const init = () => {
    document.getElementById("cadastro").addEventListener("click", submitform);
}

const submitform = (e) => {
    e.preventDefault();

    const data = accessData()
    console.log(data)    
    const url = "http://localhost:3000/auth"

    if(!data) {
        return
    }

    fetch(`${url}/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then((response) => {
            paginaHome()
            return alert("Cadastro realizado com sucesso!")
        })
        .catch((e) => {
            return console.error(e)
        })
}

const accessData = () => {
    return{
        "name": nome.value,
        "sobrenome": sobrenome.value,
        "email": email.value,
        "celular": celular.value,
        "password": senha.value,
    }

}

init()

//Checando input Cadastro

cadastro.addEventListener("click", () => {
    
    for (let i = 0; i < inputCad.length; i++) {

        if(inputCad[i].value.length == 0){
            inputCad[i].classList.remove("focus-0")
            inputCad[i].focus()
            campo[i].classList.remove("ocult")
        }else{
            inputCad[i].classList.add("focus-0")
            campo[i].classList.add("ocult")
        }

        if (termos.checked === true) { 
            paginaHome()
        } else {
          termos.focus()
        }          
    }    
})

// // JQUERY CAROUSEL

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})


