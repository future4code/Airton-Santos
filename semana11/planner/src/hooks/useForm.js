import { useState } from "react";

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  
  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };

};

export default useForm

// const handleInputChange = event => {
//   const { name, value } = event.target;

//   onChange(name, value);
// };\

// resetForm()