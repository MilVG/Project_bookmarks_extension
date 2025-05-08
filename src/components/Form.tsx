export const FormCard = () => {
  return (
    <form className="h-full flex flex-col gap-2 justify-center">

      <div className="h-1/6 flex flex-row gap-2 justify-around items-center">
        <label className="text-white font-bold text-sm">Nombre</label>
        <input type="text" className="h-full w-48 rounded-lg bg-slate-200 text-center focus:outline-lime-200" placeholder="link ...." />
      </div>

      <div className="h-1/6 flex flex-row justify-around items-center">
        <label className="text-white font-bold text-sm">Categoria</label>
        <input type="text" className="h-full w-48 rounded-lg bg-slate-200 text-center focus:outline-lime-200" placeholder="groups webs..." />
      </div>

      <div className="h-1/6 flex flex-row justify-around items-center">
        <label className="text-white font-bold text-sm">Description</label>
        <input type="text" className="h-full w-48 rounded-lg bg-slate-200 text-center focus:outline-lime-200" placeholder="opcional..." />
      </div>

      <div className="p-1 w-full h-auto flex flex-row justify-end">
        <button
          className="w-32 text-white  bg-slate-700 p-2 rounded-xl hover:bg-gray-800"
        >
          Guardar
        </button>
      </div>

    </form>
  )
}

