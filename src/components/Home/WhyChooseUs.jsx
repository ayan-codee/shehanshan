import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and secure delivery, right to your doorstep.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description:
      "Simple returns if something doesn't feel right.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    description:
      "Your payments and personal information stay protected.",
  },
  {
    icon: Headphones,
    title: "Always Here",
    description:
      "Our support team is ready whenever you need us.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f7f4f1] px-5 py-30 lg:pt-60 md:pt-17 sm:px-8 lg:px-12"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d8b9a8]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#b89b8a]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          {/* Left */}
          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5E0B1C]">
                Why Choose Us
              </span>
            </div>

          <h2 className="text-5xl leading-[0.9] text-[#211b18] sm:text-5xl lg:text-8xl">
  Made to Be
  <br />
  <span></span>
  <p className="head text-[#5E0B1C] leading-[.6] sm:text-5xl lg:text-6xl"> Remembered.</p>
</h2>
          </div>

        </div>

        {/* =========================
            BENEFITS
        ========================== */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.id}
                className="group relative overflow-hidden rounded-[2rem] border border-[#5E0B1C] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#c7aa99] hover:shadow-[0_25px_60px_rgba(67,45,35,0.12)]"
              >


                {/* Top Row */}
                <div className="relative flex items-start justify-between">

                  {/* Icon Container */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5efeb] text-[#5E0B1C] transition-all duration-500 group-hover:rotate-3 group-hover:bg-[#211b18] group-hover:text-white">

                    <Icon
                      size={24}
                      strokeWidth={1.6}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Small Glow */}
                    <span className="absolute inset-0 -z-10 rounded-2xl bg-[#9b735f]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Arrow */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#5E0B1C] text-[#5E0B1C] transition-all duration-500 group-hover:rotate-45 group-hover:border-[#211b18] group-hover:bg-[#211b18] group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative mt-10">

                  <h3 className="text-2xl font-medium text-[#211b18] transition-colors duration-300  group-hover:text-[#5E0B1C]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-lg leading-[1.3] text-[#756b66]">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="relative mt-8 h-px w-full overflow-hidden bg-[#eee8e4]">
                  <div className="h-full w-0 bg-[#9b735f] transition-all duration-700 ease-out group-hover:w-full" />
                </div>

              </div>
            );
          })}
        </div>

        {/* =========================
            TRUST BAR
        ========================== */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-[#e4ddd8] bg-[#211b18] px-7 py-6 sm:flex-row sm:px-10">

          <div className="flex items-center gap-4">

         <div className="flex -space-x-2">
  <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-[#211b18]">
    <img
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
      alt="Customer"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-[#211b18]">
    <img
      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
      alt="Customer"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-[#211b18]">
    <img
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
      alt="Customer"
      className="h-full w-full object-cover"
    />
  </div>
</div>

            <div>
              <p className="text-sm font-medium text-white">
                Loved by our customers
              </p>

              <p className="mt-1 text-xs text-white/50">
                Quality, comfort & style
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">

            <div className="flex gap-1 text-[#d4a98f]">
              {"★★★★★".split("").map((star, index) => (
                <span key={index} className="text-sm">
                  {star}
                </span>
              ))}
            </div>

            <span className="h-5 w-px bg-white/15" />

            <span className="text-xs text-white/50">
              4.9/5 rating
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;