import Image from "next/image"

export default function Statistics() {
  return (
    <section id="statistic" className="w-full min-h-screen bg-bci-gray flex flex-col items-center gap-8">
        <h2 className="text-bci-white text-5xl font-montserrat font-bold mx-16 mt-32 lg:mt-44 lg:text-6xl">Попередні метрики BEST’у</h2>
        <div className="w-5/6 flex flex-col justify-center gap-6 mb-20 lg:grid lg:mb-44 lg:grid-cols-2">
          <div className="order-1 flex flex-col bg-bci-white text-bci-gray font-montserrat gap-2 lg:gap-4 border-l-[24px] border-l-bci-purple p-4">
              <h4 className="text-3xl lg:text-4xl font-light">більше 5 заходів щороку</h4>
              <p className=" w-5/6 text-sm lg:text-lg font-bold">Наші заходи дозволяють студентам регулярно отримувати цінний досвід та спілкуватися з експертами у своїй галузі.</p>
          </div>
          <Image
                src="/Statistics1.png"
                width={588}
                height={187}
                alt=" "
                className="order-2 w-auto"
          />
          <Image
                src="/Statistics2.png"
                width={588}
                height={187}
                alt=" "
                className="order-4 lg:order-3 w-auto"
          />
          <div className="order-3 lg:order-4 flex flex-col bg-bci-purple text-bci-white font-montserrat gap-2 lg:gap-4 border-l-[24px] border-l-bci-white p-4">
              <h4 className="text-3xl lg:text-4xl font-light">понад 2800 підписників</h4>
              <p className="text-sm lg:text-base font-bold">Завдяки Instagramу, ми забезпечуємо широке охоплення наших заходів, сприяючи більш активній участі та зацікавленості в нашій спільноті.</p>
          </div>
          <div className="order-5 flex flex-col pt-6 bg-bci-white text-bci-gray font-montserrat gap-2 lg:gap-4 border-l-[24px] border-l-bci-purple p-4">
              <h4 className="text-3xl lg:text-4xl font-light">850+ активних студентів </h4>
              <p className="text-sm lg:text-base font-bold">Наші івенти популярні серед молоді, надають можливість отримувати цінний досвід.</p>
          </div>
          <Image
                src="/Statistics3.png"
                width={588}
                height={187}
                alt=" "
                className="h-0 w-auto lg:h-auto order-last invisible lg:visible"
           />
      </div>
    </section>
  )
}
