/**
 * Atualiza o contador de caracteres e limita o valor de entrada se exceder o limite de caracteres.
 *
 * @param {string} value - O valor atual do campo de entrada.
 * @param {string} id - O ID do campo de entrada.
 * @param {string} counterId - O ID do elemento que exibe a contagem de caracteres restantes.
 * @param {number} characterLimit - O número máximo de caracteres permitidos.
 */
function counter(value, id,counterId, characterLimit) {
    console.log(`value: ${value} limit ${characterLimit}`);
    if(value.length <= characterLimit) {
        leftover = characterLimit - value.length;
        document.getElementById(`${counterId}`).innerHTML = leftover;
    } else {
        document.getElementById(id).value = value.substr(0,characterLimit);
    }
}