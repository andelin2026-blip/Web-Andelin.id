import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Paket Mahasiswa",
    subtitle: "Untuk Anak Kos",
    price: "20K",
    description: "Solusi hemat untuk perbaikan ringan di kosan",
    features: [
      "Tukang serabutan handal",
      "Perbaikan ringan & cepat",
      "Ganti lampu, kunci, keran",
      "Pasang gorden & rak",
      "Respon 1-2 jam",
      "Harga pas kantong mahasiswa",
    ],
    color: "bg-blue-900",
    popular: true,
  },
  {
    name: "Paket Keluarga Kecil",
    subtitle: "Untuk Rumah Tangga",
    price: "75K",
    description: "Perawatan rutin rumah dengan harga terjangkau",
    features: [
      "Semua jenis tukang tersedia",
      "Perbaikan medium kompleksitas",
      "Service AC & elektronik",
      "Garansi hasil pekerjaan",
      "Konsultasi gratis",
      "Bisa booking jadwal",
    ],
    color: "bg-cyan-600",
    popular: false,
  },
  {
    name: "Paket Premium",
    subtitle: "Untuk Keluarga Mampu",
    price: "150K+",
    description: "Layanan lengkap dengan prioritas tinggi",
    features: [
      "Tukang ahli berpengalaman",
      "Proyek renovasi & pembangunan",
      "Material berkualitas tinggi",
      "Prioritas jadwal & respon",
      "Garansi 6 bulan",
      "Project manager dedicated",
    ],
    color: "bg-slate-900",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Harga Untuk Semua Kalangan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dari mahasiswa sampai keluarga, kami punya paket yang sesuai dengan kebutuhan dan budget Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                tier.popular ? "ring-4 ring-blue-900 transform scale-105" : ""
              } transition-all hover:shadow-2xl`}
            >
              {tier.popular && (
                <div className="bg-blue-900 text-white text-center py-2 font-bold text-sm">
                  PALING POPULER
                </div>
              )}
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.subtitle}</p>
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-gray-600 text-lg">Mulai</span>
                    <span className={`text-5xl font-bold ${tier.color.replace('bg-', 'text-')}`}>
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`${tier.color} p-1 rounded-full flex-shrink-0 mt-0.5`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const element = document.getElementById("quick-help");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={`w-full ${tier.color} text-white py-3 rounded-lg hover:opacity-90 transition-opacity font-bold`}
                >
                  Pilih Paket Ini
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-8 shadow-md">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Transparansi Harga
            </h3>
            <p className="text-gray-600">
              Tidak ada biaya tersembunyi! Semua harga sudah termasuk:
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-cyan-600 p-4 rounded-full mb-3">
                <Check className="h-8 w-8 text-cyan-100" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Biaya Tukang</h4>
              <p className="text-sm text-gray-600">Upah kerja profesional</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-cyan-600 p-4 rounded-full mb-3">
                <Check className="h-8 w-8 text-cyan-100" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Transport</h4>
              <p className="text-sm text-gray-600">Ongkos datang ke lokasi</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-cyan-600 p-4 rounded-full mb-3">
                <Check className="h-8 w-8 text-cyan-100" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Peralatan</h4>
              <p className="text-sm text-gray-600">Tools standar kerja</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-cyan-600 p-4 rounded-full mb-3">
                <Check className="h-8 w-8 text-cyan-100" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Konsultasi</h4>
              <p className="text-sm text-gray-600">Saran & solusi gratis</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            * Material/bahan bangunan dikenakan biaya terpisah sesuai kebutuhan
          </p>
        </div>
      </div>
    </section>
  );
}
