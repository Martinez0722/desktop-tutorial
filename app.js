let login = document.getElementById("login")
let html = document.getElementById("html")
let conteudo = document.getElementById("conteudo")
let form = document.getElementById("form")
let exit = document.getElementById("exit")
let destaque = document.getElementsByClassName("destaque")
let barra = document.getElementsByClassName("barra")
let home = document.getElementById("home")
let dash = document.getElementById("dash")
let clientes = document.getElementById("clientes")
let empresas = document.getElementById("empresas")
let resultados = document.getElementById("resultados")
let ativo = false



home.addEventListener("click", function(){
    conteudo.style.display = 'block'
})

dash.addEventListener("click", function(){
    conteudo.style.display = 'none'
})

clientes.addEventListener("click", function(){
    conteudo.style.display = 'none'
})

empresas.addEventListener("click", function(){
    conteudo.style.display = 'none'
})

resultados.addEventListener("click", function(){
    conteudo.style.display = 'none'
})


//MANIPULANDO O HOVER


for (let i = 0; i < barra.length; i++) {
}
 

for (let i = 0; i < destaque.length; i++) {
    destaque[i].addEventListener('click',function(){
        
        if(ativo == false){
            this.classList.add('text-white')
            barra[i].style.display = 'block'
                
            ativo = true

        }else if(ativo == true){
            this.classList.remove('text-white')
            barra[i].style.display = 'none' 
    
            ativo = false

            }
        }) 
    }




// FORMULARIO DE LOGIN

login.addEventListener("click", function(){
    html.style.display = "none"
    form.style.display = "block"
})

exit.addEventListener("click", function(){
    form.style.display ="none"
    home.style.display = "block"
})

// JQUERY CAROUSEL

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

const nome = document.getElementById("cliente_nome")
const sobrenome = document.getElementById("client_sobrenome")
const email= document.getElementById("cliente_email")
const clientes = document.getElementsByClassName("clientes")

HTML.addEventListener("load",function(){
    alert("Aoba")
})