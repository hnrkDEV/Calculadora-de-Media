
const form = document.getElementById("form")
let linhas = '';
const atividades = []
const notas = []
let divisao

 form.addEventListener('submit', function(e){
        e.preventDefault();

        adicionaLinha();
        atualizaTabela();
        atualizaMediaFinal();
        adicionaMedia();
    });
    
    function adicionaLinha(){
 
        const inputNomeAtividade = document.getElementById("activityName");
        const inputNotaAtividade = document.getElementById("nota");
         
            if(atividades.includes(inputNomeAtividade.value)){
                alert(`a Atividade ${inputNomeAtividade.value} já foi inserida`)
            }
            else {
            atividades.push(inputNomeAtividade.value);
            notas.push(parseFloat(inputNotaAtividade.value));

        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? "aprovado" : "reprovado"}</td>`;
        linha += "</tr>";

        linhas += linha;

        inputNomeAtividade.value = ""
        inputNotaAtividade.value = ""
     }
    }

    function atualizaTabela(){
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linhas;
    }

    function atualizaMediaFinal(){
        let somaDasNotas = 0

        for(let i=0 ; i<notas.length; i++) {
            somaDasNotas += notas[i]
            divisao = somaDasNotas / notas.length

    }
}
    function adicionaMedia(){
        trFoot = document.getElementById("trFoot")
        if(divisao >= 7 && notas.length>1){
            trFoot.innerHTML = "<td>Média Final</td>"
            trFoot.innerHTML += `<td>${divisao}</td>`
            trFoot.innerHTML += '<td id="resultadoAprovado">Aprovado! 😁</td>'
            document.getElementById("resultadoAprovado").style.backgroundColor = "green"
            document.getElementById("resultadoAprovado").style.borderRadius = "5px"
        }
        else if(divisao <7 && notas.length>1){
            trFoot.innerHTML = "<td>Média Final</td>"
            divisao = parseInt(divisao)
            trFoot.innerHTML += `<td>${divisao}</td>`
            trFoot.innerHTML += '<td id="resultadoReprovado">Reprovado... 😢 </td>'
            document.getElementById("resultadoReprovado").style.backgroundColor = "red"
            document.getElementById("resultadoReprovado").style.borderRadius = "5px"
        }
    }