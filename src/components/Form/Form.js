import { useState } from "react";
import Select from "react-select";
import chroma from "chroma-js";

const Form = () => {
  const blankFields = {
    calerons: "",
    deudora: "",
    pobres: "",
  };

  const data = [
    { value: "Alba", label: "Alba", color: "#00B8D9" },
    { value: "Giulia", label: "Giulia", color: "#0052CC" },
    { value: "Nuria G.", label: "Nuria G.", color: "#5243AA" },
    { value: "Nuria Ll.", label: "Nuria Ll.", color: "#FF5630" },
    { value: "Silvia", label: "Silvia", color: "#FF8B00" },
  ];

  const colourOptions = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? chroma.contrast(color, "white") > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
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
          <Select
            closeMenuOnSelect={true}
            options={data}
            styles={colourOptions}
          ></Select>
        </label>
        <label htmlFor="pobres">
          {" "}
          Les Pobres:
          <Select
            closeMenuOnSelect={false}
            options={data}
            isMulti
            styles={colourOptions}
          ></Select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
