import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const Rules = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="border-gray-300 border-[2px] rounded-xl w-[130px] flex items-center justify-center py-[10px]">
            RULES
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white w-[300px]">
          <DialogDescription>
            <Image
              className="w-full h-full"
              src="/rules.png"
              width={300}
              height={300}
              alt="rules"
            />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Rules;
