import Image from "next/image"

export default function Right({ data }) {
  return (
    <section className="">
      <Image src={data.img} alt={data.title} />

      <div className="content mt-14 inline-flex space-x-5">
        <h1 className="font-applesd font-light text-carmine text-7xl leading-5">
          {data.number}
        </h1>

        <h4 className="font-applesd text-jungle lg:text-white font-light text-3xl leading-8 tracking-tighter">
          {data.title}
        </h4>
      </div>

      <div className="content mt-8 text-jungle opacity-60 text-lg leading-10 lg:text-white lg:opacity-100 tracking-tighter">
        <p>{data.details.one}</p>
        <p>{data.details.two}</p>
        {data.details.three && <p>{data.details.three}</p>}
      </div>
    </section>
  )
}
