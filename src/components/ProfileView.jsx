import { LogIn, LogOut, Cloud, CloudOff, Loader, AlertCircle, LayoutDashboard, Sun, Monitor, Moon } from 'lucide-react';

export default function ProfileView({ user, syncStatus, onLogin, onLogout, onNavigate, isAdmin, themePreference, onThemeChange }) {
  const statusConfig = {
    offline: { icon: CloudOff, color: 'text-slate-400', label: '離線模式', bg: 'bg-slate-50 dark:bg-slate-800' },
    syncing: { icon: Loader, color: 'text-amber-500', label: '同步中...', bg: 'bg-amber-50 dark:bg-amber-900/30' },
    synced: { icon: Cloud, color: 'text-emerald-500', label: '已同步', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
    error: { icon: AlertCircle, color: 'text-rose-500', label: '同步失敗', bg: 'bg-rose-50 dark:bg-rose-900/30' },
  };

  const status = statusConfig[syncStatus] || statusConfig.offline;
  const StatusIcon = status.icon;

  const themeOptions = [
    { value: 'light', label: '淺色', icon: Sun },
    { value: 'system', label: '系統', icon: Monitor },
    { value: 'dark', label: '深色', icon: Moon },
  ];

  return (
    <div className="flex flex-col h-screen pb-16">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 safe-top">
        <div className="text-lg font-bold text-slate-900 dark:text-slate-50 text-center">設定</div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
        {/* User info */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">帳號</div>
          {user ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                {user.photoURL && (
                  <img
                    src={user.photoURL}
                    alt=""
                    className="w-12 h-12 rounded-full"
                    onError={(e) => e.target.style.display = 'none'}
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="font-semibold text-slate-900 dark:text-slate-50 truncate">
                    {user.displayName || '使用者'}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 truncate">{user.email}</div>
                </div>
              </div>
              <button
                onClick={onLogout}
                className="w-full flex items-center justify-center gap-2 py-3 border border-rose-200 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150"
              >
                <LogOut size={18} />
                登出
              </button>
            </div>
          ) : (
            <button
              onClick={onLogin}
              className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150"
            >
              <LogIn size={18} />
              使用 Google 登入
            </button>
          )}
        </div>

        {/* Sync status */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">同步狀態</div>
          <div className={`flex items-center gap-3 p-3 rounded-xl ${status.bg}`}>
            <StatusIcon
              size={20}
              className={`${status.color} ${syncStatus === 'syncing' ? 'animate-spin' : ''}`}
            />
            <span className={`font-medium ${status.color}`}>{status.label}</span>
          </div>
        </div>

        {/* Theme toggle */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">外觀</div>
          <div className="flex gap-2">
            {themeOptions.map(({ value, label, icon: ThemeIcon }) => (
              <button
                key={value}
                onClick={() => onThemeChange(value)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl font-medium text-sm transition-colors duration-150
                  ${themePreference === value
                    ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500'
                    : 'bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent active:bg-slate-100 dark:active:bg-slate-600'}`}
              >
                <ThemeIcon size={20} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Admin button */}
        {user && isAdmin && (
          <button
            onClick={() => onNavigate('admin')}
            className="w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150"
          >
            <LayoutDashboard size={18} />
            管理後台
          </button>
        )}

        {/* App info */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
          <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">關於</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">
            <div className="flex justify-between py-2">
              <span>應用程式</span>
              <span className="text-slate-900 dark:text-slate-100 font-medium">打包清單</span>
            </div>
            <div className="border-t border-slate-100 dark:border-slate-700" />
            <div className="flex justify-between py-2">
              <span>版本</span>
              <span className="text-slate-900 dark:text-slate-100 font-medium">1.1.2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
