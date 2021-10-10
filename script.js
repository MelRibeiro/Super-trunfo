var cartas1 = {
  nome: "Soi Fon",
  imagem:
    "http://pm1.narvii.com/6388/9e50b08711edfc36d6ddc070719569641890f453_00.jpg",
  atributos: {
    power: 70,
    speed: 50,
    heart: 100
  }
};
//console.log(cartas1.atributos.ataque) //toda vez que se der um ponto, vai navegando atraves do objeto
var cartas2 = {
  nome: "Unohana",
  imagem:
    "http://pm1.narvii.com/6327/7568f206538e8e09cfcea8dc8cff1c9c53b118c5_00.jpg",
  atributos: {
    power: 78,
    speed: 67,
    heart: 8
  }
};
var cartas3 = {
  nome: "Yamamoto",
  imagem:
    "https://i.pinimg.com/originals/8a/d1/de/8ad1deb9b28c1ee73de16cfced7a68c1.jpg",
  atributos: {
    power: 100,
    speed: 100,
    heart: 100
  }
};
var cartas4 = {
  nome: "Shunsui",
  imagem: "https://images6.alphacoders.com/440/440436.jpg",
  atributos: {
    power: 91,
    speed: 72,
    heart: 87
  }
};
var cartas5 = {
  nome: "Nanao",
  imagem:
    "http://pm1.narvii.com/6572/edf42b61e2d978a02c87446161f5997176c72b07_00.jpg",
  atributos: {
    power: 73,
    speed: 48,
    heart: 100
  }
};
var cartas6 = {
  nome: "Mayuri",
  imagem: "https://pbs.twimg.com/media/D50OpmiUcAA3LbC.jpg",
  atributos: {
    power: 79,
    speed: 99,
    heart: 71
  }
};
var cartas7 = {
  nome: "Uharara",
  imagem:
    "https://i.pinimg.com/550x/12/26/3a/12263a31237c23a92a431045fb551abc.jpg",
  atributos: {
    power: 100,
    speed: 61,
    heart: 96
  }
};
var cartas8 = {
  nome: "Ichigo",
  imagem:
    "https://i.pinimg.com/originals/1a/0b/24/1a0b24c454b19e59dbfa956f7d320f8c.jpg",
  atributos: {
    power: 91,
    speed: 61,
    heart: 89
  }
};
var cartas9 = {
  nome: "Ohirime",
  imagem:
    "https://pbs.twimg.com/profile_images/1886482934/Orihime_Inoue_400x400.jpg",
  atributos: {
    power: 51,
    speed: 91,
    heart: 98
  }
};
var cartas10 = {
  nome: "Sado",
  imagem:
    "http://pm1.narvii.com/6518/6df9ac1002fbf1b07faea4a9e679d5bf51ef9e2e_00.jpg",
  atributos: {
    power: 98,
    speed: 70,
    heart: 70
  }
};
var cartas11 = {
  nome: "Ishida",
  imagem:
    "https://c4.wallpaperflare.com/wallpaper/117/295/727/bleach-uryu-ishida-wallpaper-preview.jpg",
  atributos: {
    power: 67,
    speed: 94,
    heart: 86
  }
};
var cartas12 = {
  nome: "Rukia",
  imagem:
    "https://pm1.narvii.com/6249/5f3f86d4cadef7109183999d18e32772eea0b561_hq.jpg",
  atributos: {
    power: 79,
    speed: 76,
    heart: 54
  }
};
var cartas13 = {
  nome: "Youruchi",
  imagem:
    "https://ovicio.com.br/wp-content/uploads/2021/07/20210724-bleach-cosplay-de-yoruichi-555x555.jpg",
  atributos: {
    power: 100,

    speed: 69,
    heart: 71
  }
};

var cartas = [
  cartas1,
  cartas2,
  cartas3,
  cartas4,
  cartas5,
  cartas6,
  cartas7,
  cartas8,
  cartas9,
  cartas10,
  cartas11,
  cartas12,
  cartas13
];

//poderia deixar sem valor mesmo
var cartaMaquina = 0;
var cartaJogador = 0;

// vai sortear a carta para jogar
function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 7);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 7);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 7);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;

  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var rodadas;

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'> Parabéns, você venceu!!!</p>";
    rodadas++;
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'> Poxa, você perdeu! </p>";
    rodadas++;
  } else {
    htmlResultado = "<p class='resultado-final'> Vish, empatou!!</p>";
    rodadas++;
  }
  divResultado.innerHTML = htmlResultado;
  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();

  if (rodadas == 10) {
    var rodadasNaTela =
      "Suas jogadas acabaram, espero que tenha gostado do jogo!";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = true;
  } else {
    var rodadasNaTela = "Você ainda tem" + rodadas + " rodadas!";
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = false;
  }
}

//console.log(atributoSelecionado);
//console.log(cartaJogador.atributos[atributoSelecionado]);

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  //`` < indica que é CSS / $ < template string, indica que o código a partir dái será JS
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";
  //esse for é diferente, pois se trata de lista
  // para cada elemento dentro de carta de Jogador, que chama outros atr
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " (" +
      cartaJogador.atributos[atributo] +
      ")" +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML =
    moldura + nome + tagHTTML + opcoesTexto + "</div>";
}
//como seria se fosse feito só com ASPAS
//divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " (" +
      cartaMaquina.atributos[atributo] +
      ")" +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML =
    moldura + nome + tagHTTML + opcoesTexto + "</div>";
}