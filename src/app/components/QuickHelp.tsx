import { Phone, Clock, MapPin, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function QuickHelp() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    problem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "6285179979257"; // Ganti dengan nomor WhatsApp yang sebenarnya
    const message = `Halo, saya butuh bantuan tukang serabutan:\n\nNama: ${formData.name}\nNo HP: ${formData.phone}\nAlamat: ${formData.address}\nMasalah: ${formData.problem}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="quick-help" className="py-16 md:py-24 bg-gradient-to-br from-cyan-600 to-cyan-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-white/20 rounded-full px-4 py-2 mb-4">
            <Zap className="h-5 w-5 mr-2" />
            <span className="font-bold">Mulai dari Rp 35.000!</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tukang Serabutan - Panggilan Cepat
          </h2>
          <p className="text-lg text-cyan-100 max-w-2xl mx-auto">
            Khusus anak kos! Butuh bantuan perbaikan ringan? Kami datang dalam 1-2 jam dengan harga ramah kantong mahasiswa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Kenapa Pilih Layanan Panggil Cepat?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Respon Cepat</h4>
                    <p className="text-cyan-100">Tukang datang dalam 1-2 jam setelah panggilan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Jangkauan Luas</h4>
                    <p className="text-cyan-100">Melayani area kosan dan apartemen di seluruh kota</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Harga Terjangkau</h4>
                    <p className="text-cyan-100">Mulai dari Rp 35.000 untuk perbaikan ringan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-4">Layanan Yang Kami Tangani:</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Ganti Lampu",
                  "Pasang Gorden",
                  "Ganti Kunci",
                  "Perbaiki Pintu",
                  "Pasang Rak",
                  "Benerin Keran",
                  "Pasang Stop Kontak",
                  "Dan lainnya"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Form Panggilan Cepat</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent text-gray-900"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="08123456789"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Kosan / Lokasi
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="Jl. Contoh No. 123"
                  />
                </div>
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                    Masalah / Kebutuhan
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none text-gray-900"
                    placeholder="Ceritakan masalah yang perlu diperbaiki..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 font-bold text-lg"
                >
                  <Phone className="h-5 w-5" />
                  Hubungi via WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500">
                  * Anda akan diarahkan ke WhatsApp untuk konfirmasi
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1-2 Jam</div>
              <div className="text-cyan-900">Waktu Kedatangan</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-cyan-900">Siap Melayani</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-cyan-900">Anak Kos Terlayani</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-cyan-900">Rating Pelanggan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}