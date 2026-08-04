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
      className={`bg-[#161311] py-12 md:py-20 px-6 sm:px-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold" style={{ fontFamily: headingFont }}>
            {t.faq.heading}
          </h2>
          <p className="text-[#C6A15B] mt-3" style={{ fontFamily }}>
            {t.faq.subheading}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-[#1E1916] border border-[#2a221c] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span
                    className="text-[#FAF6F0] font-semibold text-base md:text-lg pr-4 group-hover:text-[#C6A15B] transition-colors duration-200"
                    style={{ fontFamily: headingFont }}
                  >
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`text-[#C6A15B] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
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
                    <div className="px-6 pb-6 text-[#FAF6F0]/60 text-sm md:text-base leading-relaxed border-t border-[#2a221c] pt-4" style={{ fontFamily }}>
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
