import { Heart, Cake, Gift, Gem, Flower2, Package } from "lucide-react"
import { useReveal } from "./useReveal"

const icons = [Heart, Cake, Gift, Gem, Flower2, Package]

function Services({ lang, t }) {
  const isAm = lang === "am"
  const fontFamily = isAm ? "'Noto Serif Ethiopic', serif" : "'Inter', sans-serif"
  const headingFont = isAm ? "'Noto Serif Ethiopic', serif" : "'Playfair Display', serif"
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`bg-[#F3E4E0] py-20 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[#161311] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
          {t.services.heading}
        </h2>
        <p className="text-[#7A1F2B] mt-3 mb-12" style={{ fontFamily }}>
          {t.services.subheading}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="bg-white border border-[#E8D9D3] rounded-2xl p-6 text-left shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#7A1F2B] group-hover:w-2 transition-all duration-300" />
                <Icon className="text-[#7A1F2B] mb-3" size={28} strokeWidth={1.5} />
                <h3 className="text-[#161311] text-xl font-semibold mb-2" style={{ fontFamily: headingFont }}>
                  {item.title}
                </h3>
                <p className="text-[#161311]/70 text-sm" style={{ fontFamily }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services