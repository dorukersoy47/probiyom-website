// app/products/page.tsx
import ProductGrid from "../components/ProductGrid";

export default function ProductsPage() {
  return (
    <main className="py-10">
      <h1 className="text-[var(--color-text)]">Our Products</h1>
      <p className="mt-3 max-w-2xl text-black/70">
        Explore our current lineup. Items marked coming soon are not yet available.
      </p>

      <div className="mt-8">
        <ProductGrid/>
      </div>
    </main>
  );
}
