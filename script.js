// 1. Pegar os elementos do HTML usando o DOM
const form = document.getElementById('formContato');
const mensagemSucesso = document.getElementById('mensagemSucesso');

// 2. Criar a função que será executada no envio
function processarEnvio(event) {
    // Evita que a página recarregue ao enviar o formulário
    event.preventDefault(); 
    
    // Pega o valor digitado no input de nome
    const nomeUsuario = document.getElementById('nome').value;
    
    // Manipula o DOM: Altera o texto de dentro da div de sucesso
    mensagemSucesso.innerHTML = `Obrigado pelo contato, <strong>${nomeUsuario}</strong>! Sua mensagem fictícia foi enviada.`;
    
    // Manipula o DOM: Remove a classe que escondia a div
    mensagemSucesso.classList.remove('escondido');
    
    // Limpa o campo do formulário
    form.reset();
}

// 3. Adicionar o ouvinte de evento (Event Listener) no formulário
form.addEventListener('submit', processarEnvio);