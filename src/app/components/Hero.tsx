import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen relative w-full flex flex-col" id="top">
        <div className="absolute h-[396px] top-[381px] flex flex-row justify-center items-center gap-[22px]">
            <Image
                src="/SliderPhoto1.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
            <Image
                src="/SliderPhoto2.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
            <Image
                src="/SliderPhoto3.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
            <Image
                src="/SliderPhoto4.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
        </div>
    </section>
  )
}