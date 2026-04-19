import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import heroDesktopImg from "@assets/abc.jpeg";
import heroMobileImg from "@assets/abc-mobile.jpeg";
import { baccaratGiftImg, productImages } from "@/lib/images";
import { fragrances, collections } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
};

export default function Home() {
  const featuredFragrances = [
    fragrances.find(f => f.collectionKey === "noire")!,
    fragrances.find(f => f.collectionKey === "pierre")!,
    fragrances.find(f => f.collectionKey === "doree")!,
  ];

  return (
    <div className="w-full">

      {/* ─── HERO ─── */}

      {/* ── MOBILE HERO (below md) ── */}
      <section className="md:hidden relative min-h-[100dvh] w-full overflow-hidden bg-[#080706] flex flex-col">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMobileImg}
            alt=""
            className="w-full h-full object-cover opacity-[0.015] scale-100"
            style={{ objectPosition: "center center" }}
          />
          <<div className="absolute inset-0 bg-[#080706]/85" />
        </div>

        <div className="relative z-20 flex flex-col pt-32 pb-12 px-7">
          <motion.div
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-6 h-px bg-gold/60" />
            <span className="text-stone/50 tracking-[0.3em] uppercase text-[10px] font-sans">
              Maison YS — Nice
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-stone font-serif leading-[1.05] tracking-wide uppercase mb-5"
            style={{ fontSize: "clamp(2.6rem, 12vw, 4rem)" }}
          >
            Rare par<br/>nature.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone/35 tracking-[0.18em] uppercase text-[10px] font-sans mb-10"
          >
            Extrait de Parfum
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link href="/collection">
              <span className="inline-flex items-center gap-5 text-[10px] tracking-[0.22em] uppercase text-stone border border-gold/35 px-7 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-700 cursor-pointer">
                Découvrir la Collection
                <ArrowRight size={11} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DESKTOP HERO (md+) ── */}
      <section className="hidden md:flex relative h-[100dvh] w-full overflow-hidden bg-[#080706] items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroDesktopImg}
            alt=""
            className="w-full h-full object-cover opacity-15 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080706] via-[#080706]/80 to-[#080706]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
          className="absolute right-0 top-0 h-full w-[45%] z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#080706] via-[#080706]/10 to-transparent z-10" />
          <img
            src={productImages.vanillapowder}
            alt="Vanilla Powder"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        <div className="relative z-20 flex flex-col px-16 lg:px-24 max-w-3xl">
          <motion.div
            initial="hidden" animate="visible" variants={fadeIn}
            className="flex items-center gap-4 mb-20"
          >
            <div className="w-8 h-px bg-gold/60" />
            <span className="text-stone/60 tracking-[0.35em] uppercase text-xs font-sans">
              Maison YS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="text-stone font-serif leading-none tracking-widest uppercase mb-6"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)" }}
          >
            Rare par<br/>nature.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="text-stone/40 tracking-[0.2em] uppercase text-xs font-sans mb-20"
          >
            Extrait de Parfum — Sélection Maison YS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="/collection">
              <span className="inline-flex items-center gap-6 text-xs tracking-[0.25em] uppercase text-stone border border-gold/40 px-8 py-4 hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-700 cursor-pointer">
                Découvrir la Collection
                <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-px h-12 bg-gradient-to-b from-gold/0 to-gold/40" />
        </motion.div>
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="py-40 bg-stone w-full">
        <div className="container mx-auto px-8 text-center max-w-2xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-20 bg-gold/40 mb-16" />
            <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-8">La Maison</p>
            <h2 className="text-obsidian text-2xl md:text-4xl font-serif leading-relaxed mb-10">
              « L'art de l'invisible.<br/>Le don de la présence. »
            </h2>
            <p className="text-obsidian/55 tracking-widest uppercase text-xs leading-loose max-w-sm">
              Des extraits de parfum rares, élaborés pour ceux qui comprennent la différence entre porter un parfum et incarner une présence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── LA SÉLECTION ─── */}
      <section className="py-32 bg-obsidian text-stone w-full">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4"
          >
            <div>
              <p className="text-gold/60 tracking-[0.3em] uppercase text-xs mb-4">Sélection exclusive</p>
              <h2 className="text-4xl md:text-5xl font-serif">La Sélection</h2>
            </div>
            <Link href="/collection">
              <span className="group flex items-center gap-4 text-xs tracking-[0.25em] uppercase text-stone/50 hover:text-gold transition-colors cursor-pointer pb-1 border-b border-stone/20">
                Voir toute la collection <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {featuredFragrances.map((fragrance, i) => (
              <motion.div
                key={fragrance.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${encodeURIComponent(fragrance.name)}`}>
                  <div>
                    <div className="aspect-[3/4] overflow-hidden bg-stone/5 mb-6 relative">
                      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                      <img
                        src={productImages[fragrance.imageKey]}
                        alt={fragrance.name}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-1000"
                        style={{ objectPosition: "center 15%" }}
                      />
                    </div>
                    <div className="px-2 flex flex-col gap-1">
                      <p className="text-xs uppercase tracking-[0.25em] text-gold/60">{fragrance.family}</p>
                      <h3 className="font-serif text-xl group-hover:text-gold transition-colors duration-500">{fragrance.name}</h3>
                      <p className="text-xs tracking-widest text-stone/30">{fragrance.volume}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COLLECTIONS TILES ─── */}
      <section className="py-32 bg-stone">
        <div className="container mx-auto px-8 max-w-7xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <p className="text-obsidian/40 tracking-[0.3em] uppercase text-xs mb-5">Trois univers</p>
            <h2 className="text-3xl md:text-4xl font-serif text-obsidian">Nos Collections</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collections.map((col, i) => {
              const firstFrag = fragrances.find(f => f.collectionKey === col.key)!;
              return (
                <motion.div
                  key={col.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="group"
                >
                  <Link href={`/collection#${col.key}`}>
                    <div className="cursor-pointer">
                      <div className="aspect-[4/5] overflow-hidden bg-obsidian mb-6 relative">
                        <div className="absolute inset-0 bg-obsidian/30 group-hover:bg-obsidian/10 transition-all duration-700 z-10" />
                        <img
                          src={productImages[firstFrag.imageKey]}
                          alt={col.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                          style={{ objectPosition: "center 15%" }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                          <div className="w-6 h-px bg-gold/60 mb-3" />
                          <h3 className="font-serif text-stone text-xl mb-1">{col.name}</h3>
                          <p className="text-stone/50 text-xs tracking-widest">{col.tagline}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── GIFTING ─── */}
      <section className="py-32 bg-obsidian text-stone w-full">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-gold/60 tracking-[0.3em] uppercase text-xs mb-6">Offrir la distinction</p>
              <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Le Don de la<br/>Pure Opulence
              </h3>
              <p className="text-stone/50 leading-relaxed mb-12 max-w-sm text-sm">
                Encaissés dans des textures de marbre sombre et signés de notre sceau doré, nos coffrets transforment l'acte d'offrir en rituel inoubliable.
              </p>
              <Link href="/gifting">
                <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase text-gold border border-gold/30 px-8 py-4 hover:bg-gold hover:text-obsidian transition-all duration-700 cursor-pointer">
                  Voir les cadeaux <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gold/5 translate-x-3 translate-y-3" />
              <img
                src={baccaratGiftImg}
                alt="Coffret Cadeau Maison YS"
                className="relative z-10 w-full h-full object-cover border border-white/5"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CLOSING CTA ─── */}
      <section className="py-40 bg-stone text-obsidian text-center">
        <div className="container mx-auto px-8 max-w-xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="w-px h-16 bg-gold/40 mb-16" />
            <h2 className="text-2xl md:text-4xl font-serif mb-12 leading-relaxed">
              Votre signature olfactive<br/>vous attend.
            </h2>
            <Link href="/collection">
              <span className="inline-flex items-center gap-5 text-xs tracking-[0.25em] uppercase bg-obsidian text-stone px-10 py-4 hover:bg-gold hover:text-obsidian transition-all duration-700 cursor-pointer">
                Explorer la Collection <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}