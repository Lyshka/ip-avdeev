export const Picture = () => {
  return (
    <div className="relative">
      <div className="w-[140px] h-[140px] border border-green p-1 rounded-full absolute top-5 left-5">
        <div className="rounded-full bg-green flex justify-center items-center h-full w-full text-center font-bold text-white flex-col -rotate-[35deg]">
          <span className="text-5xl uppercase">
            1 - 3
          </span>

          <span className="text-lg font-robotoFlex">
            дня
          </span>
        </div>
      </div>

      <img src="tipper.png" alt="Самосвал" className="w-full object-contain" />
    </div>
  )
}