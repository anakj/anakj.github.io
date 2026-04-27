import React from "react";
import { motion } from "framer-motion";

// Estrutura de site inspirada no template Clientele (Framer).
// Arquivo único (React) pronto para usar em um projeto Next.js / Create React App com Tailwind.
// Substitua imagens, textos e links conforme necessário.

const projects = [
  {
    id: 1,
    title: "Conversion Website",
    subtitle: "Digital marketing & paid advertising",
    url: "https://www.hxmzaehsan.com",
    img: "/placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Scalable Landing Page",
    subtitle: "Analytics & sales SaaS",
    url: "https://www.hxmzaehsan.com",
    img: "/placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Limitless Landing",
    subtitle: "Design subscription service",
    url: "https://www.hxmzaehsan.com",
    img: "/placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Solopreneur Website",
    subtitle: "Freelance web designer",
    url: "https://www.framer.com",
    img: "/placeholder-4.jpg",
  },
];

export default function ClienteleLike() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a className="font-semibold text-lg">SeuNome</a>
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#work" className="hover:underline">Work</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#contact" className="bg-black text-white px-4 py-2 rounded-md">Get in touch</a>
          </nav>
          <button className="md:hidden">☰</button>
        </div>
      </header>

      <main className="pt-28">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase text-gray-500 mb-4">Hey, I’m</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Mika — Web Designer</h1>
            <p className="mt-6 text-lg text-gray-700">Obsessed with creating timeless digital experiences. I build beautiful, high-converting websites & landing pages.</p>

            <div className="mt-8 flex gap-4">
              <a href="#work" className="px-5 py-3 border rounded-md">Browse my work</a>
              <a href="#contact" className="px-5 py-3 bg-black text-white rounded-md">Get in touch</a>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="w-full">
            {/* Placeholder visual: substitua por uma imagem ou componente real */}
            <div className="w-full h-64 md:h-80 rounded-xl bg-gray-100 border flex items-center justify-center">Image / Hero visual</div>
          </motion.div>
        </section>

        {/* CLIENT LOGOS */}
        <section className="border-t border-b py-10">
          <div className="mx-auto max-w-6xl px-6 flex items-center justify-between gap-6 overflow-x-auto">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex-shrink-0 w-36 h-12 bg-gray-100 rounded flex items-center justify-center text-sm">Logo {i + 1}</div>
            ))}
          </div>
        </section>

        {/* WHAT MAKES ME DIFFERENT */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">What makes me different?</h2>
              <p className="mt-4 text-gray-700">I create unique digital experiences tailored to your brand and goals. By merging creativity with functionality and staying ahead of design trends, I ensure every project not only looks stunning but also performs flawlessly.</p>
              <div className="mt-6">
                <a href="#services" className="px-4 py-2 border rounded">See services</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 border rounded">Service / Feature 1</div>
              <div className="p-6 border rounded">Service / Feature 2</div>
              <div className="p-6 border rounded">Service / Feature 3</div>
            </div>
          </div>
        </section>

        {/* WORK / PROJECTS GRID */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-2xl font-semibold mb-6">Featured work</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <a key={p.id} href={p.url} className="group block border rounded-lg overflow-hidden">
                <div className="h-44 bg-gray-100 flex items-center justify-center">{p.img}</div>
                <div className="p-4">
                  <h4 className="font-semibold group-hover:underline">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{p.subtitle}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PRICING / HOW I CAN HELP */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-16 border-t">
          <h3 className="text-2xl font-semibold mb-6">How I can help you?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded">
              <h4 className="font-bold">Landing Page in Framer</h4>
              <p className="text-sm text-gray-600 mt-2">Starting from $1,999</p>
            </div>
            <div className="p-6 border rounded">
              <h4 className="font-bold">Website in Framer</h4>
              <p className="text-sm text-gray-600 mt-2">Starting from $3,999</p>
            </div>
            <div className="p-6 border rounded">
              <h4 className="font-bold">Custom Projects</h4>
              <p className="text-sm text-gray-600 mt-2">Contact for quote</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-xl border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold">Want a custom website?</h4>
              <p className="text-gray-600">I build custom, conversion-focused websites with thoughtful UX and fast performance.</p>
            </div>
            <a id="contact" href="mailto:you@example.com" className="px-5 py-3 bg-black text-white rounded-md">Get in touch</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {new Date().getFullYear()} SeuNome — Built with ❤️</div>
          <div className="flex gap-4 text-sm">
            <a href="#">Use Template</a>
            <span>•</span>
            <a href="#">Proudly built in Framer</a>
            <span>•</span>
            <a href="#">Created by Hamza Ehsan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
