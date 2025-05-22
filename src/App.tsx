
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";

// Pasien Pages
import PasienDashboard from "./pages/pasien/Dashboard";
import PasienJadwal from "./pages/pasien/Jadwal";
import PasienRiwayat from "./pages/pasien/Riwayat";
import PasienPengingat from "./pages/pasien/Pengingat";
import PasienProfil from "./pages/pasien/Profil";

// Perawat Pages
import PerawatDashboard from "./pages/perawat/Dashboard";
import PerawatPasien from "./pages/perawat/Pasien";
import PerawatPengobatan from "./pages/perawat/Pengobatan";
import PerawatKepatuhan from "./pages/perawat/Kepatuhan";
import PerawatProfil from "./pages/perawat/Profil";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminPengguna from "./pages/admin/Pengguna";
import AdminObat from "./pages/admin/Obat";
import AdminLaporan from "./pages/admin/Laporan";
import AdminPengaturan from "./pages/admin/Pengaturan";

const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" closeButton richColors />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Pasien Routes */}
            <Route path="/pasien/dashboard" element={<PasienDashboard />} />
            <Route path="/pasien/jadwal" element={<PasienJadwal />} />
            <Route path="/pasien/riwayat" element={<PasienRiwayat />} />
            <Route path="/pasien/pengingat" element={<PasienPengingat />} />
            <Route path="/pasien/profil" element={<PasienProfil />} />
            
            {/* Perawat Routes */}
            <Route path="/perawat/dashboard" element={<PerawatDashboard />} />
            <Route path="/perawat/pasien" element={<PerawatPasien />} />
            <Route path="/perawat/pengobatan" element={<PerawatPengobatan />} />
            <Route path="/perawat/kepatuhan" element={<PerawatKepatuhan />} />
            <Route path="/perawat/profil" element={<PerawatProfil />} />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/pengguna" element={<AdminPengguna />} />
            <Route path="/admin/obat" element={<AdminObat />} />
            <Route path="/admin/laporan" element={<AdminLaporan />} />
            <Route path="/admin/pengaturan" element={<AdminPengaturan />} />
            
            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
