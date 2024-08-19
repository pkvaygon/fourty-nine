import { supremeLink } from "@/static";
import { banner } from "@/static/imglinks";
import { whoweare } from "@/static/texts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="relative w-full h-[500px]">
        <Image
          className="absolute inset-0 object-center object-cover w-full h-full z-0"
          priority
          fill
          src={banner}
          alt="banner"
        />
        <div className="flex items-center justify-center absolute inset-0 z-10 px-[10%]">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            49й Разведовательно Диверсионный Батальон
          </h1>
        </div>
      </div>
      <div className="h-[40px] container">
        <h3>На этой странице: Устав 49го РДБ, <Link className="animate-ping text-yellow-300" target="_blank" href={supremeLink}>Устав сервера Supreme</Link></h3>
      </div>
      <section className="container sm:mt-[80px]">
        <h2 className="text-center text-3xl mb-4">Устав 49го РДБ</h2>
        <span className="text-2xl">Задачи нашего подразделения</span>
        <ul className="list-disc mb-4 border-yellow-300 border-1 pl-6">
          <li>Разведовательные операции</li>
          <li>Диверсионный операции</li>
          <li>Штурмовые операции</li>
        </ul>
        <p>{whoweare}</p>

      </section>
    </section>
  );
}
