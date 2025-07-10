const alertSound = document.getElementById('alert');
let lastSignal = "";

async function carregarSinais() {
  try {
    const res = await fetch("https://willboot-backend.onrender.com/sinais");
    const data = await res.json();
    const sinais = document.getElementById("sinais");
    if (data.signal !== lastSignal) {
      sinais.innerHTML = `<p><strong>${data.signal}</strong> - Confiança: ${data.confidence}% - ${data.time}</p>`;
      alertSound.play();
      lastSignal = data.signal;
    }
  } catch (err) {
    console.error("Erro ao buscar sinais:", err);
  }
}

setInterval(carregarSinais, 5000);
carregarSinais();
