

export default function CircleCard({data}) {
  const details = ''

  return (
    <div className="group">
      <div className="group-hover:bg-jungle h-[380px] w-[380px] rounded-full text-white border border-jungle bg-white px-9">
        <div className="w-full h-full flex justify-center items-center flex-col gap-y-7 cursor">
          <h2 className="group-hover:text-white font-bold text-jungle text-[50px]">
            {data.title}
          </h2>
          <p className="group-hover:hidden text-xl text-jungle-200">
            {data.sub}
          </p>
          <p className="group-hover:block hidden text-base text-jungle-100 tracking-tighter text-left">
            {data.details}
          </p>
        </div>
      </div>
    </div>
  )
}
