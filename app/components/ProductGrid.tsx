import Image from "next/image";
import { type Product } from "../../data/products";

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <article
                    key={product.id}
                    className="rounded-xl border border-black/10 bg-white p-5 shadow-md ring-2 ring-[var(--color-mint-leaf)]/30"
                >
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-[var(--color-text)]">
                            {product.name}
                        </h3>

                        <span
                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                                product.isAvailable
                                    ? "bg-[var(--color-tea-green)] text-[var(--color-baltic-blue)]"
                                    : "bg-black/5 text-black/60"
                            }`}
                        >
                            {product.isAvailable ? "Available" : "Coming soon"}
                        </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-black/70">
                        {product.description}
                    </p>

                    <div className="mt-4 overflow-hidden rounded-lg border border-black/10 bg-black/5">
                        <Image
                            src={`/${product.imageName}`}
                            alt={product.name}
                            width={800}
                            height={500}
                            className="h-40 w-full object-cover"
                        />
                    </div>
                </article>
            ))}
        </div>
    );
}
