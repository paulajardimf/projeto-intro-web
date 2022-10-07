const expansao1 = {
  nomeExpansao: "The Sims 4: Ao Trabalho",
  anoLancamento: 2015,
  adicionaNovoMundo: true,
  tema: ["Profissões", "Negócios"],
  imagem: ""
};

const expansao2 = {
  nomeExpansao: "The Sims 4: Junte-se à Galera",
  anoLancamento: 2015,
  adicionaNovoMundo: true,
  tema: ["Festas", "Eventos"],
  imagem: ""
};

const expansao3 = {
  nomeExpansao: "The Sims 4: Vida na Cidade",
  anoLancamento: 2016,
  adicionaNovoMundo: true,
  tema: ["Vida Noturna", "Cidade"],
  imagem: ""
};

const expansao4 = {
  nomeExpansao: "The Sims 4: Gatos e Cães",
  anoLancamento: 2017,
  adicionaNovoMundo: true,
  tema: ["Animais", "Veterinário"],
  imagem: ""
};

const expansao5 = {
  nomeExpansao: "The Sims 4: Estações",
  anoLancamento: 2018,
  adicionaNovoMundo: false,
  tema: ["Estações", "Clima"],
  imagem: ""
};

const expansao6 = {
  nomeExpansao: "The Sims 4: Rumo à Fama",
  anoLancamento: 2018,
  adicionaNovoMundo: true,
  tema: ["Fama", "Celebridade"],
  imagem: ""
};

const expansao7 = {
  nomeExpansao: "The Sims 4: Ilhas Tropicais",
  anoLancamento: 2019,
  adicionaNovoMundo: true,
  tema: ["Ilha", "Praia"],
  imagem: ""
};
const expansao8 = {
  nomeExpansao: "The Sims 4: Vida Universitária",
  anoLancamento: 2019,
  adicionaNovoMundo: true,
  tema: ["Universidade", "Estudante"],
  imagem: ""
};

const expansao9 = {
  nomeExpansao: "The Sims 4: Vida Sustentável",
  anoLancamento: 2020,
  adicionaNovoMundo: true,
  tema: ["Sustentabilidade", "Meio Ambiente"],
  imagem: ""
};

const expansao10 = {
  nomeExpansao: "The Sims 4: Diversão na Neve",
  anoLancamento: 2020,
  adicionaNovoMundo: true,
  tema: ["Aventura", "Neve"],
  imagem: ""
};

const expansao11 = {
  nomeExpansao: "The Sims 4: Vida Campestre",
  anoLancamento: 2021,
  adicionaNovoMundo: true,
  tema: ["Fazenda", "Natureza"],
  imagem: ""
};

const expansao12 = {
  nomeExpansao: "The Sims 4: Vida no Ensino Médio",
  anoLancamento: 2022,
  adicionaNovoMundo: true,
  tema: ["Adolescente", "Escola"],
  imagem: ""
};

const expansoes = [];

if (expansao1.adicionaNovoMundo === true) {
  expansoes.push(expansao1);
} else {
  alert(`O item ${expansao1.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao2.adicionaNovoMundo) {
  expansoes.push(expansao2);
} else {
  alert(`O item ${expansao2.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao3.adicionaNovoMundo) {
  expansoes.push(expansao3);
} else {
  alert(`O item ${expansao3.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao4.adicionaNovoMundo) {
  expansoes.push(expansao4);
} else {
  alert(`O item ${expansao4.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao5.adicionaNovoMundo) {
  expansoes.push(expansao5);
} else {
  alert(`O item ${expansao5.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao6.adicionaNovoMundo) {
  expansoes.push(expansao6);
} else {
  alert(`O item ${expansao6.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao7.adicionaNovoMundo) {
  expansoes.push(expansao7);
} else {
  alert(`O item ${expansao7.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao8.adicionaNovoMundo) {
  expansoes.push(expansao8);
} else {
  alert(`O item ${expansao8.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao9.adicionaNovoMundo) {
  expansoes.push(expansao9);
} else {
  alert(`O item ${expansao9.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao10.adicionaNovoMundo) {
  expansoes.push(expansao10);
} else {
  alert(`O item ${expansao10.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao11.adicionaNovoMundo) {
  expansoes.push(expansao11);
} else {
  alert(`O item ${expansao11.nomeExpansao} não foi adicionado ao array.`);
}

if (expansao12.adicionaNovoMundo) {
  expansoes.push(expansao12);
} else {
  alert(`O item ${expansao12.nomeExpansao} não foi adicionado ao array.`);
}

// laço para imprimir os temas das expansões em string
for (const i in expansoes) {
  expansoes[i].tema = expansoes[i].tema.toString();
  console.log(expansoes[i].tema);
}

// console.log(expansoes);

// Função que retorna um objeto como string
function objectToString(objeto) {
  let relatorio = "";
  for (const i in objeto) {
    relatorio = `${relatorio}\n${[i]}: ${objeto[i]}`;
  }
  return relatorio;
}

// Função que busca expansão no array de expansões
function filtraArrayDeExpansoes(arrayDeObj, string) {
  for (let i in arrayDeObj) {
    if (arrayDeObj[i].nomeExpansao === string) {
      return arrayDeObj[i];
    }
  }
  return alert(`Sua busca ${string} não foi encontrada.`);
}
console.log(filtraArrayDeExpansoes(expansoes, "The Sims 4: Junte-se à Galera"));
