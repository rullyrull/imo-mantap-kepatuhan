
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { PillBottle, Plus, Clock, Search, Calendar, AlertCircle } from 'lucide-react';

const PerawatPengobatan = () => {
  // Dummy data
  const daftarObat = [
    { id: 1, nama: 'Amlodipine', jenisObat: 'Antihipertensi', dosis: '5mg, 10mg', stok: 120 },
    { id: 2, nama: 'Metformin', jenisObat: 'Antidiabetes', dosis: '500mg, 850mg', stok: 85 },
    { id: 3, nama: 'Losartan', jenisObat: 'Antihipertensi', dosis: '25mg, 50mg', stok: 60 },
    { id: 4, nama: 'Atorvastatin', jenisObat: 'Antilipid', dosis: '10mg, 20mg', stok: 75 },
    { id: 5, nama: 'Ramipril', jenisObat: 'Antihipertensi', dosis: '2.5mg, 5mg', stok: 40 },
  ];
  
  const jadwalPemberian = [
    { 
      id: 1, 
      pasien: 'Budi Santoso', 
      obat: 'Amlodipine 10mg', 
      waktu: '07:00', 
      tanggal: '22 Mei 2025',
      status: 'selesai'
    },
    { 
      id: 2, 
      pasien: 'Siti Aminah', 
      obat: 'Metformin 500mg', 
      waktu: '08:00', 
      tanggal: '22 Mei 2025',
      status: 'selesai'
    },
    { 
      id: 3, 
      pasien: 'Joko Widodo', 
      obat: 'Losartan 50mg', 
      waktu: '12:00', 
      tanggal: '22 Mei 2025',
      status: 'terjadwal'
    },
    { 
      id: 4, 
      pasien: 'Sri Mulyani', 
      obat: 'Atorvastatin 20mg', 
      waktu: '19:00', 
      tanggal: '22 Mei 2025',
      status: 'terjadwal'
    },
    { 
      id: 5, 
      pasien: 'Ahmad Dahlan', 
      obat: 'Ramipril 5mg', 
      waktu: '20:00', 
      tanggal: '22 Mei 2025',
      status: 'terjadwal'
    },
  ];

  return (
    <Layout role="perawat" title="Pengobatan">
      <Tabs defaultValue="jadwal" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <TabsList>
            <TabsTrigger value="jadwal">Jadwal Pemberian</TabsTrigger>
            <TabsTrigger value="obat">Daftar Obat</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Cari..." className="pl-10" />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-1" />
              Tambah Baru
            </Button>
          </div>
        </div>
        
        <TabsContent value="jadwal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Jadwal Pemberian Obat
              </CardTitle>
              <CardDescription>
                {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jadwalPemberian.map((jadwal) => (
                  <div key={jadwal.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div>
                      <div className="font-medium">{jadwal.pasien}</div>
                      <div className="flex items-center text-sm mt-1">
                        <PillBottle className="h-4 w-4 mr-1 text-imo-500" />
                        <span>{jadwal.obat}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{jadwal.waktu}</span>
                        <Calendar className="h-3 w-3 ml-2 mr-1" />
                        <span>{jadwal.tanggal}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Badge className={`mr-3 ${
                        jadwal.status === 'selesai' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {jadwal.status === 'selesai' ? 'Selesai' : 'Terjadwal'}
                      </Badge>
                      <Button variant="outline" size="sm" disabled={jadwal.status === 'selesai'}>
                        {jadwal.status === 'selesai' ? 'Sudah Diberikan' : 'Tandai Selesai'}
                      </Button>
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
                <PillBottle className="h-5 w-5 mr-2" />
                Daftar Obat
              </CardTitle>
              <CardDescription>
                Inventaris obat dan monitoring stok
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {daftarObat.map((obat) => (
                  <div key={obat.id} className="flex flex-col sm:flex-row sm:items-center justify-between border rounded-lg p-4">
                    <div>
                      <h3 className="font-medium">{obat.nama}</h3>
                      <p className="text-sm text-muted-foreground">{obat.jenisObat}</p>
                      <div className="mt-2">
                        <Badge variant="outline">Dosis: {obat.dosis}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-4 sm:mt-0">
                      <div className="mr-4">
                        <div className="text-sm text-muted-foreground">Stok</div>
                        <div className={`font-medium ${
                          obat.stok < 50 ? 'text-red-500' : 
                          obat.stok < 100 ? 'text-amber-500' : 
                          'text-green-500'
                        }`}>
                          {obat.stok} unit
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Update Stok
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Peringatan Stok
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 bg-amber-50">
                <h3 className="font-medium text-amber-800 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Obat dengan stok rendah
                </h3>
                <ul className="mt-2 space-y-2">
                  <li className="text-sm flex justify-between">
                    <span>Ramipril (5mg)</span>
                    <span className="font-medium text-red-500">40 unit</span>
                  </li>
                  <li className="text-sm flex justify-between">
                    <span>Losartan (50mg)</span>
                    <span className="font-medium text-amber-500">60 unit</span>
                  </li>
                </ul>
                <Button className="w-full mt-4" size="sm">
                  Restock Obat
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default PerawatPengobatan;
