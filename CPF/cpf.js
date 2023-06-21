const cpfInput = document.getElementById('cpf');
cpfInput.addEventListener('input', formatCPF);

const modalMessage = document.getElementById('modal-message');
const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
const btnProcessar = document.getElementById('processar');
btnProcessar.addEventListener('click', (event) => {
    event.preventDefault();
    const cpfInputValue = document.getElementById('cpf').value;
    typedCpf = cpfInputValue.replace(/[.-]/g, '');
    Sequence(typedCpf);
});

let isSequence = true;
let typedCpf;
let cpf;

function formatCPF() { //Formata o CPF na hora da digitação
    cpf = cpfInput.value.replace(/\D/g, '');
    cpf = cpf.substring(0, 11);
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    cpfInput.value = cpf;
}

function Sequence() { //Verifica se é sequência
    cpf = cpf.replace(/[.-]/g, '');

    isSequence = cpf.charAt(0).repeat(cpf.length) == cpf ? true : false;
    if (isSequence == true) {
        modalMessage.textContent = "CPF com números iguais";
        modal.style.display = 'block';
        modal.addEventListener('click', () => {
            modal.style.display = 'none';
            window.location.href = "cpf.html";
        });
    } else {
        validateCPF();
    }
}

function createNewCPF() { //Gera os dígitos do CPF em um novo CPF com os primeiros nove dígitos para comparar com o CPF digitado
    const cpfWithoutDigits = Array.from(typedCpf.slice(0, -2), Number);
    const digit1 = createDigits(cpfWithoutDigits);
    const digit2 = createDigits(cpfWithoutDigits.concat(Number(digit1)));
    let novoCpf = cpfWithoutDigits.concat(Number(digit1), Number(digit2)).join('');
    if (novoCpf == typedCpf) {
        return true;
    } else {
        return false;
    }
}

function createDigits(cpfWithoutDigits) { //Função para calcular quais seriam os dígitos válidos
    let soma = 0;
    let contador = cpfWithoutDigits.length + 1;

    for (let i = 0; i < cpfWithoutDigits.length; i++) {
        soma += contador * Number(cpfWithoutDigits[i]);
        contador--;
    }
    const digito = 11 - (soma % 11);
    return digito <= 9 ? String(digito) : '0';
}

function validateCPF() { //Função para mostrar as mensagens de CPF Válido ou Inválido
    if (createNewCPF() == true) {
        modalMessage.textContent = "CPF Válido";
    } else {
        modalMessage.textContent = "CPF Inválido";
    }
    modal.style.display = 'block';
    modal.addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = "cpf.html";
    });
}
