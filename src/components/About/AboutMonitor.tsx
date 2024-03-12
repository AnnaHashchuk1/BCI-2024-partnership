import Image from "next/image";
import BESTValuesItem, { BESTValuesItemProps } from "./BESTValuesItem";

export default function AboutMonitor() {
  const BESTValues: Omit<BESTValuesItemProps, "width">[] = [
    {
      title: "Наша Візія",
      description:
        "Обізнана та адаптована до прокладання кар’єрного шляху молодь.",
    },
    {
      title: "Наша Місія",
      description:
        "Передача знань від досвідчених працівників амбітним студентам",
    },
  ];

  return (
    <div className="relative w-[100vw] z-[0] px-10 py-8 bg-bci-gray mt-[70px] mb-[50px]">
      <div className="absolute left-10 top-[120px] w-[410px]">
        <BESTValuesItem
          title={BESTValues[0].title}
          description={BESTValues[0].description}
          width={410}
        />
      </div>
      <div className="absolute right-10 top-[45%] w-[410px]">
        <BESTValuesItem
          title={BESTValues[1].title}
          description={BESTValues[1].description}
          width={410}
        />
      </div>
      <div className="flex justify-end mr-10">
        <Image src={"/AboutMonitor.png"} alt="revo" width={875} height={580} />
      </div>
      <div className="w-[580px]">
        <div className="text-[64px] text-white font-montserrat font-bold ">
          Про Наш Проєкт
        </div>
        <div className="text-[20px] text-white font-montserrat">
          BEST Company Insight – це захід для студентів, де вони зможуть більше
          дізнатися про Вашу компанію, внутрішні процеси та отримають можливість
          поспілкуватися з працівниками
        </div>
      </div>
    </div>
  );
}
