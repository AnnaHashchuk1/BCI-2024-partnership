import Image from "next/image"

export default function Collaboration() {
  return (
    <section id="cooperation" className="min-h-screen relative flex flex-col lg:flex-row mx-7 mb-28">
        <div className="z-20 lg:w-11/12 self-center lg:self-start font-montserrat">
            <h2 className="w-64 mt-14 pb-4 lg:pb-7 text-left font-semibold text-bci-white text-4xl lg:text-7xl">Умови співпраці</h2>
            <div className="bg-bci-white rounded-3xl lg:rounded-xl lg:border lg:border-bci-light-gray hover:shadow-normal-light hover:scale-105 transition-all duration-500">
                <p className="flex items-center gap-12 lg:gap-8 pl-9 lg:pl-8 pt-8 pb-6 lg:py-12 pr-10 lg:pr-20">
                    <span className="font-semibold text-base lg:text-2xl flex justify-center lg:w-4/6 px-5 lg:px-14 lg:py-3 border-2 border-bci-gray rounded-3xl">пропозиція</span>
                    <span className="lg:ml-auto font-normal text-base lg:text-2xl">основна</span>
                </p>
                <ul className="list-none pl-8 lg:pl-16 pb-6 lg:pb-16 pr-12 lg:pr-28 flex flex-col gap-4 lg:gap-8 text-bci-gray text-sm lg:text-lg font-medium lg:font-normal">
                    <li className="relative pl-14 py-2 flex flex-row items-center">
                        <span className="absolute left-0 w-6 h-6 bg-bci-light-gray rounded-full"></span>
                        Логотип На Сайті BEST Lviv</li>
                    <li className="relative pl-14 py-2 flex flex-row items-center">
                        <span className="absolute left-0 w-6 h-6 bg-bci-light-gray rounded-full"></span>
                        Відеорозповідь Про Компанію В Інстаграм  BEST Lviv</li>
                    <li className="relative pl-14 py-2 flex flex-row items-center">
                        <span className="absolute left-0 w-6 h-6 bg-bci-light-gray rounded-full"></span>
                        Згадка Компанії В Дописі Про Партнерів У Instagram-Профілі @best_lviv</li>
                    <li className="relative pl-14 py-2 flex flex-row items-center">
                        <span className="absolute left-0 w-6 h-6 bg-bci-light-gray rounded-full"></span>
                        Пост Про Компанію В Telegram-Каналі BEST Lviv Students</li>
                </ul>
            </div>  
        </div>
        <div className="z-20 font-montserrat flex flex-col items-center lg:items-end lg:mt-44">
            <div className="max-w-2xl lg:max-w-none xl:w-5/6 lg:w-11/12 mt-10 lg:mt-4">
                <h4 className="text-bci-white text-lg lg:text-2xl text-left font-semibold self-start mb-1 ml-0 lg:ml-5">Оберіть три додаткові опції:</h4>
                <div className="text-bci-gray flex flex-col lg:grid lg:grid-cols-2 gap-5">
                    <div className="order-1 col-span-2 flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500">
                        <h6 className="font-semibold text-xl">Участь У Подкасті</h6>
                        <p className="pr-4 text-sm lg:text-base xl:text-lg">Пропонуємо зняти пост-проєктний подкаст з представником Вашої компанії. Наша команда потурбується про можнтаж та зйомку, від Вас потрібно лише надання спікера</p>
                    </div>
                    <div className="order-3 lg:order-2 col-span-1 flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500">
                        <h6 className="font-semibold text-lg lg:text-xl">День Insta-stories</h6>
                        <p className="text-sm lg:text-base xl:text-lg">Промоція компанії в 5 Instagram stories на офіційній сторінці @best_lviv</p>
                    </div>
                    <div className="order-5 lg:order-3 col-span-1 flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500">
                        <h6 className="font-semibold text-lg lg:text-xl">CV учасників проєкту</h6>
                        <p className="text-sm lg:text-base xl:text-lg">Ми надамо CV учасників проєкту, відібраних відповідно до Ваших критеріїв</p>
                    </div>
                    <div className="order-4 col-span-1 flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500">
                        <h6 className="font-semibold text-lg lg:text-xl">Промоція на Інфостійках</h6>
                        <p className="text-sm lg:text-base xl:text-lg">Реклама Вашої компанії на тижні інформаційних стійок у НУЛП</p>
                    </div>
                    <div className="order-6 lg:order-5 col-span-1 flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500">
                        <h6 className="font-semibold text-lg lg:text-xl">Додаткова промоція в Instagram</h6>
                        <p className="text-sm lg:text-base xl:text-lg">Персоналізований допис в Insagram BEST Lviv</p>
                    </div>
                    <div className="order-7 lg:order-6 col-span-2 flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500">
                        <h6 className="font-semibold text-lg lg:text-xl">Зйомки контенту у форматі TikTok</h6>
                        <p className="text-sm lg:text-base xl:text-lg">Знімаємо персоналізоване відео про Вашу компанію в TikTok BEST Lviv</p>
                    </div>
                    <div className="order-2 lg:order-7 col-span-2 flex flex-col justify-start p-6 gap-2 rounded-3xl lg:rounded-xl bg-bci-white shadow-normal-dark hover:scale-105 transition-all duration-500">
                        <h6 className="font-semibold text-lg lg:text-xl">Treasure Hunt</h6>
                        <p className="text-sm lg:text-base xl:text-lg">Ви надаєте нагороди для учасників, які ми заховаємо на території Львівської політехніки. Підказки будуть розміщені у Instagram-акаунті BEST Lviv з посиланням на Вашу сторінку</p>
                    </div>
                </div>
            </div>
        </div>
        <Image
            src="/BgElement.svg"
            width={800}
            height={600}
            alt=" "
            className="absolute w-auto self-center -rotate-27 z-0 opacity-30 top-96 mt-14 lg:mt-8 lg:left-60 scale-200 lg:scale-140 overflow-hidden"
        />
    </section>
  )
}
