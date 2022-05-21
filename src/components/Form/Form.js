const Form = () => {
  return (
    <>
      <form autoComplete="off">
        <label htmlFor="calerons">
          {" "}
          Calerons: <input id="calerons" type="text" />
        </label>
        <label htmlFor="deudora">
          {" "}
          Deudora:
          <select id="deudora">
            <option>Alba</option>
            <option>Giulia</option>
            <option>Nuria LL.</option>
            <option>Nuria G.</option>
            <option>Silvia</option>
          </select>
        </label>
        <label htmlFor="pobres">
          {" "}
          Les Pobres:
          <select id="pobres">
            <option>Alba</option>
            <option>Giulia</option>
            <option>Nuria LL.</option>
            <option>Nuria G.</option>
            <option>Silvia</option>
          </select>
        </label>
      </form>
    </>
  );
};

export default Form;
