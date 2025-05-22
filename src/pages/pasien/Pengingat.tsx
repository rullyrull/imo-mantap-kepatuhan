
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Plus, X, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const PasienPengingat = () => {
  // Dummy data
  const [pengingat, setPengingat] = useState([
    { 
      id: 1, 
      judul: 'Minum Amlodipine', 
      waktu: '07:00', 
      hari: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
      aktif: true 
    },
    { 
      id: 2, 
      judul: 'Minum Metformin', 
      waktu: '08:00', 
      hari: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
      aktif: true 
    },
    { 
      id: 3, 
      judul: 'Minum Losartan', 
      waktu: '19:00', 
      hari: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
      aktif: true 
    },
    { 
      id: 4, 
      judul: 'Periksa Tekanan Darah', 
      waktu: '09:00', 
      hari: ['Senin', 'Kamis'],
      aktif: false 
    }
  ]);

  const togglePengingat = (id: number) => {
    setPengingat(pengingat.map(item => 
      item.id === id ? { ...item, aktif: !item.aktif } : item
    ));
  };

  return (
    <Layout role="pasien" title="Pengingat">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Pengaturan Pengingat</h2>
          <Button>
            <Plus className="mr-1 h-4 w-4" />
            Tambah Pengingat
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Daftar Pengingat
            </CardTitle>
            <CardDescription>
              Kelola pengingat obat dan aktivitas kesehatan Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pengingat.map((item) => (
                <div key={item.id} className="flex justify-between items-center border rounded-lg p-4">
                  <div>
                    <h4 className="font-medium">{item.judul}</h4>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{item.waktu}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.hari.map((hari, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {hari.substring(0, 3)}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={item.aktif} 
                      onCheckedChange={() => togglePengingat(item.id)} 
                    />
                    <Button variant="ghost" size="icon" className="text-red-500">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pengaturan Notifikasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Notifikasi Pengingat</h4>
                <p className="text-sm text-muted-foreground">Aktifkan notifikasi untuk pengingat</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Notifikasi Berulang</h4>
                <p className="text-sm text-muted-foreground">Kirim pengingat beberapa kali</p>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Pengingat Dokter</h4>
                <p className="text-sm text-muted-foreground">Aktifkan pengingat jadwal dokter</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PasienPengingat;
