'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const themes: Record<string, { bg: string; pattern: string }> = {
  night: {
    bg: 'bg-[#2F4F4F]',
    pattern: 'bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[size:20px_20px]',
  },
  burgundy: {
    bg: 'bg-[#190009]',
    pattern: 'bg-[linear-gradient(45deg,transparent_46%,#ffffff10_46%,#ffffff10_54%,transparent_54%)] bg-[size:18px_18px]',
  },
  gold: {
    bg: 'bg-[#8a7300]',
    pattern: 'bg-[radial-gradient(circle,#00000020_1px,transparent_1px)] bg-[size:20px_20px]',
  },
  cookie: {
    bg: 'bg-[#c9b08a]',
    pattern: 'bg-[radial-gradient(#00000012_1px,transparent_1px)] bg-[size:18px_18px]',
  },
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<any>(null);
  const [menu, setMenu] = useState<any[]>([]);
  const [tables, setTables] = useState<any[]>([]);
  const [shifts, setShifts] = useState<any[]>([]);
  const [promotions, setPromotions] = useState<any[]>([]);
  const [newMenu, setNewMenu] = useState({ name: '', price: '', category: '' });
  const [newTable, setNewTable] = useState({ name: '', seats: '', x: '100', y: '100' });
  const [theme, setTheme] = useState('night');
  const [activeTab, setActiveTab] = useState('overview');
  const [showSupport, setShowSupport] = useState(false);
  const [supportMsg, setSupportMsg] = useState('');
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
    const savedTheme = localStorage.getItem('theme') || 'night';
    setTheme(savedTheme);
    loadData(token);
  }, [router]);

  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

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

  const sendSupport = () => {
    alert('Сообщение в поддержку отправлено: ' + supportMsg);
    setSupportMsg('');
    setShowSupport(false);
  };

  if (!profile) return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white text-xl">Загрузка...</div>;

  const current = themes[theme];
  const textColor = theme === 'gold' || theme === 'cookie' ? 'text-black' : 'text-white';
  const bgClass = 'min-h-screen ' + current.bg + ' ' + current.pattern + ' ' + textColor + ' flex';

  return (
    <div className={bgClass}>
      <aside className="w-72 bg-black/30 backdrop-blur-md border-r border-white/10 p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-2xl font-bold tracking-tight">HallBook</h1>
          <p className="text-xs opacity-50 mt-1">Admin Panel</p>
        </div>
        
        <nav className="space-y-1 flex-1">
          {[
            { id: 'overview', label: 'Обзор' },
            { id: 'menu', label: 'Меню' },
            { id: 'tables', label: 'Столы' },
            { id: 'shifts', label: 'Смены' },
            { id: 'promotions', label: 'Акции' },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition ' + (activeTab === item.id ? 'bg-white/20' : 'opacity-70 hover:bg-white/10')}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-4">
          <button
            onClick={() => setShowSupport(true)}
            className="w-full px-4 py-3 bg-white/10 hover:bg-white/15 rounded-lg text-sm font-medium transition"
          >
            Поддержка
          </button>
          
          <div>
            <p className="text-xs opacity-50 mb-2 uppercase tracking-wider">Стиль</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(themes).map(t => (
                <button
                  key={t}
                  onClick={() => changeTheme(t)}
                  className={'px-3 py-2 rounded-md text-xs font-medium capitalize transition ' + (theme === t ? 'bg-white/25' : 'bg-white/10 hover:bg-white/15')}
                >
                  {t === 'night' ? 'Ночь' : t === 'burgundy' ? 'Бургунди' : t === 'gold' ? 'Золото' : 'Печенье'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">
            {activeTab === 'overview' ? 'Обзор' : activeTab === 'menu' ? 'Меню' : activeTab === 'tables' ? 'Столы' : activeTab === 'shifts' ? 'Смены' : 'Акции'}
          </h2>
          <p className="opacity-50 mt-1">{profile.name} · {profile.role}</p>
        </div>

        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 border border-white/10 p-6 rounded-xl"><div className="text-3xl font-bold">{menu.length}</div><div className="opacity-50 text-sm">Позиций</div></div>
            <div className="bg-white/10 border border-white/10 p-6 rounded-xl"><div className="text-3xl font-bold">{tables.length}</div><div className="opacity-50 text-sm">Столов</div></div>
            <div className="bg-white/10 border border-white/10 p-6 rounded-xl"><div className="text-3xl font-bold">{shifts.length}</div><div className="opacity-50 text-sm">Смен</div></div>
            <div className="bg-white/10 border border-white/10 p-6 rounded-xl"><div className="text-3xl font-bold">{promotions.length}</div><div className="opacity-50 text-sm">Акций</div></div>
          </div>
        )}

        {activeTab === 'tables' && (
          <div className="bg-white/10 border border-white/10 p-6 rounded-xl mb-6">
            <h3 className="text-lg font-semibold mb-4">Схема зала</h3>
            <div className="relative w-full h-96 bg-black/30 border border-white/10 rounded-xl overflow-hidden">
              {tables.map(table => (
                <div
                  key={table.id}
                  className="absolute bg-blue-700/80 border border-blue-500/50 rounded-md flex items-center justify-center text-xs font-medium text-white"
                  style={{ left: table.x + 'px', top: table.y + 'px', width: '80px', height: '60px' }}
                >
                  {table.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeTab === 'menu' || activeTab === 'overview') && (
          <div className="bg-white/10 border border-white/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
              {menu.map(item => <div key={item.id} className="flex justify-between bg-white/5 p-3 rounded-lg text-sm"><span>{item.name}</span><span className="opacity-70">{item.price} ₽</span></div>)}
            </div>
            {activeTab === 'menu' && (
              <div className="grid md:grid-cols-4 gap-3">
                <input placeholder="Название" value={newMenu.name} onChange={e => setNewMenu({...newMenu, name: e.target.value})} className="p-3 bg-white/5 border border-white/10 rounded-lg text-sm" />
                <input placeholder="Цена" type="number" value={newMenu.price} onChange={e => setNewMenu({...newMenu, price: e.target.value})} className="p-3 bg-white/5 border border-white/10 rounded-lg text-sm" />
                <input placeholder="Категория" value={newMenu.category} onChange={e => setNewMenu({...newMenu, category: e.target.value})} className="p-3 bg-white/5 border border-white/10 rounded-lg text-sm" />
                <button onClick={createMenu} className="bg-white/15 hover:bg-white/25 border border-white/10 rounded-lg font-semibold text-sm">Добавить</button>
              </div>
            )}
          </div>
        )}
      </main>

      {showSupport && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-900/90 border border-white/20 p-8 rounded-2xl w-full max-w-md text-white">
            <h3 className="text-xl font-semibold mb-4">Поддержка</h3>
            <textarea
              value={supportMsg}
              onChange={e => setSupportMsg(e.target.value)}
              placeholder="Опишите проблему..."
              className="w-full h-32 p-3 bg-white/5 border border-white/10 rounded-lg text-sm mb-4 resize-none"
            />
            <div className="flex gap-3">
              <button onClick={sendSupport} className="flex-1 bg-white/15 hover:bg-white/25 py-3 rounded-lg font-semibold text-sm">Отправить</button>
              <button onClick={() => setShowSupport(false)} className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-lg text-sm">Отмена</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
