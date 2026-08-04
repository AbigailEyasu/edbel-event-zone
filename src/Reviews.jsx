import { Star, Quote } from "lucide-react"
import { useReveal } from "./useReveal"

function Reviews({ lang, t }) {
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
          {t.reviews.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-12" style={{ fontFamily }}>
          {t.reviews.subheading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((item, i) => (
            <div
              key={i}
              className="bg-[#1E1916] border border-[#2a221c] rounded-2xl p-8 text-left shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative"
            >
              <div>
                <Quote className="text-[#C6A15B]/20 absolute top-4 right-4" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-[#C6A15B] text-[#C6A15B]" />
                  ))}
                </div>
                <p className="text-[#FAF6F0]/70 italic text-sm leading-relaxed mb-6 relative z-10" style={{ fontFamily }}>
                  "{item.quote}"
                </p>
              </div>
              <div className="border-t border-[#2a221c] pt-4 mt-auto">
                <h4 className="text-[#FAF6F0] font-semibold text-base" style={{ fontFamily: headingFont }}>
                  {item.author}
                </h4>
                <p className="text-[#C6A15B] text-xs font-medium mt-0.5" style={{ fontFamily }}>
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
