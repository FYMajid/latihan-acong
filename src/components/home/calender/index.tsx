"use client";

import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 1. DATA MAPPING: Tentukan jam mana saja yang ready untuk tanggal tertentu
const AVAILABILITY_DATA: Record<number, string[]> = {
  8: ["01:00 AM", "01:30 AM", "05:00 AM", "07:30 AM"], // Contoh Tanggal 8 (seperti gambar Anda)
  16: ["09:00 AM", "10:00 AM", "02:00 PM"],
  17: ["08:00 AM", "08:30 AM", "09:00 AM", "10:30 AM", "01:00 PM", "04:00 PM"], // Tanggal 17 lebih banyak yang ready
  20: ["11:00 AM", "11:30 AM"],
};

export default function BookingPage() {
const router = useRouter(); // Inisialisasi router
  const [selectedDate, setSelectedDate] = useState<number>(17);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // 2. LOGIC: Ambil jam yang ready berdasarkan tanggal yang diklik
  const availableSlots = useMemo(() => {
    return AVAILABILITY_DATA[selectedDate] || [];
  }, [selectedDate]);

  // Reset pilihan jam jika ganti tanggal
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    setSelectedTime(null); 
  };

  // LOGIKA REDIRECT: Mengirim data via URL Search Params
  const handleNextStep = () => {
    if (selectedDate && selectedTime) {
      const query = new URLSearchParams({
        date: `January ${selectedDate}, 2026`,
        time: selectedTime
      }).toString();
      
      router.push(`/checkout`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-10">
      <div className="mx-auto max-w-5xl bg-white rounded-3xl shadow-2xl shadow-blue-100/50 overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row">
          
          {/* BAGIAN KALENDER */}
          <div className="flex-[1.2] p-8 border-r border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">January 2026</h2>
                <p className="text-sm text-gray-400">Indochina Time (GMT+7)</p>
              </div>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-all"><ChevronLeft className="w-5 h-5" /></button>
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-all"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(d => (
                <div key={d} className="text-xs font-black text-gray-300 mb-4">{d}</div>
              ))}
              
              {/* Dummy dates */}
              {[28, 29, 30, 31].map(d => <div key={d} className="py-3 text-gray-200 text-sm">{d}</div>)}

              {days.map(day => {
                const isReady = !!AVAILABILITY_DATA[day]; // Cek apakah ada jam ready di tanggal ini
                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={cn(
                      "relative py-4 rounded-2xl text-sm font-semibold transition-all",
                      selectedDate === day 
                        ? "bg-gray-900 text-white shadow-xl scale-105" 
                        : "text-gray-600 hover:bg-gray-50",
                      !isReady && "opacity-40" // Tanggal yang tidak punya slot dibuat agak pudar
                    )}
                  >
                    {day}
                    {isReady && selectedDate !== day && (
                       <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* BAGIAN SLOT JAM (LOGIC READY/NOT READY) */}
          <div className="flex-1 p-8 bg-gray-50/50">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              Available for Jan {selectedDate}
            </h3>

            {availableSlots.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {availableSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-xl border-2 transition-all",
                      selectedTime === time 
                        ? "border-blue-600 bg-white text-blue-700 shadow-md" 
                        : "border-transparent bg-white text-gray-600 hover:border-gray-200"
                    )}
                  >
                    <span className="font-medium">{time}</span>
                    {selectedTime === time && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                  </button>
                ))}
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-200 rounded-2xl">
                <p className="text-gray-400 font-medium">No slots available for this date.</p>
                <p className="text-xs text-gray-400 mt-1">Please select another date with a blue dot.</p>
              </div>
            )}
          </div>

          {/* SUMMARY SIDEBAR */}
         <div className="w-full lg:w-72 p-8 bg-white border-l border-gray-100 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase mb-4">Summary</h4>
            <p className="font-bold text-gray-900 text-lg">Personal Life Coaching</p>
            <p className="text-sm text-gray-500">Jan {selectedDate}, 2026</p>
            <p className="text-sm font-bold text-blue-600 mt-1">{selectedTime || "Pilih jam..."}</p>
          </div>

          <button 
            onClick={handleNextStep} // Fungsi Redirect
            disabled={!selectedTime}
            className="w-full mt-8 bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg disabled:bg-gray-200 transition-all hover:bg-blue-700 active:scale-95"
          >
            Go to Checkout
          </button>
        </div>

        </div>
      </div>
    </div>
  );
}