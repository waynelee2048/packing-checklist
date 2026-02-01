export default function UserSection({ user, syncStatus, onLogin, onLogout }) {
  const statusConfig = {
    offline: { icon: '○', color: 'text-gray-400', title: '離線模式' },
    syncing: { icon: '↻', color: 'text-yellow-300 animate-spin', title: '同步中...' },
    synced: { icon: '●', color: 'text-green-400', title: '已同步' },
    error: { icon: '!', color: 'text-red-400', title: '同步失敗' }
  };
  const status = statusConfig[syncStatus] || statusConfig.offline;

  if (user) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-600 rounded-lg">
        {user.photoURL && (
          <img
            src={user.photoURL}
            alt=""
            className="w-6 h-6 rounded-full"
            onError={(e) => e.target.style.display = 'none'}
          />
        )}
        <span className="text-sm max-w-[80px] truncate">
          {user.displayName || user.email}
        </span>
        <span className={status.color} title={status.title}>
          {status.icon}
        </span>
        <button
          onClick={onLogout}
          className="text-xs text-gray-300 hover:text-white ml-1"
        >
          登出
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={onLogin}
      className="flex items-center gap-2 px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      登入
    </button>
  );
}
