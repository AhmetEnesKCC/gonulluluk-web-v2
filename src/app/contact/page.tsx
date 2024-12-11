import StatCounter from "@/components/pages/contact/stat-counter";
import SupportSection from "@/components/pages/home/sections/support-section";
import { homeStats } from "@/data/home-stats";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="pb-4">
      <h1 className="text-[48px] text-secondary font-bold text-center my-4 mt-8">
        Gönüllülük Kalpte Başlar
      </h1>
      <div className="w-full aspect-[2.25] relative">
        <Image
          alt="contact-hero"
          src="/assets/images/contact-hero.png"
          layout="fill"
        />
      </div>
      <h1 className="text-[48px] text-secondary font-bold text-center my-4 mt-8">
        İTÜ Gönüllülük Kulübü
      </h1>
      <div className="grid grid-cols-[1fr,auto] px-page-padding leading-7">
        <p>
          2004 yılında kurulan İTÜ Gönüllülük Kulübü, kuruluşundan bu yana
          gerçekleştirdiği projelerle hem sosyal ve kültürel sorunlara
          duyarlılık göstermiş hem de gönüllülük bilincini, öncelikle İTÜ olmak
          üzere, toplumun her kesiminde yaymayı amaç edinmiştir. Gönüllülüğün
          maddi kazançların ötesinde bir “gönül işi” olduğuna inanan kulüp,
          projelerini düzenledikleri kermeslerden elde edilen gelirlerle ve aynı
          ideale sahip bağışçılarının destekleriyle sürdürmektedir. Ayrıca,
          ihtiyaç sahiplerine ulaştırılan bağışlarla karşılanması mümkün olmayan
          harcamalar için sponsorluk desteği de talep etmektedir.
          <br /> 19 yıllık geçmişiyle kulüp, aktif olarak yürüttüğü 7 proje ve
          bu projelerde görev alan 500’den fazla gönüllüsüyle, hem İstanbul
          Teknik Üniversitesi’nde en aktif öğrenci kulüplerinden biri olmuş hem
          de bölgenin en etkili gönüllü organizasyonlarından biri olmayı
          başarmıştır. <br />
          İTÜ Gönüllülük Kulübü’nün temel hedefi, İstanbul Teknik Üniversitesi
          öğrencileri arasında toplumsal farkındalık oluşturmak, sosyal
          sorumluluk projelerine destek sağlamak ve birlikte daha iyi bir dünya
          için adımlar atmaya teşvik etmektir. <br /> Eğer siz de topluma katkı
          sağlamak, yeni insanlarla tanışmak ve değişim yaratmak istiyorsanız,
          aramıza katılabilirsiniz! Etkinliklerimizden haberdar olmak ve bizimle
          iletişime geçmek için sosyal medya hesaplarımızı takip edin veya
          bizimle iletişime geçin. <br />
          <span className="font-bold">
            Birlikte daha güzel yarınlar için, İTÜ Gönüllülük Kulübü sizleri
            bekliyor!
          </span>
        </p>
        <div className="flex flex-col px-8 gap-y-4">
          {homeStats.map((stat) => (
            <div key={stat.label} className="flex flex-col  items-center px-2">
              <Image alt="stat" width={64} height={64} src={stat.imageSrc} />
              <p>
                <StatCounter stat={stat.stat} /> {stat.more && "+"}
              </p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-page-padding py-8">
        <SupportSection />
      </div>
    </div>
  );
};

export default ContactPage;
