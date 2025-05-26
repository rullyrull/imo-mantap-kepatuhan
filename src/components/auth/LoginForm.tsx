
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';

type UserRole = 'pasien' | 'perawat' | 'admin';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('pasien');
  const { login, isLoading } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && password) {
      await login(email, password, role);
    }
  };

  const handleDemoLogin = (demoRole: UserRole) => {
    const demoCredentials = {
      pasien: { email: 'pasien@test.com', password: 'password' },
      perawat: { email: 'perawat@test.com', password: 'password' },
      admin: { email: 'admin@test.com', password: 'password' }
    };

    const creds = demoCredentials[demoRole];
    setEmail(creds.email);
    setPassword(creds.password);
    setRole(demoRole);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Masuk ke IMO MANTAP</CardTitle>
        <CardDescription className="text-center">
          Masukkan data login Anda untuk melanjutkan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pasien" onValueChange={(value) => setRole(value as UserRole)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pasien">Pasien</TabsTrigger>
            <TabsTrigger value="perawat">Perawat</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pasien" className="mt-4">
            <div className="space-y-3 mb-4">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full text-xs"
                onClick={() => handleDemoLogin('pasien')}
              >
                Demo Login Pasien (pasien@test.com / password)
              </Button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="nama@contoh.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-xs text-imo-500 hover:underline">
                    Lupa password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Masuk...' : 'Masuk'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="perawat" className="mt-4">
            <div className="space-y-3 mb-4">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full text-xs"
                onClick={() => handleDemoLogin('perawat')}
              >
                Demo Login Perawat (perawat@test.com / password)
              </Button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="perawat-email">Email</Label>
                <Input 
                  id="perawat-email" 
                  type="email" 
                  placeholder="perawat@rumahsakit.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="perawat-password">Password</Label>
                  <a href="#" className="text-xs text-imo-500 hover:underline">
                    Lupa password?
                  </a>
                </div>
                <Input 
                  id="perawat-password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Masuk...' : 'Masuk'}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="admin" className="mt-4">
            <div className="space-y-3 mb-4">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full text-xs"
                onClick={() => handleDemoLogin('admin')}
              >
                Demo Login Admin (admin@test.com / password)
              </Button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email</Label>
                <Input 
                  id="admin-email" 
                  type="email" 
                  placeholder="admin@imomantap.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="admin-password">Password</Label>
                  <a href="#" className="text-xs text-imo-500 hover:underline">
                    Lupa password?
                  </a>
                </div>
                <Input 
                  id="admin-password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Masuk...' : 'Masuk'}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-center text-sm">
          Belum punya akun?{" "}
          <a href="/register" className="text-imo-500 hover:underline">
            Daftar Sekarang
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
