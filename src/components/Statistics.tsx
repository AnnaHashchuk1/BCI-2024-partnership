import { cn } from "@/utils/mergeTw";
import Image from "next/image";

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
        "Завдяки Instagram BEST Lviv, ми забезпечуємо широке охоплення та зацікавленості в наших заходах серед студентів.",
      img: "/Statistics2.png",
    },
    {
      title: "850+ активних студентів",
      description:
        "Щороку сотні студентів відвідують наші заходи, розвиваються і ростуть з нами.",
      img: "/Statistics3.png",
    },
  ];

  return (
    <section id="statistic" className="w-full h-auto bg-bci-gray flex flex-col items-center gap-8">
      <h2 className="text-bci-white text-5xl font-montserrat font-bold mt-16 lg:mt-20 lg:text-6xl px-6">
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
                    ? "bg-bci-purple text-bci-white border-l-bci-white"
                    : "bg-bci-white text-bci-gray border-l-bci-purple"
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
                draggable="false"
                className={cn(
                  "w-full h-full object-cover col-span-1 ",
                  index % 2
                    ? "lg:order-first rounded-2xl"
                    : "lg:order-last rounded-2xl"
                )}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
