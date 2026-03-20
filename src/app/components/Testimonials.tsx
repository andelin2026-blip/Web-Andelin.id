import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: " A**r ",
    role: "Mahasiswi Semester 5",
    image: "https://events.rumah123.com/wp-content/uploads/sites/41/2023/09/12160753/gambar-foto-profil-whatsapp-kosong-1024x1024.jpg",
    content: "Pintu kamar kos saya rusak. sempet pakai tutorial malah ga bisa-bisa, eh pakai andelin.id ga lama prosesnya udah selesai! Mas tukangnya baik, kerjanya cepat dan rapi. Cocok banget buat mahasiswa kayak kita!",
    rating: 5,
  },
  {
    name: "B***y",
    role: "Keluarga",
    image: "https://events.rumah123.com/wp-content/uploads/sites/41/2023/09/12160753/gambar-foto-profil-whatsapp-kosong-1024x1024.jpg",
    content: "Langganan service AC dan perbaikan rumah di Andelin.id. Harganya jauh lebih murah dari tempat lain tapi kualitasnya tetap bagus",
    rating: 5,
  },
  {
    name: "Anak Kos",
    role: "Mahasiswa Psikologi",
    image: "https://events.rumah123.com/wp-content/uploads/sites/41/2023/09/12160753/gambar-foto-profil-whatsapp-kosong-1024x1024.jpg",
    content: "Magicom rusak jam 9 malam, padahal udah siap masak nasi... langsung WA Andelin.id. Jam 10 tukangnya sudah datang! Recommended banget untuk anak kos yang butuh bantuan cepat! besoknya udah dianterin lagi dan siap pake",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kata Mereka
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman klien kami yang telah merasakan manfaat layanan kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}