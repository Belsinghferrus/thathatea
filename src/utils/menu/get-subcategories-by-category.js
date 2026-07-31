import getCategoryBySlug from "./get-category-by-slug";

export default function getSubcategoriesByCategory(categories = [], categorySlug = "") {
  const category = getCategoryBySlug(categories, categorySlug);

  if (!category) return [];
  return category.subcategories || [];
}