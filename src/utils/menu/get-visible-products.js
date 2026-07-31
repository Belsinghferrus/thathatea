function sortProducts(products, sortBy) {
    const items = [...products];
  
    switch (sortBy) {
      case "priceLow":
        return items.sort((a, b) => a.price - b.price);
  
      case "priceHigh":
        return items.sort((a, b) => b.price - a.price);
  
      case "nameAsc":
        return items.sort((a, b) => a.name.localeCompare(b.name));
  
      case "popular":
      default:
        return items.sort((a, b) => {
          const aPopularScore = a.isPopular ? 1 : 0;
          const bPopularScore = b.isPopular ? 1 : 0;
  
          if (bPopularScore !== aPopularScore) {
            return bPopularScore - aPopularScore;
          }
  
          return (a.rank ?? 9999) - (b.rank ?? 9999);
        });
    }
  }
  
  function matchesCategory(product, activeCategorySlug) {
    if (!activeCategorySlug) return true;
    return product.categorySlug === activeCategorySlug;
  }
  
  function matchesSubcategory(product, activeSubcategorySlug) {
    if (!activeSubcategorySlug || activeSubcategorySlug === "all") return true;
    return product.subcategorySlug === activeSubcategorySlug;
  }
  
  function matchesSearch(product, searchText) {
    if (!searchText) return true;
  
    const query = searchText.trim().toLowerCase();
    if (!query) return true;
  
    const searchableText = [
      product.name,
      product.description,
      product.shortDescription,
      ...(product.tags || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
  
    return searchableText.includes(query);
  }
  
  export default function getVisibleProducts({
    products = [],
    activeCategorySlug = "",
    activeSubcategorySlug = "all",
    sortBy = "popular",
    searchText = "",
    onlyAvailable = true,
  }) {
    const filtered = products.filter((product) => {
      if (onlyAvailable && product.isAvailable === false) return false;
      if (!matchesCategory(product, activeCategorySlug)) return false;
      if (!matchesSubcategory(product, activeSubcategorySlug)) return false;
      if (!matchesSearch(product, searchText)) return false;
      return true;
    });
  
    return sortProducts(filtered, sortBy);
  }