/ divListaProduto.insertAdjacentHTML('afterbegin', '');

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
div.inersetjacentHTML('afterbegin',mostrarProdutosDestaque());

const produtoa = ProdutoDestaque("Livro Harry Potter e a ordem da fênix ", "16/10/2022", "garrafa Harry Poter", "60,00", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fharrypotter.fandom.com%2Fpt-br%2Fwiki%2FHarry_Potter_e_a_Ordem_da_F%25C3%25AAnix&psig=AOvVaw2wYQMkOLeFjU1ecwaVI68Y&ust=1684329003414000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCOjFh9f0-f4CFQAAAAAdAAAAABAO ");
console.log(mostrarProdutosDestaque());    
document.getElementById("produtoDestaque");
div.inersetjacentHTML('afterbegin',mostrarProdutosDestaque());

const produtor = ProdutoDestaque("garrafa Harry Potter ", "17/10/2022", "garrafa Harry Poter", "90,00", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tutt.com.br%2Fgarrafa-de-vidro-eco-polyjuice-harry-potter-450ml%2Fp%2F38864&psig=AOvVaw3_OxP8ZQTq2a6k4foXxzDY&ust=1684329223927000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJDIvLz1-f4CFQAAAAAdAAAAABAM");
console.log(mostrarProdutosDestaque());    
document.getElementById("produtoDestaque");
div.inersetjacentHTML('afterbegin',mostrarProdutosDestaque());

const produtoi = ProdutoDestaque("garrafa Harry Potter ", "18/10/2022", "garrafa Harry Poter", "150,00", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lalalipe.com.br%2Fgarrafa-de-plastico-puket-harry-potter-vermelho-450ml-050402018.html&psig=AOvVaw3_OxP8ZQTq2a6k4foXxzDY&ust=1684329223927000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJDIvLz1-f4CFQAAAAAdAAAAABAW");
console.log(mostrarProdutosDestaque());    
document.getElementById("produtoDestaque");
div.inersetjacentHTML('afterbegin',mostrarProdutosDestaque());

const produton = ProdutoDestaque("garrafa Harry Potter ", "19/10/2022", "garrafa Harry Poter", "70,00,", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nerdbemtrajado.com.br%2Fproducts%2Fgarrafa-harry-potter&psig=AOvVaw3_OxP8ZQTq2a6k4foXxzDY&ust=1684329223927000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJDIvLz1-f4CFQAAAAAdAAAAABBM");
console.log(mostrarProdutosDestaque());    
document.getElementById("produtoDestaque");
div.inersetjacentHTML('afterbegin',mostrarProdutosDestaque());