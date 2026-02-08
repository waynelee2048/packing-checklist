import { Package, ListChecks, Share2, Users, BarChart3 } from 'lucide-react';
import StatsCard from './StatsCard';

export default function AdminDashboard({ data, shared }) {
  const itemCount = data.itemLibrary.length;
  const listCount = data.lists.length;
  const sharedByMeCount = Object.keys(shared.sharedByMe || {}).length;
  const sharedWithMeCount = Object.keys(shared.sharedWithMe || {}).length;

  // Category stats
  const categoryStats = {};
  data.itemLibrary.forEach(item => {
    categoryStats[item.category] = (categoryStats[item.category] || 0) + 1;
  });
  const sortedCategories = Object.entries(categoryStats).sort((a, b) => b[1] - a[1]);

  // Top 5 most used items (appear in most lists)
  const itemUsage = {};
  data.itemLibrary.forEach(item => { itemUsage[item.id] = 0; });
  data.lists.forEach(list => {
    (list.items || []).forEach(id => {
      if (itemUsage[id] !== undefined) itemUsage[id]++;
    });
  });
  const top5 = Object.entries(itemUsage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, count]) => {
      const item = data.itemLibrary.find(i => i.id === Number(id));
      return item ? { name: item.name, count } : null;
    })
    .filter(Boolean);

  const maxCategoryCount = sortedCategories.length > 0 ? sortedCategories[0][1] : 1;

  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 mb-4">數據總覽</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatsCard icon={Package} label="物品總數" value={itemCount} color="text-indigo-600" />
        <StatsCard icon={ListChecks} label="清單總數" value={listCount} color="text-emerald-600" />
        <StatsCard icon={Share2} label="已分享清單" value={sharedByMeCount} color="text-amber-600" />
        <StatsCard icon={Users} label="收到分享" value={sharedWithMeCount} color="text-rose-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category stats */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 size={18} className="text-slate-500" />
            <h3 className="font-semibold text-slate-900">分類統計</h3>
          </div>
          {sortedCategories.length === 0 ? (
            <p className="text-sm text-slate-400">尚無物品</p>
          ) : (
            <div className="space-y-3">
              {sortedCategories.map(([category, count]) => (
                <div key={category}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{category}</span>
                    <span className="text-slate-500">{count}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all"
                      style={{ width: `${(count / maxCategoryCount) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Top 5 items */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Package size={18} className="text-slate-500" />
            <h3 className="font-semibold text-slate-900">最常使用物品 Top 5</h3>
          </div>
          {top5.length === 0 ? (
            <p className="text-sm text-slate-400">尚無資料</p>
          ) : (
            <div className="space-y-2">
              {top5.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-slate-400 w-5">{i + 1}</span>
                    <span className="text-slate-800">{item.name}</span>
                  </div>
                  <span className="text-sm text-slate-500">出現在 {item.count} 個清單</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
