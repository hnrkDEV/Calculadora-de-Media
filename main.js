
const form = document.getElementById("form")
let linhas = '';
const atividades = []
const notas = []
let i = 0



 form.addEventListener('submit', function(e){
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
/*      atualizaMediaFinal(); */
    });
    
    function adicionaLinha(){
 
        const inputNomeAtividade = document.getElementById("activityName");
        const inputNotaAtividade = document.getElementById("nota");
         
            atividades.push(inputNomeAtividade.value);
            notas.push(parseFloat(inputNotaAtividade.value));

        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? "aprovado!" : "reprovado."}</td>`;
        linha += "</tr>";

        linhas += linha;

        inputNomeAtividade.value = ""
        inputNotaAtividade.value = ""
    }

    function atualizaTabela(){
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;
    }



 

