$(document).ready(function () { 
    const ListadeTarefas = $("#Lista-de-Tarefas");
    const DigiteTarefa = $("#Digite-Tarefa");

    ListadeTarefas.submit(function (event) {
    event.preventDefault();

    const Tarefa = $("#Digite-Tarefa").val();

    $("#Tarefas").append("<li>" + Tarefa + "</li>");

    $("#Digite-Tarefa").val("");
    });

    ListadeTarefas.on("click", "li", function () {
    $(this).toggleClass("completed");
    });
});



















