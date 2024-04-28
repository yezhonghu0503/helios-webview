import type { ReactElement } from "react";

function NumberInput(): ReactElement {
  return (
    <div className="w-[80px] flex justify-between bg-[rgb(59,59,57)] p-[2px] pl-[4px] pr-[4px] rounded-md">
      <div>-</div>
      <input className="w-[40px] text-center" maxLength={3} type="text" />
      <div>+</div>
    </div>
  );
}

export default function Editor(): ReactElement {
  return (
    <div className="w-[300px] h-[100vh] bg-[rgb(38,38,36)]">
      <div className="pl-[15px] w-[100%] p-[10px] h-[120px] border-b-[1px] border-zinc-700">
        <div className="font-bold text-neutral-400">Frame</div>
        <div className="text-sm w-[100%] h-[80px] p-[15px] flex justify-between items-center">
          Size
          <div className="w-[80%] flex justify-between">
            <div className="relative">
              <NumberInput />
              <div className="absolute top-[30px] left-[20px] text-gray-400">
                width
              </div>
            </div>
            <div className="relative">
              <NumberInput />
              <div className="absolute top-[30px] left-[20px] text-gray-400">
                height
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
