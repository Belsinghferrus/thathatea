import { useState } from "react";

function MenuProductCard({ product, viewMode = "grid" }) {
  const [qty, setQty] = useState(0);

  const handleAdd = () => {
    setQty(1);
    // TODO: connect to cart here
  };

  const handleIncrement = () => {
    setQty((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQty((prev) => {
      const next = prev - 1;
      return next < 0 ? 0 : next;
    });
  };

  const isAdded = qty > 0;

  // ============================================================
  // GRID VIEW
  // ============================================================

  if (viewMode === "grid") {
    return (
      <article
        className="
          group
          flex
          h-full
          min-h-[300px]
          w-full
          min-w-0
          flex-col
          justify-between
          rounded-[14px]
          border
          border-[#e8e0d8]
          bg-white
          px-3
          pb-3
          pt-3
          shadow-[0_3px_12px_rgba(76,44,24,0.05)]
          transition-all
          duration-200
          hover:-translate-y-[2px]
          hover:shadow-[0_7px_18px_rgba(76,44,24,0.09)]
        "
      >
        {/* IMAGE */}

        <div
          className="
            flex
            h-[245px]
            w-full
            items-center
            justify-center
            overflow-hidden
            rounded-[10px]
          "
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="
              h-full
              w-full
              object-contain
              transition-transform
              duration-300
              group-hover:scale-[1.025]
            "
          />
        </div>

        {/* CONTENT */}

        <div className="mt-2.5 flex min-h-0 flex-1 flex-col">
          <h3
            className="
              line-clamp-2
              min-h-[38px]
              text-[0.9rem]
              font-semibold
              leading-[1.2]
              text-[#2b1a12]
            "
          >
            {product.name}
          </h3>

          {product.description && (
            <p
              className="
                mt-1
                line-clamp-1
                min-h-[17px]
                text-[0.7rem]
                leading-[1.35]
                text-[#817064]
              "
            >
              {product.description}
            </p>
          )}

          {/* PRICE + ACTION */}

          <div className="mt-auto pt-4">
            <div className="flex items-end justify-between gap-2">
              <div className="flex min-w-0 flex-col">
                <span
                  className="
                    text-[1rem]
                    font-bold
                    leading-none
                    text-[#1f120d]
                  "
                >
                  ₹{product.price}
                </span>

                {product.originalPrice &&
                  product.originalPrice > product.price && (
                    <span
                      className="
                        mt-1
                        text-[0.68rem]
                        leading-none
                        text-[#9a7a62]
                        line-through
                      "
                    >
                      ₹{product.originalPrice}
                    </span>
                  )}
              </div>

              {!isAdded ? (
                <button
                  type="button"
                  onClick={handleAdd}
                  className="
                    h-[38px]
                    min-w-[68px]
                    shrink-0
                    rounded-[9px]
                    border-[1.5px]
                    border-[#43a047]
                    bg-[#f8fff7]
                    px-3
                    text-[0.74rem]
                    font-bold
                    uppercase
                    tracking-[0.04em]
                    text-[#2e7d32]
                    transition
                    hover:bg-[#edf8ec]
                  "
                >
                  ADD
                </button>
              ) : (
                <div
                  className="
                    inline-flex
                    h-[38px]
                    shrink-0
                    items-center
                    rounded-[9px]
                    border-[1.5px]
                    border-[#43a047]
                    bg-[#f3fbf1]
                    text-[#2e7d32]
                  "
                >
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="
                      flex
                      h-full
                      w-[27px]
                      items-center
                      justify-center
                      text-[0.9rem]
                      font-bold
                    "
                  >
                    −
                  </button>

                  <span className="min-w-[22px] text-center text-[0.76rem] font-bold">
                    {qty}
                  </span>

                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="
                      flex
                      h-full
                      w-[27px]
                      items-center
                      justify-center
                      text-[0.9rem]
                      font-bold
                    "
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // ============================================================
  // LIST VIEW
  // ============================================================

  return (
    <article
      className="
        group
        flex
        items-center
        gap-3
        rounded-[13px]
        border
        border-[#e8e0d8]
        bg-white
        px-3
        py-2.5
        shadow-[0_3px_12px_rgba(76,44,24,0.045)]
        transition-all
        duration-200
        hover:-translate-y-[1px]
        hover:shadow-[0_7px_18px_rgba(76,44,24,0.08)]
      "
    >
      {/* IMAGE */}

      <div
        className="
          flex
          h-[88px]
          w-[76px]
          shrink-0
          items-center
          justify-center
          overflow-hidden
          rounded-[10px]
        "
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="
            h-full
            w-full
            object-contain
            transition-transform
            duration-300
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* CONTENT */}

      <div className="min-w-0 flex-1">
        <h3
          className="
            line-clamp-2
            text-[0.88rem]
            font-semibold
            leading-[1.2]
            text-[#2b1a12]
          "
        >
          {product.name}
        </h3>

        {product.description && (
          <p
            className="
              mt-1
              line-clamp-1
              text-[0.7rem]
              leading-[1.3]
              text-[#817064]
            "
          >
            {product.description}
          </p>
        )}

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[0.96rem] font-bold leading-none text-[#1f120d]">
              ₹{product.price}
            </span>

            {product.originalPrice &&
              product.originalPrice > product.price && (
                <span
                  className="
                    mt-1
                    text-[0.66rem]
                    text-[#9a7a62]
                    line-through
                  "
                >
                  ₹{product.originalPrice}
                </span>
              )}
          </div>

          {!isAdded ? (
            <button
              type="button"
              onClick={handleAdd}
              className="
                h-[36px]
                min-w-[68px]
                rounded-[9px]
                border-[1.5px]
                border-[#e5c6a8]
                bg-[#fff9f3]
                px-3
                text-[0.72rem]
                font-bold
                uppercase
                text-[#b56322]
                transition
                hover:bg-[#fff1e2]
              "
            >
              ADD
            </button>
          ) : (
            <div
              className="
                inline-flex
                h-[36px]
                items-center
                rounded-[9px]
                border-[1.5px]
                border-[#e1c3a3]
                bg-[#fff5e8]
                text-[#b56322]
              "
            >
              <button
                type="button"
                onClick={handleDecrement}
                className="flex h-full w-[27px] items-center justify-center font-bold"
              >
                −
              </button>

              <span className="min-w-[21px] text-center text-[0.75rem] font-semibold">
                {qty}
              </span>

              <button
                type="button"
                onClick={handleIncrement}
                className="flex h-full w-[27px] items-center justify-center font-bold"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default MenuProductCard;