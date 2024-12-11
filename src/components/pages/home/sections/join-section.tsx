import Image from "next/image";
import React from "react";

import { FaRegFileLines } from "react-icons/fa6";

const JoinSection = () => {
  return (
    <div className="bg-join-bg bg-opacity-10 rounded-full min-h-[360px] pl-[120px] pr-[32px] items-center py-6 flex flex-row-reverse gap-x-[64px] mb-[64px]">
      <div className="flex-1 self-stretch flex flex-col py-[32px] justify-center gap-y-[32px]">
        <h5 className="font-bold text-ternary text-[32px]">Aramıza Katıl</h5>
        <div className="grid grid-cols-[1fr,auto] gap-x-[64px]">
          <p className="text-[20px]">
            Sen de gönüllülük kulübünün bir parçası olmak istersen katılım
            formunu doldurarak bize katılabilirsin. Faaliyet belgesi ve tanıtım
            dosyasına da buradan erişebilirsiniz.
          </p>
          <div className="leading-8">
            <div className="rounded-full p-6 bg-[#7F8393] bg-opacity-10 flex flex-col items-center justify-center aspect-square">
              <FaRegFileLines size={32} color="#4c79b0" />
              <a
                href="https://forms.gle/Ctcu1ZWMqqqeB6m5A"
                target="_blank"
                className="whitespace-nowrap text-ternary font-bold mt-2"
              >
                Katılım Formu
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          width={280}
          height={280}
          src="/assets/images/sections/support.png"
          alt="support"
        />
      </div>
    </div>
  );
};

export default JoinSection;
