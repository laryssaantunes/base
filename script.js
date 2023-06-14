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
        <div class = "card-title">
        <div class = "card">
        <div class = "card-h3">
        <div class = "card-p">
        <div class ="rosa">${this.nome}</div>
        <div class ="rosa">${this.datadecadastro}</div>
        <div class ="rosa">${this.descricao}</div>
        <div class ="rosa">${this.preco}</div>
        </div>
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
            <div class = "card-title">
            <div class = "card">
            <div class = "card-h3">
            <div class = "card-p">
            <img src = "${this.produto_destaque}"  class= ".card-img"
            <div class = "rosa">${this.datadecadastro}</div>
            <div class = "rosa">${this.descricao}</div>
            <div class = "rosa">${this.preco}</div>
            <div class = "rosa">${this.produto_destaque}</div>
            </div>
            `;

            //return this.nome + this.datadecadastro + this.descricao + this.preco + this.produto_destaque//
        }
}

const produto = new ProdutoDestaque("Esmalte ", "14/10/2022", "Esmalte", "10,00", "https://epocacosmeticos.vteximg.com.br/arquivos/ids/478240-320-320/esmalte-cremoso-dailus-nude-tons-escuros--5-.jpg?v=637815147554430000");
console.log(produto.mostrarProdutoDestaque());    
const div = document.getElementById('produto_destaque');
div.insertAdjacentHTML('afterbegin',produto.mostrarProdutoDestaque());

const produtoo = new ProdutoDestaque("Esmalte ", "14/10/2022", "Esmalte", "10,00", "https://epocacosmeticos.vteximg.com.br/arquivos/ids/478240-320-320/esmalte-cremoso-dailus-nude-tons-escuros--5-.jpg?v=637815147554430000");
console.log(produto.mostrarProdutoDestaque());    
const divs = document.getElementById('produto_destaque');
div.insertAdjacentHTML('afterbegin',produto.mostrarProdutoDestaque());

const produto2 = new  ProdutoDestaque("Esmalte", "16/10/2022", "Esmalte", "5,00", "https://epocacosmeticos.vteximg.com.br/arquivos/ids/478240-320-320/esmalte-cremoso-dailus-nude-tons-escuros--5-.jpg?v=637815147554430000")
console.log(produto.mostrarProdutoDestaque());    
const div2 = document.getElementById('produto_destaque');
div2.insertAdjacentHTML('afterbegin',produto.mostrarProdutoDestaque());

const produto3 = new ProdutoDestaque("Esmalte ", "17/10/2022", "Esmalte", "10,00", "https://epocacosmeticos.vteximg.com.br/arquivos/ids/478240-320-320/esmalte-cremoso-dailus-nude-tons-escuros--5-.jpg?v=637815147554430000");
console.log(produto.mostrarProdutoDestaque());  
const div3 = document.getElementById('produto_destaque');
div3.insertAdjacentHTML('afterbegin',produto.mostrarProdutoDestaque());

const produto4 = new ProdutoDestaque("Esmalte ", "18/10/2022", "Esmalte", "5,50", "https://epocacosmeticos.vteximg.com.br/arquivos/ids/478240-320-320/esmalte-cremoso-dailus-nude-tons-escuros--5-.jpg?v=637815147554430000");
console.log(produto4.mostrarProdutoDestaque());    
const div4 = document.getElementById('produto_destaque');
div4.insertAdjacentHTML('afterbegin',produto.mostrarProdutoDestaque());

const produto5 = new ProdutoDestaque("Esmalte ", "19/10/2022", "Esmalte", "6,00", "https://epocacosmeticos.vteximg.com.br/arquivos/ids/478240-320-320/esmalte-cremoso-dailus-nude-tons-escuros--5-.jpg?v=637815147554430000");
console.log(produto5.mostrarProdutoDestaque());  
const div5 = document.getElementById('produto_destaque');
div5.insertAdjacentHTML('afterbegin',produto.mostrarProdutoDestaque());

const produto1 = new Produto ("Esmalte ", "14/10/2022", "Esmalte", "10,00");
console.log(produto.mostrar_dados());    
const diva = document.getElementById('lista_produtos');
div.insertAdjacentHTML('afterbegin',produto.mostrar_dados());

const produtoo0 = new Produto ("Esmalte ", "14/10/2022", "Esmalte", "10,00");
console.log(produto.mostrar_dados());    
const div0 = document.getElementById('lista_destaque');
div.insertAdjacentHTML('afterbegin',produto.mostrar_dados())

const produto22 = new  Produto ("Esmalte", "16/10/2022", "Esmalte", "5,00")
console.log(produto.mostrar_dados());    
const div22 = document.getElementById('lista_destaque');
div2.insertAdjacentHTML('afterbegin',produto.mostrar_dados());

const produto33 = new Produto ("Esmalte ", "17/10/2022", "Esmalte", "10,00");
console.log(produto.mostrar_dados());  
const div33 = document.getElementById('lista_destaque');
div3.insertAdjacentHTML('afterbegin',produto.mostrar_dados());

const produto44 = new Produto ("Esmalte ", "18/10/2022", "Esmalte", "5,50");
console.log(produto4.mostrar_dados());    
const div44 = document.getElementById('lista_destaque');
div4.insertAdjacentHTML('afterbegin',produto.mostrar_dados());

const produto55 = new Produto ("Esmalte ", "19/10/2022", "Esmalte", "6,00");
console.log(produto5.mostrar_dados());  
const div55 = document.getElementById('lista_destaque');
div5.insertAdjacentHTML('afterbegin',produto.mostrar_dados());
