import Link from "next/link"
import Image from "next/image"


export default function Card({ data, bg, pos }) {
  const tags = data.tags.reverse().slice(3).reverse();
  return (
    <>
      <Link href={data.url}
        className={`${bg} rounded-3xl shadow h-[330px] w-full
        flex justify-end flex-col overflow-hidden`}>
        <div className="relative h-[154px] bg-black rounded-t-3xl p-5 text-white w-full">

          {data.img &&
            <Image src={data.img}
              alt={data.name} priority
              className={pos} />
          }

          <p className="font-inter text-13 opacity-60">
            {data.category}
          </p>

          <h1 className="font-bold text-3xl mb-3">
            {data.title}
          </h1>

          <div className="w-full flex justify-start items-center flex-row flex-wrap gap-x-3">
            {tags.map((index, i) => (
              <span key={i++}
                className="whitespace-nowrap text-sm opacity-50">
                {index}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  )
}
