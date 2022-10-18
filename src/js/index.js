/*

    Debug de JavaScript passo a passo no navegador. Logo, irá executar linha a linha o código.


    OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba que foi clicada pelo usuário e esconder o conteúdo da aba anterior.

    - Passo 1 - Pegar os elementos que representam as abas no HTML.

    - Passo 2 - Identificar o clique no elemento da aba.

    - Passo 3 - Quando usuário clicar, desmarcar a aba selecionada.

    - Passo 4 - Marcar a aba clicada como selecionado.

    - Passo 5 - Esconder o conteúdo anterior.

    - Passo 6 - Mostrar o conteúdo da aba selecionada.
*/

// Passo 1 - Pegar os elementos que representam as abas no HTML.
    //console.log(document);
    //console.log(document.querySelectorAll(".aba"));
    const abas = document.querySelectorAll(".aba");
    //console.log(abas);
    // Estou buscando todos os elementos do document 'HTML' selecionando tudo que estiver com o termo aba 'class'. E estou jogando na variavel abas o qual poderá utilizada em todos o JS.
    // const está definindo que o abas é uma constante e não poderá ser alterada. Ou seja, os valores atribuidos nessa variavel não serão alteradas.


    abas.forEach(aba => {
        // Passo 2 - Identificar o clique no elemento da aba.
        console.log(aba);


        aba.addEventListener("click", function(){
            //console.log("Clicou na aba", aba);
            

            // BONUS - Refatorando o código para melhorar a manutenção e debug. Criando funções para executar certos trechos de códigos.
            selecionarAba(aba);
            mostrarInforcoesDaAba(aba);
            
            
        });
    });

    // BONUS - Refatorando o código para melhorar a manutenção e debug. Criando funções para executar certos trechos de códigos.

    function selecionarAba(aba){

        // Passo 3 - Quando usuário clicar, desmarcar a aba selecionada.
        const abaSelecionada = document.querySelector('.aba.selecionado')
        //console.log(abaSelecionada);
        // Estou encontrando o class 'aba selecionado' da lista para futuramente retirar o css dela.
        // Verificando quais classes estão dentro da abaSelecionada com o 'classList'.
        //console.log(abaSelecionada.classList);
        // Removendo a class do HTML. 
        abaSelecionada.classList.remove("selecionado");

        // Passo 4 - Marcar a aba clicada como selecionado.
        //console.log(aba);
        // Ao clicar eu já estou clicando diretamente na aba o qual deverá ser atribuida a class 'selecionado'.
        aba.classList.add("selecionado");

        // Passo 4
        // Estou evitando que o JavaScript execute códigos o qual já contém a informação da class "selecionado". Com isso, ganha-se tempo de execução do código.
        // console.log(aba.classList.contains("selecionado"));
        if(aba.classList.contains("selecionado")){
            // Caso seja true o 'return' não irá executar o código de baixo.
            //console.log('Valor é "true" ENTROU no if')
            return;
        }
        //console.log('NÃO entrou no if');

    }

    function mostrarInforcoesDaAba(aba){
        // Passo 5 - Esconder o conteúdo anterior.
        const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        //console.log(informacaoSelecionada);
        informacaoSelecionada.classList.remove("selecionado");
        
        //Passo 6 - Mostrar o conteúdo da aba selecionada.
        // Para isso, criei os IDs no Menu e nas Informações.
        //console.log(aba.id);
        // Estou pegando a informacao contida no ID do menu da aba e concatenando. Pode ser feito de duas formas:
        //const IdDoElementoInformacaoDaAba = "informacao" + aba.id;
        const IdDoElementoInformacaoDaAba = `informacao-${aba.id}`; //Crase ``
        //console.log(IdDoElementoInformacaoDaAba);

        const informacaoQueSeraMostrada = document.getElementById(IdDoElementoInformacaoDaAba);
        informacaoQueSeraMostrada.classList.add("selecionado");
    }