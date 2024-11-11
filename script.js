document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !telefone || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, insira um email válido!');
        return;
    }

    const telefonePattern = /^\d{10,11}$/;
    if (!telefonePattern.test(telefone)) {
        alert('Por favor, insira um número de telefone válido (10 ou 11 dígitos).');
        return;
    }

    if (nome.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres.');
        return;
    }

    if (assunto.length < 3) {
        alert('O assunto deve ter pelo menos 3 caracteres.');
        return;
    }

    alert('Mensagem enviada com sucesso!');


    document.getElementById('contactForm').reset();
});