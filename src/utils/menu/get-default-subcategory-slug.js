export default function getDefaultSubcategorySlug(category) {
    if (!category || !Array.isArray(category.subcategories)) return "all";
  
    const allOption = category.subcategories.find((item) => item.slug === "all");
    if (allOption) return allOption.slug;
  
    return category.subcategories[0]?.slug || "all";
  }