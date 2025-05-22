
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Heart, User, BarChart3, LineChart, Settings, Clock } from 'lucide-react';

const AdminDashboard = () => {
  // Dummy data for system stats
  const stats = {
    totalUsers: 124,
    activePatients: 89,
    activeNurses: 32,
    adminUsers: 3,
    systemUptime: '99.8%',
    alerts: 5
  };
  
  // Dummy data for app usage
  const dailyLogins = [42, 38, 45, 40, 48, 52, 45];
  const daysOfWeek = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  
  return (
    <Layout role="admin" title="Dashboard Admin">
      <div className="space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pengguna Sistem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-imo-500 mr-2" />
                <div className="text-2xl font-bold">{stats.totalUsers}</div>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="text-xs">
                  <span className="text-muted-foreground">Pasien:</span> {stats.activePatients}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Perawat:</span> {stats.activeNurses}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Admin:</span> {stats.adminUsers}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Kinerja Sistem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="text-2xl font-bold">{stats.systemUptime}</div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Uptime dalam 30 hari terakhir
              </div>
              <Progress value={99.8} className="h-1 mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Notifikasi Sistem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="text-2xl font-bold">{stats.alerts}</div>
              </div>
              <div className="flex items-center mt-2">
                <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                  {stats.alerts} notifikasi memerlukan perhatian
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - System Status */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Penggunaan Aplikasi</CardTitle>
              <CardDescription>
                Login harian dalam 7 hari terakhir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-end justify-between gap-2 pt-6">
                {dailyLogins.map((logins, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="h-full flex items-end">
                      <div 
                        className="bg-imo-500 w-12 rounded-t-md" 
                        style={{ height: `${(logins / Math.max(...dailyLogins)) * 220}px` }}
                      ></div>
                    </div>
                    <div className="mt-2 text-xs font-medium">{daysOfWeek[index]}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Quick Access and Alerts */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Akses Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-2" />
                    Manajemen Pengguna
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Pengaturan Sistem
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <LineChart className="h-4 w-4 mr-2" />
                    Laporan Kepatuhan
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Data Kesehatan
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Clock className="h-4 w-4 mr-2" />
                    Log Sistem
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Aktivitas Terbaru</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-imo-500 pl-4 pb-4">
                    <div className="text-sm">
                      <span className="font-medium">Perawat Ratna D.</span> menambahkan 3 pasien baru
                    </div>
                    <div className="text-xs text-muted-foreground">12 menit yang lalu</div>
                  </div>
                  
                  <div className="border-l-2 border-imo-500 pl-4 pb-4">
                    <div className="text-sm">
                      <span className="font-medium">Admin Sistem</span> memperbarui pengaturan notifikasi
                    </div>
                    <div className="text-xs text-muted-foreground">1 jam yang lalu</div>
                  </div>
                  
                  <div className="border-l-2 border-imo-500 pl-4 pb-4">
                    <div className="text-sm">
                      <span className="font-medium">Backup database</span> berhasil dilakukan
                    </div>
                    <div className="text-xs text-muted-foreground">2 jam yang lalu</div>
                  </div>
                  
                  <div className="border-l-2 border-imo-500 pl-4">
                    <div className="text-sm">
                      <span className="font-medium">Perawat Ahmad S.</span> mengekspor laporan kepatuhan
                    </div>
                    <div className="text-xs text-muted-foreground">3 jam yang lalu</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Statistik Sistem</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Total pengingat dikirim</span>
                  <span className="font-medium">2,458</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Tingkat konfirmasi pengingat</span>
                  <span className="font-medium">76%</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Rata-rata waktu respons sistem</span>
                  <span className="font-medium">0.8 detik</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="text-muted-foreground">Total penggunaan penyimpanan</span>
                  <span className="font-medium">3.2 GB / 10 GB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Utilisasi CPU rata-rata</span>
                  <span className="font-medium">28%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribusi Pengguna</CardTitle>
              <CardDescription>
                Sebaran pengguna berdasarkan perangkat dan wilayah
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Perangkat</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Android</span>
                        <span>62%</span>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>iOS</span>
                        <span>28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Web</span>
                        <span>10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Wilayah</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Jakarta</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Surabaya</span>
                        <span>23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Bandung</span>
                        <span>18%</span>
                      </div>
                      <Progress value={18} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Lainnya</span>
                        <span>14%</span>
                      </div>
                      <Progress value={14} className="h-2" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
