import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f7f4f1] px-6 py-20">
      <div className="w-full max-w-4xl text-center">

        {/* Small Label */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#5E0B1C]">
          Error 404
        </p>

        {/* Main Number */}
        <h1 className="text-[clamp(8rem,18vw,18rem)] leading-[0.7] tracking-[-0.08em] text-[#211b18]">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-14 text-4xl leading-[.7] text-[#211b18] sm:text-5xl lg:text-5xl">
          Looks like you've taken a
          <br />
          <p className="head leading-[1] text-[#5E0B1C]">
            Wrong turn.
          </p>
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            to="/"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-[#5E0B1C]
              px-7
              py-3.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#721125]
              hover:shadow-[0_10px_30px_rgba(94,11,28,0.2)]
            "
          >
            <ArrowLeft
              size={16}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            Back Home
          </Link>

          <Link
            to="/shop"
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              border
              border-[#211b18]/15
              bg-white
              px-7
              py-3.5
              text-sm
              font-medium
              text-[#211b18]
              transition-all
              duration-300
              hover:border-[#5E0B1C]/30
              hover:text-[#5E0B1C]
            "
          >
            Explore Shop

            <span className="transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </span>
          </Link>

        </div>

        {/* Bottom Detail */}
        <div className="mx-auto mt-16 flex max-w-sm items-center gap-4">
          <span className="h-px flex-1 bg-[#211b18]/10" />

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#756b66]">
            Find your style
          </span>

          <span className="h-px flex-1 bg-[#211b18]/10" />
        </div>

      </div>
    </section>
  );
}

export default PageNotFound;