// divListaProduto.insertAdjacentHTML('afterbegin', '');//

class Produto {
    constructor(nome, datadecadastro, descricao, preco){
        this.nome = nome;
        this.datadecadastro = datadecadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrar_dados(){
        return `
        <div class = "produtos-card">
        <div class ="rosa">${this.nome}</div>
        <div class ="rosa">${this.datadecadastro}</div>
        <div class ="rosa">${this.descricao}</div>
        <div class ="rosa">${this.preco}</div>
        `;
       // return this.nome +  this.datadecadastro + this.descricao + this.preco;//

    }
}

class ProdutoDestaque extends Produto{
        constructor(nome, datadecadastro , descricao, preco, produto_destaque){
            super(nome, datadecadastro, descricao, preco );
            this.produto_destaque = produto_destaque;
            
        }
        mostrarProdutoDestaque(){
            return `
            <div class = "produtos-card">
            <img src = "${this.produto_destaque}">
            <div class = "rosa">${this.datadecadastro}</div>
            <div class = "rosa">${this.descricao}</div>
            <div class = "rosa">${this.preco}</div>
            <div class = "rosa">${this.produto_destaque}</div>
            `;

            //return this.nome + this.datadecadastro + this.descricao + this.preco + this.produto_destaque//
        }
}

const produto = new ProdutoDestaque("garrafa Harry Potter ", "14/10/2022", "garrafa Harry Poter", "100,30", "https://mimeria.fbitsstatic.net/img/p/garrafa-termica-buck-harry-potter-mapa-do-marato-400-ml-76719/263395-1.jpg?w=770&h=770&v=no-change&qs=ignore");
console.log(produto.mostrarProdutoDestaque());    
const div = document.getElementById('produto_destaque');
div.insertAdjacentHTML('afterbegin',produto.mostrarProdutoDestaque());

const produto2 = new  ProdutoDestaque("Livro Harry Potter e a ordem da fênix ", "16/10/2022", "garrafa Harry Poter", "60,00", "https://mimeria.fbitsstatic.net/img/p/garrafa-termica-buck-harry-potter-mapa-do-marato-400-ml-76719/263395-1.jpg?w=770&h=770&v=no-change&qs=ignore")
const div2 = document.getElementById('produto_destaque');
div2.insertAdjacentHTML('afterbegin',produto2.mostrarProdutoDestaque());

const produto3 = new ProdutoDestaque("garrafa Harry Potter ", "17/10/2022", "garrafa Harry Poter", "90,00", "https://mimeria.fbitsstatic.net/img/p/garrafa-termica-buck-harry-potter-mapa-do-marato-400-ml-76719/263395-1.jpg?w=770&h=770&v=no-change&qs=ignore");
const div3 = document.getElementById('produto_destaque');
div3.insertAdjacentHTML('afterbegin',produto3.mostrarProdutoDestaque());

const produto4 = new ProdutoDestaque("garrafa Harry Potter ", "18/10/2022", "garrafa Harry Poter", "150,00", "https://mimeria.fbitsstatic.net/img/p/garrafa-termica-buck-harry-potter-mapa-do-marato-400-ml-76719/263395-1.jpg?w=770&h=770&v=no-change&qs=ignore");
console.log(produto4.mostrarProdutoDestaque());    
const div4 = document.getElementById('produto_destaque');
div4.insertAdjacentHTML('afterbegin',produto4.mostrarProdutoDestaque());

const produto5 = new ProdutoDestaque("garrafa Harry Potter ", "19/10/2022", "garrafa Harry Poter", "70,00,", "https://mimeria.fbitsstatic.net/img/p/garrafa-termica-buck-harry-potter-mapa-do-marato-400-ml-76719/263395-1.jpg?w=770&h=770&v=no-change&qs=ignore");
console.log(produto5.mostrarProdutoDestaque());  
const div5 = document.getElementById('produto_destaque');
div5.insertAdjacentHTML('afterbegin',produto5.mostrarProdutoDestaque());