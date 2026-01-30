import Image from "next/image";
import { notFound } from "next/navigation";
import ProductGrid from "../../components/ProductGrid";
import {
    ProductGroupLabels,
    GroupSlugToEnum,
    ProductGroupIntroText,
    products,
    type ProductGroup,
} from "../../../data/products";

type PageProps = {
    params: Promise<{ group: string }>;
};

function toPublicSrc(path: string) {
    if (!path) return "";
    if (path.startsWith("/")) return path;
    return `/${path}`;
}

export default async function ProductGroupPage({ params }: PageProps) {
    const { group } = await params;

    const groupEnum: ProductGroup | undefined = GroupSlugToEnum[group];
    if (!groupEnum) notFound();

    const groupTitle = ProductGroupLabels[groupEnum];
    const groupIntro = ProductGroupIntroText[groupEnum];

    const groupProducts = products.filter((p) => p.group === groupEnum);

    return (
        <section className="flex flex-col gap-10 py-6">
            <header className="flex flex-col gap-6">
                <h1 className="text-[var(--color-baltic-blue)]">{groupTitle}</h1>

                {groupIntro ? (
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                        <div className="flex flex-col gap-4 max-w-5xl text-black/70">
                            <p className="font-semibold text-black/80">
                                {groupIntro.heading}
                            </p>

                            <ul className="list-disc pl-5 flex flex-col gap-2">
                                {groupIntro.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>

                            <p>{groupIntro.paragraph}</p>

                            {groupIntro.warning ? (
                                <p className="font-semibold text-black/80">
                                    {groupIntro.warning}
                                </p>
                            ) : null}
                        </div>

                        {groupIntro.imageDir ? (
                            <div className="w-full overflow-hidden rounded-2xl border border-black/10 bg-black/5">
                                <div className="relative w-full aspect-[16/10]">
                                    <Image
                                        src={toPublicSrc(groupIntro.imageDir)}
                                        alt={groupIntro.imageName ? groupIntro.imageName : groupTitle}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 520px"
                                        priority={false}
                                    />
                                </div>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </header>

            {groupProducts.length === 0 ? (
                <div className="rounded-2xl border border-black/10 p-6 text-black/70">
                    Bu grupta henüz ürün eklenmedi.
                </div>
            ) : (
                <ProductGrid products={groupProducts} />
            )}

            <section className="mt-14 flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-[var(--color-baltic-blue)]">
                    Bilgilendirme
                </h2>

                <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <p className="text-sm leading-6 text-black/70">
                        <span className="font-semibold text-[var(--color-baltic-blue)]">
                            1)
                        </span>{" "}
                        Kolloid; bir maddenin diğer bir madde içerisinde çıplak gözle
                        görülemeyecek boyutta dağılmasıyla oluşan heterojen karışıma verilen
                        isimdir.
                    </p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-5">
                    <p className="text-sm leading-6 text-black/70">
                        <span className="font-semibold text-[var(--color-baltic-blue)]">
                            2)
                        </span>{" "}
                        Mikrobiyom, bakteriler, virüsler, mantarlar ve diğer
                        mikroorganizmaların genetik çeşitliliğini kapsar.
                    </p>
                </div>
            </section>

        </section>
    );
}
