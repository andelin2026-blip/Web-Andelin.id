import { Award, Users, Target, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Klien Puas" },
  { icon: Award, value: "15+", label: "Tahun Pengalaman" },
  { icon: Target, value: "5000+", label: "Pekerjaan Selesai" },
  { icon: Zap, value: "99%", label: "Tingkat Kepuasan" },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tentang Andelin.id
            </h2>
            <p className="text-lg text-cyan-600 mb-6">
              Halo Sahabat! Andelin.id adalah platform penyedia jasa tukang
             berpengalaman yang memahami kebutuhan semua kalangan
              - dari mahasiswa anak kos hingga keluarga. Kami
              hadir dengan harga yang terjangkau tanpa
              mengurangi kualitas kerja.
            </p>
            <p className="text-lg text-cyan-600 mb-6">
              Kami berkomitmen memberikan solusi perbaikan dan
              bantuan dengan harga transparan. Khusus untuk
              anak kos, layanan tukang serabutan kami mulai dari
              Rp 35.000 saja!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Tukang Berpengalaman & Terlatih
                  </h4>
                  <p className="text-gray-600">
                    Semua tukang kami memiliki pengalaman dan terjamin kualitasnya
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-cyan-100 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Harga Transparan & Terjangkau
                  </h4>
                  <p className="text-gray-600">
                   Harga jelas sesuai di kantong
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <stat.icon className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}