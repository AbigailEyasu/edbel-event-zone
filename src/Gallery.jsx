import img1 from "./assets/gallery/gallery-1.jpg"
import img2 from "./assets/gallery/gallery-2.jpg"
import img3 from "./assets/gallery/gallery-3.jpg"
import img4 from "./assets/gallery/gallery-4.jpg"
import img5 from "./assets/gallery/gallery-5.jpg"
import img6 from "./assets/gallery/gallery-6.jpg"
import { useReveal } from "./useReveal"

const images = [img1, img2, img3, img4, img5, img6]

function Gallery({ lang, t }) {
  const isAm = lang === "am"
  const fontFamily = isAm ? "'Noto Sans Ethiopic', sans-serif" : "'Inter', sans-serif"
  const headingFont = isAm ? "'Noto Sans Ethiopic', sans-serif" : "'Playfair Display', serif"
  const [ref, visible] = useReveal()

  return (
    <section
      id="gallery"
      ref={ref}
      className={`bg-[#161311] py-12 md:py-20 px-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-[#FAF6F0] text-3xl md:text-4xl font-semibold"
          style={{ fontFamily: headingFont }}
        >
          {t.gallery.heading}
        </h2>
        <p className="text-[#C6A15B] mt-3 mb-10 md:mb-12" style={{ fontFamily }}>
          {t.gallery.subheading}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl aspect-square">
              <img
                src={src}
                alt="Event decoration by Edbel Event Zone"
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery