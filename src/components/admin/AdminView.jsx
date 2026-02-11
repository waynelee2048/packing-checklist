import { useState } from 'react';
import { LayoutDashboard, Package, FileText, Share2, Shield, ArrowLeft, Menu, X } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import AdminItems from './AdminItems';
import AdminTemplates from './AdminTemplates';
import AdminSharing from './AdminSharing';
import AdminAccounts from './AdminAccounts';

const sections = [
  { key: 'dashboard', label: '總覽', icon: LayoutDashboard },
  { key: 'items', label: '物品管理', icon: Package },
  { key: 'templates', label: '清單範本', icon: FileText },
  { key: 'sharing', label: '分享管理', icon: Share2 },
  { key: 'accounts', label: '帳號管理', icon: Shield },
];

export default function AdminView({ data, user, shared, onNavigate, onSaveData, admin }) {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNav = (key) => {
    setActiveSection(key);
    setSidebarOpen(false);
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-lg font-bold text-slate-900 dark:text-slate-50">管理後台</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{user?.displayName || user?.email}</p>
      </div>
      <nav className="flex-1 p-2">
        {sections.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => handleNav(key)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === key ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100'}`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </nav>
      <div className="p-2 border-t border-slate-200 dark:border-slate-700">
        <button
          onClick={() => onNavigate('profile')}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          <ArrowLeft size={18} />
          返回應用
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AdminDashboard data={data} shared={shared} />;
      case 'items':
        return <AdminItems data={data} onSaveData={onSaveData} />;
      case 'templates':
        return <AdminTemplates data={data} onSaveData={onSaveData} />;
      case 'sharing':
        return <AdminSharing data={data} shared={shared} />;
      case 'accounts':
        return <AdminAccounts user={user} admin={admin} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-900">
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-[240px_1fr] h-full">
        <aside className="bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto">
          {sidebarContent}
        </aside>
        <main className="overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex flex-col h-full">
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top">
          <button onClick={() => setSidebarOpen(true)} className="p-1 -ml-1 text-slate-600 dark:text-slate-300">
            <Menu size={24} />
          </button>
          <h1 className="text-lg font-bold text-slate-900 dark:text-slate-50">
            {sections.find(s => s.key === activeSection)?.label || '管理後台'}
          </h1>
          <button onClick={() => onNavigate('profile')} className="p-1 -mr-1 text-slate-600 dark:text-slate-300">
            <ArrowLeft size={24} />
          </button>
        </header>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setSidebarOpen(false)} />
            <div className="fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 z-50 shadow-xl safe-top">
              <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                <h1 className="text-lg font-bold text-slate-900 dark:text-slate-50">管理後台</h1>
                <button onClick={() => setSidebarOpen(false)} className="p-1 text-slate-400">
                  <X size={20} />
                </button>
              </div>
              <nav className="p-2">
                {sections.map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => handleNav(key)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSection === key ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 safe-bottom">
                <button
                  onClick={() => onNavigate('profile')}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  <ArrowLeft size={18} />
                  返回應用
                </button>
              </div>
            </div>
          </>
        )}

        <main className="flex-1 overflow-y-auto p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
