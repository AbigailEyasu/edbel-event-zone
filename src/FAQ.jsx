import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useReveal } from "./useReveal"

function FAQ({ lang, t }) {
  const isAm = lang === "am"
  const fontFamily = isAm ? "'Noto Serif Ethiopic', serif" : "'Inter', sans-serif"
  const headingFont = isAm ? "'Noto Serif Ethiopic', serif" : "'Playfair Display', serif"
  const [ref, visible] = useReveal()
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={ref}
      className={`relative bg-gradient-to-b from-[#FAF6F0] via-white to-[#FAF8F5] py-20 px-6 sm:px-10 transition-all duration-700 overflow-hidden ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Luxury Dot Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[#161311] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
            {t.faq.heading}
          </h2>
          <p className="text-[#7A1F2B] mt-3" style={{ fontFamily }}>
            {t.faq.subheading}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-white border border-[#E8D9D3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-[#161311] font-semibold text-base md:text-lg pr-4 group-hover:text-[#7A1F2B] transition-colors duration-200" style={{ fontFamily: headingFont }}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`text-[#7A1F2B] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-[#161311]/70 text-sm md:text-base leading-relaxed border-t border-[#FAF6F0] pt-4" style={{ fontFamily }}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
