import type { ReactElement } from "react";
import NumberInput from "./NumberInput";

export default function BoundaryControl(): ReactElement {
  return (
    <div className="w-[196px] h-[80px] flex justify-center items-center">
      <div className="w-[150px] h-[60px] rounded-md border-[1px] border-neutral-400 relative">
        <div className="absolute top-[-12px] left-[32px]">
          <NumberInput />
        </div>
        <div className="absolute top-[45px] left-[32px]">
          <NumberInput />
        </div>
      </div>
    </div>
  );
}
