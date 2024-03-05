import Image from "next/image";
// Still in woriking stage...

export default function Hero() {
  return (
    <section className="min-h-screen relative w-full flex flex-col justify-center items-center mt-16" id="top">
        <h3 className="text-7xl md:text-8xl font-bold font-montserrat text-bci-white text-left lg:text-center m-20">BEST Company Insight</h3>
        <div className="flex flex-row justify-center items-center gap-6">
            <Image
                src="/Slider1.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-xl"
            />
            <Image
                src="/Slider2.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-xl"
            />
            <Image
                src="/Slider3.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-xl"
            />
            <Image
                src="/Slider4.png"
                width={449}
                height={313}
                alt=" "
                className="rounded-xl hidden lg:flex"
            />
        </div>
    </section>
  )
}