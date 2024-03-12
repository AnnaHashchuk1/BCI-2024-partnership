import Image from "next/image";
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaTelegram,
} from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="grid grid-cols-2 justify-between align-middle items-center lg:grid-cols-3 order-1 p-6">
        <a href="https://best-lviv.org.ua/">
          <Image
            src="/BestLogo.svg"
            width={110}
            height={50}
            alt="best logo"
            className="h-14 lg:h-16 place-self-center"
          />
        </a>
        <div className="font-montserrat font-semibold  text-xl flex justify-center items-center self-center lg:order-3 text-white">2024</div>
        <div className="flex mr-0 mt-4 lg:mt-0 gap-3 place-self-center self-center col-span-2 lg:col-span-1 lg:order-2">
          <a href="https://t.me/bestlviv">
            <LiaTelegram className="h-10 w-10 text-white" />
          </a>
          <a href="https://www.linkedin.com/company/bestlviv/">
            <LiaLinkedin className="h-10 w-10 text-white" />
          </a>
          <a href="https://www.instagram.com/best_lviv/">
            <LiaInstagram className="h-10 w-10 text-white" />
          </a>
          <a href="https://www.facebook.com/BEST.Lviv/">
            <LiaFacebook className="h-10 w-10 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
