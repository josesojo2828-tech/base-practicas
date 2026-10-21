const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function iniciarSistema() {
    // Configurar la interfaz de lectura y escritura
    const rl = readline.createInterface({ input, output });

    // Equivalente a print()
    console.log("=== SISTEMA DE PRUEBA ===");

    // Equivalente a input()
    const nombre = await rl.question('¿Cuál es tu nombre? ');
    const edadStr = await rl.question('¿Cuál es tu edad? ');

    // Convertir el texto ingresado a número si es necesario
    const edad = Number(edadStr);

    console.log(`\nHola ${nombre}, tienes ${edad} años.`);

    // Cerrar la interfaz para que el programa finalice
    rl.close();
}

iniciarSistema();
