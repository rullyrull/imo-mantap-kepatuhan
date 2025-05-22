
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Bell, Heart, LineChart, Users, CheckCircle, User } from 'lucide-react';

const PerawatDashboard = () => {
  // Dummy data
  const pasienRisiko = [
    { id: 1, nama: 'Budi Santoso', usia: 65, kepatuhan: 45, tekananDarah: '160/95' },
    { id: 2, nama: 'Siti Aminah', usia: 58, kepatuhan: 60, tekananDarah: '150/90' },
  ];
  
  const pasienTerbaru = [
    { id: 3, nama: 'Joko Widodo', usia: 52, tanggal: '20 Mei 2025' },
    { id: 4, nama: 'Sri Mulyani', usia: 47, tanggal: '19 Mei 2025' },
    { id: 5, nama: 'Ahmad Dahlan', usia: 60, tanggal: '18 Mei 2025' },
  ];
  
  const rekapKepatuhan = {
    tinggi: 18,
    sedang: 12,
    rendah: 5,
    total: 35
  };

  return (
    <Layout role="perawat" title="Dashboard Perawat">
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pasien
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-imo-500 mr-2" />
                <div className="text-2xl font-bold">35</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                +3 pasien baru minggu ini
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Kepatuhan Rata-rata
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <div className="text-2xl font-bold">78%</div>
              </div>
              <Progress value={78} className="h-1 mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pasien Berisiko
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                <div className="text-2xl font-bold">5</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Memerlukan perhatian khusus
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Pengingat Hari Ini
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Bell className="h-5 w-5 text-imo-500 mr-2" />
                <div className="text-2xl font-bold">12</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                3 menunggu konfirmasi
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Patients at Risk */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Pasien Berisiko</CardTitle>
              <CardDescription>
                Pasien dengan kepatuhan rendah dan tekanan darah tinggi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pasienRisiko.map((pasien) => (
                  <div key={pasien.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold">{pasien.nama}</h4>
                          <Badge variant="destructive" className="ml-2">Risiko Tinggi</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Usia: {pasien.usia} tahun | ID: P-{1000 + pasien.id}
                        </p>
                      </div>
                      <Button size="sm">Lihat Detail</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">Kepatuhan Minum Obat</span>
                          <span className="text-sm font-medium">{pasien.kepatuhan}%</span>
                        </div>
                        <Progress value={pasien.kepatuhan} className={`h-2 ${pasien.kepatuhan < 50 ? 'bg-red-100' : 'bg-amber-100'}`} />
                      </div>
                      <div>
                        <div className="text-sm mb-1">Tekanan Darah Terakhir</div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 text-red-500 mr-1" />
                          <span className="font-medium">{pasien.tekananDarah} mmHg</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" variant="outline">Hubungi Pasien</Button>
                      <Button size="sm" variant="outline">Atur Pengingat</Button>
                      <Button size="sm" variant="outline">Catat Evaluasi</Button>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  Lihat Semua Pasien Berisiko
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Column - New Patients and Compliance Overview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Pasien Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pasienTerbaru.map((pasien) => (
                    <div key={pasien.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                          <User className="h-4 w-4 text-slate-500" />
                        </div>
                        <div>
                          <div className="font-medium">{pasien.nama}</div>
                          <div className="text-sm text-muted-foreground">
                            {pasien.usia} tahun | {pasien.tanggal}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <span className="sr-only">Lihat profil</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4">
                  Lihat Semua Pasien
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rekap Kepatuhan</CardTitle>
                <CardDescription>
                  Overview kepatuhan minum obat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Kepatuhan Tinggi (>80%)</span>
                      <span className="font-medium">{rekapKepatuhan.tinggi}</span>
                    </div>
                    <Progress value={(rekapKepatuhan.tinggi / rekapKepatuhan.total) * 100} className="h-2 bg-slate-100" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Kepatuhan Sedang (50-80%)</span>
                      <span className="font-medium">{rekapKepatuhan.sedang}</span>
                    </div>
                    <Progress value={(rekapKepatuhan.sedang / rekapKepatuhan.total) * 100} className="h-2 bg-slate-100" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Kepatuhan Rendah (<50%)</span>
                      <span className="font-medium">{rekapKepatuhan.rendah}</span>
                    </div>
                    <Progress value={(rekapKepatuhan.rendah / rekapKepatuhan.total) * 100} className="h-2 bg-slate-100" />
                  </div>
                </div>
                <div className="h-[120px] mt-4 flex items-center justify-center text-muted-foreground">
                  <LineChart className="h-6 w-6 mr-2" />
                  <span>Grafik kepatuhan</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Aksi Cepat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                <Users className="h-5 w-5" />
                <span className="text-xs">Daftar Pasien</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                <Bell className="h-5 w-5" />
                <span className="text-xs">Pengingat</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                <LineChart className="h-5 w-5" />
                <span className="text-xs">Laporan</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                <AlertTriangle className="h-5 w-5" />
                <span className="text-xs">Risiko</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                <Heart className="h-5 w-5" />
                <span className="text-xs">Data Tekanan</span>
              </Button>
              <Button variant="outline" className="h-auto flex-col py-4 gap-2">
                <User className="h-5 w-5" />
                <span className="text-xs">Profil</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PerawatDashboard;
