import Image from "next/image"

export default function AboutBEST(){
    return(
        <section className="min-h-screen relative w-full flex justify-center">
            <div className="grid grid-col mx-5 max-w-md md:max-w-3xl gap-10">
                <h1 className="text-4xl lg:text-7xl font-montserrat font-bold text-white self-center text-center my-5 lg:my-10">Що таке BEST Lviv?</h1>
                <div className="w-full border border-white rounded-xl bg-bci-purple p-10 z-20">
                    <p className="font-montserrat text-md lg:text-lg text-white">
                        <strong>
                            BEST (Board of European Students of Technology)  
                        </strong>
                     – неприбуткова громадська організація, яка об’єднує студентів технічних спеціальностей 
                    для забезпечення обміну знаннями та співпраці компаній, університетів та студентів Європи.
                    </p>
                </div>
                <div className="flex flex-row justify-center md:justify-between px-4 md:px-16 ">
                    <div>
                    <Image
                        src="/BESTLogo.svg"
                        alt="logo"
                        height={150}
                        width={100}
                        className="hidden md:flex w-64"
                    />
                    </div>
                    <div className="grid grid-col font-montserrat text-3xl gap-4 lg:gap-8 text-white">
                        <p><strong>35</strong> роки досвіду</p>
                        <p><strong>85</strong> осередків</p>
                        <p><strong>30</strong> країн</p>
                    </div>
                </div>
                <div className="w-full border border-white rounded-xl bg-bci-purple p-10 z-20">
                    <p className="font-montserrat text-md  lg:text-lg text-white">
                    Усі проєкти спрямовані на допомогу студентам на початку кар’єрного росту, 
                    розвиток їхніх навичок та об’єднанню активної молоді. 
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/BESTLogo.svg"
                        alt="logo"
                        height={150}
                        width={100}
                        className="md:hidden flex w-52 "
                    />
                </div>
            </div>
            <Image
                src="/AboutBest.png"
                alt=" "
                height={1500}
                width={1000}
                className="absolute right-0 hidden xl:flex w-52 self-center h-4/6 z-20"
            />
            <Image
                src="/AboutBest2.png"
                alt=" "
                height={1500}
                width={1000}
                className="absolute left-0 hidden xl:flex w-52 self-center h-4/6 z-20"
            />
            <Image
                src="/BgElement.svg"
                width={800}
                height={600}
                alt=" "
                className="absolute w-auto self-center rotate-210 z-0 opacity-30 top-24 -right-64 md:scale-90 lg:scale-100"
            />
            <Image
                src="/BgElement.svg"
                width={800}
                height={600}
                alt=" "
                className="absolute w-auto self-center rotate-45 z-0 opacity-30 bottom-8 -left-48 md:scale-90 lg:scale-100"
            />
        </section>
    )
}