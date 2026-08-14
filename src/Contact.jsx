import React from "react"
import { useReveal } from "./useReveal"
import { MapPin, Phone } from "lucide-react"
import { SocialIcon } from "./SocialIcon"

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
        <p className="text-[#C6A15B] mt-3 mb-10 md:mb-16" style={{ fontFamily }}>
          {t.contact.subheading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#1E1916] rounded-2xl p-6 md:p-8 shadow-sm border border-[#2a221c] flex flex-col gap-4 order-2 md:order-1"
          >
            <div>
              <label className="block text-[#FAF6F0]/70 text-sm mb-1" style={{ fontFamily }}>
                {t.contact.formName}
              </label>
              <input
                type="text"
                required
                className="w-full bg-[#161311] border border-[#2a221c] rounded-lg px-4 py-2.5 text-[#FAF6F0] focus:outline-none focus:border-[#C6A15B] transition"
              />
            </div>
            <div>
              <label className="block text-[#FAF6F0]/70 text-sm mb-1" style={{ fontFamily }}>
                {t.contact.formPhone}
              </label>
              <input
                type="tel"
                required
                className="w-full bg-[#161311] border border-[#2a221c] rounded-lg px-4 py-2.5 text-[#FAF6F0] focus:outline-none focus:border-[#C6A15B] transition"
              />
            </div>
            <div>
              <label className="block text-[#FAF6F0]/70 text-sm mb-1" style={{ fontFamily }}>
                {t.contact.formEvent}
              </label>
              <input
                type="text"
                required
                className="w-full bg-[#161311] border border-[#2a221c] rounded-lg px-4 py-2.5 text-[#FAF6F0] focus:outline-none focus:border-[#C6A15B] transition"
              />
            </div>
            <div>
              <label className="block text-[#FAF6F0]/70 text-sm mb-1" style={{ fontFamily }}>
                {t.contact.formDate}
              </label>
              <input
                type="date"
                required
                className="w-full bg-[#161311] border border-[#2a221c] rounded-lg px-4 py-2.5 text-[#FAF6F0]/60 focus:outline-none focus:border-[#C6A15B] transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C6A15B] text-[#161311] py-3 rounded-full font-semibold hover:bg-[#d8b876] transition mt-4 cursor-pointer"
              style={{ fontFamily }}
            >
              {t.contact.formButton}
            </button>
          </form>

          {/* Contact Details & Social Links */}
          <div className="space-y-8 order-1 md:order-2">
            <div>
              <h3 className="text-[#C6A15B] font-semibold mb-2 flex items-center gap-2">
                <Phone size={18} />
                {t.contact.callUs}
              </h3>
              <div className="space-y-1">
                <a href="tel:+251913904484" className="block text-[#FAF6F0]/80 hover:text-[#C6A15B] transition">+251 91 390 4484</a>
                <a href="tel:+251996910890" className="block text-[#FAF6F0]/80 hover:text-[#C6A15B] transition">+251 99 691 0890</a>
              </div>
            </div>

            <div>
              <h3 className="text-[#C6A15B] font-semibold mb-2 flex items-center gap-2">
                <MapPin size={18} />
                {t.contact.visitUs}
              </h3>
              <p className="text-[#FAF6F0]/80 leading-relaxed">
                <a
                  href="https://maps.app.goo.gl/NN4HLfWUEbc9Be4MA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A15B] transition"
                >
                  {t.contact.address}
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-[#C6A15B] font-semibold mb-3">Follow Us</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="https://t.me/EdbelEventZone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FAF6F0]/80 hover:text-[#C6A15B] hover:border-[#C6A15B] transition bg-[#1E1916] p-3.5 rounded-xl border border-[#2a221c]"
                >
                  <SocialIcon name="telegram" className="text-[#C6A15B]" size={20} />
                  <span className="font-medium">Telegram</span>
                </a>
                <a
                  href="https://instagram.com/edbeleventzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FAF6F0]/80 hover:text-[#C6A15B] hover:border-[#C6A15B] transition bg-[#1E1916] p-3.5 rounded-xl border border-[#2a221c]"
                >
                  <SocialIcon name="instagram" className="text-[#C6A15B]" size={20} />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://tiktok.com/@edbeleventzone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FAF6F0]/80 hover:text-[#C6A15B] hover:border-[#C6A15B] transition bg-[#1E1916] p-3.5 rounded-xl border border-[#2a221c]"
                >
                  <SocialIcon name="tiktok" className="text-[#C6A15B]" size={20} />
                  <span className="font-medium">TikTok</span>
                </a>
                <a
                  href="https://web.facebook.com/EdbelEventZone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FAF6F0]/80 hover:text-[#C6A15B] hover:border-[#C6A15B] transition bg-[#1E1916] p-3.5 rounded-xl border border-[#2a221c]"
                >
                  <SocialIcon name="facebook" className="text-[#C6A15B]" size={20} />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/NN4HLfWUEbc9Be4MA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-1 sm:col-span-2 flex items-center justify-center gap-2 text-[#C6A15B] hover:text-[#d8b876] transition-all bg-[#2a221c]/40 p-3 rounded-lg border border-[#C6A15B]/20 hover:bg-[#2a221c]/70 text-center font-medium"
                >
                  <MapPin size={18} />
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