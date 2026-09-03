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
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        >
          <path
            {...commonProps}
            d="M13 20h17c0 6.3-3.2 10-8.5 10S13 26.3 13 20Z"
          />
          <path
            {...commonProps}
            d="M30 22h3.5c2.4 0 4 1.3 4 3.4 0 2.3-1.8 3.8-4.6 3.8H31"
          />
          <path
            {...commonProps}
            d="M11 33c3 1.6 7.5 2.5 11 2.5 3.9 0 8.8-.9 12-2.5"
          />
          <path
            {...commonProps}
            d="M19 15c0-1.7 1.4-2.4 1.4-3.9M24 16c0-1.9 1.6-2.5 1.6-4.2M29 15c0-1.7 1.4-2.4 1.4-3.9"
          />
        </svg>
      );

    case "snacks":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        >
          <path
            {...commonProps}
            d="M10 30 22 12a2.5 2.5 0 0 1 4 0l12 18a2.5 2.5 0 0 1-2 4H12a2.5 2.5 0 0 1-2-4Z"
          />
          <path {...commonProps} d="M19 24c2.5-2.5 7.5-2.5 10 0" />
          <path {...commonProps} d="M17 28h14" />
        </svg>
      );

    case "bakery":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        >
          <path
            {...commonProps}
            d="M15 21c0-6 4-10 9-10s9 4 9 10v12H15V21Z"
          />
          <path
            {...commonProps}
            d="M15 21c1.8 1.4 3.7 2.1 5.7 2.1 2.2 0 3.6-.9 4.8-2 1.1 1.2 2.6 2 4.8 2 2 0 3.8-.7 5.7-2.1"
          />
          <path
            {...commonProps}
            d="M19 17c0-2 1.5-3.5 3.5-3.5M24 15c0-2 1.5-3.5 3.5-3.5M29 17c0-2-1.5-3.5-3.5-3.5"
          />
        </svg>
      );

    case "coolDrinks":
    case "shakes":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        >
          <path {...commonProps} d="M17 12h14l-2 22H19L17 12Z" />
          <path {...commonProps} d="M20 18h8" />
          <path
            {...commonProps}
            d="M22 8c2.4 1.2 3.8 2.7 3.8 5.2"
          />
          <path {...commonProps} d="M30 8 26 14" />
        </svg>
      );

    case "sandwiches":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        >
          <path
            {...commonProps}
            d="M12 26c1.5-4.3 5.4-7 10-7h4c4.6 0 8.5 2.7 10 7"
          />
          <path {...commonProps} d="M10 28h28" />
          <path {...commonProps} d="M14 31h20" />
          <path {...commonProps} d="M18 17h12" />
        </svg>
      );

    case "combos":
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        >
          <path {...commonProps} d="M14 18h20v16H14V18Z" />
          <path {...commonProps} d="M11 18h26" />
          <path {...commonProps} d="M24 18v16" />
          <path {...commonProps} d="M18 18c0-3 2.2-5 6-5s6 2 6 5" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8"
        >
          <circle {...commonProps} cx="24" cy="24" r="10" />
        </svg>
      );
  }
}

function getMobileLabel(name) {
  const map = {
    "Hot Beverages": "Hot",
    Snacks: "Snacks",
    Bakery: "Bakery",
    "Cool Drinks": "Cool",
    Shakes: "Shakes",
    Sandwiches: "Sandwich",
    Combos: "Combos",
  };

  return map[name] || name;
}

export default function MenuCategoryTabs({
  categories = [],
  activeCategorySlug,
  onCategoryChange,
}) {
  return (
    <div className="relative w-full">
      <div
        className="
          overflow-x-auto
          pb-1.5
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          [scroll-snap-type:x_mandatory]
          [-webkit-overflow-scrolling:touch]
        "
      >
        {/* ==========================================================
            MOBILE
        ========================================================== */}

        <div className="flex min-w-max gap-2 px-0.5 sm:gap-3 lg:hidden">
          {categories.map((category) => {
            const isActive = category.slug === activeCategorySlug;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.slug)}
                className={`
                  [scroll-snap-align:start]
                  flex
                  min-w-[84px]
                  shrink-0
                  flex-col
                  items-center
                  justify-center
                  rounded-[17px]
                  border
                  px-2.5
                  py-2.5
                  text-center
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "border-[#7a3d14] bg-[linear-gradient(180deg,#7a3d14_0%,#5d2c0e_100%)] text-[#fffaf4] shadow-[0_7px_16px_rgba(91,44,14,0.12)]"
                      : "border-[#eaded2] bg-[#fffaf5] text-[#2d1a10] hover:bg-[#fcf4ec]"
                  }
                `}
              >
                <div className="flex h-8 items-center justify-center">
                  <CategoryIcon
                    iconKey={category.iconKey}
                    isActive={isActive}
                  />
                </div>

                <span
                  className={`
                    mt-1.5
                    text-[0.68rem]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    ${
                      isActive
                        ? "text-[#fffaf4]"
                        : "text-[#3d2a20]"
                    }
                  `}
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {getMobileLabel(category.name)}
                </span>
              </button>
            );
          })}
        </div>

        {/* ==========================================================
            DESKTOP
        ========================================================== */}

        <div className="hidden lg:block">
          <div
            className="
              grid
              w-full
              grid-cols-7
              rounded-[22px]
              border
              border-[#eaded2]
              bg-[#fffaf5]
              p-1.5
              shadow-[0_5px_16px_rgba(86,50,28,0.045)]
            "
          >
            {categories.map((category, index) => {
              const isActive =
                category.slug === activeCategorySlug;

              const isLast =
                index === categories.length - 1;

              return (
                <div
                  key={category.id}
                  className={`
                    relative
                    min-w-0
                    ${
                      !isLast
                        ? "after:absolute after:right-0 after:top-1/2 after:h-[54%] after:w-px after:-translate-y-1/2 after:bg-[#eaded2]"
                        : ""
                    }
                  `}
                >
                  <button
                    type="button"
                    onClick={() =>
                      onCategoryChange(category.slug)
                    }
                    className={`
                      flex
                      h-full
                      w-full
                      flex-col
                      items-center
                      justify-center
                      rounded-[17px]
                      px-3
                      py-3.5
                      text-center
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-[linear-gradient(180deg,#7a3d14_0%,#5d2c0e_100%)] text-[#fffaf4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_7px_16px_rgba(91,44,14,0.14)]"
                          : "bg-transparent text-[#2d1a10] hover:bg-[#fcf4ec]"
                      }
                    `}
                  >
                    <div className="flex h-9 items-center justify-center">
                      <CategoryIcon
                        iconKey={category.iconKey}
                        isActive={isActive}
                      />
                    </div>

                    <span
                      className={`
                        mt-2
                        text-[0.84rem]
                        font-bold
                        uppercase
                        tracking-[0.035em]
                        ${
                          isActive
                            ? "text-[#fffaf4]"
                            : "text-[#2f2018]"
                        }
                      `}
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                      }}
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