
const form = document.getElementById("form")
 form.addEventListener('submit', function(e){
        e.preventDefault();
 
        const inputNomeAtividade = document.getElementById("activityName");
        const inputNotaAtividade = document.getElementById("nota");
         
        let linha = "<tr>";
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? "aprovado" : "reprovado"}</td>`;
        linha += "</tr>";
        
        const corpoTabela = document.querySelector("tbody");
        corpoTabela.innerHTML = linha;

    });



 

