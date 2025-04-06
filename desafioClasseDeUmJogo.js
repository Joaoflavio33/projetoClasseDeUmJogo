    //Classe que representa o herói do jogo
    // Atributos: nome, idade, tipo
        class Heroi {
        constructor (nome, idade, tipo) {
            this.nome = nome;
            this.idade = idade;
            this.tipo = tipo;
        }
    
        atacar() {
        let ataque = "";
    
        // Verifica o tipo do herói e define o ataque correspondente
        if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        }
        else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        }
        else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        
        } else if (this.tipo === "mago") {
            ataque = "usou magia";
        
        } else {
            ataque = "ataque desconhecido";
    
        }
        
        console.log(`O ${ this.tipo } atacou usando ${ataque}`);    
        }
        }
    
        //função para executar o código
        function executar(nome, idade, tipo) {
    
        // Criando os heróis
        const herois = [
        new Heroi("João", 20, "ninja"),
        new Heroi("Carlos", 30, "monge"),
        new Heroi("Ana", 22, "guerreiro"),
        new Heroi("Maria", 28, "mago")
        ];
      
        for (let i = 0; i < herois.length; i++) {
            herois[i].atacar();
        }
        }
        //executando a função de ataque
        executar();
