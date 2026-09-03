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
import MenuProductCard from "./MenuProductCard";





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

  const gridClasses =
    "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6";

  return (
    <div
      className={
        viewMode === "compact"
          ? "space-y-3 sm:space-y-4"
          : gridClasses
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

            <div ref={productGridRef} className="mt-6">
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