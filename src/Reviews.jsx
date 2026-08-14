import { useReveal } from "./useReveal"
import { Star } from "lucide-react"
import { SocialIcon } from "./SocialIcon"

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
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
          {t.reviews.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-10 md:mb-14" style={{ fontFamily }}>
          {t.reviews.subheading}
        </p>

        <div className="bg-[#1E1916] border border-[#2a221c] rounded-2xl p-8 md:p-12 flex flex-col items-center gap-6">
          {/* Google rating badge - Clickable */}
          <a 
            href="https://maps.app.goo.gl/NN4HLfWUEbc9Be4MA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#2a221c] px-5 py-3 rounded-full hover:bg-[#342b23] transition group"
          >
            <span className="text-[#C6A15B] text-lg font-bold flex items-center gap-1">
              5.0 <Star size={16} className="fill-[#C6A15B] text-[#C6A15B]" />
            </span>
            <span className="text-[#FAF6F0]/60 text-sm group-hover:text-[#FAF6F0] transition">
              {isAm ? "45+ በGoogle ግምገማዎች (ይጎብኙ)" : "45+ Google Reviews (View)"}
            </span>
          </a>

          {/* Real Google review quote - Clickable */}
          <a 
            href="https://maps.app.goo.gl/NN4HLfWUEbc9Be4MA"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-xl group hover:opacity-90 transition"
          >
            <blockquote className="text-[#FAF6F0]/80 text-lg md:text-xl italic leading-relaxed group-hover:text-[#C6A15B] transition" style={{ fontFamily }}>
              "From start to finish, your team went above and beyond to meet my needs."
            </blockquote>
            <p className="text-[#FAF6F0]/40 text-sm mt-2 group-hover:text-[#C6A15B]/60 transition">— {isAm ? "ከGoogle ግምገማዎች" : "From Google Reviews"}</p>
          </a>

          {/* Social icons */}
          <div className="flex gap-4">
            <div className="bg-[#2a221c] p-4 rounded-full">
              <SocialIcon name="instagram" className="text-[#C6A15B]" size={28} />
            </div>
            <div className="bg-[#2a221c] p-4 rounded-full">
              <SocialIcon name="telegram" className="text-[#C6A15B]" size={28} />
            </div>
          </div>

          <p className="text-[#FAF6F0]/70 text-base md:text-lg leading-relaxed" style={{ fontFamily }}>
            {t.reviews.ctaText}{" "}
            <a
              href="https://instagram.com/edbeleventzone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A15B] underline hover:text-[#d8b876] transition"
            >
              {t.reviews.ctaInstagram}
            </a>{" "}
            {t.reviews.ctaOr}{" "}
            <a
              href="https://t.me/EdbelEventZone"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A15B] underline hover:text-[#d8b876] transition"
            >
              {t.reviews.ctaTelegram}
            </a>{" "}
            {t.reviews.ctaEnd}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href="https://maps.app.goo.gl/NN4HLfWUEbc9Be4MA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#ea4335] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#d93025] transition"
              style={{ fontFamily }}
            >
              <Star size={18} className="fill-white" />
              Google Reviews
            </a>
            <a
              href="https://instagram.com/edbeleventzone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C6A15B] text-[#161311] py-3 px-6 rounded-full font-semibold hover:bg-[#d8b876] transition"
              style={{ fontFamily }}
            >
              <SocialIcon name="instagram" size={18} />
              Instagram
            </a>
            <a
              href="https://web.facebook.com/EdbelEventZone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#3b5998] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#4c6aad] transition"
              style={{ fontFamily }}
            >
              <SocialIcon name="facebook" size={18} />
              Facebook
            </a>
            <a
              href="https://t.me/EdbelEventZone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#C6A15B] text-[#C6A15B] py-3 px-6 rounded-full font-semibold hover:bg-[#C6A15B] hover:text-[#161311] transition"
              style={{ fontFamily }}
            >
              <SocialIcon name="telegram" size={18} />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
