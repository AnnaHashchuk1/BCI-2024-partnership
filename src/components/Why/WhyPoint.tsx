import Image from "next/image";

export interface WhyPointProps {
  idx: number;
  title: string;
  description: string;
}

export function WhyPoint({ idx, title, description }: WhyPointProps) {
  return (
    <div
      className="flex gap-4 w-[65%] rounded-2xl p-8 bg-bci-purple md:text-left text-center justify-between"
      style={{ border: "#FFF solid 3px" }}
    >
      <div className="w-[10%] md:w-[7%] text-3xl text-white font-montserrat hidden md:block">
        0{idx}
      </div>
      <div className="sm:w-[100%] md:w-[75%]">
        <div className="text-2xl font-bold text-white mb-5">{title}</div>
        <div className="text-xl text-white">{description}</div>
      </div>
      <div className="w-[46px] hidden md:block">
        <Image
          className=""
          src={"/Arrow.svg"}
          alt="arrow"
          height={46}
          width={46}
        />
      </div>
    </div>
  );
}
