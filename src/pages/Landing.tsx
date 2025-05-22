
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarClock, Heart, Pill, ShieldCheck, Users } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Pill className="h-8 w-8 text-imo-500" />
              <span className="ml-2 text-xl font-bold text-imo-700">IMO MANTAP</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate('/login')}>Masuk</Button>
              <Button onClick={() => navigate('/register')}>Daftar</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-imo-500 to-imo-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                IMO MANTAP: Ingat Minum Obat untuk Hipertensi
              </h1>
              <p className="text-xl md:text-2xl">
                Tingkatkan kepatuhan minum obat hipertensi dengan sistem pengingat dan monitoring yang komprehensif.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate('/register')} className="bg-white text-imo-700 hover:bg-gray-100">
                  Mulai Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 bg-white/10 rounded-full absolute animate-pulse-soft"></div>
                <div className="w-80 h-80 relative z-10 flex items-center justify-center">
                  <Pill className="h-40 w-40 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fitur Utama</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              IMO MANTAP menawarkan sistem komprehensif untuk meningkatkan kepatuhan minum obat hipertensi
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-imo-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <CalendarClock className="h-6 w-6 text-imo-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pengingat Obat</h3>
              <p className="text-gray-600">
                Sistem pengingat otomatis dan terjadwal untuk memastikan Anda tidak melewatkan jadwal minum obat.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-imo-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-imo-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoring Kesehatan</h3>
              <p className="text-gray-600">
                Pantau tekanan darah dan kondisi kesehatan secara rutin untuk memahami perkembangan pengobatan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-imo-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-imo-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Dukungan Perawat</h3>
              <p className="text-gray-600">
                Perawat profesional memantau kepatuhan dan memberikan dukungan untuk keberhasilan pengobatan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="rounded-full bg-imo-50 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-imo-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analisis Kepatuhan</h3>
              <p className="text-gray-600">
                Laporan dan analisis kepatuhan minum obat untuk membantu dokter mengoptimalkan pengobatan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cara Kerja</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              IMO MANTAP menghubungkan pasien, perawat, dan admin dalam satu sistem terintegrasi
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-imo-100 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-imo-700 mb-2">1. Pendaftaran Pasien</h3>
                    <p className="text-gray-600">
                      Pasien mendaftar dan memberikan informasi kesehatan dasar mereka tentang kondisi hipertensi.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-start md:justify-center">
                  <div className="bg-imo-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center mb-12">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-imo-700 mb-2">2. Pengaturan Jadwal</h3>
                    <p className="text-gray-600">
                      Perawat mengatur jadwal pengobatan berdasarkan resep dokter dan kondisi pasien.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12 flex justify-end md:justify-center">
                  <div className="bg-imo-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-imo-700 mb-2">3. Pengingat Otomatis</h3>
                    <p className="text-gray-600">
                      Sistem mengirimkan pengingat kepada pasien sesuai jadwal untuk minum obat mereka.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 flex justify-start md:justify-center">
                  <div className="bg-imo-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse items-center">
                <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0">
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-semibold text-imo-700 mb-2">4. Pemantauan dan Analisis</h3>
                    <p className="text-gray-600">
                      Perawat dan admin memantau kepatuhan dan memberikan dukungan proaktif kepada pasien.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pr-12 flex justify-end md:justify-center">
                  <div className="bg-imo-500 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-imo-500 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan IMO MANTAP Sekarang</h2>
            <p className="text-xl mb-8">
              Tingkatkan kepatuhan minum obat dan kendalikan tekanan darah Anda dengan lebih baik
            </p>
            <Button size="lg" onClick={() => navigate('/register')} className="bg-white text-imo-700 hover:bg-gray-100">
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Pill className="h-6 w-6 text-imo-500" />
                <span className="ml-2 text-xl font-bold">IMO MANTAP</span>
              </div>
              <p className="text-gray-400 mb-4">
                Sistem Pengingat dan Monitoring Kepatuhan Minum Obat Hipertensi
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Tautan</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Beranda</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tentang Kami</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Fitur</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kontak</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Jl. Kesehatan No. 123, Jakarta</li>
                <li>info@imomantap.id</li>
                <li>+62 21 1234 5678</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IMO MANTAP. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
