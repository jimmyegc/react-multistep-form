import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const AgeValidation = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const [dob, setDob] = useState("");
  const toggle = () => setModal(!modal);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const validateDate = (value) => {
    const edad = calcularEdad(value);
    //setSelectedDate(edad);
    const result = edad >= 18 && edad <= 65;
    return result;
    /*const selected = new Date(value).getFullYear();
    const now = new Date().getFullYear();
    return now - selected > 5; */
  };
  
  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date(); // Fecha actual
    const fechaNac = new Date(fechaNacimiento); // Fecha de nacimiento
    let edad = hoy.getFullYear() - fechaNac.getFullYear(); // Calcula la diferencia de años
    const mes = hoy.getMonth() - fechaNac.getMonth(); // Calcula la diferencia de meses

    // Si el mes actual es menor que el mes de nacimiento o es el mismo mes pero el día actual es menor al día de nacimiento, resta un año a la edad
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="input-group mb-3">
          <input
            {...register("Name", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            })}
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
          {errors?.Name?.type === "required" && <p>This field is required</p>}
          {errors?.Name?.type === "maxLength" && (
            <p>First name cannot exceed 20 characters</p>
          )}
          {errors?.Name?.type === "pattern" && (
            <p>Alphabetical characters only</p>
          )}
        </div>

        {errors?.gender?.type === "required" && <p>This field is required</p>}
        <div class="input-group date" data-provide="datepicker">
          <input
            {...register("dob", {
              required: true,
              validate: validateDate
            })}
            type="date"
            id="birthday"
            min="1899-01-01"
            max="2000-13-13"
            className="form-control"
          />
          {errors?.dob?.type === "required" && <p>This field is required</p>}
          {errors?.dob?.type === "validate" && <p>Invalid date</p>}
          <div class="input-group-addon">
            <span class="glyphicon glyphicon-th"></span>
          </div>
        </div>

        <button color="primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
