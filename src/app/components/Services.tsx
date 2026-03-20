import { Wrench, Droplets, Hammer, Wind, Paintbrush, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Lightbulb,
    title: "Tukang Listrik",
    description: "Instalasi listrik, perbaikan konsleting, pasang lampu, stop kontak, dan semua kebutuhan kelistrikan rumah Anda.",
    image: "https://images.unsplash.com/photo-1617571607645-dd7dd3bf7f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHdvcmtpbmclMjB0b29sc3xlbnwxfHx8fDE3NzM2NjY1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Rp 50.000 - 150.000"
  },
  {
    icon: Droplets,
    title: "Tukang Ledeng",
    description: "Perbaikan kebocoran pipa, pasang keran, atasi WC mampet, dan semua masalah air dan saluran pembuangan.",
    image: "https://images.unsplash.com/photo-1563197906-c1466d8e2edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwZml4aW5nJTIwcGlwZXN8ZW58MXx8fHwxNzczNTcxMzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Rp 60.000 - 200.000"
  },
  {
    icon: Hammer,
    title: "Tukang Kayu",
    description: "Pembuatan dan perbaikan furniture, kusen, pintu, lemari, dan berbagai kebutuhan perkayuan lainnya.",
    image: "https://images.unsplash.com/photo-1626081063434-79a2169791b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya2luZ3xlbnwxfHx8fDE3NzM1OTUyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Rp 100.000 - 500.000"
  },
  {
    icon: Wind,
    title: "Service AC",
    description: "Cuci AC, service rutin, isi freon, dan perbaikan AC yang kurang dingin atau bermasalah.",
    image: "https://images.unsplash.com/photo-1741062206165-7d8cba15a6ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBjb25kaXRpb25lciUyMHRlY2huaWNpYW58ZW58MXx8fHwxNzczNjY2NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Rp 75.000 - 250.000"
  },
  {
    icon: Paintbrush,
    title: "Tukang Cat",
    description: "Pengecatan rumah, tembok, pagar, furniture dengan hasil rapi dan pilihan warna sesuai keinginan.",
    image: "https://images.unsplash.com/photo-1670590213179-45b50ba3b9da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzZSUyMHBhaW50aW5nJTIwd29ya2VyfGVufDF8fHx8MTc3MzY2NjU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Rp 35.000/m² - 80.000/m²"
  },
  {
    icon: Wrench,
    title: "Tukang Serabutan",
    description: "Perbaikan ringan, pasang gorden, ganti kunci, perbaiki pintu, dan berbagai bantuan cepat untuk anak kos.",
    image: "https://images.unsplash.com/photo-1615974680845-c4a92c25f938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5keW1hbiUyMHRvb2xib3h8ZW58MXx8fHwxNzczNjY2NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    price: "Rp 20.000 - 100.000"
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Tukang Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Berbagai jenis tukang profesional siap membantu kebutuhan perbaikan dan renovasi Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-gray-200 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <service.icon className="h-10 w-10 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="text-blue-900 font-bold">
                  {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}