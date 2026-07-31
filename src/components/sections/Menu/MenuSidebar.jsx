function ArrowRightIcon({ active }) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke={active ? "#fffaf4" : "#9a6a43"}
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  
  export default function MenuSidebar({
    activeCategory,
    subcategories = [],
    activeSubcategorySlug,
    onSubcategoryChange,
    decorativeImage,
    onAfterSelectMobile,
  }) {
    const handleSubcategoryClick = (slug) => {
      onSubcategoryChange(slug);
  
      if (typeof window !== "undefined" && window.innerWidth < 1024) {
        window.requestAnimationFrame(() => {
          onAfterSelectMobile?.();
        });
      }
    };
  
    return (
      <aside className="w-full">
        <div className="overflow-hidden rounded-[28px] border border-[#eadfd3] bg-[#fffdfa] shadow-[0_10px_30px_rgba(77,45,24,0.06)]">
          <div className="relative z-10 px-5 pt-5 sm:px-6 sm:pt-6 lg:px-7 lg:pt-7">
            <h2
              className="text-[2rem] leading-none text-[#1e120d] sm:text-[2.2rem]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {activeCategory?.name || "Menu"}
            </h2>
  
            <div className="mt-5 space-y-1">
              {subcategories.map((subcategory, index) => {
                const isActive = subcategory.slug === activeSubcategorySlug;
                const isLast = index === subcategories.length - 1;
  
                return (
                  <div key={subcategory.id}>
                    <button
                      type="button"
                      onClick={() => handleSubcategoryClick(subcategory.slug)}
                      className={`flex w-full items-center justify-between rounded-[14px] px-4 py-[14px] text-left transition sm:px-5 ${
                        isActive
                          ? "bg-[linear-gradient(180deg,#c96b1f_0%,#a95317_100%)] text-[#fffaf4] shadow-[0_10px_20px_rgba(182,99,34,0.18)]"
                          : "bg-transparent text-[#241813] hover:bg-[#fbf2e9]"
                      }`}
                    >
                      <span
                        className={`text-[1rem] font-medium leading-none sm:text-[1.05rem] ${
                          isActive ? "text-[#fffaf4]" : "text-[#2f2018]"
                        }`}
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {subcategory.name}
                      </span>
  
                      <span className="ml-4 shrink-0">
                        <ArrowRightIcon active={isActive} />
                      </span>
                    </button>
  
                    {!isActive && !isLast ? (
                      <div className="mx-4 h-px bg-[#f0e5db] sm:mx-5" />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
  
          <div className="relative mt-5 min-h-[260px] px-3 pb-4 sm:min-h-[320px] sm:px-4  lg:min-h-[420px]">
            {decorativeImage ? (
              <img
                src={decorativeImage}
                alt=""
                loading="lazy"
               className="absolute inset-x-0 bottom-16 z-0 mx-auto w-full max-w-[300px] object-contain opacity-25 sm:max-w-[340px] sm:opacity-100 lg:max-w-[360px]" />
            ) : null}
            
            <div className="relative z-10 flex min-h-[260px] flex-col justify-end sm:min-h-[320px] lg:min-h-[420px]">
              <div className="pb-2 text-center">
                <p
                  className="text-[2rem] italic leading-[1.05] text-[#9a5f34] sm:text-[2.35rem]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Every cup
                  <br />
                  has a story
                </p>
  
                <div className="mt-3 flex items-center justify-center gap-3 text-[#a56d43]">
                  <span className="h-px w-10 bg-current/50 sm:w-12" />
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                  >
                    <path
                      d="M12 19s-6.5-4.2-6.5-9.1A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 6.5 2.5C18.5 14.8 12 19 12 19Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="h-px w-10 bg-current/50 sm:w-12" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </aside>
    );
  }