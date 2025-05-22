
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, AlertTriangle, LineChart, Calendar, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PerawatKepatuhan = () => {
  // Dummy data
  const pasienKepatuhan = [
    { 
      id: 1, 
      nama: 'Budi Santoso', 
      usia: 65, 
      kepatuhan: 45, 
      kepatuhanMingguIni: [40, 45, 50, 45, 45],
      riwayat: 'Terjadi penurunan kepatuhan dalam 2 minggu terakhir'
    },
    { 
      id: 2, 
      nama: 'Siti Aminah', 
      usia: 58, 
      kepatuhan: 60, 
      kepatuhanMingguIni: [55, 60, 65, 55, 60],
      riwayat: 'Kepatuhan fluktuatif namun cenderung stabil'
    },
    { 
      id: 3, 
      nama: 'Joko Widodo', 
      usia: 52, 
      kepatuhan: 89, 
      kepatuhanMingguIni: [85, 90, 90, 85, 89],
      riwayat: 'Kepatuhan baik dan stabil'
    },
  ];
  
  const ringkasanKepatuhan = {
    tinggi: { jumlah: 18, persentase: 51.4 },
    sedang: { jumlah: 12, persentase: 34.3 },
    rendah: { jumlah: 5, persentase: 14.3 },
    total: 35
  };
  
  const tindakanKepatuhan = [
    { 
      id: 1, 
      tanggal: '20 Mei 2025', 
      pasien: 'Budi Santoso',
      tindakan: 'Menghubungi via telepon untuk mengingatkan jadwal minum obat',
      status: 'Selesai',
    },
    { 
      id: 2, 
      tanggal: '19 Mei 2025', 
      pasien: 'Siti Aminah',
      tindakan: 'Mengatur ulang jadwal pengingat dengan interval lebih singkat',
      status: 'Selesai',
    },
    { 
      id: 3, 
      tanggal: '18 Mei 2025', 
      pasien: 'Budi Santoso',
      tindakan: 'Konsultasi tentang efek samping yang dirasakan',
      status: 'Selesai',
    }
  ];

  return (
    <Layout role="perawat" title="Kepatuhan">
      <div className="space-y-6">
        {/* Ringkasan Kepatuhan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-500" />
              Ringkasan Kepatuhan
            </CardTitle>
            <CardDescription>
              Ringkasan kepatuhan minum obat seluruh pasien
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Kepatuhan Tinggi (&gt;80%)</div>
                <div className="text-2xl font-bold">{ringkasanKepatuhan.tinggi.jumlah} <span className="text-sm font-normal text-muted-foreground">pasien</span></div>
                <div className="text-sm text-green-500">{ringkasanKepatuhan.tinggi.persentase}% dari total</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Kepatuhan Sedang (50-80%)</div>
                <div className="text-2xl font-bold">{ringkasanKepatuhan.sedang.jumlah} <span className="text-sm font-normal text-muted-foreground">pasien</span></div>
                <div className="text-sm text-amber-500">{ringkasanKepatuhan.sedang.persentase}% dari total</div>
              </div>
              <div className="border rounded-lg p-4">
                <div className="text-sm text-muted-foreground mb-1">Kepatuhan Rendah (&lt;50%)</div>
                <div className="text-2xl font-bold">{ringkasanKepatuhan.rendah.jumlah} <span className="text-sm font-normal text-muted-foreground">pasien</span></div>
                <div className="text-sm text-red-500">{ringkasanKepatuhan.rendah.persentase}% dari total</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Kepatuhan Tinggi (&gt;80%)</span>
                  <span className="font-medium text-green-500">{ringkasanKepatuhan.tinggi.persentase}%</span>
                </div>
                <Progress value={ringkasanKepatuhan.tinggi.persentase} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Kepatuhan Sedang (50-80%)</span>
                  <span className="font-medium text-amber-500">{ringkasanKepatuhan.sedang.persentase}%</span>
                </div>
                <Progress value={ringkasanKepatuhan.sedang.persentase} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Kepatuhan Rendah (&lt;50%)</span>
                  <span className="font-medium text-red-500">{ringkasanKepatuhan.rendah.persentase}%</span>
                </div>
                <Progress value={ringkasanKepatuhan.rendah.persentase} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pasien dengan Kepatuhan Rendah */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
              Pasien dengan Kepatuhan Rendah
            </CardTitle>
            <CardDescription>
              Pasien yang membutuhkan perhatian khusus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="rendah">
              <TabsList className="mb-4">
                <TabsTrigger value="rendah">Kepatuhan Rendah</TabsTrigger>
                <TabsTrigger value="tindakan">Riwayat Tindakan</TabsTrigger>
              </TabsList>
              
              <TabsContent value="rendah">
                <div className="space-y-6">
                  {pasienKepatuhan.filter(p => p.kepatuhan < 70).map((pasien) => (
                    <div key={pasien.id} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                            <User className="h-5 w-5 text-slate-400" />
                          </div>
                          <div>
                            <h3 className="font-medium">{pasien.nama}</h3>
                            <p className="text-sm text-muted-foreground">
                              {pasien.usia} tahun | ID: P-{1000 + pasien.id}
                            </p>
                            <p className="text-sm mt-1">{pasien.riwayat}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 md:mt-0 md:text-right">
                          <div className="text-sm text-muted-foreground">Tingkat Kepatuhan</div>
                          <div className={`text-lg font-bold ${
                            pasien.kepatuhan < 50 ? 'text-red-500' : 'text-amber-500'
                          }`}>
                            {pasien.kepatuhan}%
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm font-medium mb-2">Kepatuhan 5 Hari Terakhir</div>
                        <div className="h-[100px] flex items-center justify-center border rounded bg-slate-50">
                          <LineChart className="h-6 w-6 text-muted-foreground mr-2" />
                          <span className="text-sm text-muted-foreground">Grafik kepatuhan</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button size="sm">Hubungi Pasien</Button>
                        <Button size="sm" variant="outline">Sesuaikan Pengingat</Button>
                        <Button size="sm" variant="outline">Lihat Detail</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tindakan">
                <div className="space-y-4">
                  {tindakanKepatuhan.map((tindakan) => (
                    <div key={tindakan.id} className="border rounded-lg p-4">
                      <div className="flex justify-between">
                        <div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{tindakan.tanggal}</span>
                          </div>
                          <h3 className="font-medium mt-1">{tindakan.pasien}</h3>
                          <p className="mt-1">{tindakan.tindakan}</p>
                        </div>
                        <Badge className="h-fit bg-green-100 text-green-800">
                          {tindakan.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  
                  <Button variant="outline" className="w-full">
                    Lihat Semua Tindakan
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="h-auto flex-col py-4 gap-2" variant="outline">
            <LineChart className="h-5 w-5" />
            <span>Laporan Kepatuhan</span>
          </Button>
          <Button className="h-auto flex-col py-4 gap-2" variant="outline">
            <AlertTriangle className="h-5 w-5" />
            <span>Tandai Pasien Risiko</span>
          </Button>
          <Button className="h-auto flex-col py-4 gap-2" variant="outline">
            <Heart className="h-5 w-5" />
            <span>Program Peningkatan</span>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PerawatKepatuhan;
