'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [menu, setMenu] = useState<any[]>([]);
  const [tables, setTables] = useState<any[]>([]);
  const [shifts, setShifts] = useState<any[]>([]);
  const [promotions, setPromotions] = useState<any[]>([]);
  const [newMenu, setNewMenu] = useState({ name: '', price: '', category: '' });
  const [newTable, setNewTable] = useState({ name: '', seats: '', x: '100', y: '100' });
  const router = useRouter();

  const loadData = async (token: string) => {
    const headers = { Authorization: 'Bearer ' + token };
    const [p, m, t, s, pr] = await Promise.all([
      fetch('http://localhost:3000/auth/profile', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/menu', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/tables', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/shifts', { headers }).then(r => r.json()),
      fetch('http://localhost:3000/promotions', { headers }).then(r => r.json()),
    ]);
    setProfile(p);
    setMenu(Array.isArray(m) ? m : []);
    setTables(Array.isArray(t) ? t : []);
    setShifts(Array.isArray(s) ? s : []);
    setPromotions(Array.isArray(pr) ? pr : []);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/login');
    loadData(token);
  }, [router]);

  const createMenu = async () => {
    const token = localStorage.getItem('token')!;
    await fetch('http://localhost:3000/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ ...newMenu, price: Number(newMenu.price) }),
    });
    setNewMenu({ name: '', price: '', category: '' });
    loadData(token);
  };

  const createTable = async () => {
    const token = localStorage.getItem('token')!;
    await fetch('http://localhost:3000/tables', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify({ ...newTable, seats: Number(newTable.seats), x: Number(newTable.x), y: Number(newTable.y) }),
    });
    setNewTable({ name: '', seats: '', x: '100', y: '100' });
    loadData(token);
  };

  if (!profile) return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-xl">Загрузка...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          HallBook Admin
        </h1>

        <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-3">Профиль</h2>
          <div className="grid md:grid-cols-3 gap-4 text-blue-100">
            <p><span className="text-white/60">Имя:</span> {profile.name}</p>
            <p><span className="text-white/60">Роль:</span> {profile.role}</p>
            <p><span className="text-white/60">Заведение:</span> {profile.establishmentId?.slice(0, 8)}...</p>
          </div>
        </div>

        {/* Схема зала */}
        <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Схема зала</h2>
          <div className="relative w-full h-96 bg-slate-800/50 border border-white/20 rounded-xl overflow-hidden">
            {tables.map(table => (
              <div
                key={table.id}
                className="absolute bg-blue-600/80 border border-blue-400 rounded-lg flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-blue-500 transition"
                style={{
  left: table.x + 'px',
  top: table.y + 'px',
  width: '80px',
  height: '60px',
}}
title={table.name + ' — ' + table.seats + ' мест'}
              >
                {table.name}
              </div>
            ))}
            {tables.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-white/50">
                Добавьте столы, чтобы увидеть схему
              </div>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Меню <span className="text-blue-300">({menu.length})</span></h2>
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {menu.map(item => (
                <div key={item.id} className="flex justify-between bg-white/5 p-3 rounded-lg">
                  <span>{item.name}</span>
                  <span className="text-cyan-300">{item.price} ₽</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <input placeholder="Название" value={newMenu.name} onChange={e => setNewMenu({...newMenu, name: e.target.value})} className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50" />
              <input placeholder="Цена" type="number" value={newMenu.price} onChange={e => setNewMenu({...newMenu, price: e.target.value})} className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50" />
              <input placeholder="Категория" value={newMenu.category} onChange={e => setNewMenu({...newMenu, category: e.target.value})} className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50" />
              <button onClick={createMenu} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 p-3 rounded-xl font-semibold transition">
                Добавить позицию
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Столы <span className="text-blue-300">({tables.length})</span></h2>
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {tables.map(table => (
                <div key={table.id} className="bg-white/5 p-3 rounded-lg">{table.name} — {table.seats} мест</div>
              ))}
            </div>
            <div className="space-y-3">
              <input placeholder="Название" value={newTable.name} onChange={e => setNewTable({...newTable, name: e.target.value})} className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50" />
              <input placeholder="Количество мест" type="number" value={newTable.seats} onChange={e => setNewTable({...newTable, seats: e.target.value})} className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50" />
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="X" type="number" value={newTable.x} onChange={e => setNewTable({...newTable, x: e.target.value})} className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50" />
                <input placeholder="Y" type="number" value={newTable.y} onChange={e => setNewTable({...newTable, y: e.target.value})} className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50" />
              </div>
              <button onClick={createTable} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 p-3 rounded-xl font-semibold transition">
                Добавить стол
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}