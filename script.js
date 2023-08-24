document.getElementById("calculate").addEventListener("click", function() {
    const dayInput = parseInt(document.getElementById("day").value);
    const monthInput = parseInt(document.getElementById("month").value) - 1; // JavaScript months are 0-11
    const yearInput = parseInt(document.getElementById("year").value);

    // Limpar resultado anterior
    document.getElementById("result").innerHTML = "";
    document.getElementById("error").innerHTML = "";
  
    if (isNaN(dayInput) || isNaN(monthInput) || isNaN(yearInput)) {
      const errorDiv = document.getElementById("error");
      errorDiv.innerHTML = "Por favor, informe uma data válida.";
      return;
    }
  
    const dob = new Date(yearInput, monthInput, dayInput);
    const today = new Date();
  
    if (dob > today) {
      const errorDiv = document.getElementById("error");
      errorDiv.innerHTML = "Data de nascimento não pode ser no futuro.";
      return;
    }
  
    const ageInMilliseconds = today - dob;
  
    const ageDate = new Date(ageInMilliseconds); // Convert milliseconds to a date
  
    const ageYears = ageDate.getUTCFullYear() - 1970;
    const ageMonths = ageDate.getUTCMonth();
    const ageDays = ageDate.getUTCDate() - 1;
  
    const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <span class="age-number">${ageYears}</span> anos <br>
    <span class="age-number">${ageMonths}</span> meses <br>
    <span class="age-number">${ageDays}</span> dias
  `;
  
    const errorDiv = document.getElementById("error");
    errorDiv.innerHTML = ""; // Clear any previous error messages
    
  });
  