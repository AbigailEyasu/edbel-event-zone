import heroBg from "./assets/hero.jpg"

function Hero({ lang, setLang, t }) {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(22,19,17,0.6), rgba(22,19,17,0.75)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle decorative arch shapes */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-[#C6A15B]/20 pointer-events-none"
        style={{ transform: "translate(-50%, 40%)" }}
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[440px] h-[440px] rounded-full border border-[#C6A15B]/30 pointer-events-none"
        style={{ transform: "translate(-50%, 30%)" }}
      />

      {/* Language toggle */}
      <button
        onClick={() => setLang(lang === "am" ? "en" : "am")}
        className="absolute top-6 right-6 border border-[#C6A15B] text-[#C6A15B] px-4 py-2 rounded-full text-sm tracking-wide hover:bg-[#C6A15B] hover:text-[#161311] transition z-10"
      >
        {lang === "am" ? "English" : "አማርኛ"}
      </button>

      {/* Hero title */}
      <h1
        className="text-[#FAF6F0] text-4xl md:text-6xl font-semibold max-w-3xl leading-tight relative z-10"
        style={{
          fontFamily:
            lang === "am"
              ? "'Noto Serif Ethiopic', serif"
              : "'Playfair Display', serif",
        }}
      >
        {t.hero.title}
      </h1>

      {/* Hero subtitle */}
      <p
        className="text-[#E8D9D3] mt-6 max-w-xl text-lg relative z-10"
        style={{
          fontFamily:
            lang === "am"
              ? "'Noto Serif Ethiopic', serif"
              : "'Inter', sans-serif",
        }}
      >
        {t.hero.subtitle}
      </p>

      {/* Hero buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 relative z-10 w-full sm:w-auto">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="w-full sm:w-auto bg-[#C6A15B] text-[#161311] px-8 py-3 rounded-full font-medium hover:bg-[#d8b876] transition"
        >
          {t.hero.cta}
        </button>

        <button
          onClick={() =>
            document
              .getElementById("gallery")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="w-full sm:w-auto border border-[#FAF6F0] text-[#FAF6F0] px-8 py-3 rounded-full font-medium hover:bg-[#FAF6F0] hover:text-[#161311] transition"
        >
          {t.hero.secondaryCta}
        </button>
      </div>
    </section>
  )
}

export default Hero

