import { useState } from "react";
import { postBookmark } from "../api/bookmarks";

export const FormCard = () => {
  const [form, setForm] = useState({
    title: "",
    url: "",
    categoryName: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postBookmark(form);
      alert("Marcador guardado correctamente");
    } catch (error) {
      alert("Error al guardar el marcador");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex flex-col gap-2 justify-center"
    >
      {["title", "url", "categoryName", "description"].map((field) => (
        <div key={field} className="flex flex-row justify-end gap-2 items-center">
          <label className="text-white font-bold text-sm">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            name={field}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            className="h-full w-48 rounded-lg bg-slate-200 text-center focus:outline-lime-200"
            placeholder={`Ingresa ${field}`}
          />
        </div>
      ))}

      <div className="p-1 w-full h-auto flex flex-row justify-end">
        <button
          type="submit"
          className="w-32 text-white bg-slate-700 p-2 rounded-xl hover:bg-gray-800"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};


