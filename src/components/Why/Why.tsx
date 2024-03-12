import Image from "next/image";
import "./Why.scss";
import { WhyPoint, WhyPointProps } from "./WhyPoint";

export default function Why() {
  const whyArguments: WhyPointProps[] = [
    {
      idx: 1,
      title: "Зміцнення авторитету серед студентів",
      description:
        "Проведення дня відкритих дверей підкреслить Ваш бренд, культуру Вашої компанії та дасть можливість відзначитись серед молоді як лідер у своїй галузі",
    },
    {
      idx: 2,
      title: "Розвиток молоді",
      description:
        "Ми шукаємо компанії, які бажають активно допомагати студентам в їхньому особистому та професійному розвитку. Якщо Ви прагнете спільно творити майбутнє, ми готові співпрацювати з вами",
    },
    {
      idx: 3,
      title: "Підтримка Вашого бренду",
      description:
        "Наша команда створить для Вас різноманітний контент для соцмереж протягом заходу, аудіо- та відеоматеріали, пости та сторіс в Інстаграм, якісні фотографії з події",
    },
  ];

  return (
    <div className="relative pb-20 pt-16">
      <Image
        className="absolute w-auto top-[30%] left-[15%] -rotate-20 z-[-1] opacity-30 overflow-hidden"
        src={"/BgElement.svg"}
        alt="why"
        width={100}
        height={100}
      />
      <div className="ml-7 mb-10">
        <h2 className="text-left text-white text-6xl font-bold mb-3">
          Чому саме
        </h2>
        <h2 className="text-left text-white text-6xl font-bold">
          BEST Company Insight?
        </h2>
      </div>
      <div className="flex flex-col items-center mt-7 gap-5">
        {whyArguments.map((arg, i) => (
          <WhyPoint
            key={i}
            idx={arg.idx}
            title={arg.title}
            description={arg.description}
          />
        ))}
      </div>
    </div>
  );
}
