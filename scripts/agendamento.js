function valida_horario_agendamento() {
    var campo = document.getElementById("servico_data");
    var dataEscolhida = new Date(campo.value);
    var diaSemana = dataEscolhida.getDay();
    var hora = dataEscolhida.getHours();

    var fechado = false;
    if (diaSemana === 0) {
        fechado = true;
    } else if (diaSemana === 6 && (hora < 9 || hora >= 13)) {
        fechado = true;
    } else if (diaSemana !== 6 && (hora < 9 || hora >= 19)) {
        fechado = true;
    }
    
    if (fechado) {
        alert("Horário de Funcionamento:\n\nSegunda a sexta: 9h às 19h\nSábado: 9h às 13h");
        return false;
    } else {
        alert("Agendamento realizado com sucesso!");
    }

    return true;
}