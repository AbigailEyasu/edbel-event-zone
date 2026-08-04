import { Award, Sliders, HeartHandshake } from "lucide-react"
import { useReveal } from "./useReveal"

const icons = [Award, Sliders, HeartHandshake]

function WhyUs({ lang, t }) {
  const isAm = lang === "am"
  const fontFamily = isAm ? "'Noto Serif Ethiopic', serif" : "'Inter', sans-serif"
  const headingFont = isAm ? "'Noto Serif Ethiopic', serif" : "'Playfair Display', serif"
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`relative bg-gradient-to-b from-[#F5EAE6] via-white to-[#F5EAE6] py-20 px-6 sm:px-10 transition-all duration-700 overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Luxury Dot Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#7A1F2B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#161311] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
            {t.whyUs.heading}
          </h2>
          <p className="text-[#7A1F2B] mt-3" style={{ fontFamily }}>
            {t.whyUs.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Mission & Stats */}
          <div className="flex flex-col gap-8 text-left">
            <div>
              <h3 className="text-[#7A1F2B] text-xl font-semibold mb-3" style={{ fontFamily: headingFont }}>
                {t.whyUs.missionTitle}
              </h3>
              <p className="text-[#161311]/80 text-base leading-relaxed" style={{ fontFamily }}>
                {t.whyUs.missionDesc}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#E8D9D3] pt-8">
              {t.whyUs.stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <span className="block text-[#7A1F2B] text-3xl md:text-4xl font-bold font-serif">
                    {stat.value}
                  </span>
                  <span className="block text-[#161311]/70 text-xs md:text-sm font-medium mt-1 leading-tight" style={{ fontFamily }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Differentiators vertical list */}
          <div className="flex flex-col gap-6">
            {t.whyUs.items.map((item, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={i}
                  className="bg-white border border-[#E8D9D3] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="bg-[#FAF6F0] w-12 h-12 rounded-xl flex items-center justify-center text-[#7A1F2B] flex-shrink-0">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[#161311] text-lg font-semibold mb-1" style={{ fontFamily: headingFont }}>
                      {item.title}
                    </h4>
                    <p className="text-[#161311]/70 text-sm leading-relaxed" style={{ fontFamily }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
