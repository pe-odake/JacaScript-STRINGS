const senha = "kaiki";

document.getElementById("verificar").addEventListener("click", function() {
const senhainserida = document.getElementById("senha").value;
const resultado = document.getElementById("resultado");

if (senhainserida === senha) {
    resultado.textContent = "Senha correta!";
    resultado.style.color = "green";
} else{
    resultado.textContent = "Senha incorreta!";
    resultado.style.color = "red";
}
});

