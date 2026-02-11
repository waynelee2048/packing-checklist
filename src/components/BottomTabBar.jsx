import { CheckSquare, LayoutList, Package, User } from 'lucide-react';

const tabs = [
  { id: 'checklist', label: '清單', icon: CheckSquare },
  { id: 'lists', label: '所有清單', icon: LayoutList },
  { id: 'library', label: '物品庫', icon: Package },
  { id: 'profile', label: '設定', icon: User },
];

export default function BottomTabBar({ currentView, onNavigate }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 z-40">
      <div className="flex">
        {tabs.map(tab => {
          const isActive = currentView === tab.id;
          const IconComp = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 active:text-slate-600 dark:active:text-slate-300'}`}
              aria-label={tab.label}
            >
              <IconComp size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-xs mt-1 ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
