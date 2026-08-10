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

  // ---------- GRID VIEW: Blinkit-like medium card ----------
  if (viewMode === "grid") {
    return (
      <article className="group flex h-full flex-col justify-between rounded-[18px] border border-[#e6ddcf] bg-white/96 px-3.5 pb-3.5 pt-3 shadow-[0_6px_18px_rgba(76,44,24,0.06)] transition hover:-translate-y-1 hover:shadow-[0_12px_26px_rgba(76,44,24,0.12)]">
        {/* image, no extra bg, fixed vertical height */}
        <div className="mx-auto mb-2 h-[130px] w-full max-w-[150px] overflow-hidden rounded-[14px]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          />
        </div>

        {/* content */}
        <div className="mt-1 flex flex-1 flex-col">
          <h3 className="line-clamp-2 text-[0.95rem] font-semibold leading-snug text-[#2b1a12]">
            {product.name}
          </h3>

          {product.description && (
            <p className="mt-1 line-clamp-2 text-[0.8rem] leading-5 text-[#7a6659]">
              {product.description}
            </p>
          )}

          <div className="mt-3 flex items-end justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-[1.05rem] font-bold leading-none text-[#1f120d]">
                ₹{product.price}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-[0.72rem] text-[#9a7a62] line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* ADD / qty controls */}
            {!isAdded ? (
              <button
                type="button"
                onClick={handleAdd}
                className="rounded-xl border border-[#d9c3a7] bg-[#fdf8f1] px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#2e7d32] shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition hover:bg-[#edf9ec] hover:border-[#b8dcb8]"
              >
                ADD
              </button>
            ) : (
              <div className="inline-flex items-center rounded-xl border border-[#c8dfc8] bg-[#edf9ec] text-[#2e7d32] shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="px-2.5 py-1.5 text-[0.9rem] font-bold hover:bg-[#d9f0d9]"
                >
                  −
                </button>
                <span className="px-3 text-[0.86rem] font-semibold">{qty}</span>
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="px-2.5 py-1.5 text-[0.9rem] font-bold hover:bg-[#d9f0d9]"
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

  // ---------- COMPACT / LIST VIEW: keep as you had ----------
  return (
    <article className="group flex items-center gap-3 rounded-[16px] border border-[#eadccf] bg-white/95 px-3 py-3 shadow-[0_4px_14px_rgba(76,44,24,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_10px_26px_rgba(76,44,24,0.12)] sm:gap-4 sm:px-4 sm:py-3.5">
      {/* image - NO background color */}
      <div className="h-[80px] w-[80px] shrink-0 overflow-hidden rounded-[14px] sm:h-[92px] sm:w-[92px]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
        />
      </div>

      {/* content */}
      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-[0.96rem] font-semibold leading-snug text-[#2b1a12] sm:text-[1rem]">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-1 line-clamp-2 text-[0.8rem] leading-5 text-[#7a6659]">
            {product.description}
          </p>
        )}

        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[1.05rem] font-bold leading-none text-[#1f120d] sm:text-[1.1rem]">
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-[0.72rem] text-[#9a7a62] line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          {/* ADD / quantity controls */}
          {!isAdded ? (
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-xl border border-[#ebc9aa] bg-[#fff9f2] px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#b56322] shadow-[0_2px_7px_rgba(181,99,34,0.18)] transition hover:bg-[#ffeeda] hover:border-[#e1b88e]"
            >
              ADD
            </button>
          ) : (
            <div className="inline-flex items-center rounded-xl border border-[#e1c3a3] bg-[#fff5e7] text-[#b56322] shadow-[0_2px_7px_rgba(181,99,34,0.2)]">
              <button
                type="button"
                onClick={handleDecrement}
                className="px-2.5 py-1.5 text-[0.9rem] font-bold hover:bg-[#f5e0c7]"
              >
                −
              </button>
              <span className="px-3 text-[0.86rem] font-semibold">{qty}</span>
              <button
                type="button"
                onClick={handleIncrement}
                className="px-2.5 py-1.5 text-[0.9rem] font-bold hover:bg-[#f5e0c7]"
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