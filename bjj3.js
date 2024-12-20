// Exibir/ocultar observação
document.getElementById("info-button").addEventListener("click", () => {
    const infoBox = document.getElementById("info-box");
    infoBox.style.display = infoBox.style.display === "block" ? "none" : "block";
   });
   // Cálculo da faixa preta
   document.getElementById("calculate-button").addEventListener("click", function () {
    const startDateInput = document.getElementById("start-date").value;
    const frequency = parseFloat(document.getElementById("training-frequency").value);
    const hoursPerTraining = parseFloat(document.getElementById("hours-per-training").value);
    if (!startDateInput || isNaN(frequency) || isNaN(hoursPerTraining) || frequency <= 0 || hoursPerTraining <= 0) {
    alert("Preencha todos os campos corretamente!");
    return;
    }
    const [day, month, year] = startDateInput.split('/').map(Number);
    const startDate = new Date(year, month - 1, day);
    const now = new Date();
    if (startDate > now) {
    alert("A data de início não pode ser no futuro!");
    return;
    }
    const beltTimes = { branca: 2, azul: 2, roxa: 2, marrom: 2 };
    const totalYears = Object.values(beltTimes).reduce((a, b) => a + b, 0);
    const elapsedYears = (now - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    const totalLoggedHours = Math.min(elapsedYears * frequency * hoursPerTraining * 52, totalYears * frequency *
   hoursPerTraining * 52);
    const remainingHours = totalYears * frequency * hoursPerTraining * 52 - totalLoggedHours;
    const progressPercentage = Math.min((totalLoggedHours / (totalYears * frequency * hoursPerTraining * 52)) * 100,
   100);
    // Atualizar resultados
    document.getElementById("time-to-black-belt").innerText = `Faltam aproximadamente ${(remainingHours / (frequency
   * hoursPerTraining * 52)).toFixed(1)} anos.`;
    document.getElementById("hours-logged").innerText = `Horas acumuladas: ${Math.floor(totalLoggedHours)} horas.`;
    document.getElementById("progress-bar").style.width = `${progressPercentage}%`;
   });
  
  

  
  



  