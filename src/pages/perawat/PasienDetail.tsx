
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  User, Heart, Pill, Calendar, Clock, Phone, 
  AlertTriangle, CheckCircle, LineChart, Plus
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';

const PerawatPasienDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pasienId = parseInt(id || '0');
  
  // Dummy data - in a real app, you'd fetch this from your backend
  const pasien = {
    id: pasienId,
    nama: pasienId === 1 ? 'Budi Santoso' : 'Siti Aminah',
    usia: pasienId === 1 ? 65 : 58,
    jenisKelamin: pasienId === 1 ? 'Laki-laki' : 'Perempuan',
    alamat: 'Jl. Kesehatan No. 123, Jakarta',
    telepon: '081234567890',
    kondisi: pasienId === 1 ? ['Hipertensi', 'Diabetes'] : ['Hipertensi', 'Kolesterol'],
    kepatuhan: pasienId === 1 ? 45 : 60,
    tekananDarah: pasienId === 1 ? '160/95' : '150/90',
    status: 'berisiko',
    riwayatPengobatan: [
      { tanggal: '22 Mei 2025', obat: 'Amlodipine 10mg', status: 'Selesai' },
      { tanggal: '21 Mei 2025', obat: 'Metformin 500mg', status: 'Selesai' },
      { tanggal: '20 Mei 2025', obat: 'Amlodipine 10mg', status: 'Selesai' },
      { tanggal: '20 Mei 2025', obat: 'Metformin 500mg', status: 'Tidak Diminum' },
    ],
    jadwalObat: [
      { id: 1, nama: 'Amlodipine', dosis: '10mg', waktu: '07:00', hari: 'Setiap hari' },
      { id: 2, nama: 'Metformin', dosis: '500mg', waktu: '08:00', hari: 'Setiap hari' },
    ]
  };

  const handleKembali = () => {
    navigate(-1);
  };

  const handleContact = () => {
    toast.info(`Menghubungi ${pasien.nama} pada nomor ${pasien.telepon}`);
  };

  const handleUpdatePengingat = () => {
    toast.success('Pengingat berhasil diperbarui');
  };

  const handleSetReminder = () => {
    toast.success('Pengingat berhasil ditambahkan');
  };

  const handleAddObat = () => {
    toast.info('Menambahkan obat baru');
  };

  return (
    <Layout role="perawat" title={`Detail Pasien: ${pasien.nama}`}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={handleKembali}>
            Kembali
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleContact}>
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Pasien
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Catat Kepatuhan
            </Button>
          </div>
        </div>

        {/* Profile Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Profil Pasien</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center mb-2">
                  <User className="h-16 w-16 text-slate-400" />
                </div>
                <Badge className={pasien.status === 'berisiko' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                  {pasien.status === 'berisiko' ? 'Risiko Tinggi' : 'Stabil'}
                </Badge>
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{pasien.nama}</h3>
                  <p className="text-muted-foreground">ID: P-{1000 + pasien.id}</p>
                  
                  <div className="mt-4 space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Usia:</span>
                      <span className="ml-2">{pasien.usia} tahun</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Jenis Kelamin:</span>
                      <span className="ml-2">{pasien.jenisKelamin}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Alamat:</span>
                      <span className="ml-2">{pasien.alamat}</span>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Telepon:</span>
                      <span className="ml-2">{pasien.telepon}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-sm font-medium">Kondisi:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {pasien.kondisi.map((kondisi, index) => (
                        <Badge key={index} variant="outline">
                          {kondisi}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Kepatuhan Minum Obat</span>
                      <span className={`font-bold ${
                        pasien.kepatuhan < 60 ? 'text-red-500' : 
                        pasien.kepatuhan < 80 ? 'text-amber-500' : 
                        'text-green-500'
                      }`}>{pasien.kepatuhan}%</span>
                    </div>
                    <Progress 
                      value={pasien.kepatuhan} 
                      className={`h-2 ${
                        pasien.kepatuhan < 50 ? 'bg-red-100' : 
                        pasien.kepatuhan < 80 ? 'bg-amber-100' : 
                        'bg-green-100'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <div className="font-medium mb-1">Tekanan Darah Terakhir</div>
                    <div className="flex items-center">
                      <Heart className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-xl font-bold">{pasien.tekananDarah} mmHg</span>
                    </div>
                    <span className="text-sm text-red-500 font-medium">Di atas batas normal</span>
                    
                    <div className="mt-4">
                      <Button onClick={() => toast.info('Mencatat tekanan darah baru')}>
                        Catat Tekanan Darah
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Jadwal Pengobatan */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Jadwal Pengobatan</CardTitle>
              <CardDescription>Daftar obat yang harus diminum</CardDescription>
            </div>
            <Button size="sm" onClick={handleAddObat}>
              <Plus className="h-4 w-4 mr-1" />
              Tambah Obat
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Obat</TableHead>
                  <TableHead>Dosis</TableHead>
                  <TableHead>Waktu</TableHead>
                  <TableHead>Frekuensi</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pasien.jadwalObat.map((obat) => (
                  <TableRow key={obat.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <Pill className="h-4 w-4 mr-2 text-imo-500" />
                        {obat.nama}
                      </div>
                    </TableCell>
                    <TableCell>{obat.dosis}</TableCell>
                    <TableCell>{obat.waktu}</TableCell>
                    <TableCell>{obat.hari}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost" onClick={handleSetReminder}>
                        <Clock className="h-4 w-4 mr-1" />
                        Atur Pengingat
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-sm text-muted-foreground">Total: {pasien.jadwalObat.length} obat</span>
            <Button variant="outline" onClick={handleUpdatePengingat}>Sesuaikan Semua Pengingat</Button>
          </CardFooter>
        </Card>

        {/* Riwayat Kepatuhan */}
        <Card>
          <CardHeader>
            <CardTitle>Riwayat Kepatuhan</CardTitle>
            <CardDescription>Data kepatuhan minum obat terbaru</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tanggal</TableHead>
                  <TableHead>Obat</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pasien.riwayatPengobatan.map((riwayat, index) => (
                  <TableRow key={index}>
                    <TableCell>{riwayat.tanggal}</TableCell>
                    <TableCell>{riwayat.obat}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {riwayat.status === 'Selesai' ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                            <span className="text-green-500">{riwayat.status}</span>
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />
                            <span className="text-red-500">{riwayat.status}</span>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => toast.info('Melihat riwayat lengkap kepatuhan')}>
              <Calendar className="h-4 w-4 mr-2" />
              Lihat Riwayat Lengkap
            </Button>
          </CardFooter>
        </Card>

        {/* Chart Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Grafik Kepatuhan dan Tekanan Darah</CardTitle>
            <CardDescription>Data 30 hari terakhir</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <LineChart className="h-12 w-12 mx-auto mb-2" />
              <p>Grafik kepatuhan dan tekanan darah akan ditampilkan di sini</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handleKembali}>
            Kembali
          </Button>
          <Button onClick={() => toast.success('Laporan dicetak')}>
            Cetak Laporan
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default PerawatPasienDetail;
