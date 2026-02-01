export default function UpdatePrompt({ onRefresh, onDismiss }) {
  return (
    <div className="fixed bottom-20 left-4 right-4 bg-gray-800 text-white rounded-xl shadow-lg p-4 z-50 animate-slide-up">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🆕</span>
          <div>
            <div className="font-medium">有新版本可用</div>
            <div className="text-sm text-gray-300">點擊更新以取得最新功能</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onDismiss}
            className="px-3 py-2 text-gray-300 hover:text-white text-sm"
          >
            稍後
          </button>
          <button
            onClick={onRefresh}
            className="px-4 py-2 bg-white text-gray-800 rounded-lg font-medium text-sm"
          >
            更新
          </button>
        </div>
      </div>
    </div>
  );
}
