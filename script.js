function atualizarRelogio() {
    const agora = new Date();

    document.getElementById("relogio").textContent = agora.toLocaleTimeString("pt-BR");
    
}

atualizarRelogio(); 
setInterval(atualizarRelogio, 1000);

async function buscarTemperatura() {
    const lat = -23.5227;
    const lon = -46.8368;
    const link = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const resposta = await fetch(link);
    const dados = await resposta.json();
    const temperatura = dados.current_weather.temperature;
    document.getElementById("clima").textContent = `${temperatura}°C`;
    
}

buscarTemperatura();
