import { useState } from "react";

export const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedAge = calculateAge(birthDate);
    
    if (calculatedAge < 18) {
      setError("Debes tener al menos 18 años.");
      setAge(null);
    } else if (calculatedAge > 75) {
      setError("Debes ser menor de 75 años.");
      setAge(null);
    } else {
      setError("");
      setAge(calculatedAge);
    }
  };

  return (
    <div>
      <h2>Validador de Edad</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="birthDate">Fecha de Nacimiento:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <button type="submit">Calcular Edad</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {age && !error && <p>Tu edad es {age} años.</p>}
    </div>
  );
}
