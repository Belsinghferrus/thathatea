import { useMemo, useRef, useState } from "react";

import MENU_CATEGORIES from "../../../constants/menu/menu-categories"
import MENU_PRODUCTS from "../../../constants/menu/menu-products";
import MENU_SORT_OPTIONS from "../../../constants/menu/menu-sort-options";
import MENU_VIEW_OPTIONS from "../../../constants/menu/menu-view-options";
import getVisibleProducts from "../../../utils/menu/get-visible-products";
import getCategoryBySlug from "../../../utils/menu/get-category-by-slug";
import getSubcategoriesByCategory from "../../../utils/menu/get-subcategories-by-category";

import coffeeSketch from "../../../assets/images/Menu/coffee-sketch.png"
import MenuCategoryTabs from "../../sections/Menu/MenuCategoryTabs"
import MenuToolbar from '../../sections/Menu/MenuToolbar'
import MenuSidebar from "../../sections/Menu/MenuSidebar"




function MenuProductCard({ product, viewMode = "grid" }) {
  return (
    <article
      className={`overflow-hidden rounded-[22px] border border-[#eadccf] bg-white/90 shadow-[0_8px_22px_rgba(76,44,24,0.06)] ${
        viewMode === "compact" ? "flex items-center gap-4 p-4" : ""
      }`}
    >
      <div
        className={`${
          viewMode === "compact"
            ? "h-[110px] w-[110px] shrink-0 rounded-[18px]"
            : "aspect-[1.08/1] w-full"
        } overflow-hidden bg-[#fbf5ee]`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className={viewMode === "compact" ? "min-w-0 flex-1" : "p-4"}>
        <h3 className="text-[1.2rem] font-semibold leading-tight text-[#2b1a12]">
          {product.name}
        </h3>

        <p className="mt-2 text-[0.96rem] leading-[1.6] text-[#6b5a50]">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-[1.7rem] font-bold leading-none text-[#1f120d]">
            ₹{product.price}
          </p>

          <button
            type="button"
            className="rounded-xl border border-[#ebc9aa] px-4 py-2 text-sm font-bold text-[#b56322] transition hover:bg-[#fff5eb]"
          >
            ADD
          </button>
        </div>
      </div>
    </article>
  );
}

function MenuProductGrid({ products, viewMode }) {
  if (!products.length) {
    return (
      <div className="rounded-[24px] border border-[#eadccf] bg-white/70 p-10 text-center">
        <h3 className="text-xl font-semibold text-[#2d1b13]">
          No products found
        </h3>
        <p className="mt-2 text-[#6f5d51]">
          Try another category, subcategory, or sort option.
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === "compact"
          ? "space-y-4"
          : "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      }
    >
      {products.map((product) => (
        <MenuProductCard
          key={product.id}
          product={product}
          viewMode={viewMode}
        />
      ))}
    </div>
  );
}

export default function MenuBrowserSection() {
  const [activeCategorySlug, setActiveCategorySlug] = useState("hot-beverages");
  const [activeSubcategorySlug, setActiveSubcategorySlug] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [viewMode, setViewMode] = useState("grid");
  const [searchText, setSearchText] = useState("");
  const productGridRef = useRef(null);

  const scrollToProductGrid = () => {
    productGridRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  const activeCategory = useMemo(() => {
    return getCategoryBySlug(MENU_CATEGORIES, activeCategorySlug);
  }, [activeCategorySlug]);

  const subcategories = useMemo(() => {
    return getSubcategoriesByCategory(MENU_CATEGORIES, activeCategorySlug);
  }, [activeCategorySlug]);

  const visibleProducts = useMemo(() => {
    return getVisibleProducts({
      products: MENU_PRODUCTS,
      activeCategorySlug,
      activeSubcategorySlug,
      sortBy,
      searchText,
      onlyAvailable: true,
    });
  }, [activeCategorySlug, activeSubcategorySlug, sortBy, searchText]);

  const handleCategoryChange = (categorySlug) => {
    setActiveCategorySlug(categorySlug);
    setActiveSubcategorySlug("all");
  };

  return (
    <section className="relative w-full bg-[#fbf4ec] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1600px]">
        <MenuCategoryTabs
          categories={MENU_CATEGORIES}
          activeCategorySlug={activeCategorySlug}
          onCategoryChange={handleCategoryChange}
        />

        <div className="mt-6 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <MenuSidebar
            activeCategory={activeCategory}
            subcategories={subcategories}
            activeSubcategorySlug={activeSubcategorySlug}
            onSubcategoryChange={setActiveSubcategorySlug}
            decorativeImage={coffeeSketch}
            onAfterSelectMobile={scrollToProductGrid}
          />

          <div className="min-w-0">
            <MenuToolbar
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortOptions={MENU_SORT_OPTIONS}
              viewOptions={MENU_VIEW_OPTIONS}
            />

            <div ref={productGridRef}  className="mt-6">
              <MenuProductGrid
                products={visibleProducts}
                viewMode={viewMode}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}