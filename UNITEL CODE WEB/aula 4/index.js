/*let nome="jose";

if(nome=="jose")
{
    var presente="presente";
}
alert(nome+presente);*/

/*let cidade="Luanda";
let idade=59;
let presente=true;
const pessoa={name:"Mayele",
         altura:2.65,
         acorda:function(){
            console.log("acorda")
         }    
}


console.log(typeof(cidade));
console.log(typeof(idade));
console.log(typeof(presente));
console.log("Nome: "+pessoa.name);
console.log("Altura: "+pessoa.altura);
pessoa.name="Kanga";
console.log("Nome :"+pessoa.name)*/

//operadores aritmeticos
//let num1=10;
//let num2=2;

/*let soma=num1+num2;
let sub=num1-num2;
let mul=num1*num2;
let div=num1/num2;
let rest=num1%num2;
console.log(soma);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rest);*/

/*let num1=10;
let num2=8;
let num3=15;
let num4=20;
let media;
media=(num1+num2+num3+num4)/4;
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log("A media dos numeros e"+" "+media);*/
/*let numero=prompt("Digite um numero");
if(numero>1)
{
    console.log("Numero maior que 1");
}
else
{
    console.log("Numero menor que 1");
}*/

/*let cidade=prompt("Digite um numero");
if(cidade==="luanda")
{
    console.log("capital");
}
else
{
    console.log("N capital");
}*/

/*function soma(n1,n2)
{
  return n1+n2;
}

console.log(soma(5,8));*/

const texto=document.getElementById("teste");
const btn=document.querySelector("#btn");

function muda(){
    texto.innerHTML="bem-vindo ao mundo js";
    texto.style.color="red";
}
function retornat()
{
   texto.innerHTML="Aula JS";
   texto.style.color="black";
}
btn.onclick=muda;
texto.addEventListener("mouseover",muda);
btn.addEventListener("click",retornat)