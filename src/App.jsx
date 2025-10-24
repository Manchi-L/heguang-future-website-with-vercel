import React, { useState } from "react";
import { motion } from "framer-motion";

const content = {
  zh: {
    nav: ["首页", "关于我们", "课程与服务", "联系我们"],
    hero: "培养数字时代的主动创造者",
    sub: "智慧使用，创造未来",
    aboutTitle: "关于我们",
    aboutDesc: "和光·未来学院致力于培养学生的创造力和数字素养。",
    programsTitle: "课程与服务",
    programsDesc: "我们提供丰富的课程和项目，帮助学生掌握未来技能。",
    contact: "联系我们",
    footer: "© 2025 和光·未来学院 · 智慧使用，创造未来"
  },
  en: {
    nav: ["Home", "About", "Programs", "Contact"],
    hero: "Cultivate Proactive Creators in the Digital Age",
    sub: "Using Wisely, Creating for Future",
    aboutTitle: "About Us",
    aboutDesc: "Heguang Future Academy is dedicated to nurturing students' creativity and digital literacy.",
    programsTitle: "Programs & Services",
    programsDesc: "We offer a variety of courses and programs to equip students with future-ready skills.",
    contact: "Contact Us",
    footer: "© 2025 Heguang Future Academy · Using Wisely, Creating for Future"
  }
};

export default function App() {
  const [lang, setLang] = useState("zh");
  const t = content[lang];
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-blue-50 to-white">
      <header className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="flex items-center gap-2">
          <svg width="36" height="36" fill="gold"><circle cx="18" cy="18" r="16" /></svg>
          <h1 className="font-bold text-lg">和光·未来学院</h1>
        </div>
        <button onClick={() => setLang(lang === "zh" ? "en" : "zh")} className="border border-white px-3 py-1 rounded-full hover:bg-white hover:text-blue-700 transition">
          {lang === "zh" ? "EN" : "中"}
        </button>
      </header>

      <nav className="flex justify-center gap-8 py-4 bg-white shadow-sm sticky top-0 z-10">
        {t.nav.map((n, i) => (
          <a key={i} href={`#${i}`} className="text-blue-800 font-semibold hover:text-blue-500">{n}</a>
        ))}
      </nav>

      {/* Hero Section */}
      <section id="0" className="text-center py-24 px-6">
        <motion.h2 className="text-3xl font-bold text-blue-800 mb-2">{t.hero}</motion.h2>
        <p className="text-lg text-gray-700">{t.sub}</p>
      </section>

      {/* About Section */}
      <section id="1" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">{t.aboutTitle}</h2>
        <p className="max-w-2xl mx-auto">{t.aboutDesc}</p>
      </section>

      {/* Programs Section */}
      <section id="2" className="py-20 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">{t.programsTitle}</h2>
        <p className="max-w-2xl mx-auto">{t.programsDesc}</p>
      </section>

      {/* Contact Section */}
      <section id="3" className="text-center py-20 bg-blue-800 text-white">
        <h2 className="text-2xl font-bold mb-6">{t.contact}</h2>
        <p>📧 info@heguangfuture.com</p>
        <p>📍 深圳 · 前海 Qianhai, Shenzhen</p>
      </section>

      <footer className="text-center py-6 text-sm bg-blue-900 text-white/80">{t.footer}</footer>
    </div>
  );
}
