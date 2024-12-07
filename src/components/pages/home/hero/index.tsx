import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <div className="grid grid-cols-2 min-h-[calc(100vh-200px)] px-page-padding pt-[120px] gap-x-8 ">
      <div className="flex flex-col items-start justify-end h-full  pb-[48px]">
        <h1 className="text-[90px] font-bold text-foreground leading-[110px]">
          Gönüllülük Kalpte Başlar
        </h1>
        <h4 className="text-[30px] mt-[20px]">
          Gönüllülük Kulübü olarak, ihtiyaç sahiplerine umut olmak ve topluma
          katkıda bulunmak için çalışıyoruz. Sizin de desteğinize ihtiyacımız
          var!
        </h4>

        <button className="bg-primary text-white px-16 py-4 rounded-[10px] mt-[72px]">
          Bağış Yap
        </button>
      </div>
      <div className="relative ">
        <Image
          layout="fill"
          objectFit="contain"
          src={"/assets/images/hero.png"}
          alt="gonulluler ai"
        />
      </div>
    </div>
  );
};

export default HomeHero;
