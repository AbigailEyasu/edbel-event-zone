import { useState } from "react"
import { content } from "./content"
import Hero from "./Hero"
import Services from "./Services"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Footer from "./Footer"

function App() {
  const [lang, setLang] = useState("am")
  const t = content[lang]

  return (
    <div>
      <Hero lang={lang} setLang={setLang} t={t} />
      <Services lang={lang} t={t} />
      <Gallery lang={lang} t={t} />
      <Contact lang={lang} t={t} />
      <Footer lang={lang} t={t} />
    </div>
  )
}

export default App