import { motion } from "framer-motion";
import { Link } from "wouter";
import heroDesktopImg from "@assets/abc.jpeg";
import heroMobileImg from "@assets/abc-mobile.jpeg";
import { baccaratGiftImg, productImages } from "@/lib/images";
import { fragrances, collections } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Home() {
  const featuredFragrances = [
    fragrances.find((f) => f.collectionKey === "noire")!,
    fragrances.find((f) => f.collectionKey === "pierre")!,
    fragrances.find((f) => f.collectionKey === "doree")!,
  ];

  return (
    <>
      {/* HERO EXACT IMAGE - MOBILE */}
      <section className="block md:hidden relative w-full bg-black">
        <img
          src={heroMobileImg}
          alt="Maison YS Hero Mobile"
          className="w-full h-auto object-cover block"
        />
      </section>

      {/* HERO EXACT IMAGE - DESKTOP */}
      <section className="hidden md:block relative w-full bg-black">
        <img
          src={heroDesktopImg}
          alt="Maison YS Hero"
          className="w-full h-auto object-cover block"
        />
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="bg-black text-[#f5efe6] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="uppercase tracking-[0.35em] text-sm text-[#bfa37a] mb-6">
              La Maison
            </p>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
              « L'art de l'invisible.
              <br />
              Le don de la présence. »
            </h2>
            <p className="text-base md:text-lg text-[#d6c7b2] leading-relaxed max-w-2xl">
              Des extraits de parfum rares, élaborés pour ceux qui comprennent
              la différence entre porter un parfum et incarner une présence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── LA SÉLECTION ─── */}
      <section className="bg-[#080808] text-[#f5efe6] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="uppercase tracking-[0.35em] text-sm text-[#bfa37a] mb-4">
                Sélection exclusive
              </p>
              <h2 className="font-serif text-4xl md:text-5xl">La Sélection</h2>
            </div>

            <Link href="/collection">
              <a className="text-sm uppercase tracking-[0.25em] text-[#bfa37a] border border-[#7a5a2f] px-6 py-3 hover:bg-[#7a5a2f] hover:text-white transition">
                Voir toute la collection
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFragrances.map((fragrance, i) => (
              <motion.div
                key={fragrance.slug}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group border border-[#2b2218] bg-[#0d0d0d] overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#120f0b]">
                  <img
                    src={productImages[fragrance.slug]}
                    alt={fragrance.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <p className="uppercase tracking-[0.3em] text-xs text-[#bfa37a] mb-3">
                    {fragrance.family}
                  </p>
                  <h3 className="font-serif text-2xl mb-2">{fragrance.name}</h3>
                  <p className="text-sm text-[#c8b79e]">{fragrance.volume}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLLECTIONS TILES ─── */}
      <section className="bg-black text-[#f5efe6] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-[#bfa37a] mb-4">
            Trois univers
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-14">
            Nos Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((col, i) => {
              const firstFrag = fragrances.find(
                (f) => f.collectionKey === col.key
              )!;

              return (
                <motion.div
                  key={col.key}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="border border-[#2b2218] bg-[#0d0d0d] overflow-hidden group"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={productImages[firstFrag.slug]}
                      alt={col.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-2xl mb-3">{col.name}</h3>
                    <p className="text-[#c8b79e] leading-relaxed">
                      {col.tagline}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── GIFTING ─── */}
      <section className="bg-[#080808] text-[#f5efe6] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <p className="uppercase tracking-[0.35em] text-sm text-[#bfa37a] mb-4">
              Offrir la distinction
            </p>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Le Don de la
              <br />
              Pure Opulence
            </h3>
            <p className="text-[#d6c7b2] text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Encaissés dans des textures de marbre sombre et signés de notre
              sceau doré, nos coffrets transforment l'acte d'offrir en rituel
              inoubliable.
            </p>

            <Link href="/gifts">
              <a className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] border border-[#7a5a2f] px-6 py-4 text-[#f5efe6] hover:bg-[#7a5a2f] transition">
                Voir les cadeaux
              </a>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img
              src={baccaratGiftImg}
              alt="Maison YS Gift"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="bg-black text-[#f5efe6] py-24 px-6 md:px-12 border-t border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
              Votre signature olfactive
              <br />
              vous attend.
            </h2>

            <Link href="/collection">
              <a className="inline-flex items-center gap-3 border border-[#7a5a2f] px-8 py-4 uppercase tracking-[0.25em] text-sm hover:bg-[#7a5a2f] transition">
                Explorer la Collection
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}