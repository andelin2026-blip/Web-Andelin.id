import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white-50 to-cyan  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Jasa Tukang dan Serabutan <span className="text-blue-900">Harga Mahasiswa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Dari anak kos sampai keluarga, kami hadir dan siap sedia dengan harga yang pas di kantong! Mulai dari Rp 20.000
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("quick-help")}
                className="bg-slate-900 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center gap-2"
              >
                Andelin kita
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="border-2 border-slate-900 text-slate-900 px-8 py-3 rounded-lg hover:bg-cyan-100 transition-colors"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1584677191047-38f48d0db64e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMHJlcGFpciUyMHRvb2xzfGVufDF8fHx8MTc3MzY2NjU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tukang Profesional dengan Peralatan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}