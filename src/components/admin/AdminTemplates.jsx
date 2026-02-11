import { useState } from 'react';
import { Plus, Copy, Edit3, Trash2, Check, X, Package, FileText } from 'lucide-react';
import { iconOptions } from '../../utils/data';

export default function AdminTemplates({ data, onSaveData }) {
  const templates = data.templates || [];
  const [showCreate, setShowCreate] = useState(false);
  const [createMode, setCreateMode] = useState('list'); // 'list' | 'manual'
  const [selectedListId, setSelectedListId] = useState('');
  const [form, setForm] = useState({ name: '', icon: 'clipboard-list', description: '', itemIds: [] });
  const [editingId, setEditingId] = useState(null);
  const [applyingId, setApplyingId] = useState(null);
  const [targetListId, setTargetListId] = useState('');

  const resetForm = () => {
    setForm({ name: '', icon: 'clipboard-list', description: '', itemIds: [] });
    setSelectedListId('');
    setCreateMode('list');
    setShowCreate(false);
  };

  const createFromList = () => {
    const list = data.lists.find(l => l.id === Number(selectedListId));
    if (!list) return;
    setForm({
      name: list.name + ' 範本',
      icon: list.icon || 'clipboard-list',
      description: '',
      itemIds: [...(list.items || [])],
    });
    setCreateMode('manual');
  };

  const toggleItemInForm = (id) => {
    setForm(f => ({
      ...f,
      itemIds: f.itemIds.includes(id) ? f.itemIds.filter(i => i !== id) : [...f.itemIds, id],
    }));
  };

  const saveTemplate = () => {
    if (!form.name.trim()) return;
    const maxId = Math.max(0, ...templates.map(t => t.id));
    const newTemplate = { id: maxId + 1, ...form, name: form.name.trim() };
    onSaveData({ ...data, templates: [...templates, newTemplate] });
    resetForm();
  };

  const updateTemplate = () => {
    if (!form.name.trim()) return;
    const newTemplates = templates.map(t => t.id === editingId ? { ...t, ...form, name: form.name.trim() } : t);
    onSaveData({ ...data, templates: newTemplates });
    setEditingId(null);
    resetForm();
  };

  const deleteTemplate = (id) => {
    if (!confirm('確定刪除此範本？')) return;
    onSaveData({ ...data, templates: templates.filter(t => t.id !== id) });
  };

  const startEdit = (template) => {
    setEditingId(template.id);
    setForm({ name: template.name, icon: template.icon, description: template.description || '', itemIds: [...template.itemIds] });
    setShowCreate(true);
  };

  const applyTemplate = () => {
    const template = templates.find(t => t.id === applyingId);
    const list = data.lists.find(l => l.id === Number(targetListId));
    if (!template || !list) return;
    const newLists = data.lists.map(l =>
      l.id === list.id ? { ...l, items: [...new Set([...(l.items || []), ...template.itemIds])] } : l
    );
    onSaveData({ ...data, lists: newLists });
    setApplyingId(null);
    setTargetListId('');
    alert(`已將範本「${template.name}」套用到「${list.name}」`);
  };

  const getItemNames = (ids) => {
    return ids
      .map(id => data.itemLibrary.find(i => i.id === id))
      .filter(Boolean)
      .map(i => i.name);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">清單範本</h2>
        {!showCreate && (
          <button onClick={() => setShowCreate(true)} className="flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Plus size={16} /> 建立範本
          </button>
        )}
      </div>

      {/* Create / Edit form */}
      {showCreate && (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-3">{editingId ? '編輯範本' : '建立範本'}</h3>

          {!editingId && createMode === 'list' && (
            <div className="mb-4">
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">從現有清單建立</label>
              <div className="flex gap-2">
                <select value={selectedListId} onChange={e => setSelectedListId(e.target.value)} className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
                  <option value="">選擇清單...</option>
                  {data.lists.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                </select>
                <button onClick={createFromList} disabled={!selectedListId} className="px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">
                  <Copy size={16} />
                </button>
              </div>
              <button onClick={() => setCreateMode('manual')} className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline">或手動挑選物品</button>
            </div>
          )}

          {(createMode === 'manual' || editingId) && (
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">範本名稱</label>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100" placeholder="例：出國旅行" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">圖示</label>
                <select value={form.icon} onChange={e => setForm(f => ({ ...f, icon: e.target.value }))} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
                  {iconOptions.map(icon => <option key={icon} value={icon}>{icon}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">說明</label>
                <input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100" placeholder="選填" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">選擇物品 ({form.itemIds.length})</label>
                <div className="max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg">
                  {data.itemLibrary.map(item => (
                    <label key={item.id} className="flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0">
                      <input type="checkbox" checked={form.itemIds.includes(item.id)} onChange={() => toggleItemInForm(item.id)} className="rounded" />
                      <span className="text-sm text-slate-800 dark:text-slate-100">{item.name}</span>
                      <span className="text-xs text-slate-400">{item.category}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={editingId ? updateTemplate : saveTemplate} disabled={!form.name.trim()} className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">
                  {editingId ? '更新' : '建立'}
                </button>
                <button onClick={() => { setEditingId(null); resetForm(); }} className="px-4 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500">取消</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Apply template modal */}
      {applyingId && (
        <div className="bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-4">
          <h3 className="font-semibold text-slate-900 dark:text-slate-50 mb-2">套用範本</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">選擇要套用的目標清單：</p>
          <div className="flex gap-2">
            <select value={targetListId} onChange={e => setTargetListId(e.target.value)} className="flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100">
              <option value="">選擇清單...</option>
              {data.lists.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
            </select>
            <button onClick={applyTemplate} disabled={!targetListId} className="flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50">
              <Check size={16} /> 套用
            </button>
            <button onClick={() => { setApplyingId(null); setTargetListId(''); }} className="px-3 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Template cards */}
      {templates.length === 0 && !showCreate && (
        <div className="text-center py-12 text-slate-400">
          <FileText size={48} className="mx-auto mb-3 opacity-50" />
          <p>尚未建立任何範本</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {templates.map(template => (
          <div key={template.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-50">{template.name}</h3>
                {template.description && <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{template.description}</p>}
              </div>
              <span className="text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">{template.icon}</span>
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              {getItemNames(template.itemIds).slice(0, 5).map((name, i) => (
                <span key={i} className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full">{name}</span>
              ))}
              {template.itemIds.length > 5 && (
                <span className="text-xs text-slate-400">+{template.itemIds.length - 5} 更多</span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500 dark:text-slate-400"><Package size={14} className="inline mr-1" />{template.itemIds.length} 個物品</span>
              <div className="flex gap-1">
                <button onClick={() => setApplyingId(template.id)} className="px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50">套用</button>
                <button onClick={() => startEdit(template)} className="p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"><Edit3 size={14} /></button>
                <button onClick={() => deleteTemplate(template.id)} className="p-1.5 text-slate-400 hover:text-rose-600"><Trash2 size={14} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
