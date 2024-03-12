import Image from "next/image";

export default function Partners() {
  const partnersLogos = [
    "/partners/SoftServe.svg",
    "/partners/SigmaSoftware.svg",
    "/partners/Sombra.svg",
    "/partners/GlobalLogic.svg",
    "/partners/GlobalLogic.svg",
    "/partners/DataArt.svg",
    "/partners/WarBirds.svg",
  ];

  return (
    <div className="mt-[65px]">
      <h2 className="text-3xl lg:text-6xl w-[100%] md:w-[75%] mx-auto leading-8 md:leading-[70px] text-white text-center font-montserrat mb-6 md:mb-10 font-bold">
        Партнери попередніх проєктів BESTу
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 mx-20">
        {partnersLogos.map((logoSrc, i) => (
          <div key={i}>
            <Image src={logoSrc} alt={`skuf${i}`} height={200} width={200} />
          </div>
        ))}
      </div>
    </div>
  );
}
