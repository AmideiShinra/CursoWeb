const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");
const preguntas = [
	{
		pregunta:
			"Cual de estas etiquetas se utiliza para crear un boton: ",
		respuestas: {
			a: image01,
			b: "&lt;p&gt;&lt;/p&gt;",
			c: "&lt;form&gt;&lt;/form&gt;",
		},
		respuestaCorrecta: "a",
	},
];

function mostrarTest() {
	const preguntasYrespuestas = [];

	preguntas.forEach(
		(preguntaActual, numeroDePregunta) => {
			const respuestas = [];
            console.log(respuestas);
			for (letraRespuesta in preguntaActual.respuestas) {
				respuestas.push(
					`<label>
                    <input type="radio" src="" name="${numeroDePregunta}" value="${letraRespuesta}">
                    ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
                    </label>

                    `
				);
			}
			preguntasYrespuestas.push(
				`
            <div class="cuestion"> ${
				preguntaActual.pregunta
			} </div>
            <div class="respuestas">${respuestas.join(
				""
			)} </div>
            `
			);
		}
	);
	contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
	const respuestas =
		contenedor.querySelectorAll(".respuestas");
	let respuestasCorrectas = 0;

	preguntas.forEach(
		(preguntaActual, numeroDePregunta) => {
			const todasLasRespuestas =
				respuestas[numeroDePregunta];
			const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
			const respuestaElegida = (
				todasLasRespuestas.querySelector(
					checkboxRespuestas
				) || {}
			).value;

			if (
				respuestaElegida ===
				preguntaActual.respuestaCorrecta
			) {
				respuestasCorrectas++;

				respuestas[numeroDePregunta].style.color =
					"blue";
			} else {
				respuestas[numeroDePregunta].style.color =
					"red";
			}
		}
	);

	resultadoTest.innerHTML =
		"Usted ha acertado " +
		respuestasCorrectas +
		" preguntas de un total de " +
		preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);
