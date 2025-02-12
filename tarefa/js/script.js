const produtos = [
    { nome: "Gloss Kiko", preco: 19.00, imagem: "https://http2.mlstatic.com/D_NQ_NP_935913-MLU74979423535_032024-O.webp" },
    { nome: "Gloss Melu", preco: 33.00, imagem: "https://cdn.awsli.com.br/600x450/2752/2752602/produto/280873862/648746-0-fjqlk7bnjt.jpg" },
    { nome: "Gloss LipHoney", preco: 68.00, imagem: "https://tfczxi.vtexassets.com/arquivos/ids/196280-800-auto?v=638715185968570000&width=800&height=auto&aspect=true" },
    
];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalElement = document.getElementById("total");

let carrinho = [];

function exibirProdutos() {
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            Adicionar ao Carrinho</button>
        `;
        produtosDiv.appendChild(produtoDiv);
    });
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach((item, index) => {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

exibirProdutos();