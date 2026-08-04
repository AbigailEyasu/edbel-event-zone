import { useReveal } from "./useReveal"

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
      className={`relative bg-gradient-to-b from-[#F5EAE6] via-white to-[#F5EAE6] py-20 px-6 sm:px-10 transition-all duration-700 overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Luxury Dot Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#7A1F2B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-[#161311] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
          {t.contact.heading}
        </h2>
        <p className="text-[#7A1F2B] mt-3 mb-12" style={{ fontFamily }}>
          {t.contact.subheading}
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8D9D3] flex flex-col gap-4">
            <input type="text" placeholder={t.contact.formName} className="border border-[#E8D9D3] rounded-lg px-4 py-3 outline-none focus:border-[#7A1F2B]" style={{ fontFamily }} />
            <input type="tel" placeholder={t.contact.formPhone} className="border border-[#E8D9D3] rounded-lg px-4 py-3 outline-none focus:border-[#7A1F2B]" style={{ fontFamily }} />
            <input type="text" placeholder={t.contact.formEvent} className="border border-[#E8D9D3] rounded-lg px-4 py-3 outline-none focus:border-[#7A1F2B]" style={{ fontFamily }} />
            <input type="date" className="border border-[#E8D9D3] rounded-lg px-4 py-3 outline-none focus:border-[#7A1F2B]" style={{ fontFamily }} />
            <button type="submit" className="bg-[#7A1F2B] text-white py-3 rounded-full font-medium hover:bg-[#8f2634] transition cursor-pointer" style={{ fontFamily }}>{t.contact.formButton}</button>
          </form>

          <div className="flex flex-col gap-6" style={{ fontFamily }}>
            <div>
              <h3 className="text-[#7A1F2B] font-semibold mb-1">{t.contact.callUs}</h3>
              <p className="text-[#161311]">+251 91 390 4484</p>
              <p className="text-[#161311]">+251 99 691 0890</p>
            </div>
            <div>
              <h3 className="text-[#7A1F2B] font-semibold mb-1">{t.contact.visitUs}</h3>
              <p className="text-[#161311]">{t.contact.address}</p>
            </div>
            <div>
              <h3 className="text-[#7A1F2B] font-semibold mb-2">Follow Us</h3>
              <div className="flex flex-col gap-1">
                <a href="https://t.me/EdbelEventZone" target="_blank" rel="noopener noreferrer" className="text-[#7A1F2B] underline">Telegram — @EdbelEventZone</a>
                <a href="https://instagram.com/edbeleventzone" target="_blank" rel="noopener noreferrer" className="text-[#7A1F2B] underline">Instagram — @edbeleventzone</a>
                <a href="https://tiktok.com/@edbeleventzone" target="_blank" rel="noopener noreferrer" className="text-[#7A1F2B] underline">TikTok — @edbeleventzone</a>
                <a href="https://maps.app.goo.gl/HdUWaKT3rtdDicWZ6" target="_blank" rel="noopener noreferrer" className="text-[#7A1F2B] underline">View on Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact