import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Banner() {
  return (
    <Marquee
    className="absolute font-montserrat font-bold text-black uppercase text-3xl bg-white speed-90 py-3 flex gap-0 z-10"
    speed={65}
    autoFill={true}
  >
    <div className="flex gap-3 pl-3 items-center justify-center">
      <p>BEST</p>
      <Image
        src="/Star.svg"
        width={800}
        height={600}
        alt=" "
        draggable="false"
        className="w-10 h-10"
      />
      <p>COMPANY</p>
      <Image
        src="/Star.svg"
        width={800}
        height={600}
        alt=" "
        draggable="false"
        className="w-10 h-10"
      />
      <p>INSIGHT</p>
      <Image
        src="/Star.svg"
        width={800}
        height={600}
        alt=" "
        draggable="false"
        className="w-10 h-10"
      />
    </div>
  </Marquee>
  )
}
