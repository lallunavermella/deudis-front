import { useState } from "react";

const Form = () => {
  const blankFields = {
    calerons: "",
    deudora: "",
    pobres: "",
  };
  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <form autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="calerons">
          {" "}
          Calerons:{" "}
          <input
            id="calerons"
            type="text"
            value={formData.calerons}
            onChange={changeData}
          />
        </label>
        <label htmlFor="deudora">
          {" "}
          Deudora:
          <select id="deudora" value={formData.deudora} onChange={changeData}>
            <option value="Alba">Alba</option>
            <option value={"Giulia"}>Giulia</option>
            <option value={"Nuria LL."}>Nuria LL.</option>
            <option value={"Nuria G."}>Nuria G.</option>
            <option value={"Silvia"}>Silvia</option>
          </select>
        </label>
        <label htmlFor="pobres">
          {" "}
          Les Pobres:
          <select id="pobres" value={formData.pobres} onChange={changeData}>
            <option value="Alba">Alba</option>
            <option value={"Giulia"}>Giulia</option>
            <option value={"Nuria LL."}>Nuria LL.</option>
            <option value={"Nuria G."}>Nuria G.</option>
            <option value={"Silvia"}>Silvia</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
