import {useState} from "react";

export const useForm = (initialState = {}) => {
  const [inputs, setinputs] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setinputs((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const reset = () => {
    setinputs(initialState);
  };

  return [inputs, handleChange, reset];
};
