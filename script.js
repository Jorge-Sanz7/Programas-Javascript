// script.js

document.addEventListener('DOMContentLoaded', () => {
    const pageTitle = document.title;

    if (pageTitle.includes('Ejercicio 1')) {
        ejercicio1();
    } else if (pageTitle.includes('Ejercicio 2')) {
        ejercicio2();
    } else if (pageTitle.includes('Ejercicio 3')) {
        ejercicio3();
    } else if (pageTitle.includes('Ejercicio 4')) {
        ejercicio4();
    } else if (pageTitle.includes('Ejercicio 5')) {
        ejercicio5();
    } else if (pageTitle.includes('Ejercicio 6')) {
        ejercicio6();
    } else if (pageTitle.includes('Ejercicio 7')) {
        ejercicio7();
    } else if (pageTitle.includes('Ejercicio 8')) {
        ejercicio8();
    } else if (pageTitle.includes('Ejercicio 9')) {
        ejercicio9();
    } else if (pageTitle.includes('Ejercicio 10')) {
        ejercicio10();
    }
});

function ejercicio1() {
    const calcularBtn = document.getElementById('calcularBtn');
    const capitalInput = document.getElementById('capital');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        const capital = parseFloat(capitalInput.value);
        if (isNaN(capital) || capital <= 0) {
            resultadoDiv.textContent = "❌ Por favor, introduce una cantidad válida.";
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            return;
        }

        const interes = 0.02;
        const ganancia = capital * interes;
        const total = capital + ganancia;
        resultadoDiv.textContent = `💰 La ganancia después de un mes es: $${ganancia.toFixed(2)}. El total final es: $${total.toFixed(2)}.`;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio2() {
    const calcularBtn = document.getElementById('calcularBtn');
    const sueldoBaseInput = document.getElementById('sueldoBase');
    const venta1Input = document.getElementById('venta1');
    const venta2Input = document.getElementById('venta2');
    const venta3Input = document.getElementById('venta3');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        const sueldoBase = parseFloat(sueldoBaseInput.value);
        const venta1 = parseFloat(venta1Input.value);
        const venta2 = parseFloat(venta2Input.value);
        const venta3 = parseFloat(venta3Input.value);

        if (isNaN(sueldoBase) || isNaN(venta1) || isNaN(venta2) || isNaN(venta3)) {
            resultadoDiv.textContent = "❌ Por favor, introduce valores válidos en todos los campos.";
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            return;
        }

        const totalVentas = venta1 + venta2 + venta3;
        const comision = totalVentas * 0.10;
        const totalMes = sueldoBase + comision;

        resultadoDiv.innerHTML = `
            <p>💸 Comisiones totales: $${comision.toFixed(2)}</p>
            <p>💰 Total a recibir en el mes: $${totalMes.toFixed(2)}</p>
        `;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio3() {
    const calcularBtn = document.getElementById('calcularBtn');
    const totalCompraInput = document.getElementById('totalCompra');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        const totalCompra = parseFloat(totalCompraInput.value);
        if (isNaN(totalCompra) || totalCompra <= 0) {
            resultadoDiv.textContent = "❌ Por favor, introduce una cantidad válida.";
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            return;
        }

        const descuento = totalCompra * 0.15;
        const totalPagar = totalCompra - descuento;

        resultadoDiv.innerHTML = `
            <p>🛍️ El descuento es de: $${descuento.toFixed(2)}</p>
            <p>💲 El total a pagar es: $${totalPagar.toFixed(2)}</p>
        `;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio4() {
    const calcularBtn = document.getElementById('calcularBtn');
    const parcial1Input = document.getElementById('parcial1');
    const parcial2Input = document.getElementById('parcial2');
    const parcial3Input = document.getElementById('parcial3');
    const examenFinalInput = document.getElementById('examenFinal');
    const trabajoFinalInput = document.getElementById('trabajoFinal');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        const p1 = parseFloat(parcial1Input.value);
        const p2 = parseFloat(parcial2Input.value);
        const p3 = parseFloat(parcial3Input.value);
        const examen = parseFloat(examenFinalInput.value);
        const trabajo = parseFloat(trabajoFinalInput.value);

        if (isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(examen) || isNaN(trabajo)) {
            resultadoDiv.textContent = "❌ Por favor, introduce calificaciones válidas en todos los campos.";
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            return;
        }

        const promedioParciales = (p1 + p2 + p3) / 3;
        const calificacionFinal = (promedioParciales * 0.55) + (examen * 0.30) + (trabajo * 0.15);

        resultadoDiv.innerHTML = `
            <p>💯 Calificación final: ${calificacionFinal.toFixed(2)}</p>
        `;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio5() {
    const calcularBtn = document.getElementById('calcularBtn');
    const nacimientoInput = document.getElementById('nacimiento');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        const fechaNacimientoStr = nacimientoInput.value;
        if (!fechaNacimientoStr) {
            resultadoDiv.textContent = "❌ Por favor, introduce una fecha de nacimiento válida.";
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            return;
        }

        const fechaNacimiento = new Date(fechaNacimientoStr);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();

        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }

        resultadoDiv.textContent = `🎂 La edad de la persona es: ${edad} años.`;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio6() {
    const convertirBtn = document.getElementById('convertirBtn');
    const palabrasInput = document.getElementById('palabras');
    const resultadoDiv = document.getElementById('resultado');

    const palabrasANumeros = (arr) => {
        const mapa = {
            'cero': 0, 'uno': 1, 'dos': 2, 'tres': 3, 'cuatro': 4,
            'cinco': 5, 'seis': 6, 'siete': 7, 'ocho': 8, 'nueve': 9
        };
        return arr.map(palabra => {
            const num = mapa[palabra.toLowerCase()];
            return num !== undefined ? num : -1;
        });
    };

    convertirBtn.addEventListener('click', () => {
        const palabrasStr = palabrasInput.value;
        const palabrasArr = palabrasStr.split(',').map(p => p.trim());
        const numerosArr = palabrasANumeros(palabrasArr);

        resultadoDiv.textContent = `🔢 Arreglo convertido: [${numerosArr.join(', ')}]`;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio7() {
    const calcularBtn = document.getElementById('calcularBtn');
    const horasTrabajadasInput = document.getElementById('horasTrabajadas');
    const pagoNormalInput = document.getElementById('pagoNormal');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        const horasTrabajadas = parseFloat(horasTrabajadasInput.value);
        const pagoNormal = parseFloat(pagoNormalInput.value);

        if (isNaN(horasTrabajadas) || isNaN(pagoNormal) || horasTrabajadas < 0 || pagoNormal < 0) {
            resultadoDiv.textContent = "❌ Por favor, introduce valores numéricos válidos.";
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            return;
        }

        let totalPagar = 0;
        const horasNormales = 40;
        const horasExtras = horasTrabajadas - horasNormales;

        if (horasTrabajadas <= horasNormales) {
            totalPagar = horasTrabajadas * pagoNormal;
            resultadoDiv.innerHTML = `<p>💰 El pago total es de $${totalPagar.toFixed(2)}.</p><p>No hay horas extras.</p>`;
        } else {
            const pagoNormalTotal = horasNormales * pagoNormal;
            let pagoExtras = 0;

            if (horasExtras <= 8) {
                pagoExtras = horasExtras * (pagoNormal * 2);
            } else {
                const extrasHasta8 = 8 * (pagoNormal * 2);
                const extrasMasDe8 = (horasExtras - 8) * (pagoNormal * 3);
                pagoExtras = extrasHasta8 + extrasMasDe8;
            }

            totalPagar = pagoNormalTotal + pagoExtras;
            resultadoDiv.innerHTML = `
                <p>⏰ Horas trabajadas: ${horasTrabajadas}</p>
                <p>👷‍♀️ Pago por horas normales: $${pagoNormalTotal.toFixed(2)}</p>
                <p>💪 Pago por horas extras: $${pagoExtras.toFixed(2)}</p>
                <p>💰 Pago total: $${totalPagar.toFixed(2)}</p>
            `;
        }
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio8() {
    const calcularBtn = document.getElementById('calcularBtn');
    const salarioInput = document.getElementById('salario');
    const antiguedadInput = document.getElementById('antiguedad');
    const resultadoDiv = document.getElementById('resultado');

    calcularBtn.addEventListener('click', () => {
        const salario = parseFloat(salarioInput.value);
        const antiguedad = parseInt(antiguedadInput.value);

        if (isNaN(salario) || isNaN(antiguedad) || salario <= 0 || antiguedad < 0) {
            resultadoDiv.textContent = "❌ Por favor, introduce valores numéricos válidos.";
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.color = '#721c24';
            return;
        }

        let porcentajeUtilidad = 0;
        if (antiguedad < 1) {
            porcentajeUtilidad = 0.05;
        } else if (antiguedad >= 1 && antiguedad < 2) {
            porcentajeUtilidad = 0.07;
        } else if (antiguedad >= 2 && antiguedad < 5) {
            porcentajeUtilidad = 0.10;
        } else if (antiguedad >= 5 && antiguedad < 10) {
            porcentajeUtilidad = 0.15;
        } else {
            porcentajeUtilidad = 0.20;
        }

        const utilidad = salario * porcentajeUtilidad;
        resultadoDiv.innerHTML = `<p>📈 La utilidad a recibir es: $${utilidad.toFixed(2)}</p>`;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.color = '#155724';
    });
}

function ejercicio9() {
    const form = document.getElementById('registro-form');
    const campos = ['nombre', 'email', 'comentarios', 'password', 'acepto'];
    const errores = {
        nombre: 'El nombre es obligatorio.',
        email: 'El email es obligatorio y debe ser válido.',
        comentarios: 'Los comentarios son obligatorios y no deben exceder los 50 caracteres.',
        password: 'La contraseña debe tener al menos 6 caracteres, una minúscula, una mayúscula y un dígito.',
        acepto: 'Debe aceptar las condiciones.'
    };

    const validarCampo = (input) => {
        const id = input.id;
        let esValido = true;
        let mensaje = '';

        if (id === 'nombre' || id === 'comentarios') {
            if (input.value.trim() === '') {
                esValido = false;
                mensaje = errores[id];
            } else if (id === 'comentarios' && input.value.length > 50) {
                esValido = false;
                mensaje = 'El texto no debe exceder los 50 caracteres.';
            }
        } else if (id === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (input.value.trim() === '') {
                esValido = false;
                mensaje = 'El email es obligatorio.';
            } else if (!emailRegex.test(input.value)) {
                esValido = false;
                mensaje = 'El email no es válido.';
            }
        } else if (id === 'password') {
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
            if (!passwordRegex.test(input.value)) {
                esValido = false;
                mensaje = errores[id];
            }
        } else if (id === 'acepto') {
            if (!input.checked) {
                esValido = false;
                mensaje = errores[id];
            }
        }

        const errorSpan = document.getElementById(`error-${id}`);
        if (!esValido) {
            errorSpan.textContent = `❌ ${mensaje}`;
            errorSpan.classList.add('visible');
            input.classList.add('invalid');
        } else {
            errorSpan.textContent = '✅';
            errorSpan.classList.remove('visible');
            input.classList.remove('invalid');
        }

        return esValido;
    };

    // Validar al perder el foco
    campos.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('blur', () => validarCampo(input));
        }
    });

    // Validar al enviar el formulario
    form.addEventListener('submit', (event) => {
        let formValido = true;
        campos.forEach(id => {
            const input = document.getElementById(id);
            if (input) {
                if (!validarCampo(input)) {
                    formValido = false;
                }
            }
        });

        if (!formValido) {
            event.preventDefault(); // Evita que el formulario se envíe
            alert('❌ Por favor, corrige los errores en el formulario.');
        } else {
            alert('✅ Formulario enviado correctamente!');
        }
    });
}

// Este es solo el fragmento de la función ejercicio10
function ejercicio10() {
    const limpiarBtn = document.getElementById('limpiarBtn');
    const htmlInput = document.getElementById('htmlInput');
    const resultadoBox = document.getElementById('resultado');

    limpiarBtn.addEventListener('click', () => {
        const html = htmlInput.value;
        
        // La expresión regular para encontrar y eliminar la etiqueta <script> y su contenido
        const regex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
        const htmlLimpio = html.replace(regex, '');

        resultadoBox.textContent = `🧹 El HTML limpio es:\n\n${htmlLimpio}`;
        resultadoBox.className = 'message-box success-message';
    });
}