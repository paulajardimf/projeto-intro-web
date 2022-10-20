const expansao1 = {
  nomeExpansao: "The Sims 4: Ao Trabalho",
  anoLancamento: 2015,
  adicionaNovoMundo: true,
  tema: ["Profissões", "Negócios"],
  imagem: "./img/Capa_The_Sims_4_Ao_Trabalho.jpg"
};

const expansao2 = {
  nomeExpansao: "The Sims 4: Junte-se à Galera",
  anoLancamento: 2015,
  adicionaNovoMundo: true,
  tema: ["Festas", "Eventos"],
  imagem: "./img/Capa_The_Sims_4_Junte-se_a_Galera.jpg"
};

const expansao3 = {
  nomeExpansao: "The Sims 4: Vida na Cidade",
  anoLancamento: 2016,
  adicionaNovoMundo: true,
  tema: ["Vida Noturna", "Cidade"],
  imagem: "./img/Capa_The_Sims_4_Vida_na_Cidade.jpg"
};

const expansao4 = {
  nomeExpansao: "The Sims 4: Gatos e Cães",
  anoLancamento: 2017,
  adicionaNovoMundo: true,
  tema: ["Animais", "Veterinário"],
  imagem: "./img/Capa_The_Sims_4_Gatos_e_Caes.jpg"
};

const expansao5 = {
  nomeExpansao: "The Sims 4: Estações",
  anoLancamento: 2018,
  adicionaNovoMundo: false,
  tema: ["Estações", "Clima"],
  imagem: "./img/Capa_The_Sims_4_Estacoes.jpg"
};

const expansao6 = {
  nomeExpansao: "The Sims 4: Rumo à Fama",
  anoLancamento: 2018,
  adicionaNovoMundo: true,
  tema: ["Fama", "Celebridade"],
  imagem: "./img/Capa_The_Sims_4_Rumo_a_Fama.jpg"
};

const expansao7 = {
  nomeExpansao: "The Sims 4: Ilhas Tropicais",
  anoLancamento: 2019,
  adicionaNovoMundo: true,
  tema: ["Ilha", "Praia"],
  imagem: "./img/Capa_The_Sims_4_Ilhas_Tropicais.jpg"
};
const expansao8 = {
  nomeExpansao: "The Sims 4: Vida Universitária",
  anoLancamento: 2019,
  adicionaNovoMundo: true,
  tema: ["Universidade", "Estudante"],
  imagem: "./img/Capa_The_Sims_4_Vida_Universitaria.jpg"
};

const expansao9 = {
  nomeExpansao: "The Sims 4: Vida Sustentável",
  anoLancamento: 2020,
  adicionaNovoMundo: true,
  tema: ["Sustentabilidade", "Meio Ambiente"],
  imagem: "./img/Capa_The_Sims_4_Vida_Sustentavel.jpg"
};

const expansao10 = {
  nomeExpansao: "The Sims 4: Diversão na Neve",
  anoLancamento: 2020,
  adicionaNovoMundo: true,
  tema: ["Aventura", "Neve"],
  imagem: "./img/Capa_The_Sims_4_Diversao_na_Neve.jpg"
};

const expansao11 = {
  nomeExpansao: "The Sims 4: Vida Campestre",
  anoLancamento: 2021,
  adicionaNovoMundo: true,
  tema: ["Fazenda", "Natureza"],
  imagem: "./img/Capa_The_Sims_4_Vida_Campestre.jpg"
};

const expansao12 = {
  nomeExpansao: "The Sims 4: Vida no Ensino Médio",
  anoLancamento: 2022,
  adicionaNovoMundo: true,
  tema: ["Adolescente", "Escola"],
  imagem: "./img/Capa_The_Sims_4_Vida_no_Ensino_Medio.jpg"
};

const expansoes = [];

if (expansao1.adicionaNovoMundo === true) {
  expansoes.push(expansao1);
} else {
  console.log(`O item ${expansao1.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao2.adicionaNovoMundo) {
  expansoes.push(expansao2);
} else {
  console.log(`O item ${expansao2.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao3.adicionaNovoMundo) {
  expansoes.push(expansao3);
} else {
  console.log(`O item ${expansao3.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao4.adicionaNovoMundo) {
  expansoes.push(expansao4);
} else {
  console.log(`O item ${expansao4.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao5.adicionaNovoMundo) {
  expansoes.push(expansao5);
} else {
  console.log(`O item ${expansao5.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao6.adicionaNovoMundo) {
  expansoes.push(expansao6);
} else {
  console.log(`O item ${expansao6.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao7.adicionaNovoMundo) {
  expansoes.push(expansao7);
} else {
  console.log(`O item ${expansao7.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao8.adicionaNovoMundo) {
  expansoes.push(expansao8);
} else {
  console.log(`O item ${expansao8.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao9.adicionaNovoMundo) {
  expansoes.push(expansao9);
} else {
  console.log(`O item ${expansao9.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao10.adicionaNovoMundo) {
  expansoes.push(expansao10);
} else {
  console.log(`O item ${expansao10.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao11.adicionaNovoMundo) {
  expansoes.push(expansao11);
} else {
  console.log(`O item ${expansao11.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao12.adicionaNovoMundo) {
  expansoes.push(expansao12);
} else {
  console.log(`O item ${expansao12.nomeExpansao} não foi adicionado ao array.`);
}

// laço para imprimir os temas das expansões em string
for (const i in expansoes) {
  expansoes[i].tema = expansoes[i].tema.toString();
  console.log(expansoes[i].tema);
}

// Função que retorna um objeto como string
function objectToString(objeto) {
  let relatorio = "";
  for (const i in objeto) {
    relatorio = `${relatorio}\n${[i]}: ${objeto[i]}`;
  }
  return relatorio;
}

// Array com todos os objetos
const todasAsExpansoes = [expansao1, expansao2, expansao3, expansao4, expansao5, expansao6, expansao7, expansao8, expansao9, expansao10, expansao11, expansao12];

// Função que busca expansão no array de expansões
function filtraArrayDeExpansoes(arrayDeObj, string) {
  for (let i in arrayDeObj) {
    if (arrayDeObj[i].nomeExpansao === string) {
      return arrayDeObj[i];
    }
  }
  return alert(`Sua busca ${string} não foi encontrada.`);
}
console.log(filtraArrayDeExpansoes(todasAsExpansoes, "The Sims 4: Junte-se à Galera"));


// DOM

function buscarExpansaoPeloNome(array, name) {
  const expansoes = array.filter((expansao)=> expansao.nomeExpansao.toLowerCase().includes(name.toLowerCase()));

  if(expansoes.length){
    return expansoes;
  } else {
    return array;
  }
}

function buscarExpansao(){
  const input = document.querySelector('.input').value;
  if(!input){
    alert('Digite um nome de uma expansão válida!');
  } else {
    const expansaoFiltro = buscarExpansaoPeloNome(todasAsExpansoes, input);
    console.log(expansaoFiltro, 'a');
    criarObjetosNoHtml(expansaoFiltro);
  }
}

// adicionar objetos no HTML
function criarObjetosNoHtml (array) {
  let container = document.getElementsByClassName('container')[0]
  container.innerHTML= ""
  let card = ""
  array.map(element => {
    card = `<section class="card">
      <img src="${element.imagem}">
      <ul>
        <li>Nome: ${element.nomeExpansao.toUpperCase()}</li>
        <li>Ano de Lançamento: ${element.anoLancamento}</li>
        <li>Novo mundo: ${element.adicionaNovoMundo}</li>
        <li>Tema: ${element.tema}</li>
      </ul>
    </section>
    `
    container.innerHTML += card;
  });
}

criarObjetosNoHtml(todasAsExpansoes)

