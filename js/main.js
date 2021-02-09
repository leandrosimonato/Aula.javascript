/*

//AULA_05 => Manipulando elemento da página!

function funcaoChange(elemento) {
    console.log(elemento.value)
}

function load() {
    alert("pagina carregada!");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui!";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse aqui!";
    //alert("trocar texto");
}

function redirecionar() {
    window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/"; 
}


function clicou() {
     document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar!";
     console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

/*

/*

//AULA_04 => Desenvolva Páginas Web!

function soma (n1, n2) {
    return n1 + n2;
}

var validar = 0; //função local, não irá alterar!

function validaIdade(idade) {
    validar; // função global, irá o resultado!
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*

/*

//AULA_03 => Condionais, laços de repetições e date!

var d = new Date();
alert(d.getMonth()+1); // Sempre usa o +1 por sempre vai mostrar o mês passado!
alert(d.getUTCMinutes());
alert(d.getDay());
alert(d.getHours());

var count;
for(count=0; count <= 5; count++){
    alert(count);
};

var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};

var idade = prompt("Qual a sua idade?");
var idade = 18;
if(idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
*/

/*

AULA_02 => Array e Dicionário!

var frutas = [{nome: "maça", cor: "vermelho"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var fruta = {nome: "maça", cor: "vermelho"}
console.log(fruta);
alert(fruta.cor);

var lista = ["maça", "pêra", "laranja"];
lista.pop();
lista.push("uva");
console.log(lista)
console.log(lista[1]);
alert(lista[1]);
console.log(lista.length);
console.log(lista.reverse);
console.log(lista.toString());
console.log(lista.join(" - "))
*/

/*

AULA_01 => Introdução ao JavaScript!

var nome = "leandro Simonato";
var idade = 32;
var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = "Japão é melhor time do mundo!";
// var idade = "32";
// var idade2 = "10";
alert("Bem vindo" + "tem"+  nome + idade + anos);
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLocaleUpperCase()); // todas as letras maiusculas...
console.log(frase.toLowerCase); // todas as letras minusculas...
//alert(frase.replace("Japão", "Brasil"));
*/