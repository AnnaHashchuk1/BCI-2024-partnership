import { cn } from "@/utils/mergeTw";
import Image from "next/image";
import { PropsWithChildren } from "react";
import CirclesSteps from "./circles_with_text";

type rowType = 1 | 2 | 0;

type RoadmapData = {
  key: number;
  row: rowType;
  text: string;
};

const roadmapData: RoadmapData[] = [
  {
    key: 0,
    row: 1,
    text: "Розгляд нашої пропозиції",
  },
  {
    key: 1,
    row: 1,
    text: "підготовка",
  },
  {
    key: 2,
    row: 1,
    text: "Заповнення форм щодо бажаної цільової авдиторії",
  },
  {
    key: 3,
    row: 1,
    text: "Початок роботи",
  },
  {
    key: 4,
    row: 1,
    text: "Організація онлайн-зустрічі з нашою командою",
  },
  {
    key: 5,
    row: 1,
    text: "",
  },
  {
    key: 6,
    row: 1,
    text: "Узгодження деталей щодо співпраці",
  },
  {
    key: 7,
    row: 0,
    text: "",
  },
  {
    key: 8,
    row: 2,
    text: "Фідбек",
  },
  {
    key: 9,
    row: 2,
    text: "Кінець",
  },
  {
    key: 10,
    row: 2,
    text: "Пост-проєктний звіт",
  },
  {
    key: 11,
    row: 2,
    text: "",
  },
  {
    key: 12,
    row: 2,
    text: "Візит учасників на офіс компанії",
  },
  {
    key: 13,
    row: 2,
    text: "",
  },
  {
    key: 14,
    row: 2,
    text: "Надсилання потрібних матеріалів",
  },
];

interface BoxProps extends PropsWithChildren, RoadmapData {
  className?: string;
}

const SmallBox = ({ text, row, className = "" }: BoxProps) => {
  return (
    <div
      className={cn(
        "col-span-1 row-span-1 gap-8 flex items-center ",
        row === 1 ? "flex-col " : "flex-col-reverse ",
        className
      )}
    >
      <div className="rounded-full bg-white h-12 w-12"></div>
      <div className="font-montserrat relative left-[6vw] font-bold text-md w-[15vw] h-10">
        {text}
      </div>
    </div>
  );
};

const BigBox = ({ text, className = "", row }: BoxProps) => {
  return (
    <div
      className={cn(
        "col-span-2 row-span-1 rounded-lg flex items-start gap-3",
        row === 0
          ? "justify-center p-5"
          : row === 1
          ? "justify-start pt-4 flex-col"
          : "pb-4 flex-col-reverse",
        className
      )}
    >
      {row === 0 ? (
        <Image
          width={180}
          height={20}
          src="/ArrowLarge.svg"
          alt="arrow right"
          className="h-full object-contain w-full"
        />
      ) : row === 1 ? (
        <Image
          width={180}
          height={20}
          src="/ArrowRight.svg"
          alt="arrow right"
          className="w-full"
        />
      ) : (
        <Image
          width={180}
          height={20}
          src="/ArrowLeft.svg"
          alt="arrow right"
          className="w-full"
        />
      )}

      <p className="text-bci-light-gray font-montserrat font-medium">{text}</p>
    </div>
  );
};

const Roadmap = () => {
  const sortedData = [
    ...roadmapData.slice(0, 7),
    roadmapData[7],
    ...roadmapData.slice(8, 14).reverse(),
  ];

  return (
    <div className="w-full bg-bci-gray">
      <div className="container mx-auto h-full flex flex-col items-center justify-center gap-8 xl:gap-20 px-5 md:px-10 py-5 md:py-14 text-bci-white">
        <h3 className="font-montserrat font-bold text-center text-xl sm:text-4xl md:text-5xl xl:text-7xl transition-all md:pb-5">
          Як усе відбуватиметься?
        </h3>
        <div className="w-full hidden xl:grid grid-cols-12 grid-rows-2 gap-6 h-96">
          {roadmapData.map(({ key, text, row }) => {
            return row === 0 ? (
              <BigBox className="row-span-2" key={key} row={row} text={""} />
            ) : key % 2 ? (
              <BigBox key={key} row={row} text={text} />
            ) : (
              <SmallBox key={key} row={row} text={text} />
            );
          })}
        </div>
        {/* mobile variation */}
        <div className="w-full flex xl:hidden flex-col gap-2 sm:gap-4">
          <CirclesSteps />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
