import { Facebook, Twitter, Instagram, Mail, Music } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-cyan-100 mb-4">Andelin.id</h3>
            <p className="text-gray-400 mb-4">
              Platform tukang berpengalaman untuk semua - dari mahasiswa hingga keluarga. Harga terjangkau, kualitas terjamin.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/profile.php?id=61577413671703"
                className="bg-gray-800 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/username_kamu"
                className="bg-gray-800 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/andelin.id"
                className="bg-gray-800 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@andelin.id"
                target="_blank"
                className="bg-gray-800 p-2 rounded-lg hover:bg-cyan-600 transition-colors"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#services" className="hover:text-cyan-100 transition-colors">
                  Tukang Listrik
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-100 transition-colors">
                  Tukang Ledeng
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-100 transition-colors">
                  Tukang Kayu
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-100 transition-colors">
                  Service AC
                </a>
              </li>
              <li>
                <a href="#quick-help" className="hover:text-cyan-100 transition-colors">
                  Tukang Serabutan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-cyan-100 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-100 transition-colors">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-100 transition-colors">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-100 transition-colors">
                  Daftar Jadi Mitra Tukang
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Dapatkan promo spesial dan tips perawatan rumah
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white"
              />
              <button className="bg-cyan-600 p-2 rounded-lg hover:bg-blue-900 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Andelin.id - Solusi cepat, Andalan Sahabat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}