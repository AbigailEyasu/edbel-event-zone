import { useState } from "react"
import { content } from "./content"
import Hero from "./Hero"
import Benefits from "./Benefits"
import Services from "./Services"
import Gallery from "./Gallery"
import Reviews from "./Reviews"
import WhyUs from "./WhyUs"
import Contact from "./Contact"
import FAQ from "./FAQ"
import Footer from "./Footer"

function App() {
  const [lang, setLang] = useState("am")
  const t = content[lang]

  return (
    <div>
      <Hero lang={lang} setLang={setLang} t={t} />
      <Benefits lang={lang} t={t} />
      <Services lang={lang} t={t} />
      <Gallery lang={lang} t={t} />
      <Reviews lang={lang} t={t} />
      <WhyUs lang={lang} t={t} />
      <Contact lang={lang} t={t} />
      <FAQ lang={lang} t={t} />
      <Footer lang={lang} t={t} />
    </div>
  )
}

export default App