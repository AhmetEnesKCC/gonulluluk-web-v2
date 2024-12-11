import { footerLinks } from "@/data/footer-links";
import React from "react";
import FooterLink from "./footer-link";

const Footer = () => {
  return (
    <div className="bg-footer-bg grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[32px]  px-page-padding py-page-padding gap-x-[48px]">
      <div>
        <h6 className="mb-2 font-bold text-footer-title">
          İTÜ Gönüllülük Kulübü
        </h6>
        <p>
          İTÜ Gönüllülük Kulübü, İstanbul Teknik Üniversitesi öğrencileri
          arasında toplumsal farkındalık oluşturmayı, sosyal sorumluluk
          projelerine destek sağlamayı ve birlikte daha iyi bir dünya için
          adımlar atmaya teşvik etmeyi hedefler. Eğer siz de topluma katkı
          sağlamak, yeni insanlarla tanışmak ve değişim yaratmak istiyorsanız,
          bize katılın! Bize ulaşmak ve etkinliklerimizden haberdar olmak için
          sosyal medya hesaplarımızı takip edebilir veya bizimle iletişime
          geçebilirsiniz!
        </p>
      </div>
      <div>
        <h6 className="mb-2 font-bold text-footer-title">Adres</h6>
        <p>
          Reştpaşa, İTÜ Ayazağa Kampüsü, Otomotiv Teknolojleri Araştırma Merkezi
          Binası no 2/10 34467 Sarıyer/İstanbul
        </p>
      </div>
      <div>
        <h6 className="mb-2 font-bold text-footer-title">İletişim</h6>
        <div>
          {footerLinks.map((footerLink) => (
            <FooterLink key={footerLink.link} {...footerLink} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
