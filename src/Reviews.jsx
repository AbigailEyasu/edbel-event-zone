import { useReveal } from "./useReveal"
import { ExternalLink, MessageCircle } from "lucide-react"

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
          {/* Social icons */}
          <div className="flex gap-4">
            <div className="bg-[#2a221c] p-4 rounded-full">
              <ExternalLink className="text-[#C6A15B]" size={28} />
            </div>
            <div className="bg-[#2a221c] p-4 rounded-full">
              <MessageCircle className="text-[#C6A15B]" size={28} />
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

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://instagram.com/edbeleventzone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#C6A15B] text-[#161311] py-3 px-6 rounded-full font-semibold hover:bg-[#d8b876] transition"
              style={{ fontFamily }}
            >
              <ExternalLink size={18} />
              Instagram
            </a>
            <a
              href="https://t.me/EdbelEventZone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#C6A15B] text-[#C6A15B] py-3 px-6 rounded-full font-semibold hover:bg-[#C6A15B] hover:text-[#161311] transition"
              style={{ fontFamily }}
            >
              <MessageCircle size={18} />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
