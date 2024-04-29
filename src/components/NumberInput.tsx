import { ReactElement } from "react";

export default function NumberInput({
  title,
}: {
  title?: string;
}): ReactElement {
  return (
    <div className="w-[80px] flex justify-between bg-[rgb(59,59,57)] p-[2px] pl-[4px] pr-[4px] rounded-md">
      <div>-</div>
      <input className="w-[40px] text-center" maxLength={3} type="text" />
      <div>+</div>
      <div className="absolute top-[30px] left-[20px] text-gray-400">
        {title}
      </div>
    </div>
  );
}
