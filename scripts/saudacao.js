function atualiza_data() {
    var data = new Date();
    
   if (data.getHours() >= 6 && data.getHours() < 13) {
        saudacao = "Bom dia";
    } else if (data.getHours() >= 13 && data.getHours() < 19) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    document.getElementById("saudacao").innerHTML = saudacao + ", amante de bichos! A Taverna do Bicho é o lugar perfeito para o seu pet se sentir em casa!";
}

atualiza_data();
setInterval(atualiza_data, 3600000); // Atualiza a cada hora