import Image from "next/image";
// Still in woriking stage...

export default function Hero() {
  return (
    <section className="min-h-screen relative w-[2520.99px] flex flex-col justify-center items-center bg-ele" id="top">
        <h3 className="text-[96px] font-bold font-montserrat text-bci-white mb-[158.5px]">BEST Company Insight</h3>
        <div className="absolute h-[396px] top-[381px] flex flex-row justify-center items-center gap-[22px]">
            <Image
                src="/Slider1.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
            <Image
                src="/Slider2.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
            <Image
                src="/Slider3.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
            <Image
                src="/Slider4.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-[10px]"
            />
        </div>
    </section>
  )
}