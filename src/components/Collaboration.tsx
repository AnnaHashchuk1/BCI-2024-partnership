import { cn } from "@/utils/mergeTw";
import Image from "next/image";

interface iCollabData {
  title: string;
  description: string;
  className: string;
}

const collabData: iCollabData[] = [
  {
    title: "Участь у Подкасті",
    description:
      "Пропонуємо зняти пост-проєктний подкаст з представником Вашої компанії. Наша команда потурбується про монтаж та зйомку, від Вас потрібно лише надання спікера",
    className: "order-1 col-span-2",
  },
  {
    className: "order-3 lg:order-2 col-span-1",
    title: "День Insta-stories",
    description:
      "Промоція компанії в 5 Instagram stories на офіційній сторінці @best_lviv",
  },
  {
    className: "order-5 lg:order-3 col-span-1",
    title: "CV учасників проєкту",
    description:
      "Ми надамо CV учасників проєкту, відібраних відповідно до Ваших критеріїв",
  },
  {
    className: "order-4 col-span-1 ",
    title: "Промоція на Інфостійках",
    description: "Реклама Вашої компанії на тижні інформаційних стійок у НУЛП",
  },
  {
    className: "order-6 lg:order-5 col-span-1",
    title: "Додаткова промоція в Instagram",
    description: "Персоналізований допис в Instagram-профілі BEST Lviv",
  },
  {
    className: "order-7 lg:order-6 col-span-2 ",
    title: "Зйомки контенту у форматі TikTok",
    description:
      "Знімаємо персоналізоване відео про Вашу компанію в TikTok BEST Lviv",
  },
  {
    className: "order-2 lg:order-7 col-span-2",
    title: "Treasure Hunt",
    description:
      "Ви надаєте нагороди для учасників, які ми заховаємо на території Львівської політехніки. Підказки будуть розміщені у Instagram-профілі BEST Lviv з посиланням на Вашу сторінку",
  },
];

const CollabCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className: string;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500",
        className
      )}
    >
      <h6 className="font-semibold text-lg lg:text-xl">{title}</h6>
      <p className="text-sm lg:text-base xl:text-lg">{description}</p>
    </div>
  );
};

interface iSellingPoint {
  title: string;
}

const sellingPointsData = [
  {
    title: "Логотип На Сайті Проєкту BEST Company Insight",
  },
  {
    title: "Відеорозповідь Про Компанію В Instagram-профілі BEST Lviv",
  },
  {
    title:
      "Згадка Компанії В Дописі Про Партнерів У Instagram-профілі @best_lviv",
  },
  {
    title: "Пост Про Компанію В Telegram-Каналі BEST Lviv Students",
  },
];

const SellingPoint = ({ title }: iSellingPoint) => {
  return (
    <li className="relative pl-14 py-2 flex flex-row items-center">
      <span className="absolute left-0 w-6 h-6 bg-bci-light-gray rounded-full"></span>
      {title}
    </li>
  );
};

export default function Collaboration() {
  return (
    <section
      id="cooperation"
      className="min-h-screen relative flex flex-col lg:flex-row m-6 md:m-9"
    >
      <div className="z-20 lg:w-11/12 self-center lg:self-start font-montserrat">
        <h2 className="w-64 mt-14 pb-4 lg:pb-7 text-left font-semibold text-bci-white text-4xl lg:text-7xl">
          Умови співпраці
        </h2>
        <div className="bg-bci-white rounded-3xl lg:rounded-xl lg:border lg:border-bci-light-gray hover:shadow-normal-light hover:scale-105 transition-all duration-500">
          <p className="flex items-center gap-12 lg:gap-8 pl-9 lg:pl-8 pt-8 pb-6 lg:py-12 pr-10 lg:pr-20">
            <span className="font-semibold text-base lg:text-2xl flex justify-center lg:w-4/6 px-5 lg:px-14 lg:py-3 border-2 border-bci-gray rounded-3xl">
              пропозиція
            </span>
            <span className="lg:ml-auto font-normal text-base lg:text-2xl">
              основна
            </span>
          </p>
          <ul className="list-none pl-8 lg:pl-16 pb-6 lg:pb-16 pr-12 lg:pr-28 flex flex-col gap-4 lg:gap-6 text-bci-gray text-sm lg:text-lg font-medium lg:font-normal">
            {sellingPointsData.map((sellingPoint, index) => (
              <SellingPoint title={sellingPoint.title} key={index} />
            ))}
          </ul>
        </div>
      </div>
      <div className="z-20 font-montserrat flex flex-col items-center lg:items-end lg:mt-44">
        <div className="max-w-2xl lg:max-w-none xl:w-5/6 lg:w-11/12 mt-10 lg:mt-4">
          <h4 className="text-bci-white text-lg lg:text-2xl text-left font-semibold self-start mb-1 ml-0 lg:ml-5">
            Оберіть три додаткові опції:
          </h4>
          <div className="text-bci-gray flex flex-col lg:grid lg:grid-cols-2 gap-5">
            {collabData.map(({ title, className, description }, index) => (
              <CollabCard
                title={title}
                description={description}
                className={className}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/BgElement.svg"
        width={800}
        height={600}
        alt=" "
        className="absolute w-auto self-center -rotate-27 z-0 opacity-20 top-96 mt-14 lg:mt-8 lg:left-60 scale-200 lg:scale-140 overflow-hidden"
      />
    </section>
  );
}
