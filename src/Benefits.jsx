import { Tag, Star, MessageCircle, Clock } from "lucide-react"
import { useReveal } from "./useReveal"

const icons = [Tag, Star, MessageCircle, Clock]

function Benefits({ lang, t }) {
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
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
          {t.benefits.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-8 md:mb-12" style={{ fontFamily }}>
          {t.benefits.subheading}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.benefits.items.map((item, i) => {
            const Icon = icons[i]
            return (
              <div
                key={i}
                className="bg-[#1E1916] border border-[#2a221c] rounded-2xl p-6 text-left shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C6A15B] group-hover:w-2 transition-all duration-300" />
                <div>
                  <div className="bg-[#2a221c] w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-[#C6A15B] group-hover:bg-[#C6A15B] group-hover:text-[#161311] transition duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#FAF6F0] text-xl font-semibold mb-2" style={{ fontFamily: headingFont }}>
                    {item.title}
                  </h3>
                  <p className="text-[#FAF6F0]/60 text-sm leading-relaxed" style={{ fontFamily }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
