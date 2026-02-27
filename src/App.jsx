import { useState } from 'react';
import { Agentation } from 'agentation';
import { useFirebase } from './hooks/useFirebase';
import { useSharedLists } from './hooks/useSharedLists';
import { useAdmin } from './hooks/useAdmin';
import { useCategories } from './hooks/useCategories';
import { useTheme } from './hooks/useTheme';
import { loadFromLocal } from './utils/data';
import Checklist from './components/Checklist';
import ListsView from './components/ListsView';
import LibraryView from './components/LibraryView';
import AddItemsView from './components/AddItemsView';
import ProfileView from './components/ProfileView';
import AdminView from './components/admin/AdminView';
import BottomTabBar from './components/BottomTabBar';


function App() {
  const [currentView, setCurrentView] = useState('lists');
  const [activeSharedListId, setActiveSharedListId] = useState(null);
  const initialData = loadFromLocal();
  const { user, data, syncStatus, saveData, handleLogin, handleLogout } = useFirebase(initialData);
  const shared = useSharedLists(user, data);
  const admin = useAdmin(user);
  const { categories, addCategory, updateCategory, removeCategory } = useCategories();
  const { preference: themePreference, changeTheme: onThemeChange } = useTheme();

  const navigate = (view, params) => {
    if (params?.sharedListId !== undefined) {
      setActiveSharedListId(params.sharedListId);
    }
    setCurrentView(view);
  };

  const showTabBar = currentView !== 'addItems' && currentView !== 'admin';

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-0">
        {currentView === 'checklist' && (
          <Checklist
            data={data}
            user={user}
            syncStatus={syncStatus}
            onLogin={handleLogin}
            onLogout={handleLogout}
            onNavigate={navigate}
            onSaveData={saveData}
            shared={shared}
            activeSharedListId={activeSharedListId}
            categories={categories}
          />
        )}
        {currentView === 'lists' && (
          <ListsView
            data={data}
            user={user}
            onNavigate={navigate}
            onSaveData={saveData}
            shared={shared}
          />
        )}
        {currentView === 'library' && (
          <LibraryView
            data={data}
            user={user}
            onNavigate={navigate}
            onSaveData={saveData}
            categories={categories}
            onAddCategory={addCategory}
            onUpdateCategory={updateCategory}
            onRemoveCategory={removeCategory}
          />
        )}
        {currentView === 'addItems' && (
          <AddItemsView
            data={data}
            onNavigate={navigate}
            onSaveData={saveData}
            categories={categories}
          />
        )}
        {currentView === 'profile' && (
          <ProfileView
            user={user}
            syncStatus={syncStatus}
            onLogin={handleLogin}
            onLogout={handleLogout}
            onNavigate={navigate}
            isAdmin={admin.isAdmin}
            themePreference={themePreference}
            onThemeChange={onThemeChange}
          />
        )}
        {currentView === 'admin' && admin.isAdmin && (
          <AdminView
            data={data}
            user={user}
            shared={shared}
            onNavigate={navigate}
            onSaveData={saveData}
            admin={admin}
            categories={categories}
            categoryActions={{ addCategory, updateCategory, removeCategory }}
          />
        )}
        {currentView === 'admin' && !admin.isAdmin && !admin.loading && (
          <div className="flex flex-col items-center justify-center h-full p-4">
            <p className="text-slate-500 dark:text-slate-400 mb-4">你沒有管理後台的存取權限</p>
            <button onClick={() => navigate('profile')} className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg">返回設定</button>
          </div>
        )}
      </div>
      {showTabBar && (
        <BottomTabBar
          currentView={currentView === 'checklist' ? 'lists' : currentView}
          onNavigate={(view) => navigate(view, { sharedListId: null })}
        />
      )}
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
}

export default App;
