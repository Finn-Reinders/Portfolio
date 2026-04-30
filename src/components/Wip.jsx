import { useState } from 'react';

export default function WIP() {
  const [visible, setVisible] = useState(false);
  return (
  visible && (
    <div className="fixed z-[1000] bg-black text-white justify-center items-center flex left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[25vw] h-[25vw] ">
      This feature doesn't work yet.
    </div>)
  );
}

export { setVisible };
