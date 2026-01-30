import { notFound } from "next/navigation";
import {
    ProductGroupLabels,
    GroupSlugToEnum,
    products,
    type ProductGroup,
} from "../../../data/products";
import ProductGrid from "../../components/ProductGrid";


type PageProps = {
    params: Promise<{ group: string }>;
};

export default async function ProductGroupPage({ params }: PageProps) {
    const { group } = await params;

    const groupEnum: ProductGroup | undefined = GroupSlugToEnum[group];
    if (!groupEnum) notFound();

    const groupTitle = ProductGroupLabels[groupEnum];

    const groupProducts = products.filter((p) => p.group === groupEnum);

    return (
        <section className="flex flex-col gap-10 py-6">
            <header className="flex flex-col gap-3">
                <h1 className="text-[var(--color-baltic-blue)]">{groupTitle}</h1>
                <p className="max-w-4xl text-black/70">
                    Bu sayfa {groupTitle} grubundaki ürünleri listeler. Grup açıklaması
                    metnini buraya koyabiliriz.
                </p>
            </header>

            {groupProducts.length === 0 ? (
                <div className="rounded-2xl border border-black/10 p-6 text-black/70">
                    Bu grupta henüz ürün eklenmedi.
                </div>
            ) : (
                <ProductGrid products={groupProducts} />
            )}
        </section>
    );
}
