export interface ContactsItemProps {
    teammate: {
      position: string;
      name: string;
      number: string;
      email: string;
      imgSrc: string;
    };
  }
  
  export default function ContactsItem({ teammate }: ContactsItemProps) {
    return (
      <div
        className={`flex flex-col ${
          teammate.name === "Сергій Комарин" ? "md:flex-col-reverse md:mt-8" : ""
        } justify-center font-montserrat w-[275px] ${
          teammate.name === "Катерина Зінзура" ? "md:w-[100%]" : "md:w-[30%]"
        }`}
      >
        <div className="my-2 md:leading-10 text-white text-xl md:text-[32px] font-bold">
          {teammate.position}
        </div>
        <div className="rounded-2xl bg-bci-white">
          <div className="p-3 text-sm md:text-xl text-bci-gray">
            <p>{teammate.name}</p>
            <p>{teammate.number}</p>
            <a className="underline" href={`mailto:${teammate.email}`}>
              {teammate.email}
            </a>
          </div>
          <div className="overflow-hidden rounded-b-2xl">
            <img src={teammate.imgSrc} alt="bcier" width={500} height={1} />
          </div>
        </div>
      </div>
    );
  }