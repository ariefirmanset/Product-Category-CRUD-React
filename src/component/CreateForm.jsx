import { useState } from "react";
import { createProduct } from "../data";
import Button from "./Button";
import FormInput from "./FormInput";
import FormTextAreas from "./FormTextAreas";
import Forms from "./Form";

export default function Form({ onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    await createProduct({ name, description });
    setName("");
    setDescription("");

    if (onSuccess) onSuccess();
  }

  return (
    <Forms onSubmit={handleSubmit}>
      <FormInput
        id="name"
        type="text"
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="example: Samsung"
        label="Name Product"
      />
      <FormTextAreas
        className="form-control"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        label="Description"
      ></FormTextAreas>
      <Button type="submit" Class="btn btn-primary m-2" title="Submit"></Button>
    </Forms>
  );
}
