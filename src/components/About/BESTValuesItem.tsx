export interface BESTValuesItemProps {
  title: string;
  description: string;
  width: number
}

export default function BESTValuesItem({
  title,
  description,
  width
}: BESTValuesItemProps) {
  return (
    <div className={`mx-auto bg-bci-white p-7 rounded-xl w-[${width}px]`}>
      <div className="font-montserrat text-xl text-black font-bold mb-3">
        {title}
      </div>
      <div className="text-[16px]">{description}</div>
    </div>
  );
}
