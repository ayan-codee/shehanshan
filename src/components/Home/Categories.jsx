import React from "react";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Unstitched",
    subtitle: "Explore Collection",
    image:
      "/images/img1.jpg",
    size: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    title: "Ready to Wear",
    subtitle: "Everyday Elegance",
    image:
      "/images/img2.jpg",
    size: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: 3,
    title: "Festive",
    subtitle: "Made for Moments",
    image:
      "/images/img3.jpg",
    size: "lg:col-span-1 lg:row-span-1",
  },
  
];

function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-[#f7f4f1] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================== */}
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#5E0B1C]">
                Shop By Category
              </span>
            </div>

            <h2 className="text-5xl leading-[0.88] text-[#211b18] sm:text-6xl lg:text-8xl">
              Find Your
              <br />

              <span className="head text-[#5E0B1C]">
                Style.
              </span>
            </h2>
          </div>

          <div className="max-w-xs">
            <p className="text-sm leading-6 text-[#756b66] sm:text-base">
              From everyday essentials to statement pieces, discover
              collections made for every side of you.
            </p>
          </div>
        </div>

        {/* =========================
            CATEGORY GRID
        ========================== */}
        <div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[370px]">

          {categories.map((category) => (
            <a
              href="#"
              key={category.id}
              className={`
                ${category.size}
                group
                relative
                overflow-hidden
                bg-[#211b18]
              `}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  object-top
                  transition-transform
                  duration-[1200ms]
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Image Shade */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/100
                  via-black/30
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:from-black/85
                "
              />

              {/* Top Number */}
              <span
                className="
                  absolute
                  right-6
                  top-6
                  text-xs
                  bg-black
                  p-2
                  rounded-full
                  font-medium
                  tracking-[0.2em]
                  text-white/70
                "
              >
                0{category.id}
              </span>

              {/* Content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-6
                  sm:p-7
                  lg:p-8
                "
              >
                <div className="flex items-end justify-between gap-5">

                  <div>
                  

                    <h3
                      className="
                        text-2xl
                        font-medium
                        tracking-tight
                        text-white
                        sm:text-3xl
                      "
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/40
                      text-white
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-white
                      group-hover:bg-white
                      group-hover:text-[#5E0B1C]
                    "
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

                {/* Bottom Line */}
                <div className="mt-5 h-px w-full overflow-hidden bg-white/20">
                  <div
                    className="
                      h-full
                      w-0
                      bg-white
                      transition-all
                      duration-700
                      ease-out
                      group-hover:w-full
                    "
                  />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* =========================
            BOTTOM LINK
        ========================== */}
        <div className="mt-8 flex justify-end">
          <a
            href="/shop"
            className="
              group
              flex
              items-center
              gap-3
              text-sm
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#211b18]
            "
          >
            View All Collections

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#5E0B1C]
                text-[#5E0B1C]
                transition-all
                duration-300
                group-hover:rotate-45
                group-hover:bg-[#5E0B1C]
                group-hover:text-white
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Categories;