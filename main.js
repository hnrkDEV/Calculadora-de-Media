
const form = document.getElementById("form")
    form.addEventListener('submit', function(e){
        const atividadeNome = document.getElementById('activityName').value;
        const nota = document.getElementById('nota').value;
        e.preventDefault()
        console.log(atividadeNome)
        console.log(nota)
        document.getElementById('nota').value = ""
        document.getElementById('activityName').value = ""
    
    })

/* function adicionar() {

} */