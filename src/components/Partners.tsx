import Image from "next/image";

export default function Partners() {
  const partnersLogos = [
    "/partners/Sombra.svg",
    "/partners/GlobalLogic.svg",
    "/partners/DataArt.svg",
    "/partners/SoftServe.svg",
    "/partners/WarBirds.svg",
    "/partners/SigmaSoftware.svg",
  ];

  return (
    <div className="mt-[65px] mb-20 lg:mb-40">
      <h2 className="text-2xl md:text-[42px] lg:text-[64px] w-[100%] md:w-[75%] mx-auto leading-8 md:leading-[70px] text-white text-center font-montserrat mb-14 md:mb-24 font-semibold md:font-bold">
        Партнери попередніх проєктів BESTу
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-24 mx-10">
        {partnersLogos.map((logoSrc, i) => (
          <div key={i}>
            <Image src={logoSrc} alt={`${i}`} draggable="false" height={250} width={250} />
          </div>
        ))}
      </div>
    </div>
  );
}
