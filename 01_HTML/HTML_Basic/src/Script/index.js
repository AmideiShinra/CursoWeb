function verificarRespuestas() {
	var total = 7;
	var puntos = 0;
	var myForm = document.forms["quizForm"];
	var respuestas = ["a", "b", "a", "c", "c", "b", "a"];

	for (let i = 1; i <= total; i++) {
		if (
			myForm["p" + i].value === null ||
			myForm["p" + i].value === ""
		) {
			alert("Por favor responde a la pregunta " + i);
			return false;
		} else {
			if (
				myForm["p" + i].value === respuestas[i - 1]
			) {
				puntos++;
			}
		}
	}
	var resultado = document.getElementById("resultado");
	resultado.innerHTML =
		"<h3>Obtuviste <span>" +
		puntos +
		"</span> de <span>" +
		total +
		"</span></h3>";

	return false;
}
/*----------------------------------------------------*/
