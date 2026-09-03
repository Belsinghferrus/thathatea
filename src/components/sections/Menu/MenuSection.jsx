import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import MENU_SORT_OPTIONS from "../../../constants/menu/menu-sort-options";
import MENU_VIEW_OPTIONS from "../../../constants/menu/menu-view-options";

import coffeeSketch from "../../../assets/images/Menu/coffee-sketch.png";

import MenuCategoryTabs from "../../sections/Menu/MenuCategoryTabs";
import MenuToolbar from "../../sections/Menu/MenuToolbar";
import MenuSidebar from "../../sections/Menu/MenuSidebar";
import MenuProductCard from "./MenuProductCard";

import {
  fetchMenuCategories,
  fetchMenuProductsByCategory,
} from "../../../services/menuService";

/* ================================================================
   PRODUCT GRID
================================================================ */

function MenuProductGrid({
  products,
  viewMode,
}) {
  if (!products.length) {
    return (
      <div className="rounded-[24px] border border-[#eadccf] bg-white/70 p-10 text-center">
        <h3 className="text-xl font-semibold text-[#2d1b13]">
          No products found
        </h3>

        <p className="mt-2 text-[#6f5d51]">
          Try another search or sort option.
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

/* ================================================================
   MAIN
================================================================ */

export default function MenuBrowserSection() {
  const [categories, setCategories] = useState([]);

  const [productsByCategory, setProductsByCategory] =
    useState({});

  const [activeCategorySlug, setActiveCategorySlug] =
    useState("cakes");

  const [activeSubcategorySlug, setActiveSubcategorySlug] =
    useState("all");

  const [sortBy, setSortBy] =
    useState("popular");

  const [viewMode, setViewMode] =
    useState("grid");

  const [searchText, setSearchText] =
    useState("");

  const [categoriesLoading, setCategoriesLoading] =
    useState(true);

  const [productsLoading, setProductsLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const productGridRef =
    useRef(null);

  /* ==============================================================
     FETCH CATEGORIES
  ============================================================== */

  useEffect(() => {
    const controller = new AbortController();

    async function loadCategories() {
      try {
        setCategoriesLoading(true);
        setError("");

        const result =
          await fetchMenuCategories({
            signal: controller.signal,
          });

        setCategories(result);

        /*
          User requested Cakes as the initial category.
        */
        const cakesCategory =
          result.find(
            (category) =>
              category.slug === "cakes"
          );

        if (cakesCategory) {
          setActiveCategorySlug(
            cakesCategory.slug
          );
        } else if (result.length > 0) {
          setActiveCategorySlug(
            result[0].slug
          );
        }
      } catch (err) {
        if (
          err?.name === "AbortError"
        ) {
          return;
        }

        setError(
          err?.message ||
            "Unable to load menu categories."
        );
      } finally {
        setCategoriesLoading(false);
      }
    }

    loadCategories();

    return () => {
      controller.abort();
    };
  }, []);

  /* ==============================================================
     ACTIVE CATEGORY
  ============================================================== */

  const activeCategory =
    useMemo(() => {
      return categories.find(
        (category) =>
          category.slug ===
          activeCategorySlug
      );
    }, [
      categories,
      activeCategorySlug,
    ]);

  /* ==============================================================
     FETCH PRODUCTS FOR ACTIVE CATEGORY
  ============================================================== */

  useEffect(() => {
    if (!activeCategory?.id) {
      return;
    }

    /*
      Don't fetch again if this category is already cached.
    */
    if (
      productsByCategory[
        activeCategory.id
      ]
    ) {
      return;
    }

    const controller =
      new AbortController();

    async function loadProducts() {
      try {
        setProductsLoading(true);
        setError("");

        const products =
          await fetchMenuProductsByCategory(
            activeCategory.id,
            {
              signal:
                controller.signal,
            }
          );

        setProductsByCategory(
          (previous) => ({
            ...previous,
            [activeCategory.id]:
              products,
          })
        );
      } catch (err) {
        if (
          err?.name === "AbortError"
        ) {
          return;
        }

        setError(
          err?.message ||
            "Unable to load menu products."
        );
      } finally {
        setProductsLoading(false);
      }
    }

    loadProducts();

    return () => {
      controller.abort();
    };
  }, [
    activeCategory,
    productsByCategory,
  ]);

  /* ==============================================================
     ACTIVE CATEGORY PRODUCTS
  ============================================================== */

  const activeProducts =
    useMemo(() => {
      if (!activeCategory?.id) {
        return [];
      }

      return (
        productsByCategory[
          activeCategory.id
        ] || []
      );
    }, [
      activeCategory,
      productsByCategory,
    ]);

  /* ==============================================================
     FILTER + SEARCH + SORT
  ============================================================== */

  const visibleProducts =
    useMemo(() => {
      let result = [
        ...activeProducts,
      ];

      /*
        Search:
        name + description + category
      */

      const query =
        searchText
          .trim()
          .toLowerCase();

      if (query) {
        result = result.filter(
          (product) => {
            const searchableText = [
              product.name,
              product.description,
              product.categoryName,
            ]
              .filter(Boolean)
              .join(" ")
              .toLowerCase();

            return searchableText.includes(
              query
            );
          }
        );
      }

      /*
        Subcategory:
        Backend currently provides no subcategory.
        "All" therefore shows the full category.
      */

      if (
        activeSubcategorySlug !==
        "all"
      ) {
        result = result.filter(
          (product) =>
            product.subcategorySlug ===
            activeSubcategorySlug
        );
      }

      /*
        Sorting
      */

      switch (sortBy) {
        case "priceLow":
          result.sort(
            (a, b) =>
              a.price - b.price
          );
          break;

        case "priceHigh":
          result.sort(
            (a, b) =>
              b.price - a.price
          );
          break;

        case "nameAsc":
          result.sort(
            (a, b) =>
              a.name.localeCompare(
                b.name
              )
          );
          break;

        case "popular":
        default:
          /*
            Preserve backend/API order.
          */
          result.sort(
            (a, b) =>
              a.rank - b.rank
          );
          break;
      }

      return result;
    }, [
      activeProducts,
      activeSubcategorySlug,
      sortBy,
      searchText,
    ]);

  /* ==============================================================
     CATEGORY CHANGE
  ============================================================== */

  const handleCategoryChange =
    (categorySlug) => {
      setActiveCategorySlug(
        categorySlug
      );

      setActiveSubcategorySlug(
        "all"
      );
    };

  /* ==============================================================
     SCROLL
  ============================================================== */

  const scrollToProductGrid =
    () => {
      productGridRef.current?.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
        }
      );
    };

  /* ==============================================================
     LOADING STATE
  ============================================================== */

  if (categoriesLoading) {
    return (
      <section className="relative w-full bg-[#fbf4ec] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="h-[92px] animate-pulse rounded-[22px] bg-[#f2e6da]" />

          <div className="mt-6 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
            <div className="hidden h-[300px] animate-pulse rounded-[20px] bg-[#f2e6da] xl:block" />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {Array.from({
                length: 12,
              }).map((_, index) => (
                <div
                  key={index}
                  className="h-[420px] animate-pulse rounded-[14px] bg-[#f2e6da]"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ==============================================================
     ERROR
  ============================================================== */

  if (
    error &&
    !categories.length
  ) {
    return (
      <section className="w-full bg-[#fbf4ec] px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[700px] rounded-[20px] border border-[#eadccf] bg-white p-8 text-center">
          <h3 className="text-xl font-semibold text-[#2d1b13]">
            Unable to load menu
          </h3>

          <p className="mt-2 text-sm text-[#6f5d51]">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#fbf4ec] px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
      <div className="mx-auto max-w-[1600px]">

        {/* ========================================================
            CATEGORY TABS
        ======================================================== */}

        <MenuCategoryTabs
          categories={categories}
          activeCategorySlug={
            activeCategorySlug
          }
          onCategoryChange={
            handleCategoryChange
          }
        />

        {/* ========================================================
            MAIN MENU AREA
        ======================================================== */}

        <div className="mt-6 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">

          {/* ======================================================
              SIDEBAR
          ====================================================== */}

          <MenuSidebar
            activeCategory={
              activeCategory
            }
            subcategories={
              activeCategory
                ?.subcategories || []
            }
            activeSubcategorySlug={
              activeSubcategorySlug
            }
            onSubcategoryChange={
              setActiveSubcategorySlug
            }
            decorativeImage={
              coffeeSketch
            }
            onAfterSelectMobile={
              scrollToProductGrid
            }
          />

          {/* ======================================================
              PRODUCTS
          ====================================================== */}

          <div className="min-w-0">

            <MenuToolbar
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={
                setViewMode
              }
              sortOptions={
                MENU_SORT_OPTIONS
              }
              viewOptions={
                MENU_VIEW_OPTIONS
              }
            />

            {/* API error for products */}

            {error &&
              activeCategory && (
                <div className="mt-4 rounded-[14px] border border-[#eadccf] bg-[#fffaf5] px-4 py-3 text-sm text-[#765844]">
                  {error}
                </div>
              )}

            <div
              ref={productGridRef}
              className="mt-6"
            >
              {productsLoading ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                  {Array.from({
                    length: 12,
                  }).map((_, index) => (
                    <div
                      key={index}
                      className="h-[440px] animate-pulse rounded-[14px] bg-[#f2e6da]"
                    />
                  ))}
                </div>
              ) : (
                <MenuProductGrid
                  products={
                    visibleProducts
                  }
                  viewMode={
                    viewMode
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}