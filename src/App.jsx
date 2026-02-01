import { useState } from 'react';
import { useFirebase } from './hooks/useFirebase';
import { usePWA } from './hooks/usePWA';
import { loadFromLocal } from './utils/data';
import Checklist from './components/Checklist';
import ListsView from './components/ListsView';
import LibraryView from './components/LibraryView';
import AddItemsView from './components/AddItemsView';
import UpdatePrompt from './components/UpdatePrompt';

function App() {
  const [currentView, setCurrentView] = useState('checklist');
  const initialData = loadFromLocal();
  const { user, data, syncStatus, saveData, handleLogin, handleLogout } = useFirebase(initialData);
  const { needRefresh, refresh, dismiss } = usePWA();

  const navigate = (view) => {
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
        />
      )}
      {currentView === 'lists' && (
        <ListsView
          data={data}
          onNavigate={navigate}
          onSaveData={saveData}
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
