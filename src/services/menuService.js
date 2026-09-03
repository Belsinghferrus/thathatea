const API_BASE_URL = "https://note-api.thathatea.com/api/app";
const IMAGE_BASE_URL = "https://note-api.thathatea.com/images/menu";
const NEXT_IMAGE_BASE_URL = "https://thathatea.com/_next/image";

/* ================================================================
   CATEGORY PRESENTATION META
================================================================ */

const CATEGORY_META = {
  cakes: {
    iconKey: "bakery",
    description: "Fresh bakery treats made for every craving.",
  },

  bun: {
    iconKey: "bakery",
    description: "Soft and freshly baked buns.",
  },

  muffin: {
    iconKey: "bakery",
    description: "Freshly baked muffins.",
  },

  cookies: {
    iconKey: "bakery",
    description: "Crispy, freshly baked tea-time favorites.",
  },

  others: {
    iconKey: "combos",
    description: "More Thatha Tea favorites.",
  },

  accessories: {
    iconKey: "combos",
    description: "Thatha Tea accessories and merchandise.",
  },
};

/* ================================================================
   HELPERS
================================================================ */

function createSlug(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getProductImageUrl(fileName) {
  if (!fileName) {
    return "";
  }

  const rawImageUrl = `${IMAGE_BASE_URL}/${fileName}`;

  const params = new URLSearchParams({
    url: rawImageUrl,
    w: "640",
    q: "75",
  });

  return `${NEXT_IMAGE_BASE_URL}?${params.toString()}`;
}

/* ================================================================
   EXTRACT API DATA
================================================================ */

function extractData(response) {
  if (Array.isArray(response)) {
    return response;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  return [];
}

/* ================================================================
   NORMALIZE CATEGORY
================================================================ */

function normalizeCategory(category) {
  const slug = createSlug(category.name);
  const meta = CATEGORY_META[slug] || {};

  return {
    id: String(category.id),
    slug,
    name: category.name,

    iconKey: meta.iconKey || "combos",

    description:
      meta.description || "",

    status: category.status === true,

    createdOn:
      category.created_on || null,

    fileName:
      category.file_name || null,

    /*
      Backend currently has no subcategory model.

      We keep one "All" option so the existing sidebar/filter
      structure continues to work.
    */
    subcategories: [
      {
        id: `sub-${category.id}-all`,
        slug: "all",
        name: `All ${category.name}`,
      },
    ],
  };
}

/* ================================================================
   NORMALIZE PRODUCT
================================================================ */

function normalizeProduct(product, index = 0) {
  const originalPrice = Number(product.price);
  const sellingPrice = Number(product.selling_price);

  const primaryImage =
    Array.isArray(product.image_names) &&
    product.image_names.length > 0
      ? getProductImageUrl(product.image_names[0])
      : "";

  const hasValidOriginalPrice =
    Number.isFinite(originalPrice);

  const hasValidSellingPrice =
    Number.isFinite(sellingPrice);

  const finalPrice = hasValidSellingPrice
    ? sellingPrice
    : originalPrice;

  return {
    id: String(product.id),

    slug:
      product.slug ||
      createSlug(product.name),

    name:
      product.name || "",

    description:
      product.description || "",

    shortDescription:
      product.description || "",

    price:
      Number.isFinite(finalPrice)
        ? finalPrice
        : 0,

    originalPrice:
      hasValidOriginalPrice &&
      hasValidSellingPrice &&
      originalPrice > sellingPrice
        ? originalPrice
        : null,

    image: primaryImage,

    categorySlug:
      product.category_name
        ? createSlug(product.category_name)
        : "",

    categoryId:
      product.categorylink != null
        ? String(product.categorylink)
        : "",

    categoryName:
      product.category_name || "",

    isAvailable:
      product.status === true &&
      product.inStock === true,

    isNewArrival:
      product.is_new_arrival === true,

    dietary:
      product.dietary || null,

    gst:
      Number(product.gst) || 0,

    availability:
      product.availability || null,

    stock:
      Number(product.stock) || 0,

    min:
      Number(product.min) || 1,

    max:
      Number(product.max) || 0,

    lowStockThreshold:
      Number(product.low_stock_threshold) || 0,

    unit:
      product.unit || null,

    weight:
      Number(product.weight) || 0,

    visibility:
      product.visibility || null,

    imageNames:
      Array.isArray(product.image_names)
        ? product.image_names
        : [],

    /*
      Backend does not provide popularity.
      We preserve API order so "Popular" does not invent
      a ranking that doesn't exist.
    */
    isPopular: false,
    isRecommended: false,
    rank: index,

    spiceLevel: 0,

    preparationType:
      product.dietary === "Veg"
        ? "veg"
        : product.dietary === "Non-Veg"
          ? "non-veg"
          : null,

    tags: [],
  };
}

/* ================================================================
   FETCH CATEGORIES
================================================================ */

export async function fetchMenuCategories({
  signal,
} = {}) {
  const response = await fetch(
    `${API_BASE_URL}/category/list`,
    {
      signal,
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch categories (${response.status})`
    );
  }

  const json = await response.json();

  return extractData(json)
    .filter(
      (category) =>
        category.status === true
    )
    .map(normalizeCategory);
}

/* ================================================================
   FETCH PRODUCTS BY CATEGORY
================================================================ */

export async function fetchMenuProductsByCategory(
  categoryId,
  {
    signal,
  } = {}
) {
  if (!categoryId) {
    return [];
  }

  const url =
    `${API_BASE_URL}/product/list?categorylink=${encodeURIComponent(
      categoryId
    )}`;

  const response = await fetch(url, {
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products (${response.status})`
    );
  }

  const json = await response.json();

  return extractData(json)
    .filter(
      (product) =>
        product.status === true &&
        product.inStock === true
    )
    .filter(
      (product) =>
        product.visibility !== "HIDDEN"
    )
    .map(normalizeProduct);
}