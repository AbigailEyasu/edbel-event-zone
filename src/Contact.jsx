import { useReveal } from "./useReveal"
import { MapPin } from "lucide-react"



function Contact({ lang, t }) {
  const isAm = lang === "am"
  const fontFamily = isAm ? "'Noto Serif Ethiopic', serif" : "'Inter', sans-serif"
  const headingFont = isAm ? "'Noto Serif Ethiopic', serif" : "'Playfair Display', serif"
  const [ref, visible] = useReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(isAm ? "አመሰግናለሁ! በቅርቡ እናገኝዎታለን።" : "Thank you! We'll reach out to you soon.")
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`bg-[#161311] py-12 md:py-20 px-6 sm:px-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: headingFont }}
        >
          {t.contact.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-8 md:mb-12" style={{ fontFamily }}>
          {t.contact.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#1E1916] rounded-2xl p-8 shadow-sm border border-[#2a221c] flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder={t.contact.formName}
              className="border border-[#2a221c] rounded-lg px-4 py-3 outline-none focus:border-[#C6A15B] text-[#FAF6F0] placeholder-[#FAF6F0]/40 bg-[#2a221c]"
              style={{ fontFamily }}
            />
            <input
              type="tel"
              placeholder={t.contact.formPhone}
              className="border border-[#2a221c] rounded-lg px-4 py-3 outline-none focus:border-[#C6A15B] text-[#FAF6F0] placeholder-[#FAF6F0]/40 bg-[#2a221c]"
              style={{ fontFamily }}
            />
            <input
              type="text"
              placeholder={t.contact.formEvent}
              className="border border-[#2a221c] rounded-lg px-4 py-3 outline-none focus:border-[#C6A15B] text-[#FAF6F0] placeholder-[#FAF6F0]/40 bg-[#2a221c]"
              style={{ fontFamily }}
            />
            <input
              type="date"
              className="border border-[#2a221c] rounded-lg px-4 py-3 outline-none focus:border-[#C6A15B] text-[#FAF6F0]/60 bg-[#2a221c]"
              style={{ fontFamily }}
            />
            {/* Submit button — keeping deep rose for strong CTA contrast */}
            <button
              type="submit"
              className="bg-[#C6A15B] text-[#161311] py-3 rounded-full font-semibold hover:bg-[#d8b876] transition cursor-pointer"
              style={{ fontFamily }}
            >
              {t.contact.formButton}
            </button>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-6" style={{ fontFamily }}>
            <div>
              <h3 className="text-[#C6A15B] font-semibold mb-1">{t.contact.callUs}</h3>
              <a href="tel:+251913904484" className="block text-[#FAF6F0]/80 hover:text-[#C6A15B] transition">+251 91 390 4484</a>
              <a href="tel:+251996910890" className="block text-[#FAF6F0]/80 hover:text-[#C6A15B] transition">+251 99 691 0890</a>
            </div>
            <div>
              <h3 className="text-[#C6A15B] font-semibold mb-1">{t.contact.visitUs}</h3>
              <p className="text-[#FAF6F0]/80 flex items-start gap-2">
                <MapPin className="text-[#C6A15B] mt-1 flex-shrink-0" size={18} />
                <a href="https://maps.app.goo.gl/xvR5QmmjUStFjN5Q8" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6A15B] transition">
                  {t.contact.address}
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-[#C6A15B] font-semibold mb-2">Follow Us</h3>
              <div className="flex flex-col gap-1">
                <a
                  href="https://t.me/EdbelEventZone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A15B] underline hover:text-[#d8b876] transition"
                >
                  Telegram — @EdbelEventZone
                </a>
                <a
                  href="https://instagram.com/edbeleventzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A15B] underline hover:text-[#d8b876] transition"
                >
                  Instagram — @edbeleventzone
                </a>
                <a
                  href="https://tiktok.com/@edbeleventzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A15B] underline hover:text-[#d8b876] transition"
                >
                  TikTok — @edbeleventzone
                </a>
                <a
                  href="https://web.facebook.com/EdbelEventZone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A15B] underline hover:text-[#d8b876] transition"
                >
                  Facebook — ኤድቤል Event Zone
                </a>
                <a
                  href="https://maps.app.goo.gl/xvR5QmmjUStFjN5Q8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A15B] underline hover:text-[#d8b876] transition"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact