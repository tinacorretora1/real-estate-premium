// ===== BASE DE DADOS SIMPLES =====
const defaultEmpreendimentos = [
  {
    id: 1,
    nome: "Vista Prime Residence",
    local: "Alphaville - SP",
    preco: "A partir de R$ 1.200.000",
    descricao: "Empreendimento de alto padrão com lazer completo.",
    imagem: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    whatsapp: "5511999999999"
  }
];

// Carrega do localStorage ou usa padrão
let empreendimentos =
  JSON.parse(localStorage.getItem("empreendimentos")) ||
  defaultEmpreendimentos;

const cards = document.getElementById("cards");

// ===== RENDER =====
function renderEmpreendimentos() {
  cards.innerHTML = "";

  empreendimentos.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}">
      <div class="card-body">
        <h3>${item.nome}</h3>
        <p class="local">${item.local}</p>
        <p class="preco">${item.preco}</p>
        <button onclick='abrirModal(${JSON.stringify(item)})'>
          Ver detalhes
        </button>
      </div>
    `;
    cards.appendChild(card);
  });
}

renderEmpreendimentos();

// ===== MODAL =====
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

// ===== ADMIN SIMPLES =====
function adicionarEmpreendimento() {
  const novo = {
    id: Date.now(),
    nome: nome.value,
    local: local.value,
    preco: preco.value,
    descricao: descricao.value,
    imagem: imagem.value,
    whatsapp: whatsapp.value
  };

  empreendimentos.push(novo);
  localStorage.setItem("empreendimentos", JSON.stringify(empreendimentos));
  renderEmpreendimentos();
  alert("Empreendimento adicionado ✅");
}
