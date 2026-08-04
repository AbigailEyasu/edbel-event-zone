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
      className={`bg-[#161311] py-12 md:py-20 px-6 sm:px-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
          {t.reviews.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-8 md:mb-12" style={{ fontFamily }}>
          {t.reviews.subheading}
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1E1916] border border-[#2a221c] rounded-2xl p-8 text-center shadow-sm relative">
            <Quote className="text-[#C6A15B]/20 absolute top-4 right-4" size={40} />
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={20} className="text-[#2a221c]" />
              ))}
            </div>
            <p className="text-[#FAF6F0]/70 text-base md:text-lg leading-relaxed mb-8 relative z-10" style={{ fontFamily }}>
              {t.reviews.placeholder}
            </p>
            <button className="bg-[#C6A15B] text-[#161311] py-3 px-8 rounded-full font-semibold hover:bg-[#d8b876] transition cursor-pointer" style={{ fontFamily }}>
              {t.reviews.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
