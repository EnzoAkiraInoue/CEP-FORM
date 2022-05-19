let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cidade");
let uf = document.querySelector("#uf");
let ibge = document.querySelector("#ibge");
let ddd = document.querySelector("#ddd");

cep.addEventListener("blur", function (e) {
  let cep = e.target.value;
  let script = document.createElement("script");
  script.src =
    "https://viacep.com.br/ws/" + cep + "/json/?callback=popularform";
  document.body.appendChild(script);
});

function popularform(resposta) {
  if ("erro" in resposta) {
    setErrorFor(cep, "CEP Invalido");
    return;
  } else {
    SetSuccessFor(cep);
  }
  rua.value = resposta.logradouro;
  bairro.value = resposta.bairro;
  uf.value = resposta.uf;
  cidade.value = resposta.localidade;
  ibge.value = resposta.ibge;
  ddd.value = resposta.ddd;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  //adcionar mensagem
  small.innerText = message;

  //Adicionar a classe de erro
  formControl.className = "frm-row error";
}

function SetSuccessFor(input) {
  const formControl = input.parentElement;

  //adicionar a classe de sucesso
  formControl.className = "frm-row success";
}
