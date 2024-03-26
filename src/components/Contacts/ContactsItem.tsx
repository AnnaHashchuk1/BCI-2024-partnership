export interface ContactsItemProps {
  teammate: {
    position: string;
    name: string;
    number: string;
    email: string;
    imgSrc: string;
  };
}

enum Teammate {
  KATYA = "Катерина Зінзура",
  SERHIY = "Сергій Комарин",
}

export default function ContactsItem({ teammate }: ContactsItemProps) {
  return (
    <div
      className={`flex flex-col max-w-[500px] ${
        teammate.name === Teammate.SERHIY ? "md:flex-col-reverse md:mt-8" : ""
      } justify-center font-montserrat w-[275px] ${
        teammate.name === Teammate.KATYA ? "md:w-[100%]" : "md:w-[30%]"
      }`}
    >
      <div className="my-2 md:leading-10 text-white text-xl md:text-[32px] font-bold">
        {teammate.position}
      </div>
      <div className="rounded-2xl bg-bci-white">
        {teammate.name === Teammate.KATYA && (
          <div className="p-3 text-sm md:text-xl text-bci-gray">
            <p>{teammate.name}</p>
            <a href={`tel:${teammate.email}`}>
              <p>{teammate.number}</p>
            </a>
            <a className="underline" href={`mailto:${teammate.email}`}>
              {teammate.email}
            </a>
          </div>
        )}
        <div
          className={`overflow-hidden ${
            teammate.name === "Катерина Зінзура"
              ? "rounded-b-2xl"
              : "rounded-t-2xl"
          }`}
        >
          <img src={teammate.imgSrc} draggable="false" alt="bcier" width={500} height={1} />
        </div>
        {teammate.name === Teammate.SERHIY && (
          <div className="p-3 text-sm md:text-xl text-bci-gray">
            <p>{teammate.name}</p>
            <a href={`tel:${teammate.email}`}>
              <p>{teammate.number}</p>
            </a>
            <a className="underline" href={`mailto:${teammate.email}`}>
              {teammate.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
