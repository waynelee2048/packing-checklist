import { useState } from 'react';
import { useFirebase } from './hooks/useFirebase';
import { useSharedLists } from './hooks/useSharedLists';
import { usePWA } from './hooks/usePWA';
import { loadFromLocal } from './utils/data';
import Checklist from './components/Checklist';
import ListsView from './components/ListsView';
import LibraryView from './components/LibraryView';
import AddItemsView from './components/AddItemsView';
import UpdatePrompt from './components/UpdatePrompt';

function App() {
  const [currentView, setCurrentView] = useState('checklist');
  const [activeSharedListId, setActiveSharedListId] = useState(null);
  const initialData = loadFromLocal();
  const { user, data, syncStatus, saveData, handleLogin, handleLogout } = useFirebase(initialData);
  const shared = useSharedLists(user, data);
  const { needRefresh, refresh, dismiss } = usePWA();

  const navigate = (view, params) => {
    if (params?.sharedListId !== undefined) {
      setActiveSharedListId(params.sharedListId);
    }
    setCurrentView(view);
  };

  return (
    <>
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
          onNavigate={navigate}
          onSaveData={saveData}
        />
      )}
      {currentView === 'addItems' && (
        <AddItemsView
          data={data}
          onNavigate={navigate}
          onSaveData={saveData}
        />
      )}
      {needRefresh && (
        <UpdatePrompt onRefresh={refresh} onDismiss={dismiss} />
      )}
    </>
  );
}

export default App;
