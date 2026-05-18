const empreendimentos = [
  {
    nome: "Vista Prime Residence",
    local: "Alphaville - SP",
    preco: "A partir de R$ 1.200.000",
    descricao: "Empreendimento de alto padrão com lazer completo.",
    imagem: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    whatsapp: "5511999999999"
  },
  {
    nome: "Sky Tower Luxury",
    local: "São Paulo - SP",
    preco: "A partir de R$ 980.000",
    descricao: "Design moderno e localização estratégica.",
    imagem: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    whatsapp: "5511988888888"
  }
];

const cards = document.getElementById("cards");

empreendimentos.forEach(item => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${item.imagem}" alt="${item.nome}">
    <div class="card-body">
      <h3>${item.nome}</h3>
      <p>${item.local}</p>
      <div class="preco">${item.preco}</div>
      <button onclick='abrirModal(${JSON.stringify(item)})'>
        Ver detalhes
      </button>
    </div>
  `;
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
