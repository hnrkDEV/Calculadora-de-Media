
const form = document.getElementById("form")
    form.addEventListener('submit', function(e){
        const atividadeNome = document.getElementById('activityName').value;
        const nota = document.getElementById('nota').value;
        e.preventDefault()
        console.log(atividadeNome)
        console.log(nota)
        document.getElementById('nota').value = ""
        document.getElementById('activityName').value = ""
        document.getElementById('tablealuno').innerHTML += `<tr>
        <td>${atividadeNome}</td>
        <td> ${nota}</td>
        </tr>`
        const table = document.querySelector(".tableDiv")
        
    
    })

/* function adicionar() {

} */