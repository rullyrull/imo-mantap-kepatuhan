
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CalendarClock, Heart, Clock, Pill, Plus, LineChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const PasienDashboard = () => {
  const navigate = useNavigate();
  
  // Dummy data
  const kepatuhan = 85;
  const [obatHariIni, setObatHariIni] = useState([
    { id: 1, nama: 'Amlodipine', dosis: '10mg', waktu: '07:00', status: 'done' },
    { id: 2, nama: 'Ramipril', dosis: '5mg', waktu: '12:00', status: 'upcoming' },
    { id: 3, nama: 'Losartan', dosis: '50mg', waktu: '19:00', status: 'upcoming' },
  ]);
  
  const tekananDarah = [
    { tanggal: '18 Mei', sistol: 140, diastol: 90 },
    { tanggal: '19 Mei', sistol: 138, diastol: 88 },
    { tanggal: '20 Mei', sistol: 135, diastol: 85 },
    { tanggal: '21 Mei', sistol: 132, diastol: 84 },
    { tanggal: '22 Mei', sistol: 130, diastol: 82 },
  ];

  const handleObatSelesai = (id: number) => {
    setObatHariIni(obatHariIni.map(obat => 
      obat.id === id ? { ...obat, status: 'done' } : obat
    ));
    toast.success('Obat berhasil ditandai sebagai selesai');
  };

  const handleAction = (action: string) => {
    toast.success(`Aksi "${action}" berhasil dilakukan`);
    
    // Navigate to appropriate pages based on action
    if (action === "Jadwal Konsultasi") {
      navigate('/pasien/jadwal');
    } else if (action === "Tambah Pengingat") {
      navigate('/pasien/pengingat');
    } else if (action === "Laporan Kesehatan") {
      navigate('/pasien/riwayat');
    }
  };

  return (
    <Layout role="pasien" title="Dashboard Pasien">
      <div className="space-y-6">
        {/* Welcome and Overview */}
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="flex-1">
            <CardHeader className="pb-3">
              <CardTitle>Selamat Datang, Budi</CardTitle>
              <CardDescription>
                Terakhir login: 22 Mei 2025, 08:30 WIB
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Kepatuhan Minum Obat</span>
                    <span className="text-sm font-medium">{kepatuhan}%</span>
                  </div>
                  <Progress value={kepatuhan} className="h-2" />
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => navigate('/pasien/jadwal')} size="sm" variant="outline" className="flex-1">
                    <Clock className="mr-1 h-4 w-4" /> Jadwal Obat
                  </Button>
                  <Button onClick={() => navigate('/pasien/riwayat')} size="sm" variant="outline" className="flex-1">
                    <Heart className="mr-1 h-4 w-4" /> Riwayat Tekanan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader className="pb-3">
              <CardTitle>Jadwal Pengobatan Hari Ini</CardTitle>
              <CardDescription>
                {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {obatHariIni.map((obat) => (
                  <div key={obat.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        obat.status === 'done' ? 'bg-green-500' : 'bg-amber-500'
                      }`} />
                      <div>
                        <div className="font-medium">{obat.nama} {obat.dosis}</div>
                        <div className="text-sm text-gray-500">
                          <Clock className="inline h-3 w-3 mr-1" />{obat.waktu}
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant={obat.status === 'done' ? "ghost" : "outline"} 
                      size="sm"
                      disabled={obat.status === 'done'}
                      onClick={() => handleObatSelesai(obat.id)}
                    >
                      {obat.status === 'done' ? 'Selesai' : 'Tandai'}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Additional Data */}
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Tekanan Darah (5 Hari Terakhir)</CardTitle>
              <CardDescription>
                Pantau perkembangan tekanan darah Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[250px]">
              <div className="h-full flex items-center justify-center">
                <LineChart className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground ml-2">Grafik tekanan darah</p>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Catatan Kesehatan</span>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="h-8 w-8 p-0"
                  onClick={() => toast.success('Catatan kesehatan baru ditambahkan')}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="text-sm text-muted-foreground">19 Mei 2025</div>
                  <div className="mt-1">Merasa sedikit pusing di pagi hari, tekanan darah 138/88</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="text-sm text-muted-foreground">17 Mei 2025</div>
                  <div className="mt-1">Hari ini merasa lebih baik. Telah berjalan kaki selama 30 menit.</div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => navigate('/pasien/riwayat')}
                >
                  Lihat Semua Catatan
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button 
                variant="outline" 
                className="h-auto flex-col p-4 gap-2"
                onClick={() => handleAction('Jadwal Konsultasi')}
              >
                <CalendarClock className="h-6 w-6" />
                <span>Jadwal Konsultasi</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto flex-col p-4 gap-2"
                onClick={() => handleAction('Tambah Pengingat')}
              >
                <Pill className="h-6 w-6" />
                <span>Tambah Pengingat</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto flex-col p-4 gap-2" 
                onClick={() => handleAction('Catat Tekanan Darah')}
              >
                <Heart className="h-6 w-6" />
                <span>Catat Tekanan Darah</span>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto flex-col p-4 gap-2"
                onClick={() => handleAction('Laporan Kesehatan')}
              >
                <LineChart className="h-6 w-6" />
                <span>Laporan Kesehatan</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PasienDashboard;
