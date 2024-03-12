import Image from "next/image";
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaTelegram,
} from "react-icons/lia";

interface iSocial {
  href: string;
  icon?: JSX.Element;
}
const commonIconProps = {
  className: "h-10 w-10 text-white",
};

const socials: iSocial[] = [
  {
    href: "https://t.me/bestlviv",
    icon: <LiaTelegram {...commonIconProps} />,
  },
  {
    href: "https://www.linkedin.com/company/bestlviv/",
    icon: <LiaLinkedin {...commonIconProps} />,
  },
  {
    href: "https://www.instagram.com/best_lviv/",
    icon: <LiaInstagram {...commonIconProps} />,
  },
  {
    href: "https://www.facebook.com/BEST.Lviv/",
    icon: <LiaFacebook {...commonIconProps} />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="grid grid-cols-2 justify-between align-middle items-center lg:grid-cols-3 order-1 p-6">
        <Image
          src="/BestLogo.svg"
          width={110}
          height={50}
          alt="best logo"
          className="h-14 lg:h-16 place-self-center"
        />
        <div className="font-montserrat font-semibold  text-xl flex justify-center items-center self-center lg:order-3 text-white">
          2024
        </div>
        <div className="flex mr-0 mt-4 lg:mt-0 gap-3 place-self-center self-center col-span-2 lg:col-span-1 lg:order-2">
          {socials.map((social, index) => {
            return (
              <a href={social.href} key={index}>
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
