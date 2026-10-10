
import { useState } from "react";

/* =========================================================
   IMAGE URL HELPER
========================================================= */

const U = (id, w = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;


/* =========================================================
   PRODUCTS DATA
========================================================= */

const PRODUCTS = {
  Latest: [
    {
      name: "Aleeb Dress",
      line: "Embroidered | Raw Silk",
      price: 15999,
      tone: "from-stone-800 to-stone-950",
      img: U("1610030469983-98e550d6193c"),
      out: true,
    },
    {
      name: "Marigold Long",
      line: "Embroidered | Raw Silk",
      price: 18999,
      tone: "from-stone-700 to-stone-900",
      img: U("1583391733956-3750e0ff4e8b"),
    },
    {
      name: "Mossel Dress",
      line: "Velvet | Formal",
      price: 19999,
      tone: "from-stone-800 to-stone-950",
      img: U("1515886657613-9f3515b0c78f"),
      out: true,
    },
    {
      name: "Zorein Set",
      line: "Embroidered | Chiffon",
      price: 19999,
      tone: "from-stone-800 to-black",
      img: U("1566174053879-31528523f8ae"),
    },
  ],

  Bestsellers: [
    {
      name: "Aveena Kurta",
      line: "Printed | Raw Silk",
      price: 15999,
      tone: "from-stone-300 to-stone-500",
      img: U("1572804013309-59a88b7e92f1"),
      sale: 40,
    },
    {
      name: "Sage Kurta",
      line: "Embroidered | Raw Silk",
      price: 7000,
      tone: "from-stone-300 to-stone-500",
      img: U("1594938298603-c8148c4dae35"),
    },
    {
      name: "Short V-Neck Kurta",
      line: "Embroidered | Raw Silk",
      price: 8000,
      tone: "from-stone-700 to-stone-900",
      img: U("1496747611176-843222e1e57c"),
    },
    {
      name: "Sleeveless Longline",
      line: "Embroidered | Raw Silk",
      price: 8000,
      tone: "from-stone-700 to-stone-900",
      img: U("1509631179647-0177331693ae"),
    },
  ],

  Collection: [
    {
      name: "V-Neck Longline",
      line: "Embroidered | Raw Silk",
      price: 10000,
      tone: "from-stone-700 to-stone-900",
      img: U("1539109136881-3be0616acf4b"),
    },
    {
      name: "Floral Silk Kurta",
      line: "Embroidered | Raw Silk",
      price: 8000,
      tone: "from-stone-200 to-stone-400",
      img: U("1469334031218-e382a71b716b"),
    },
    {
      name: "Short Silk Kurta",
      line: "Embroidered | Raw Silk",
      price: 8000,
      tone: "from-stone-800 to-black",
      img: U("1512436991641-6745cdb1723f"),
    },
    {
      name: "Straight Trouser",
      line: "Cotton Silk",
      price: 4500,
      tone: "from-stone-300 to-stone-500",
      img: U("1529139574466-a303027c1d8b"),
    },
  ],
};


/* =========================================================
   PRICE FORMATTER
========================================================= */

const fmt = (n) => "PKR " + n.toLocaleString("en-US");


/* =========================================================
   IMAGE COMPONENT
========================================================= */

function Img({
  src,
  tone = "from-stone-300 to-stone-500",
  alt = "",
  className = "",
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`
        overflow-hidden
        bg-gradient-to-br
        ${tone}
        ${className}
      `}
    >
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
   HEART ICON
========================================================= */

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 21s-8-5.3-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.7-8 11-8 11z" />
    </svg>
  );
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ p }) {
  return (
    <article className="group min-w-0">

      {/* ================= IMAGE WRAPPER ================= */}

      <div
        className="
          relative
          aspect-[3/4]
          overflow-hidden
          bg-neutral-100
        "
      >

        {/* PRODUCT IMAGE */}

        <Img
          src={p.img}
          tone={p.tone}
          alt={p.name}
          className="
            absolute
            inset-0
            h-full
            w-full
          "
        />


        {/* IMAGE HOVER GRADIENT */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />


        {/* ================= WISHLIST BUTTON ================= */}

        <button
          aria-label={`Save ${p.name}`}
          className="
            absolute
            right-3
            top-3
            grid
            h-9
            w-9
            place-items-center
            bg-white/95
            text-neutral-900
            opacity-0
            shadow-sm
            transition-all
            duration-300
            group-hover:opacity-100
            hover:bg-[#5E0B1C]
            hover:text-white
          "
        >
          <HeartIcon />
        </button>


        {/* ================= OUT OF STOCK ================= */}

        {p.out && (
          <span
            className="
              absolute
              left-3
              top-3
              bg-black/80
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


        {/* ================= SALE BADGE ================= */}

        {p.sale && (
          <span
            className="
              absolute
              bottom-3
              left-3
              bg-[#5E0B1C]
              px-2.5
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-white
            "
          >
            {p.sale}% Off
          </span>
        )}


        {/* ================= QUICK VIEW ================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            translate-y-full
            bg-white/95
            px-4
            py-3
            text-center
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-neutral-900
            backdrop-blur-sm
            transition-transform
            duration-500
            group-hover:translate-y-0
          "
        >
          Quick View
        </div>

      </div>


      {/* ================= PRODUCT INFO ================= */}

      <div className="pt-4">

        {/* PRODUCT TYPE */}

        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.16em]
            text-neutral-400
          "
        >
          {p.line}
        </p>


        {/* NAME + PRICE */}

        <div
          className="
            mt-1
            flex
            items-start
            justify-between
            gap-3
          "
        >

          {/* PRODUCT NAME */}

          <h3
            className="
              f-display
              text-lg
              leading-tight
              text-neutral-950
              sm:text-xl
            "
          >
            {p.name}
          </h3>


          {/* PRICE */}

          <p
            className="
              whitespace-nowrap
              text-xs
              font-medium
              text-[#5E0B1C]
            "
          >
            {fmt(p.price)}
          </p>

        </div>


        {/* SALE INFORMATION */}

        {p.sale && (
          <p
            className="
              mt-1
              text-[11px]
              text-neutral-400
            "
          >
            <span className="mr-2 line-through">
              {fmt(
                Math.round(
                  p.price / (1 - p.sale / 100)
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
   MAIN PRODUCT SECTION
========================================================= */

export default function ProductRail() {

  return (

    <section
      id="shop"
      className="
        mx-auto
        max-w-7xl
        px-4
        py-20
        sm:px-6
        lg:px-8
      "
    >


      {/* =====================================================
          ROW 1 — LATEST DESIGNS
      ===================================================== */}

      <div>

        {/* SECTION HEADER */}

        <div
          className="
            mb-7
            flex
            items-end
            justify-between
            border-b
            border-neutral-200
            pb-4
          "
        >

          <div>

            {/* SMALL LABEL */}

            <p
               className="
              mb-1
              text-2xl
              
              head
              tracking-[0.1em]
              text-[#5E0B1C]
            "
            >
              Collection
            </p>


            {/* MAIN HEADING */}

            <h2
              className="
                f-display
                text-5xl
                leading-[0.9]
                tracking-[-0.04em]
                text-neutral-950
                sm:text-5xl
                lg:text-5xl
              "
            >
              Latest Designs
            </h2>


            {/* SUBTITLE */}

            <p
              className="
                mt-2
                text-lg
                text-neutral-500
              "
            >
              Fresh silhouettes from the new collection
            </p>

          </div>


          {/* VIEW ALL */}

          <a
            href="#shop"
            className="
              group
              hidden
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-neutral-600
              transition-colors
              hover:text-[#5E0B1C]
              sm:flex
            "
          >
            View All

            <span
              className="
                text-sm
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

          </a>

        </div>


        {/* PRODUCT GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-3
            gap-y-10
            sm:gap-x-5
            lg:grid-cols-4
            lg:gap-6
          "
        >

          {PRODUCTS.Latest.map((p) => (
            <ProductCard
              key={p.name}
              p={p}
            />
          ))}

        </div>


        {/* MOBILE VIEW ALL */}

        <div
          className="
            mt-8
            flex
            justify-center
            sm:hidden
          "
        >
          <a
            href="#shop"
            className="
              border-b
              border-neutral-900
              pb-2
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-neutral-900
            "
          >
            View All →
          </a>
        </div>

      </div>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div
        className="
          my-20
          h-px
          bg-neutral-200
        "
      />


      {/* =====================================================
          ROW 2 — BESTSELLERS
      ===================================================== */}

      <div>

        {/* SECTION HEADER */}

        <div
          className="
            mb-7
            border-b
            border-neutral-200
            pb-4
          "
        >

          {/* SMALL LABEL */}

          <p
            className="
              mb-1
              text-2xl
              
              head
              tracking-[0.1em]
              text-[#5E0B1C]
            "
          >
            Collection
          </p>


          {/* MAIN HEADING */}

          <h2
            className="
              f-display
              text-4xl
              leading-[0.9]
              tracking-[-0.04em]
              text-neutral-950
              sm:text-5xl
              lg:text-5xl
            "
          >
            Bestsellers
          </h2>


          {/* SUBTITLE */}

          <p
            className="
              mt-2
              text-lg
              text-neutral-500
            "
          >
            The pieces everyone is reaching for
          </p>

        </div>


        {/* PRODUCT GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-3
            gap-y-10
            sm:gap-x-5
            lg:grid-cols-4
            lg:gap-6
          "
        >

          {PRODUCTS.Bestsellers.map((p) => (
            <ProductCard
              key={p.name}
              p={p}
            />
          ))}

        </div>

      </div>


      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div
        className="
          my-20
          h-px
          bg-neutral-200
        "
      />


      {/* =====================================================
          ROW 3 — THE COLLECTION
      ===================================================== */}

      <div>

        {/* SECTION HEADER */}

        <div
          className="
            mb-7
            border-b
            border-neutral-200
            pb-4
          "
        >

          {/* SMALL LABEL */}

          <p
            className="
              mb-1
              text-2xl
              
              head
              tracking-[0.1em]
              text-[#5E0B1C]
            "
          >
            Collection
          </p>


          {/* MAIN HEADING */}

          <h2
            className="
              f-display
              text-4xl
              leading-[0.9]
              tracking-[-0.04em]
              text-neutral-950
              sm:text-5xl
              lg:text-5xl
            "
          >
            The Collection
          </h2>


          {/* SUBTITLE */}

          <p
            className="
              mt-2
              text-lg
              text-neutral-500
            "
          >
            Essential pieces made to stay
          </p>

        </div>


        {/* PRODUCT GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-3
            gap-y-10
            sm:gap-x-5
            lg:grid-cols-4
            lg:gap-6
          "
        >

          {PRODUCTS.Collection.map((p) => (
            <ProductCard
              key={p.name}
              p={p}
            />
          ))}

        </div>

      </div>

    </section>
  );
}