function Footer({ lang, t }) {
  const isAm = lang === "am";
  const fontFamily = isAm ? "'Noto Sans Ethiopic', sans-serif" : "'Inter', sans-serif";

  return (
    <footer className="bg-[#161311] text-center py-10 px-6 border-t border-[#2a221c]">
      <p className="text-[#C6A15B] font-medium" style={{ fontFamily }}>{t.footer.note}</p>
      <p className="text-[#E8D9D3]/70 text-sm mt-2 max-w-xl mx-auto" style={{ fontFamily }}>{t.footer.disclaimer}</p>
      <p className="text-[#E8D9D3]/50 text-xs mt-4" style={{ fontFamily }}>© 2026 Edbel Event Zone. {t.footer.rights}</p>
    </footer>
  );
}

export default Footer;