let formulario = document.getElementById("formulario");
let nomes_pets = [];
let especies_pets = [];
let resultado_espera = document.getElementById("resultado_espera");











formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let especie = document.getElementById("especie").value;
    
    
    let ePrioridade = document.getElementById("prio_sim").checked;

    adicionar(nome, especie, ePrioridade);

    formulario.reset();
});









function adicionar(nome_parametro, especie_parametro, prioridade) {
    if (prioridade) {
        nomes_pets.splice(0, 0, nome_parametro);
        especies_pets.splice(0, 0, especie_parametro);
    } else {
        nomes_pets.push(nome_parametro);
        especies_pets.push(especie_parametro);
    }

    listar();
}







function listar() {
    resultado_espera.innerHTML = "";

    for (let i = 0; i < nomes_pets.length; i++) {
        resultado_espera.innerHTML += `
            <div style="margin-top: 10px;">
                Ordem: ${i + 1}º - Pet: <b>${nomes_pets[i]}</b> - Espécie: ${especies_pets[i]} 
                <button type="button" onclick="editar(${i})">Editar</button>
                <button type="button" onclick="excluir(${i})">Excluir</button>
            </div>`;
    }
}










function atender() {
    if (nomes_pets.length > 0) {
        nomes_pets.shift();
        especies_pets.shift();
        listar();
    } else {
        alert("A fila está vazia!");
    }
}









function excluir(indice) {
    if (confirm("Deseja realmente excluir este pet?")) {
        nomes_pets.splice(indice, 1);
        especies_pets.splice(indice, 1);
        listar();
    }
}












function editar(indice) {
    let novoNome = prompt("Digite o novo nome para o pet:", nomes_pets[indice]);
    if (novoNome != null && novoNome != "") {
        nomes_pets[indice] = novoNome;
        listar();
    }
}