import React, { useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section
      id="newsletter"
      className="
        relative
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:px-8
        lg:px-12
        lg:py-28
      "
    >
      {/* =========================
          BACKGROUND DECORATION
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-1/2
          h-64
          w-64
          -translate-y-1/2
          rounded-full
          bg-[#5E0B1C]/5
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#d4a98f]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/2
          hidden
          h-40
          w-40
          -translate-y-1/2
          rounded-full
          border
          border-[#211b18]/10
          lg:block
        "
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1fr_1.1fr]
            lg:gap-20
          "
        >

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div>

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">

              <span
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-[#5E0B1C]
                "
              >
                Stay Connected
              </span>

            </div>

            {/* Heading */}
            <h2
              className="
                text-6xl
                leading-[0.88]
                text-[#211b18]
                lg:text-8xl
              "
            >
              Be the First
              <br />

              <p className="head lg:leading-[4.7vw] text-[#5E0B1C]">
                to Know.
              </p>
            </h2>

            {/* Description */}
            <p
              className="
                mt-15
                max-w-lg
                text-xl
                leading-6
                text-[#756b66]
              "
            >
              Be the first to discover new collections, exclusive edits,
              special offers and everything we're loving right now.
            </p>

         
          </div>

          {/* =========================
              RIGHT FORM
          ========================== */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-[#211b18]/10
              bg-[#f7f4f1]
              p-6
              sm:p-8
              lg:p-10
            "
          >

            {/* Card Number */}
            <span
              className="
                absolute
                right-7
                top-6
                text-[10px]
                font-medium
                tracking-[0.3em]
                text-[#211b18]/25
              "
            >
              01
            </span>

            <div className="relative">

            

              <h3
                className="
                  mt-3
                  max-w-md
                  text-2xl
                  font-medium
                  leading-[1]
                  text-[#211b18cb]
                  sm:text-4xl
                "
              >
                A little inspiration,
                <br />

                <span className="text-[#211b18cb]">
                  straight to you.
                </span>
              </h3>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="mt-8"
              >

                <div
                  className="
                    group
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                  "
                >

                  {/* Input */}
                  <div
                    className="
                      flex
                      min-h-[58px]
                      flex-1
                      items-center
                      rounded-full
                      border
                      border-[#211b18]/10
                      bg-white
                      px-5
                      transition-all
                      duration-300
                      focus-within:border-[#5E0B1C]/50
                      focus-within:shadow-sm
                    "
                  >

                    <Mail
                      size={17}
                      strokeWidth={1.5}
                      className="
                        mr-3
                        shrink-0
                        text-[#756b66]
                        transition-colors
                        duration-300
                        group-focus-within:text-[#5E0B1C]
                      "
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="
                        w-full
                        bg-transparent
                        text-sm
                        text-[#211b18]
                        outline-none
                        placeholder:text-[#756b66]/60
                      "
                    />

                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="
                      group/btn
                      flex
                      min-h-[58px]
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#5E0B1C]
                      px-7
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-300
                       cursor-pointer
                      hover:bg-[#721125]
                      hover:shadow-[0_10px_35px_rgba(94,11,28,0.25)]
                    "
                  >
                    Subscribe

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                        transition-transform
                        duration-300
                        group-hover/btn:rotate-45
                      "
                    >
                      <ArrowUpRight size={14} />
                    </span>

                  </button>

                </div>

              </form>

              {/* Bottom Line */}
              <div className="mt-8 h-px w-full bg-[#211b18]/10" />

              {/* Bottom Info */}
              <div
                className="
                  mt-5
                  flex
                  flex-col
                  justify-between
                  gap-3
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[#756b66]
                  sm:flex-row
                "
              >
                <span>New drops</span>
                <span>Exclusive edits</span>
                <span>Special offers</span>
              </div>

            </div>
          </div>

        </div>

        {/* =========================
            BOTTOM BRAND LINE
        ========================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            justify-between
            gap-4
            border-t
            border-[#211b18]/10
            pt-6
            sm:flex-row
            sm:items-center
          "
        >

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#756b66]
            "
          >
            Curated for you
          </span>

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#756b66]
            "
          >
            New stories. New styles.
          </span>

        </div>

      </div>
    </section>
  );
}

export default Newsletter;