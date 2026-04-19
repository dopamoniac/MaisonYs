import { useParams } from "wouter";
import { motion } from "framer-motion";
import { fragrances } from "@/lib/data";
import { productImages } from "@/lib/images";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Product() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name || "");
  const fragrance = fragrances.find(f => f.name === decodedName) || fragrances[0];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } }
  };

  // Cross-collection recommendations: one from each other collection
  const otherCollections = [...new Set(fragrances.map(f => f.collectionKey))].filter(k => k !== fragrance.collectionKey);
  const recommendations = otherCollections
    .map(key => fragrances.find(f => f.collectionKey === key)!)
    .slice(0, 3);

  const productImage = productImages[fragrance.imageKey];

  return (
    <div className="w-full bg-stone min-h-screen pt-24">

      {/* Product Hero */}
      <section className="container mx-auto px-8 py-16 md:py-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-obsidian/5 overflow-hidden"
          >
            <img
              src={productImage}
              alt={fragrance.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 15%" }}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="flex flex-col max-w-lg"
          >
            <div className="w-px h-12 bg-obsidian/15 mb-10" />
            <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-4">{fragrance.family}</p>
            <h1 className="text-4xl md:text-6xl font-serif text-obsidian mb-4">{fragrance.name}</h1>
            <p className="text-obsidian/50 tracking-[0.2em] uppercase text-xs mb-12">
              {fragrance.volume} — Extrait de Parfum
            </p>

            <p className="text-obsidian/70 leading-relaxed mb-14 text-lg italic font-serif">
              « {fragrance.description} »
            </p>

            <Link href="/contact">
              <button className="w-full py-4 bg-obsidian text-stone tracking-[0.2em] uppercase text-xs hover:bg-gold hover:text-obsidian transition-colors duration-700 cursor-pointer mb-16">
                Nous Contacter
              </button>
            </Link>

            <div className="flex flex-col gap-0 w-full border-t border-obsidian/10">
              {[
                ["Famille", fragrance.family],
                ["Concentration", "Extrait de Parfum"],
                ["Volume", fragrance.volume],
                ["Disponible chez", "Maison YS — Nice"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-4 border-b border-obsidian/8">
                  <span className="tracking-widest uppercase text-xs text-obsidian/40">{label}</span>
                  <span className="text-sm text-obsidian/70">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cross-collection recommendations */}
      <section className="bg-obsidian text-stone py-28 w-full">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="mb-16">
            <div className="w-8 h-px bg-gold/50 mb-6" />
            <h2 className="text-3xl font-serif text-stone mb-2">Vous aimerez aussi</h2>
            <p className="text-stone/30 tracking-widest uppercase text-xs">D'autres collections de la Maison</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${encodeURIComponent(f.name)}`}>
                  <div>
                    <div className="aspect-[4/5] bg-stone/5 mb-6 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                      <img
                        src={productImages[f.imageKey]}
                        alt={f.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        style={{ objectPosition: "center 15%" }}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-xl group-hover:text-gold transition-colors duration-500">{f.name}</h3>
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-stone/35 mt-1">{f.family}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
