import { FormCard } from "./Form"

export const Card = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="grid grid-cols-[20%,80%] justify-center items-center relative w-[90%] h-[95%] rounded-xl bg-white/30 backdrop-blur-sm">
        <div className="w-full h-full flex flex-col justify-between items-center ">
          <div className="flex flex-col justify-center items-center  h-1/2">
            <div className="bg-slate-700 h-[60px] w-[60px] rounded-xl">
            </div>
          </div>
          <div className=" h-1/2 flex flex-col justify-center items-center" >
            <div className="bg-[url(https://cdn-icons-png.freepik.com/512/9443/9443859.png)] h-[30px] w-[30px] bg-cover">
            </div>
            <h1 className="font-bold text-white uppercase">TagLynk</h1>
          </div>
        </div>

        <div className="bg-gray-800/70 backdrop-blur-2xl h-full  rounded-r-xl rounded-l-[55px]">
          <FormCard />
        </div>
      </div>
    </div>
  )
}

