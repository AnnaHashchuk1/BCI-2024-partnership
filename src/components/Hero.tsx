import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section
      className="min-h-screen relative w-full flex flex-col justify-center items-center mt-16"
      id="top"
    >
      <h3 className="text-7xl md:text-8xl font-bold font-montserrat text-bci-white text-left lg:text-center m-20 z-20">
        BEST Company Insight
      </h3>
      <Marquee
        className="speed-90 py-3 flex gap-6 z-10"
        speed={7}
        autoFill={true}
      >
        <div className="flex flex-row justify-center items-center gap-6 z-20">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Image
                src={`/Slider${index + 1}.png`}
                width={449}
                height={313}
                alt=" "
                draggable="false"
                className="rounded-xl hover:scale-105 transition-all duration-500"
                key={index}
              />
            ))}
        </div>
      </Marquee>
      <Image
        src="/BgElement.svg"
        width={800}
        height={600}
        alt=" "
        draggable="false"
        className="absolute w-auto self-center rotate-20 z-0 opacity-30 top-48 overflow-hidden"
      />
      <Marquee
        className="absolute xl:-bottom-20 mt-10 font-montserrat font-bold text-black uppercase text-3xl bg-white speed-90 py-3 flex gap-0 z-10"
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
    </section>
  );
}
