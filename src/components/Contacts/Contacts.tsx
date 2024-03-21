import Image from "next/image";
import ContactsItem, { ContactsItemProps } from "./ContactsItem";

export default function Contacts() {
  const contacts: ContactsItemProps["teammate"][] = [
    {
      position: "Головна Організаторка",
      name: "Катерина Зінзура",
      number: "+380 50 76 47 202",
      email: "kateryna.zinzura@best-eu.org",
      imgSrc: "/Katya.png",
    },
    {
      position: "Відповідальний за Корпоративні Зв'язки",
      name: "Сергій Комарин",
      number: "+380 95 03 20 861",
      email: "sergiy.komaryn@best-eu.org",
      imgSrc: "/Sergiy.png",
    },
  ];

  return (
    <div id="contacts" className="relative my-[60px] w-[100%] overflow-hidden">
      <div className="flex flex-wrap justify-center gap-8 md:gap-[100px] items-start">
        <div className="flex flex-col justify-center items-center w-[100%] md:w-[30%]">
          <div className="font-montserrat font-bold text-[32px] md:text-[85px] text-center md:text-left text-white mb-10">
            Контакти
          </div>
          <div>
            <ContactsItem teammate={contacts[0]} />
          </div>
        </div>
        <ContactsItem teammate={contacts[1]} />
      </div>
      <Image
        className="absolute top-[20%] right-[-10%] md:right-[15%] z-[-1] rotate-[-118deg] opacity-30"
        src="/BgElement.svg"
        alt=" "
        width={600}
        height={850}
      />
    </div>
  );
}