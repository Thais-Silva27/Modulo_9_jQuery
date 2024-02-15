$(document).ready(function() {

    $('#form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            Endereço: {
                required:true,
            },
            cep: {
            required: true,
            },
        },
        messages:{
            nome: 'O campo nome não pode estar vazio.',            
        },
    })

    $('#cep').mask('00000-000')
    $('#telefone').mask('(00)00000-0000')
    $('#cpf').mask('000.000.000-00')
})





















