import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProduct, products, getFeaturedProducts } from "@/lib/products";
import { ProductDetail } from "./product-detail";
import { ProductCard } from "@/components/product-card";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProduct(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getFeaturedProducts()
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  // If not enough related products in same category, add from featured
  if (relatedProducts.length < 4) {
    const additionalProducts = getFeaturedProducts()
      .filter((p) => p.id !== product.id && !relatedProducts.some((rp) => rp.id === p.id))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additionalProducts);
  }

  return (
    <div className="py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <ProductDetail product={product} />

        {relatedProducts.length > 0 && (
          <section className="mt-16 lg:mt-24">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
