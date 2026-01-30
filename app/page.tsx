// app/page.tsx
import ImageSlider from "./components/ImageSlider";
import { homeSlides, durationMs, aspect } from "../data/slides";

export default function HomePage() {
    return (
        <main className="flex flex-col gap-10 py-6">
            <section>
                <div className="flex flex-col gap-5">
                    <h1 className="text-[var(--color-baltic-blue)]">Probiyom</h1>
                    <p className="max-w-3xl">
                        HeiQ VivoTech probiyotik teknolojisi ile doğal mikrobiyom dengesini
                        destekleyen, uzun süreli ve sürdürülebilir hijyen çözümleri.
                    </p>
                </div>

                <div className="mt-8">
                    <ImageSlider
                        slides={homeSlides}
                        durationMs={durationMs}
                        aspectClassName={aspect}
                    />
                </div>
            </section>

            <section>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[var(--color-baltic-blue)]">
                        Probiyotik Teknoloji Nedir?
                    </h2>
                    <h3 className="text-[var(--color-baltic-blue)]">
                        HeiQ VivoTech ile Doğal ve Kalıcı Hijyen
                    </h3>

                    <p>
                        <strong>Probiyotikler</strong>, bulunduğumuz ortamların yüzeylerinde
                        ve cildimizde
                        <strong> doğal ve dengeli bir mikrobiyom</strong> oluşmasına
                        yardımcı olan faydalı bakterilerdir.
                    </p>

                    <p>
                        <strong>HeiQ VivoTech probiyotik teknolojimiz</strong>, yüzde yüz{" "}
                        <strong>doğal ve biyolojik olarak parçalanabilir</strong>{" "}
                        içeriklerden faydalanarak mikrobiyal çeşitliliği destekler ve
                        çevrede ve ciltte doğal mikrobiyom dengesini güçlendirmeye yardımcı
                        olur.
                    </p>

                    <p>
                        Organik maddelerin parçalanmasına destek olur ve{" "}
                        <strong>uzun süreli, derinlemesine temizlik etkisi</strong> sağlar.
                    </p>

                    <p>
                        Bu sayede yalnızca yüzeyi değil, çevrenin doğal dengesini de koruyan{" "}
                        <strong>kalıcı ve sürdürülebilir hijyen çözümleri</strong> sunar.
                    </p>
                </div>
            </section>
        </main>
    );
}
