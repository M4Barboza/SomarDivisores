function somarDivisores() {
    var valor = document.getElementById("valor").value;
    if (valor > 0) {
        let soma = 0;
        let i = 0;

        while (i < valor) {
            if (i % 3 == 0 || i % 5 == 0) {
                soma += i;
            }
            i++;
        }

        document.getElementById("resultado").innerHTML =
            "A soma dos divisores de " + valor + " é: " + soma;
    }
    else {
        document.getElementById("resultado").innerHTML =
            "Digite um valor maior que 0";
    }
}
var input = document.getElementById("valor");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btnCalcular").click(somarDivisores());
    }
});
//console.log(somaDivisiveis(10));