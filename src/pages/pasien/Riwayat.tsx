
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Heart, ArrowUp, ArrowDown, LineChart, Pill } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PasienRiwayat = () => {
  // Dummy data
  const riwayatTekanan = [
    { tanggal: '22 Mei 2025', sistol: 130, diastol: 82, catatan: 'Setelah olahraga pagi' },
    { tanggal: '21 Mei 2025', sistol: 132, diastol: 84, catatan: 'Sebelum sarapan' },
    { tanggal: '20 Mei 2025', sistol: 135, diastol: 85, catatan: 'Setelah minum obat' },
    { tanggal: '19 Mei 2025', sistol: 138, diastol: 88, catatan: 'Sebelum tidur' },
    { tanggal: '18 Mei 2025', sistol: 140, diastol: 90, catatan: 'Setelah aktivitas' },
  ];

  const riwayatObat = [
    { tanggal: '22 Mei 2025', nama: 'Amlodipine 10mg', status: 'Tepat waktu', waktu: '07:05' },
    { tanggal: '22 Mei 2025', nama: 'Metformin 500mg', status: 'Tepat waktu', waktu: '08:00' },
    { tanggal: '21 Mei 2025', nama: 'Amlodipine 10mg', status: 'Tepat waktu', waktu: '07:00' },
    { tanggal: '21 Mei 2025', nama: 'Metformin 500mg', status: 'Terlambat', waktu: '08:45' },
    { tanggal: '20 Mei 2025', nama: 'Amlodipine 10mg', status: 'Tepat waktu', waktu: '07:10' },
  ];

  return (
    <Layout role="pasien" title="Riwayat Kesehatan">
      <div className="space-y-6">
        <Tabs defaultValue="tekanan">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Riwayat Kesehatan</h2>
            <TabsList>
              <TabsTrigger value="tekanan">Tekanan Darah</TabsTrigger>
              <TabsTrigger value="obat">Pengobatan</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="tekanan">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-red-500" />
                  Riwayat Tekanan Darah
                </CardTitle>
                <CardDescription>
                  Catatan tekanan darah 5 hari terakhir
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center mb-6 border rounded-lg bg-slate-50">
                  <LineChart className="h-8 w-8 text-muted-foreground mr-2" />
                  <span className="text-muted-foreground">Grafik tekanan darah</span>
                </div>
                
                <div className="space-y-4">
                  {riwayatTekanan.map((item, index) => (
                    <div key={index} className="flex justify-between border-b pb-3 last:border-0">
                      <div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="font-medium">{item.tanggal}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.catatan}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end">
                          <ArrowUp className="h-4 w-4 text-red-500 mr-1" />
                          <span className="font-medium">{item.sistol}</span>
                          <span className="text-sm text-muted-foreground ml-1">mmHg</span>
                        </div>
                        <div className="flex items-center justify-end mt-1">
                          <ArrowDown className="h-4 w-4 text-blue-500 mr-1" />
                          <span className="font-medium">{item.diastol}</span>
                          <span className="text-sm text-muted-foreground ml-1">mmHg</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="obat">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Pill className="mr-2 h-5 w-5" />
                  Riwayat Pengobatan
                </CardTitle>
                <CardDescription>
                  Catatan konsumsi obat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riwayatObat.map((item, index) => (
                    <div key={index} className="flex justify-between border-b pb-3 last:border-0">
                      <div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span className="font-medium">{item.tanggal}</span>
                        </div>
                        <p className="font-medium mt-1">{item.nama}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          item.status === 'Tepat waktu' ? 'text-green-500' : 'text-amber-500'
                        }`}>
                          {item.status}
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {item.waktu}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PasienRiwayat;
