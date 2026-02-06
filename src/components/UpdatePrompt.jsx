import { Sparkles } from 'lucide-react';

export default function UpdatePrompt({ onRefresh, onDismiss }) {
  return (
    <div className="fixed bottom-20 left-4 right-4 bg-indigo-600 text-white rounded-xl border border-indigo-500 p-4 z-50 animate-slide-up">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles size={24} />
          <div>
            <div className="font-medium">有新版本可用</div>
            <div className="text-sm text-indigo-200">點擊更新以取得最新功能</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onDismiss}
            className="px-3 py-2 text-indigo-200 active:text-white text-sm transition-colors duration-150 min-h-[44px]"
          >
            稍後
          </button>
          <button
            onClick={onRefresh}
            className="px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium text-sm active:bg-indigo-50 transition-colors duration-150 min-h-[44px]"
          >
            更新
          </button>
        </div>
      </div>
    </div>
  );
}
