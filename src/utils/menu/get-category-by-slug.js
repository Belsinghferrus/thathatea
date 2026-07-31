export default function getCategoryBySlug(categories = [], slug = "") {
    if (!slug) return null;
    return categories.find((category) => category.slug === slug) || null;
  }