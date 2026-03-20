import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    alert("Terima kasih! Pesan Anda telah diterima. Tim kami akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solusi Sepat, Andalan Sahabat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hubungi kami segera! #Andelin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informasi Kontak
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-cyan-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Telepon / WhatsApp</h4>
                  <p className="text-gray-600">+62 85179979257</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-cyan-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Lidah Wetan <br />
                   Surabaya, Jawa Timur<br />
                    Indonesia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-cyan-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-cyan-900" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">andelin2026@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-cyan-100 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Jam Operasional</h4>
              <div className="space-y-2 text-gray-600">
                <p>Senin - Jumat: 09:00 - 18:00 WIB</p>
                <p>Sabtu-Minggu: 09:00 - 14:00 WIB</p>
                <p>Hari Libur Nasional: Tutup</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@contoh.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+62 8xx-xxxx-xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Ceritakan kebutuhan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors flex items-center justify-center gap-2"
                >
                  Kirim Pesan
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}