import type { ReactElement } from "react";
import NumberInput from "../components/NumberInput";
import BoundaryControl from "../components/BoundaryControl";

interface FeatureChunkProps {
  title: string;
  element: ReactElement[];
}

function FeatureChunk({ title, element }: FeatureChunkProps): ReactElement {
  return (
    <div className="text-sm w-[100%] h-[90px] p-[15px] flex justify-between items-center">
      {title}
      <div className="w-[80%] flex justify-between">
        {element.map((item) => {
          return <div className="relative">{item}</div>;
        })}
      </div>
    </div>
  );
}

export default function Editor(): ReactElement {
  return (
    <div className="w-[300px] h-[100vh] bg-[rgb(38,38,36)]">
      <div className="pl-[15px] w-[100%] p-[10px] h-[220px] border-b-[1px] border-zinc-700">
        <div className="font-bold text-neutral-400">Frame</div>
        <FeatureChunk
          title="Size"
          element={[
            <NumberInput title="width" />,
            <NumberInput title="height" />,
          ]}
        />
        <FeatureChunk title="Border" element={[<BoundaryControl />]} />
      </div>
    </div>
  );
}
