function CategoryIcon({ iconKey, isActive }) {
    const stroke = isActive ? "#fffaf4" : "#8d5d3d";
  
    const commonProps = {
      fill: "none",
      stroke,
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
  
    switch (iconKey) {
      case "hotBeverages":
        return (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
            <path {...commonProps} d="M13 20h17c0 6.3-3.2 10-8.5 10S13 26.3 13 20Z" />
            <path {...commonProps} d="M30 22h3.5c2.4 0 4 1.3 4 3.4 0 2.3-1.8 3.8-4.6 3.8H31" />
            <path {...commonProps} d="M11 33c3 1.6 7.5 2.5 11 2.5 3.9 0 8.8-.9 12-2.5" />
            <path {...commonProps} d="M19 15c0-1.7 1.4-2.4 1.4-3.9M24 16c0-1.9 1.6-2.5 1.6-4.2M29 15c0-1.7 1.4-2.4 1.4-3.9" />
          </svg>
        );
  
      case "snacks":
        return (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
            <path {...commonProps} d="M10 30 22 12a2.5 2.5 0 0 1 4 0l12 18a2.5 2.5 0 0 1-2 4H12a2.5 2.5 0 0 1-2-4Z" />
            <path {...commonProps} d="M19 24c2.5-2.5 7.5-2.5 10 0" />
            <path {...commonProps} d="M17 28h14" />
          </svg>
        );
  
      case "bakery":
        return (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
            <path {...commonProps} d="M15 21c0-6 4-10 9-10s9 4 9 10v12H15V21Z" />
            <path {...commonProps} d="M15 21c1.8 1.4 3.7 2.1 5.7 2.1 2.2 0 3.6-.9 4.8-2 1.1 1.2 2.6 2 4.8 2 2 0 3.8-.7 5.7-2.1" />
            <path {...commonProps} d="M19 17c0-2 1.5-3.5 3.5-3.5M24 15c0-2 1.5-3.5 3.5-3.5M29 17c0-2-1.5-3.5-3.5-3.5" />
          </svg>
        );
  
      case "coolDrinks":
      case "shakes":
        return (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
            <path {...commonProps} d="M17 12h14l-2 22H19L17 12Z" />
            <path {...commonProps} d="M20 18h8" />
            <path {...commonProps} d="M22 8c2.4 1.2 3.8 2.7 3.8 5.2" />
            <path {...commonProps} d="M30 8 26 14" />
          </svg>
        );
  
      case "sandwiches":
        return (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
            <path {...commonProps} d="M12 26c1.5-4.3 5.4-7 10-7h4c4.6 0 8.5 2.7 10 7" />
            <path {...commonProps} d="M10 28h28" />
            <path {...commonProps} d="M14 31h20" />
            <path {...commonProps} d="M18 17h12" />
          </svg>
        );
  
      case "combos":
        return (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
            <path {...commonProps} d="M14 18h20v16H14V18Z" />
            <path {...commonProps} d="M11 18h26" />
            <path {...commonProps} d="M24 18v16" />
            <path {...commonProps} d="M18 18c0-3 2.2-5 6-5s6 2 6 5" />
          </svg>
        );
  
      default:
        return (
          <svg viewBox="0 0 48 48" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
            <circle {...commonProps} cx="24" cy="24" r="10" />
          </svg>
        );
    }
  }
  
  export default function MenuCategoryTabs({
    categories = [],
    activeCategorySlug,
    onCategoryChange,
  }) {
    return (
      <div className="relative w-full">
        <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="min-w-max lg:min-w-0">
            <div className="flex w-max min-w-full rounded-[28px] border border-[#eaded2] bg-[#fffaf5] p-2 shadow-[0_8px_24px_rgba(86,50,28,0.06)] lg:grid lg:w-full lg:grid-cols-7 lg:gap-0">
              {categories.map((category, index) => {
                const isActive = category.slug === activeCategorySlug;
                const isLast = index === categories.length - 1;
  
                return (
                  <div
                    key={category.id}
                    className={`relative min-w-[148px] lg:min-w-0 ${
                      !isLast ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-[58%] lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-[#eaded2]" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => onCategoryChange(category.slug)}
                      className={`flex h-full w-full flex-col items-center justify-center rounded-[22px] px-4 py-4 text-center transition duration-200 sm:px-5 sm:py-5 ${
                        isActive
                          ? "bg-[linear-gradient(180deg,#7a3d14_0%,#5d2c0e_100%)] text-[#fffaf4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_10px_22px_rgba(91,44,14,0.22)]"
                          : "bg-transparent text-[#2d1a10] hover:bg-[#fcf4ec]"
                      }`}
                    >
                      <div className="flex h-10 items-center justify-center sm:h-11">
                        <CategoryIcon
                          iconKey={category.iconKey}
                          isActive={isActive}
                        />
                      </div>
  
                      <span
                        className={`mt-3 text-[0.84rem] font-bold uppercase tracking-[0.04em] sm:text-[0.92rem] lg:text-[0.98rem] ${
                          isActive ? "text-[#fffaf4]" : "text-[#2f2018]"
                        }`}
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {category.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }