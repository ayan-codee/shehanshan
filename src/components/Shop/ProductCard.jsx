import { useState } from "react";
import {
  ArrowUpRight,
  Heart,
  ShoppingBag,
  SlidersHorizontal,
  X,
  ChevronDown,
} from "lucide-react";
import { useCart } from "../CartContext";

/* =========================================================
   IMAGE URL HELPER
========================================================= */

const U = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;


/* =========================================================
   PRODUCTS DATA
========================================================= */

const PRODUCTS = [
  {
    id: 1,
    name: "Aleeb Dress",
    line: "Embroidered | Raw Silk",
    category: "Unstitched",
    price: 15999,
    img: U("1610030469983-98e550d6193c"),
    out: true,
  },
  {
    id: 2,
    name: "Marigold Long",
    line: "Embroidered | Raw Silk",
    category: "Festive",
    price: 18999,
    img: U("1583391733956-3750e0ff4e8b"),
  },
  {
    id: 3,
    name: "Mossel Dress",
    line: "Velvet | Formal",
    category: "Festive",
    price: 19999,
    img: U("1515886657613-9f3515b0c78f"),
    out: true,
  },
  {
    id: 4,
    name: "Zorein Set",
    line: "Embroidered | Chiffon",
    category: "Ready to Wear",
    price: 19999,
    img: U("1566174053879-31528523f8ae"),
  },
  {
    id: 5,
    name: "Aveena Kurta",
    line: "Printed | Raw Silk",
    category: "Ready to Wear",
    price: 15999,
    sale: 40,
    img: U("1572804013309-59a88b7e92f1"),
  },
  {
    id: 6,
    name: "Sage Kurta",
    line: "Embroidered | Raw Silk",
    category: "Ready to Wear",
    price: 7000,
    img: U("1594938298603-c8148c4dae35"),
  },
  {
    id: 7,
    name: "Short V-Neck Kurta",
    line: "Embroidered | Raw Silk",
    category: "Unstitched",
    price: 8000,
    img: U("1496747611176-843222e1e57c"),
  },
  {
    id: 8,
    name: "Sleeveless Longline",
    line: "Embroidered | Raw Silk",
    category: "Ready to Wear",
    price: 8000,
    img: U("1509631179647-0177331693ae"),
  },
  {
    id: 9,
    name: "V-Neck Longline",
    line: "Embroidered | Raw Silk",
    category: "Unstitched",
    price: 10000,
    img: U("1539109136881-3be0616acf4b"),
  },
  {
    id: 10,
    name: "Floral Silk Kurta",
    line: "Embroidered | Raw Silk",
    category: "Festive",
    price: 8000,
    img: U("1469334031218-e382a71b716b"),
  },
  {
    id: 11,
    name: "Short Silk Kurta",
    line: "Embroidered | Raw Silk",
    category: "Ready to Wear",
    price: 8000,
    img: U("1512436991641-6745cdb1723f"),
  },
  {
    id: 12,
    name: "Straight Trouser",
    line: "Cotton Silk",
    category: "Unstitched",
    price: 4500,
    img: U("1529139574466-a303027c1d8b"),
  },
];


/* =========================================================
   PRICE FORMATTER
========================================================= */

const fmt = (n) => "PKR " + n.toLocaleString("en-US");


/* =========================================================
   PRODUCT IMAGE
========================================================= */

function ProductImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`overflow-hidden bg-[#eee9e5] ${className}`}>
      {src && !failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-[900ms]
            ease-out
            group-hover:scale-[1.06]
          "
        />
      )}
    </div>
  );
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product, onAddToCart, onBuyNow }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group min-w-0">

      {/* IMAGE */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#eee9e5]">

        <ProductImage
          src={product.img}
          alt={product.name}
          className="absolute inset-0 h-full w-full"
        />

        {/* IMAGE OVERLAY */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />

        {/* WISHLIST */}
        <button
          onClick={() => setLiked(!liked)}
          aria-label={`Wishlist ${product.name}`}
          className={`
            absolute
            right-3
            top-3
            grid
            h-10
            w-10
            place-items-center
            bg-white/95
            shadow-sm
            transition-all
            duration-300
            ${
              liked
                ? "text-[#5E0B1C]"
                : "text-[#211b18] opacity-0 group-hover:opacity-100"
            }
            hover:bg-[#5E0B1C]
            hover:text-white
          `}
        >
          <Heart
            size={17}
            strokeWidth={1.5}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        {/* OUT OF STOCK */}
        {product.out && (
          <span
            className="
              absolute
              left-3
              top-3
              bg-[#211b18]
              px-2.5
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-white
            "
          >
            Out of stock
          </span>
        )}

        {/* SALE */}
        {product.sale && !product.out && (
          <span
            className="
              absolute
              left-3
              top-3
              bg-[#5E0B1C]
              px-2.5
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-white
            "
          >
            {product.sale}% Off
          </span>
        )}

        {/* BOTTOM ACTIONS */}
        {!product.out && (
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              translate-y-full
              bg-white/95
              p-3
              backdrop-blur-sm
              transition-transform
              duration-500
              group-hover:translate-y-0
            "
          >
            <div className="flex gap-2">

              {/* ADD TO CART */}
              <button
                onClick={() => onAddToCart(product)}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  border
                  border-[#211b18]/15
                  bg-white
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-[#211b18]
                  transition-all
                  hover:border-[#5E0B1C]
                  hover:text-[#5E0B1C]
                "
              >
                <ShoppingBag size={15} strokeWidth={1.5} />
                Add
              </button>

              {/* BUY NOW */}
              <button
                onClick={() => onBuyNow(product)}
                className="
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  bg-[#5E0B1C]
                  py-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all
                  hover:bg-[#721125]
                "
              >
                Buy Now
                <ArrowUpRight size={14} />
              </button>

            </div>
          </div>
        )}

      </div>


      {/* PRODUCT INFO */}
      <div className="pt-4">

        <p className="text-[10px] uppercase tracking-[0.16em] text-[#756b66]">
          {product.line}
        </p>

        <div className="mt-1 flex items-start justify-between gap-3">

          <h3 className="text-lg leading-tight text-[#211b18] sm:text-xl">
            {product.name}
          </h3>

          <p className="whitespace-nowrap text-xs font-medium text-[#5E0B1C]">
            {fmt(product.price)}
          </p>

        </div>

        {product.sale && (
          <p className="mt-1 text-[11px] text-[#756b66]">

            <span className="mr-2 line-through">
              {fmt(
                Math.round(
                  product.price / (1 - product.sale / 100)
                )
              )}
            </span>

            <span className="text-[#5E0B1C]">
              Limited offer
            </span>

          </p>
        )}

      </div>

    </article>
  );
}


/* =========================================================
   SHOP PAGE
========================================================= */

export default function ShopProducts() {

  /* =======================================================
     CART
  ======================================================= */

  const { addToCart } = useCart();


  /* =======================================================
     SHOP STATES
  ======================================================= */

  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [showFilters, setShowFilters] = useState(false);
  const [maxPrice, setMaxPrice] = useState(20000);


  /* =======================================================
     CATEGORIES
  ======================================================= */

  const categories = [
    "All",
    "Unstitched",
    "Ready to Wear",
    "Festive",
    "New Arrivals",
    "Best Sellers",
  ];


  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  let filteredProducts = PRODUCTS.filter((product) => {

    const categoryMatch =
      activeCategory === "All" ||
      activeCategory === "New Arrivals" ||
      activeCategory === "Best Sellers"
        ? true
        : product.category === activeCategory;

    const priceMatch = product.price <= maxPrice;

    return categoryMatch && priceMatch;
  });


  /* =======================================================
     SORT PRODUCTS
  ======================================================= */

  if (sort === "Price: Low to High") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "Price: High to Low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "Newest") {
    filteredProducts = [...filteredProducts].reverse();
  }


  /* =======================================================
     ADD TO CART
  ======================================================= */

  const handleAddToCart = (product) => {
    addToCart(product);
  };


  /* =======================================================
     BUY NOW
  ======================================================= */

  const handleBuyNow = (product) => {
    console.log("Buy now:", product);
  };


  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      id="collections"
      className="mt-30 w-full bg-[#f7f4f1]"
    >

      <div
        className="
          mx-auto
          mt-20
          max-w-7xl
          bg-[#ffcfd920]
          px-4
          py-20
          sm:px-6
          lg:px-8
          lg:py-40
        "
      >

        {/* =====================================================
            SHOP HEADER
        ===================================================== */}

        <div className="border-b border-[#211b18]/10 pb-6">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-2 head text-4xl leading-0 tracking-[0.08em] text-[#5E0B1C]">
                Collection
              </p>

              <h2
                className="
                  text-7xl
                  leading-[0.9]
                  tracking-[-0.04em]
                  text-[#211b18]
                "
              >
                Shop All
              </h2>

              <p className="mt-6 max-w-md text-lg leading-6 text-[#756b66]">
                Discover pieces designed for everyday elegance,
                celebrations and everything in between.
              </p>

            </div>


            {/* FILTER BUTTON */}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="
                flex
                w-fit
                items-center
                gap-3
                border
                border-[#211b18]/15
                bg-white
                px-5
                py-3
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-[#211b18]
                transition-all
                hover:border-[#5E0B1C]
                hover:text-[#5E0B1C]
              "
            >

              <SlidersHorizontal
                size={15}
                strokeWidth={1.5}
              />

              Filters

              {showFilters ? (
                <X size={14} />
              ) : (
                <ChevronDown size={14} />
              )}

            </button>

          </div>


          {/* =====================================================
              CATEGORY NAV
          ===================================================== */}

          <div className="mt-10 flex gap-7 overflow-x-auto pb-1 scrollbar-hide">

            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  relative
                  shrink-0
                  cursor-pointer
                  pb-3
                  text-sm
                  uppercase
                  tracking-[0.15em]
                  transition-colors
                  duration-300
                  ${
                    activeCategory === category
                      ? "text-[#5E0B1C]"
                      : "text-[#756b66] hover:text-[#211b18]"
                  }
                `}
              >

                {category}

                {activeCategory === category && (
                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-full
                      bg-[#5E0B1C]
                    "
                  />
                )}

              </button>

            ))}

          </div>

        </div>


        {/* =====================================================
            FILTER PANEL
        ===================================================== */}

        {showFilters && (

          <div
            className="
              mt-6
              grid
              gap-8
              border-b
              border-[#211b18]/10
              bg-[#f7f4f1]
              p-6
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {/* PRICE */}

            <div>

              <div className="mb-4 flex items-center justify-between">

                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#211b18]">
                  Price
                </p>

                <span className="text-xs text-[#5E0B1C]">
                  {fmt(maxPrice)}
                </span>

              </div>

              <input
                type="range"
                min="4000"
                max="20000"
                step="1000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="w-full accent-[#5E0B1C]"
              />

              <div className="mt-2 flex justify-between text-[10px] text-[#756b66]">

                <span>PKR 4,000</span>

                <span>PKR 20,000</span>

              </div>

            </div>


            {/* CATEGORY */}

            <div>

              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#211b18]">
                Category
              </p>

              <div className="flex flex-wrap gap-2">

                {[
                  "Unstitched",
                  "Ready to Wear",
                  "Festive",
                ].map((category) => (

                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                      border
                      px-3
                      py-2
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      transition-colors
                      ${
                        activeCategory === category
                          ? "border-[#5E0B1C] bg-[#5E0B1C] text-white"
                          : "border-[#211b18]/10 bg-white text-[#756b66] hover:border-[#5E0B1C]"
                      }
                    `}
                  >

                    {category}

                  </button>

                ))}

              </div>

            </div>


            {/* RESET */}

            <div className="flex items-end">

              <button
                onClick={() => {
                  setActiveCategory("All");
                  setMaxPrice(20000);
                  setSort("Featured");
                }}
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-[#5E0B1C]
                  underline
                  underline-offset-4
                "
              >
                Reset Filters
              </button>

            </div>

          </div>

        )}


        {/* =====================================================
            PRODUCTS HEADER
        ===================================================== */}

        <div className="mb-7 mt-12 flex items-center justify-between">

          <p className="text-xs text-[#756b66]">

            Showing{" "}

            <span className="font-medium text-[#211b18]">
              {filteredProducts.length}
            </span>{" "}

            pieces

          </p>


          <div className="relative">

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                appearance-none
                border-0
                bg-transparent
                pr-7
                text-[10px]
                uppercase
                tracking-[0.15em]
                text-[#211b18]
                outline-none
              "
            >

              <option>Featured</option>

              <option>Newest</option>

              <option>Price: Low to High</option>

              <option>Price: High to Low</option>

            </select>

            <ChevronDown
              size={13}
              className="
                pointer-events-none
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                text-[#756b66]
              "
            />

          </div>

        </div>


        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}

        {filteredProducts.length > 0 ? (

          <div
            className="
              grid
              grid-cols-2
              gap-x-3
              gap-y-12
              sm:gap-x-5
              lg:grid-cols-4
              lg:gap-x-6
              lg:gap-y-16
            "
          >

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />

            ))}

          </div>

        ) : (

          /* =====================================================
             EMPTY STATE
          ===================================================== */

          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

            <p className="head text-3xl text-[#5E0B1C]">
              Nothing here yet.
            </p>

            <p className="mt-3 text-sm text-[#756b66]">
              Try adjusting your filters to discover more pieces.
            </p>

            <button
              onClick={() => {
                setActiveCategory("All");
                setMaxPrice(20000);
              }}
              className="
                mt-6
                rounded-full
                bg-[#5E0B1C]
                px-6
                py-3
                text-xs
                uppercase
                tracking-[0.15em]
                text-white
              "
            >
              View All Products
            </button>

          </div>

        )}

      </div>

    </section>
  );
}