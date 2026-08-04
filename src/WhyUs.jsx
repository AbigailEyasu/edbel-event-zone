import { Award, Settings, Users } from "lucide-react"
import { useReveal } from "./useReveal"

const icons = [Award, Settings, Users]

function WhyUs({ lang, t }) {
  const isAm = lang === "am"
  const fontFamily = isAm ? "'Noto Serif Ethiopic', serif" : "'Inter', sans-serif"
  const headingFont = isAm ? "'Noto Serif Ethiopic', serif" : "'Playfair Display', serif"
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`bg-[#161311] py-12 md:py-20 px-6 sm:px-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
            {t.whyUs.heading}
          </h2>
          <p className="text-[#C6A15B] mt-3 mb-8 md:mb-0" style={{ fontFamily }}>
            {t.whyUs.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Mission & Stats */}
          <div className="flex flex-col gap-8 text-left">
            <div>
              <h3 className="text-[#C6A15B] text-xl font-semibold mb-3" style={{ fontFamily: headingFont }}>
                {t.whyUs.missionTitle}
              </h3>
              <p className="text-[#FAF6F0]/70 text-base leading-relaxed" style={{ fontFamily }}>
                {t.whyUs.missionDesc}
              </p>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-[#2a221c] pt-8">
              {t.whyUs.stats.map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <span className="block text-[#C6A15B] text-3xl md:text-4xl font-bold font-serif">
                    {stat.value}
                  </span>
                  <span className="block text-[#FAF6F0]/60 text-xs md:text-sm font-medium mt-1 leading-tight" style={{ fontFamily }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Differentiators */}
          <div className="flex flex-col gap-6">
            {t.whyUs.items.map((item, i) => {
              const Icon = icons[i]
              return (
                <div
                  key={i}
                  className="bg-[#1E1916] border border-[#2a221c] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 items-start"
                >
                  <div className="bg-[#2a221c] w-12 h-12 rounded-xl flex items-center justify-center text-[#C6A15B] flex-shrink-0">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-[#FAF6F0] text-lg font-semibold mb-1" style={{ fontFamily: headingFont }}>
                      {item.title}
                    </h4>
                    <p className="text-[#FAF6F0]/60 text-sm leading-relaxed" style={{ fontFamily }}>
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
