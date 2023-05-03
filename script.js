// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, datadecadastro, descricao, preco){
        this.nome = nome;
        this.datadecadastro = datadecadastro;
        this.descricao = descricao;
        this.preco = preco;
    }

    mostrar_dados(){
        return `
        <div div>${this.nome}</div>
        <div div>${this.datadecadastro}</div>
        <div div>${this.descricao}</div>
        <div div>${this.preco}</div>
        `
       // return this.nome +  this.datadecadastro + this.descricao + this.preco;//

    }
}

class ProdutoDestaque extends Produto{
        constructor(nome, datadecadastro , inscricao, preco, produto_destaque){
            super(nome, datadecadastro, inscricao, preco );
            this.produto_destaque = produto_destaque;
            
        }
        mostrarProdutoDestaque(){
            return `
            <div div>${this.nome}</div>
            <div div>${this.datadecadastro}</div>
            <div div>${this.descricao}</div>
            <div div>${this.preco}</div>
            <div div>${this.produto_destaque}</div>
            `

            //return this.nome + this.datadecadastro + this.descricao + this.preco + this.produto_destaque//
        }
}

const produtom = ProdutoDestaque("garrafa Harry Potter ", "14/10/2022", "garrafa Harry Poter", "100,30", "https://mimeria.fbitsstatic.net/img/p/garrafa-termica-buck-harry-potter-mapa-do-marato-400-ml-76719/263395-1.jpg?w=770&h=770&v=no-change&qs=ignore");
console.log(mostrarProdutosDestaque());    
document.getElementById("produtoDestaque");
div.inersetjacentHTML('afterbegin',mostrarProdutosDestaque())  ;


