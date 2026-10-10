import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/1_HORIZONTAL_jpg.jpg",
    link: "/shop?cat=festive",
    title: "Festive Collection",
  },
  {
    id: 2,
    image: "/DESKTOP-4_7c25ca08-15e7-4f44-8ae.jpg",
    link: "/shop?cat=unstitched",
    title: "Unstitched Lawn",
  },
  {
    id: 3,
    image: "/Seemal_Desktop.jpg",
    link: "/shop?cat=pret",
    title: "Pret Collection",
  },
  {
    id: 4,
    image: "/Floret_Desktop.jpg",
    link: "/shop?cat=pret",
    title: "Floret Pret",
  },
  {
    id: 5,
    image: "/Zara_Desktop.jpg",
    link: "/shop?cat=pret",
    title: "Zara Collection",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const touchX = useRef(null);
  const total = slides.length;

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  // Next / Previous
  const go = (dir) => {
    setCurrent((c) => (c + dir + total) % total);
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-950"
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) {
          go(dx < 0 ? 1 : -1);
        }
        touchX.current = null;
      }}
    >
      {/* ================= SLIDES ================= */}
      {slides.map((s, i) => (
        <a
          key={s.id}
          href={s.link}
          aria-hidden={i !== current}
          /* 
            First slide establishes natural height (relative), 
            rest slides are overlayed absolutely.
          */
          className={`
            w-full transition-opacity duration-700 ease-in-out block
            ${i === 0 ? "relative" : "absolute inset-0 h-full"}
            ${
              i === current
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
            }
          `}
        >
          <img
            src={s.image}
            alt={s.title || `Fashion banner ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "auto"}
            /* 
              FIX: 'object-top' focus top par rakhta hai (head nahi kategi), 
              aur 'h-auto' zero-crop display deta hai.
            */
            className="w-full h-auto object-cover object-top block"
          />
        </a>
      ))}

      {/* ================= NAVIGATION ARROWS (Desktop) ================= */}
      <button
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition hidden md:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition hidden md:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* ================= BOTTOM GRADIENT ================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-20 sm:h-28
          bg-gradient-to-t
          from-black/60
          to-transparent
        "
      />

      {/* ================= SLIDER INDICATORS ================= */}
      <div
        className="
          absolute
          inset-x-0
          bottom-3
          sm:bottom-6
          z-30
          flex
          items-center
          justify-center
          gap-2
        "
      >
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === current}
            className="group py-2 px-1"
          >
            <span
              className={`
                block
                h-[3px]
                rounded-full
                transition-all
                duration-500
                ${
                  i === current
                    ? "w-8 sm:w-12 bg-white"
                    : "w-4 sm:w-6 bg-white/40 group-hover:bg-white/80"
                }
              `}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;