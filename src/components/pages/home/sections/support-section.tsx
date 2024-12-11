import Image from "next/image";
import React from "react";

const SupportSection = () => {
  return (
    <div className="bg-support-bg bg-opacity-10 rounded-full min-h-[360px] pl-[120px] pr-[32px] items-center py-6 flex flex-row-reverse gap-x-[64px]">
      <div className="flex-1 self-stretch flex flex-col py-[32px] justify-center gap-y-[32px]">
        <h5 className="font-bold text-support-bg text-[32px]">Destek ol</h5>
        <div className="grid grid-cols-2 gap-x-[64px]">
          <p className="text-[20px]">
            Bize destek olmak isterseniz siz de İTÜ Mezunları Eğitim Vakfı resmi
            IBAN hesabı aracılığıyla bağış yapabilirsiniz.
            <span className="text-black text-opacity-30 hover:underline">
              {" "}
              Daha fazla
            </span>
          </p>
          <div className="leading-8">
            IBAN: TR73 0020 9000 0168 7032 0000 07
            <br />
            Hesap Adı: İ.T.Ü. Mezunları Eğitim Vakfı
            <br />
            Banka Adı: Ziraat Katılım Bankası
            <br />
            Hesap No / Şube: 151-1687032-7,Kayaşehir İstanbul
            <br />
            Açıklama: İTÜ Gönüllülük Kulübü için Bağış
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

export default SupportSection;
