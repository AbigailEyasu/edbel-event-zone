import { Heart, Cake, Gift, Gem, Flower2, Package } from "lucide-react"
import { useReveal } from "./useReveal"
import weddingImg from "./assets/services/wedding.jpg"
import birthdayImg from "./assets/birthday.jpg"
import bridalImg from "./assets/bridal.jpg"
import engagementImg from "./assets/services/engagement.png"
import flowersCakesImg from "./assets/services/flowers_cakes.png"
import decorRentalImg from "./assets/decor-rental.jpg"

const icons = [Heart, Cake, Gift, Gem, Flower2, Package]
const serviceImages = [
  weddingImg,
  birthdayImg,
  bridalImg,
  engagementImg,
  flowersCakesImg,
  decorRentalImg
];



function Services({ lang, t }) {
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
        <h2
          className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: headingFont }}
        >
          {t.services.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-10 md:mb-16" style={{ fontFamily }}>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content body */}
                <div className="p-6 flex-grow flex flex-col relative">
                  {/* Gold left accent bar */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C6A15B] group-hover:w-2 transition-all duration-300 rounded-bl-2xl" />
                  <h3
                    className="text-[#FAF6F0] text-xl font-semibold mb-2 flex items-center gap-2"
                    style={{ fontFamily: headingFont }}
                  >
                    {item.title}
                    <Icon size={20} className="text-[#C6A15B]" strokeWidth={2} />
                  </h3>
                  <p
                    className="text-[#FAF6F0]/60 text-sm leading-relaxed"
                    style={{ fontFamily }}
                  >
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