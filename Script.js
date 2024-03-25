function verificar() {
    //recebe a variavel "email" fornecida no navegador, reconhecendo no mesmo que deve ser um e-mail. 
    var entradaemail = document.getElementById("email");
    
    var email = entradaemail.value.trim();

    var regra = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;

    if (regra.test(email)) {
        mensage.textContent = "Email valido"
    } else {
        mensage.textContent = "Email invalido"
    }
    
    
    if (regra.test(email)) {
        mensagem.textContent = ""
    } else {
        mensagem.textContent = "Verifique seu email conforme exemplo:"
    }
    if (regra.test(email)) {
        mensagem1.textContent = ""
    } else {
        mensagem1.textContent = "'seu@email.com.br'"
    }
}
