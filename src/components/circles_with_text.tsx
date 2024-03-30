import { CheckIcon } from "lucide-react";

const steps = [
  {
    name: "Розгляд нашої пропозиції",
    description: "Підготовка",
    status: "complete",
  },
  {
    name: "Заповнення форм щодо бажаної цільової авдиторії",
    description: "Початок роботи",
    status: "current",
  },
  {
    name: "Організація онлайн-зустрічі з нашою командою",
    status: "upcoming",
  },
  {
    name: "Узгодження деталей щодо співпраці",
    status: "upcoming",
  },
  {
    name: "Надсилання потрібних матеріалів",
    status: "upcoming",
  },
  {
    name: "Візит учасників на офіс компанії",
    status: "upcoming",
  },
  {
    name: "Пост-проєктний звіт",
    status: "upcoming",
  },
  {
    name: "Фідбек щодо проведення проєкту",
    description: "Кінець",
    status: "upcoming",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CirclesSteps() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pb-6 md:pb-12" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-bci-purple"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="group relative flex items-start">
                  <span className="flex h-9 items-center">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-bci-purple group-hover:bg-indigo-800">
                      <CheckIcon
                        className="h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium">{step.name}</span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            ) : step.status === "current" ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <div
                  className="group relative flex items-start"
                  aria-current="step"
                >
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-bci-purple bg-white">
                      <span className="h-2.5 w-2.5 rounded-full bg-bci-purple" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-bci-purple">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div
                    className="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="group relative flex items-center">
                  <span className="flex h-9 items-center" aria-hidden="true">
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                      <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                    </span>
                  </span>
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="text-sm font-medium text-gray-500">
                      {step.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {step.description}
                    </span>
                  </span>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
