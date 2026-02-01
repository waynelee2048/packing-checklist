import { useState } from 'react';
import { useFirebase } from './hooks/useFirebase';
import { loadFromLocal } from './utils/data';
import Checklist from './components/Checklist';
import ListsView from './components/ListsView';
import LibraryView from './components/LibraryView';
import AddItemsView from './components/AddItemsView';

function App() {
  const [currentView, setCurrentView] = useState('checklist');
  const initialData = loadFromLocal();
  const { user, data, syncStatus, saveData, handleLogin, handleLogout } = useFirebase(initialData);

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
    </>
  );
}

export default App;
