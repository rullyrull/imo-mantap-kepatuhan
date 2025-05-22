
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PillBottle, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PasienJadwal = () => {
  // Dummy data
  const jadwalObat = [
    { id: 1, nama: 'Amlodipine', dosis: '10mg', waktu: '07:00', status: 'selesai' },
    { id: 2, nama: 'Ramipril', dosis: '5mg', waktu: '12:00', status: 'aktif' },
    { id: 3, nama: 'Losartan', dosis: '50mg', waktu: '19:00', status: 'aktif' },
    { id: 4, nama: 'Metformin', dosis: '500mg', waktu: '08:00', status: 'selesai' },
    { id: 5, nama: 'Atorvastatin', dosis: '20mg', waktu: '20:00', status: 'aktif' },
  ];

  return (
    <Layout role="pasien" title="Jadwal Obat">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Jadwal Obat Hari Ini
            </CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {jadwalObat.map((obat) => (
                <div key={obat.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full ${obat.status === 'selesai' ? 'bg-green-100' : 'bg-amber-100'}`}>
                      {obat.status === 'selesai' ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <Clock className="h-5 w-5 text-amber-500" />
                      )}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h4 className="font-medium">{obat.nama}</h4>
                        <span className="ml-2 text-sm text-muted-foreground">{obat.dosis}</span>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {obat.waktu}
                      </p>
                    </div>
                  </div>
                  {obat.status === 'aktif' && (
                    <Button size="sm">
                      Tandai Selesai
                    </Button>
                  )}
                  {obat.status === 'selesai' && (
                    <span className="text-sm text-green-500 font-medium">Selesai</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PillBottle className="mr-2 h-5 w-5" />
              Ringkasan Obat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Penggunaan Obat</h3>
                <div className="flex justify-between text-sm">
                  <span>Total jenis obat:</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total dosis per hari:</span>
                  <span className="font-medium">8</span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Kepatuhan</h3>
                <div className="flex justify-between text-sm">
                  <span>Minggu ini:</span>
                  <span className="font-medium text-green-500">96%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Bulan ini:</span>
                  <span className="font-medium text-green-500">92%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Informasi Penting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pastikan minum obat tepat waktu sesuai jadwal</li>
              <li>Konsumsi obat dengan air putih</li>
              <li>Jangan mengubah dosis tanpa konsultasi dengan dokter</li>
              <li>Laporkan efek samping yang dialami kepada perawat atau dokter</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PasienJadwal;
