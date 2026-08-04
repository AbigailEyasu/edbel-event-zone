import { Heart, Cake, Gift, Gem, Flower2, Package } from "lucide-react"
import { useReveal } from "./useReveal"

const icons = [Heart, Cake, Gift, Gem, Flower2, Package]
const serviceImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=600&auto=format&fit=crop"
]

function Services({ lang, t }) {
  const isAm = lang === "am"
  const fontFamily = isAm ? "'Noto Serif Ethiopic', serif" : "'Inter', sans-serif"
  const headingFont = isAm ? "'Noto Serif Ethiopic', serif" : "'Playfair Display', serif"
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`bg-[#161311] py-20 px-6 sm:px-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
          {t.services.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-16" style={{ fontFamily }}>
          {t.services.subheading}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            const imgUrl = serviceImages[i]
            return (
              <div
                key={i}
                className="bg-[#1E1916] border border-[#2a221c] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group flex flex-col text-left"
              >
                {/* Image header */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={imgUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {/* Floating Circular Icon Badge */}
                  <div className="absolute -bottom-6 right-6 bg-[#C6A15B] text-[#161311] p-3 rounded-full shadow-lg z-10 border-2 border-[#161311] flex items-center justify-center transform group-hover:scale-110 transition duration-300">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 pt-8 flex-grow flex flex-col">
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

export default Services