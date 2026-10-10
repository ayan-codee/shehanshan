
function Banner() {
  const U = (id, w = 800) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=85&w=${w}`;

  return (
    <section className=" px-4 lg:mt-20 md:mt-17 sm:mt-0  sm:px-6 lg:px-8">
      <div className="mx-auto  bg- grid max-w-7xl overflow-hidden  lg:grid-cols-[0.9fr_1.1fr]">

        {/* ================= LEFT — CONTENT ================= */}
        <div className="relative flex min-h-[520px] flex-col justify-center px-7 py-14 sm:px-12 lg:min-h-[600px] lg:px-16 xl:px-20">

          {/* Small top label */}
          <div className="mb-10 flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              New Collection · 2026
            </span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="f-display max-w-lg text-7xl font-medium leading-[0.9] tracking-[-0.04em] text-neutral-950 sm:text-6xl lg:text-7xl xl:text-8xl">
              Solid
              <br />
              <span className="italic head text-[#5E0B1C]">
                Bloom
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-15 max-w-md text-sm lg:text-xl text-neutral-500 sm:text-[15px]">
            Refined silhouettes, rich textures and timeless details.
            Designed with a quiet confidence for every occasion.
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#shop"
              className="
                group
                inline-flex
                items-center
                gap-5
                border-b
                border-neutral-950
                pb-2
                text-sm
                font-medium
                uppercase
                tracking-[0.2em]
                text-neutral-950
                transition-all
                duration-300
                p-3
                hover:bg-[#5E0B1C]
                hover:text-white
              "
            >
              Explore Collection  →

            </a>
          </div>

        </div>

        {/* ================= RIGHT — IMAGE ================= */}
        <div className="group relative min-h-[420px] overflow-hidden bg-neutral-200 lg:min-h-[600px]">

          <img
            src={U("1483985988355-763728e1935b", 1600)}
            alt="Studio Solid Bloom"
            className="
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-[1200ms]
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Very subtle image overlay */}

          {/* Image label */}
          <div className="absolute bottom-6 right-6">
            <span className="border border-white/40 bg-black/10 px-4 py-2 text-[9px] uppercase tracking-[0.3em] text-white backdrop-blur-sm">
              Shehanshah
            </span>
          </div>

        
        </div>

      </div>
    </section>
  );
}

export default Banner;
