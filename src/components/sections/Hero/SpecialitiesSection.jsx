import {
    ArrowRight,
    Coffee,
    Croissant,
    Cookie,
    GlassWater,
    Leaf,
    Sparkles,
  } from "lucide-react";
  
  const items = [
    {
      title: "Premium Tea",
      subtitle: "Rich • Aromatic • Familiar",
      desc: "Slow-brewed warmth with the depth, comfort, and fragrance people remember.",
      image: "https://picsum.photos/seed/thatha-tea/900/1100",
      icon: Coffee,
      note: "Signature pours, classic taste",
    },
    {
      title: "Fresh Bakes",
      subtitle: "Soft • Buttery • Fresh",
      desc: "Tea-time staples that feel simple, warm, and freshly served every day.",
      image: "https://picsum.photos/seed/thatha-bakes/900/1100",
      icon: Croissant,
      note: "Best paired with evening chai",
    },
    {
      title: "Cookies",
      subtitle: "Crisp • Sweet • Comforting",
      desc: "A familiar bite that rounds out the cup and makes the visit feel complete.",
      image: "https://picsum.photos/seed/thatha-cookies/900/1100",
      icon: Cookie,
      note: "Small comforts, done right",
    },
    {
      title: "Cool Drinks",
      subtitle: "Chilled • Smooth • Refreshing",
      desc: "For lighter moods, warmer afternoons, and customers who want more than chai.",
      image: "https://picsum.photos/seed/thatha-cooldrinks/900/1100",
      icon: GlassWater,
      note: "For younger crowds and warm days",
    },
  ];
  
  function SpecialitiesShowcase() {
    return (
      <section className="relative overflow-hidden bg-[#241611] text-[#fff8ef]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,138,61,0.14),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_28%)]" />
  
        <svg
          aria-hidden="true"
          viewBox="0 0 160 160"
          className="pointer-events-none absolute left-[-1.5rem] top-8 h-24 w-24 text-[#d79a4d]/18 sm:h-28 sm:w-28 lg:left-6 lg:top-10 lg:h-32 lg:w-32"
          fill="none"
        >
          <path
            d="M28 132C31 64 75 24 138 18C132 84 91 127 28 132Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M41 117C57 95 78 67 120 33"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
  
        <div className="relative mx-auto max-w-[1560px] px-4 py-8 sm:px-6 sm:py-10 lg:px-14 lg:py-16 xl:px-20">
          <div className="grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-stretch lg:gap-8 xl:grid-cols-[410px_minmax(0,1fr)]">
            {/* Left panel */}
            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-[3px] sm:p-7 lg:flex lg:h-[920px] lg:flex-col lg:justify-between lg:rounded-[30px] lg:p-9">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#ffffff14] bg-[#fffaf4]/5 px-3 py-2 text-[#d79a4d]">
                            <Sparkles className="h-[14px] w-[14px]" />
                            <p
                                className="spec-kicker text-[0.72rem] font-bold uppercase tracking-[0.2em]"
                                style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                                Our Specialities
                            </p>
                        </div>


                        <h2
                            className="spec-title mt-4 max-w-[9ch] text-[2.35rem] uppercase leading-[0.92] tracking-[-0.04em] text-[#fff8ef] sm:text-[2.9rem] lg:text-[4rem]"
                            style={{ fontFamily: "'Anton', sans-serif" }}
                        >
                            More than just tea
                        </h2>


                        <p
                            className="spec-copy mt-4 max-w-[30rem] text-[0.96rem] leading-[1.72] text-[#d7c8bb] sm:text-[1rem] lg:text-[1.03rem]"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                            Chai may bring people in, but it is the full tea-time ritual that makes
                            them stay — warm cups, soft bakes, crisp bites, and little comforts
                            served with familiarity.
                        </p>


                        <div
                            className="spec-note-panel mt-5 space-y-4 rounded-[22px] border border-[#ffffff14] bg-[#fffaf4]/5 p-4 sm:p-5"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#ffffff18] bg-[#fffaf4]/8 text-[#d79a4d]">
                                    <Leaf className="h-[15px] w-[15px]" />
                                </span>
                                <div>
                                    <p className="text-[0.76rem] font-bold uppercase tracking-[0.16em] text-[#c88a3d]">
                                        House note
                                    </p>
                                    <p className="mt-1 text-[0.92rem] leading-[1.62] text-[#d8cbbf]">
                                        Built for everyday visits, family cravings, and the kind of tea
                                        breaks people remember.
                                    </p>
                                </div>
                            </div>


                            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                                <div>
                                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#bcaea1]">
                                        Best for
                                    </p>
                                    <p className="mt-1 text-[0.9rem] text-[#fff2e6]">Evening tea runs</p>
                                </div>
                                <div>
                                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#bcaea1]">
                                        Served with
                                    </p>
                                    <p className="mt-1 text-[0.9rem] text-[#fff2e6]">Warmth & familiarity</p>
                                </div>
                            </div>
                        </div>


                        <div className="spec-cta mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <a
                                href="/menu"
                                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-[#d79a4d] px-6 text-[0.88rem] font-extrabold uppercase tracking-[0.06em] text-[#241611] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#e7ab5e]"
                                style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                                Explore Menu
                                <ArrowRight className="h-[16px] w-[16px]" />
                            </a>


                            <p
                                className="text-[0.82rem] leading-[1.5] text-[#bbaea2]"
                                style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                                Freshly brewed comforts, made for repeat visits.
                            </p>
                        </div>
                    </div>
  
            {/* Right grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:h-[920px] lg:grid-cols-2 lg:grid-rows-2 lg:gap-5">
              {items.map((item, index) => {
                const Icon = item.icon;
  
                return (
                  <article
                    key={item.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="group relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-[#2c1810] shadow-[0_24px_70px_rgba(0,0,0,0.20)]"
                  >
                    <div className="relative h-full min-h-[320px] overflow-hidden lg:min-h-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={1100}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      />
  
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(36,22,17,0.96)_0%,rgba(36,22,17,0.48)_40%,rgba(36,22,17,0.12)_72%,rgba(36,22,17,0.03)_100%)]" />
  
                      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#fffaf4]/10 px-3 py-2 text-[#fff8ef] backdrop-blur-[3px] sm:left-5 sm:top-5">
                        <Icon className="h-[16px] w-[16px]" />
                        <span
                          className="text-[0.68rem] font-bold uppercase tracking-[0.14em]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          Signature
                        </span>
                      </div>
  
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                        <p
                          className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#d79a4d] sm:text-[0.72rem]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {item.subtitle}
                        </p>
  
                        <h3
                          className="mt-2 text-[1.28rem] uppercase leading-[0.96] tracking-[-0.03em] text-[#fff8ef] sm:text-[1.45rem] lg:text-[1.58rem]"
                          style={{ fontFamily: "'Anton', sans-serif" }}
                        >
                          {item.title}
                        </h3>
  
                        <p
                          className="mt-3 max-w-[27ch] text-[0.92rem] leading-[1.62] text-[#ddcfc4]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {item.desc}
                        </p>
  
                        <div
                          className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#fffaf4]/6 px-3 py-2 text-[0.72rem] font-semibold tracking-[0.08em] text-[#f3e4d6]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#d79a4d]" />
                          {item.note}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default SpecialitiesShowcase;