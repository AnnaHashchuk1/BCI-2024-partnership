import { cn } from "@/utils/mergeTw";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Statistics() {
  const statisticsData = [
    {
      title: "більше 5 заходів щороку",
      description:
        "Наші заходи дозволяють студентам регулярно отримувати цінний досвід та спілкуватися з експертами у своїй галузі.",
      img: "/Statistics1.png",
    },
    {
      title: "понад 2800 підписників",
      description:
        "Завдяки Instagramу, ми забезпечуємо широке охоплення наших заходів, сприяючи більш активній участі та зацікавленості в нашій спільноті.",
      img: "/Statistics2.png",
    },
    {
      title: "850+ активних студентів",
      description:
        "Наші івенти популярні серед молоді, надають можливість отримувати цінний досвід.",
      img: "/Statistics3.png",
    },
  ];

  return (
    <section id="statistic" className="w-full min-h-screen bg-bci-gray flex flex-col items-center gap-8">
      <h2 className="text-bci-white text-5xl font-montserrat font-bold mt-32 lg:mt-44 lg:text-6xl px-6">
        Попередні метрики BEST’у
      </h2>
      <div className="flex flex-col container mx-auto justify-center gap-6 mb-10 lg:grid lg:mb-24 grid-cols-2 px-6">
        {statisticsData.map((statistic, index) => {
          return (
            <div
              className={cn("grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-2")}
              key={index}
            >
              <div
                className={cn(
                  "flex flex-col col-span-1  font-montserrat gap-2 lg:gap-4 border-l-[24px] p-4",
                  index % 2
                    ? "bg-bci-purple text-bci-white border-l-bci-white rounded-r-2xl"
                    : "bg-bci-white text-bci-gray border-l-bci-purple rounded-l-2xl"
                )}
              >
                <h4 className="text-3xl xl:text-4xl font-light">
                  {statistic.title}
                </h4>
                <p className="w-5/6 text-sm xl:text-lg font-bold">
                  {statistic.description}
                </p>
              </div>
              <Image
                width={588}
                height={187}
                src={statistic.img}
                alt={statistic.img}
                className={cn(
                  "w-full h-full object-cover col-span-1 ",
                  index % 2
                    ? "lg:order-first rounded-l-2xl"
                    : "lg:order-last rounded-r-2xl"
                )}
              />
            </div>
          );
        })}
      </div>
      <Marquee 
            className="font-montserrat font-bold text-black uppercase text-3xl bg-white speed-90 py-3 flex gap-0 z-10"
            speed={100}
            autoFill={true}
        >
            <div className="flex gap-3 pl-3 items-center justify-center">
            <p>BEST</p>
            <Image
                src="/Star.svg"
                width={800}
                height={600}
                alt=" "
                className="w-10 h-10"
            />
            <p>COMPANY</p>
            <Image
                src="/Star.svg"
                width={800}
                height={600}
                alt=" "
                className="w-10 h-10"
            />
            <p>INSIGHT</p>
            <Image
                src="/Star.svg"
                width={800}
                height={600}
                alt=" "
                className="w-10 h-10"
            />
            </div>
        </Marquee>
    </section>
  );
}
