export default function AboutPage() {
    return (
        <section className="flex flex-col gap-10 py-6">
            <section>
                <h1 className="text-[var(--color-baltic-blue)] mb-8">Hakkımızda</h1>
                <div className="flex flex-col gap-5">
                    <p className="max-w-4xl">
                        Sürdürülebilirlik ve teknolojiyi iş yapış biçiminin merkezine alan,
                        25 yılı aşkın sektörel deneyimi modern ve yenilikçi iş modelleriyle
                        birleştiren güçlü bir yapıya sahibiz.
                    </p>
                    <p>
                        Şirketimiz; <strong>sürdürülebilirlik ve teknolojiyi</strong> iş yapış
                        biçiminin merkezine alan, <strong>25 yılı aşkın sektörel deneyimini</strong>{" "}
                        modern ve yenilikçi iş modelleriyle birleştiren güçlü bir yapıya sahiptir.
                        Değişen dünya dinamiklerine hızla uyum sağlayan yaklaşımımızla;{" "}
                        <strong>çevre dostu, güvenilir ve yüksek katma değerli</strong> ürünleri
                        müşterilerimizle buluşturmayı amaçlıyoruz.
                    </p>

                    <p>
                        Pazarlama ve satış organizasyonlarının{" "}
                        <strong>kurulması, geliştirilmesi ve yönetilmesi</strong>, temel yetkinlik
                        alanlarımız arasında yer almaktadır. Pazar dinamiklerini doğru analiz eden
                        uzman ekiplerimiz; markaların hedef kitlelerine{" "}
                        <strong>
                            doğru stratejiler, güçlü saha organizasyonları ve etkili iletişim planlamaları
                        </strong>{" "}
                        ile ulaşmasını sağlar. Bu sayede iş ortaklarımızın{" "}
                        <strong>sürdürülebilir ve ölçülebilir büyümesini</strong> destekleriz.
                    </p>

                    <p>
                        Ürünlerimiz, iş modelimiz ve kurumsal değerlerimiz doğrultusunda;{" "}
                        <strong>yenilik, güven ve sürdürülebilir başarı</strong> temelinde güçlü bir
                        ekosistem oluşturmayı hedefliyoruz.
                    </p>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-10">
                    <h2 className="text-[var(--color-baltic-blue)]">Vizyonumuz</h2>
                    <ul className="mt-4 flex list-disc flex-col gap-3 pl-5">
                        <li>
                            Daha <strong>sağlıklı ve yaşanabilir bir dünya</strong> için sürdürülebilir ve{" "}
                            <strong>doğal çözümlere</strong> odaklanmak
                        </li>
                        <li>
                            Çalışanlarımızın kendi uzmanlık alanlarında{" "}
                            <strong>yetkinliklerini en üst seviyeye taşımalarını</strong> sağlamak;
                            bu doğrultuda sürekli <strong>eğitim ve teknolojik gelişim</strong> ile
                            desteklemek
                        </li>
                    </ul>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-10">
                    <h2 className="text-[var(--color-baltic-blue)]">Misyonumuz</h2>
                    <ul className="mt-4 flex list-disc flex-col gap-3 pl-5">
                        <li>
                            Güçlü kurumsal kimliğimizi, <strong>çalışan mutluluğu</strong> ve{" "}
                            <strong>müşteri memnuniyeti</strong> ile birleştirerek sektörde örnek bir
                            konuma taşımak
                        </li>
                        <li>
                            Dünya genelinde <strong>sağlıklı, güvenilir ve maliyet etkin</strong>{" "}
                            ürünleri erişilebilir kılmak
                        </li>
                        <li>
                            <strong>Teknolojik gelişmeleri yakından takip eden</strong>, yenilikçi ve
                            dinamik çözümler sunmak
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}
