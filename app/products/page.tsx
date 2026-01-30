import ImageSlider from "../components/ImageSlider";
import { productSlides, durationMs, aspect } from "../../data/slides";

export default function ProductsPage() {
    return (
        <section className="flex flex-col gap-10 py-6">
            <header className="flex flex-col gap-4">
                <h1 className="text-[var(--color-baltic-blue)]">
                    HeiQ Vivotech - Probiyotik ve Sinbiyotik Teknolojisi
                </h1>

                <div className="flex flex-col gap-4 max-w-5xl">
                    <p>
                        Ürünlerimiz, <b>HeiQ Chrisal</b> tarafından geliştirilen; probiyotikler (faydalı bakteriler)
                        ile prebiyotiklerin (faydalı besinler) patentli ve benzersiz bir birleşimidir.
                        Yüzde yüz doğal içeriklerle formüle edilen bu ileri teknoloji, faydalı
                        mikroorganizmaların etkinliğini artırarak insanların, yaşam alanlarının ve çevrenin
                        doğal dengesini destekler.
                    </p>

                    <p>
                        Ürünlerimiz, yenilikçi yaklaşım sayesinde, uzun süreli etki sağlayan, güvenilir ve
                        sürdürülebilir çözümler sunar.
                    </p>

                    <p>
                        Sinbiyotik teknolojimiz; daha sağlıklı ortamlar, daha iyi bir yaşam kalitesi ve
                        doğayla uyumlu bir gelecek için tasarlanmıştır.
                    </p>

                    
                </div>
            </header>

            <ImageSlider
                slides={productSlides}
                durationMs={durationMs}
                aspectClassName={aspect}
            />

            <p>
                Ürünlerimiz <b>6 ana grupta</b> sunulmaktadır. Her grup içinde kendine özel ürünlerimiz
                mevcuttur. Grup detayları için lütfen <b>grup ikonuna tıklayınız</b>.
            </p>
        </section>
    );
}
