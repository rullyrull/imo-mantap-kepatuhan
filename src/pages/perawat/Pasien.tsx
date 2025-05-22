
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, User, UserPlus, Filter, Heart } from 'lucide-react';
import { toast } from 'sonner';

const PerawatPasien = () => {
  const navigate = useNavigate();
  
  // Dummy data
  const daftarPasien = [
    { 
      id: 1, 
      nama: 'Budi Santoso', 
      usia: 65, 
      jenisKelamin: 'Laki-laki',
      kondisi: ['Hipertensi', 'Diabetes'],
      status: 'berisiko',
      kepatuhan: 45
    },
    { 
      id: 2, 
      nama: 'Siti Aminah', 
      usia: 58, 
      jenisKelamin: 'Perempuan',
      kondisi: ['Hipertensi', 'Kolesterol'],
      status: 'berisiko',
      kepatuhan: 60
    },
    { 
      id: 3, 
      nama: 'Joko Widodo', 
      usia: 52, 
      jenisKelamin: 'Laki-laki',
      kondisi: ['Hipertensi'],
      status: 'stabil',
      kepatuhan: 89
    },
    { 
      id: 4, 
      nama: 'Sri Mulyani', 
      usia: 47, 
      jenisKelamin: 'Perempuan',
      kondisi: ['Diabetes'],
      status: 'stabil',
      kepatuhan: 95
    },
    { 
      id: 5, 
      nama: 'Ahmad Dahlan', 
      usia: 60, 
      jenisKelamin: 'Laki-laki',
      kondisi: ['Hipertensi', 'Jantung'],
      status: 'stabil',
      kepatuhan: 78
    }
  ];

  const handleLihatDetail = (pasienId: number) => {
    navigate(`/perawat/pasien/${pasienId}`);
  };

  const handleAddPasien = () => {
    toast.success('Fitur tambah pasien akan segera tersedia');
  };

  const handleFilter = () => {
    toast.info('Fitur filter pasien akan segera tersedia');
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Pencarian pasien akan segera tersedia');
  };

  return (
    <Layout role="perawat" title="Daftar Pasien">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <form onSubmit={handleSearch} className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Cari pasien..." className="pl-10" />
          </form>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleFilter}>
              <Filter className="h-4 w-4 mr-1" />
              Filter
            </Button>
            <Button onClick={handleAddPasien}>
              <UserPlus className="h-4 w-4 mr-1" />
              Tambah Pasien
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Pasien</CardTitle>
            <CardDescription>
              Total {daftarPasien.length} pasien terdaftar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {daftarPasien.map((pasien) => (
                <div key={pasien.id} className="flex flex-col md:flex-row md:items-center justify-between border rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-slate-400" />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-medium">{pasien.nama}</h3>
                        <Badge className={`ml-2 ${
                          pasien.status === 'berisiko' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {pasien.status === 'berisiko' ? 'Berisiko' : 'Stabil'}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        {pasien.usia} tahun | {pasien.jenisKelamin} | ID: P-{1000 + pasien.id}
                      </p>
                      
                      <div className="mt-2 flex flex-wrap gap-1">
                        {pasien.kondisi.map((kondisi, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {kondisi}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 md:mt-0">
                    <div className="mr-6 text-right">
                      <div className="text-sm">Kepatuhan</div>
                      <div className={`flex items-center ${
                        pasien.kepatuhan < 60 ? 'text-red-500' : 
                        pasien.kepatuhan < 80 ? 'text-amber-500' : 
                        'text-green-500'
                      }`}>
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="font-bold">{pasien.kepatuhan}%</span>
                      </div>
                    </div>
                    <Button onClick={() => handleLihatDetail(pasien.id)}>Lihat Detail</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PerawatPasien;
