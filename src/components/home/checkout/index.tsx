"use client";

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CreditCard, Wallet, QrCode, Building2, ShieldCheck, CheckCircle2, Edit2, Lock, Landmark } from 'lucide-react';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
const date = searchParams.get('date') || "Jan 17, 2026";
  const time = searchParams.get('time') || "09:00 AM";

  // Logic State
  const [isEditingDetails, setIsEditingDetails] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'ewallet' | 'qris' | 'va' | null>(null);
  const [promoCode, setPromoCode] = useState('');
  
  // Form State
  const [customer, setCustomer] = useState({
    email: 'kocak@gmail.com',
    firstName: 'kocak',
    lastName: 'q',
    phone: '+6281223344556'
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="max-w-6xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* SISI KIRI: FORMS */}
          <div className="flex-1 space-y-10">
            
            {/* SECTION 1: CUSTOMER DETAILS */}
            <section className="relative">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Customer details</h2>
                {!isEditingDetails && (
                  <button 
                    onClick={() => setIsEditingDetails(true)}
                    className="flex items-center gap-1 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors"
                  >
                    <Edit2 className="w-3 h-3" /> Edit
                  </button>
                )}
              </div>

              {isEditingDetails ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-300">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">Email *</label>
                    <input 
                      type="email" 
                      value={customer.email}
                      onChange={(e) => setCustomer({...customer, email: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border-gray-300" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">First name *</label>
                    <input 
                      type="text" 
                      value={customer.firstName}
                      onChange={(e) => setCustomer({...customer, firstName: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border-gray-300" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Last name *</label>
                    <input 
                      type="text" 
                      value={customer.lastName}
                      onChange={(e) => setCustomer({...customer, lastName: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border-gray-300" 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2">Phone *</label>
                    <input 
                      type="tel" 
                      value={customer.phone}
                      onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none border-gray-300" 
                    />
                  </div>
                  <button 
                    onClick={() => setIsEditingDetails(false)}
                    className="md:col-span-2 bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-800 transition-all mt-4"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 animate-in slide-in-from-top-2 duration-300">
                  <p className="font-semibold">{customer.firstName} {customer.lastName}</p>
                  <p className="text-sm text-gray-600">{customer.email}</p>
                  <p className="text-sm text-gray-600">{customer.phone}</p>
                </div>
              )}
            </section>

            <hr className="border-gray-100" />

            {/* SECTION 2: PAYMENT METHOD */}
            <section className={isEditingDetails ? "opacity-30 pointer-events-none" : "animate-in fade-in duration-500"}>
              <h2 className="text-2xl font-bold mb-6">Payment</h2>
              
              <div className="space-y-4">
                {/* Opsi Kartu Debit/Kredit */}
                <div className={`border-2 rounded-xl overflow-hidden transition-all ${paymentMethod === 'card' ? 'border-blue-600 shadow-md' : 'border-gray-200'}`}>
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className="w-full flex items-center justify-between p-4 bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gray-100 rounded-lg"><CreditCard className="w-5 h-5 text-gray-700" /></div>
                      <span className="font-bold">Credit/Debit Cards</span>
                    </div>
                    <div className="flex gap-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4 w-auto" alt="Visa" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 w-auto" alt="Mastercard" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Gerbang_Pembayaran_Nasional_logo.svg" className="h-3" alt="GPN" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" className="h-3" alt="JCB" />

                    </div>
                  </button>

                  {/* FORM KARTU (Hanya muncul jika dipilih) */}
                  {paymentMethod === 'card' && (
                    <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4 animate-in slide-in-from-top-4 duration-300">
                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Card Number</label>
                        <div className="relative">
                          <input type="text" placeholder="Enter number" className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500" />
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1 grayscale opacity-50">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-3" alt="Mastercard" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Gerbang_Pembayaran_Nasional_logo.svg" className="h-3" alt="GPN" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" className="h-3" alt="JCB" />

                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Expiration Date</label>
                          <input type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase text-gray-500 mb-2">CVV/CVC</label>
                          <div className="relative">
                            <input type="text" placeholder="3-4 digits" className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500" />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                               <CreditCard className="w-5 h-5 text-gray-300" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Cardholder Name</label>
                        <input type="text" placeholder="Enter full name" className="w-full p-3 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Metode Lainnya (E-Wallet/QRIS) */}
                <button 
                  onClick={() => setPaymentMethod('ewallet')}
                  className={`w-full flex items-center justify-between p-4 border-2 rounded-xl transition-all ${paymentMethod === 'ewallet' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg"><Wallet className="w-5 h-5 text-gray-700" /></div>
                    <span className="font-bold">E-Wallet (OVO, DANA, ShopeePay)</span>
                  </div>
                  {paymentMethod === 'ewallet' && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                </button>

                <button 
                  onClick={() => setPaymentMethod('qris')}
                  className={`w-full flex items-center justify-between p-4 border-2 rounded-xl transition-all ${paymentMethod === 'qris' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg"><QrCode className="w-5 h-5 text-gray-700" /></div>
                    <span className="font-bold">QRIS (Flash Payment)</span>
                  </div>
                  {paymentMethod === 'qris' && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                </button>

                <button 
                  onClick={() => setPaymentMethod('va')}
                  className={`w-full flex items-center justify-between p-4 border-2 rounded-xl transition-all ${paymentMethod === 'va' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 rounded-lg"><Landmark className="w-5 h-5 text-gray-700" /></div>
                    <span className="font-bold">Virtual Account (Flash Payment)</span>
                  </div>
                  {paymentMethod === 'va' && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                </button>

              
              </div>

            

              <div className="mt-10">
                <button 
                  disabled={!paymentMethod}
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 disabled:bg-gray-200 disabled:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  Place Order & Pay
                </button>
              </div>
            </section>
          </div>

          {/* SISI KANAN: ORDER SUMMARY */}
          {/* SISI KANAN: ORDER SUMMARY & PROMO */}
          <div className="w-full lg:w-96 space-y-6">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 sticky top-10">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Order Summary</h3>
              
              <div className="flex gap-4 pb-6 border-b border-gray-200">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                  JS
                </div>
                <div>
                  <p className="font-bold text-gray-800 leading-tight">Personal Life Coaching</p>
                  <p className="text-xs text-gray-500 mt-1">{date}</p>
                  <p className="text-xs text-gray-500">{time} • 1 Hour</p>
                </div>
              </div>

              {/* PROMO CODE SECTION */}
              <div className="py-6">
                <label className="block text-[10px] font-black uppercase mb-2 text-gray-400 tracking-widest">Promo Code</label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="flex-1 p-3 border-2 border-gray-200 rounded-xl text-sm outline-none focus:border-blue-600 transition-all"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button className="bg-gray-900 text-white px-4 rounded-xl text-xs font-bold hover:bg-black transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>US$100.00</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount</span>
                  <span>-US$0.00</span>
                </div>
                <div className="flex justify-between text-xl font-black text-gray-900 pt-2 border-t border-gray-100 mt-2">
                  <span>Total</span>
                  <span>US$100.00</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[10px] text-gray-400 justify-center">
                <Lock className="w-3 h-3" />
                <span>SECURE CHECKOUT POWERED BY XENDIT</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}