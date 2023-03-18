$(document).ready(function() {
    
    
    $('#cpf').mask('000.000.000-00', {reverse: true});

    $('#telefone').mask('(00) 00000-0000');

    $('#cep').mask('00000-000');
})

    $('form').validate({
        rules: {
            nome: {
                required: true
        },        
            email: {
                required: true, 
                email: true
        },        
            telefone: {
                required: true
        },
            cpf: {
                required: true
        },
            endereco: {
                required: true
            }
    },
    messages: {
        nome: 'Por favor insira o seu nome', 
        email: 'Digite um E-mail válido',
        cpf: 'Insira seu CPF',
        telefone: 'Digite o seu telefone',
        endereco:'Digite o seu endereço completo'
        
    }
})
    