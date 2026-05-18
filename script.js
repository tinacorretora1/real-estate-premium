const empreendimentos = [
  {
    nome: "Vista Prime Residence",
    descricao: "Apartamento alto padrão com lazer completo.",
    whatsapp: "5511999999999"
  },
  {
    nome: "Sky Tower Luxury",
    descricao: "Projeto moderno no melhor endereço.",
    whatsapp: "5511988888888"
  }
];

const cards = document.getElementById("cards");

empreendimentos.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<h3>${item.nome}</h3><p>${item.descricao}</p>`;
  card.onclick = () => abrirModal(item);
  cards.appendChild(card);
});

function abrirModal(item) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-titulo").innerText = item.nome;
  document.getElementById("modal-desc").innerText = item.descricao;
  document.getElementById("modal-whats").href =
    `https://wa.me/${item.whatsapp}?text=Olá, tenho interesse no ${item.nome}`;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}