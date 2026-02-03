# 打包清單 (Packing Checklist) - React Native App

A mobile packing checklist app built with Expo and React Native.

## Tech Stack

- **Framework**: Expo SDK 54 (managed workflow)
- **UI Components**: Custom components with NativeWind (Tailwind CSS for React Native)
- **Navigation**: Expo Router (file-based routing)
- **Styling**: NativeWind v4 + Tailwind CSS
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Auth with Google Sign-In
- **Storage**: AsyncStorage (local) + Firebase (cloud sync)
- **Animations**: React Native Reanimated

## Features

- ✅ Checklist with progress tracking
- ✅ Multiple lists management
- ✅ Item library with categories
- ✅ Notes for each item
- ✅ Cloud sync with Firebase
- ✅ Google Sign-In authentication
- ✅ Offline support with local storage

## Project Structure

```
native/
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab navigation
│   │   ├── index.tsx      # Checklist screen
│   │   ├── lists.tsx      # Lists management
│   │   ├── library.tsx    # Item library
│   │   ├── add.tsx        # Add items to list
│   │   ├── profile.tsx    # Settings & auth
│   │   └── _layout.tsx    # Tab layout
│   └── _layout.tsx        # Root layout
├── components/
│   └── ui/                # Reusable UI components
│       ├── Box.tsx        # VStack, HStack, Center
│       ├── Text.tsx       # Text, Heading
│       ├── Button.tsx     # Button variants
│       ├── Input.tsx      # Text input
│       ├── Progress.tsx   # Progress bar
│       ├── Checkbox.tsx   # Animated checkbox
│       ├── Card.tsx       # Card container
│       ├── BottomSheet.tsx# Modal bottom sheet
│       └── Select.tsx     # Dropdown select
├── contexts/
│   └── DataContext.tsx    # Global data state & Firebase sync
├── hooks/
│   └── useGoogleAuth.ts   # Google authentication hook
├── utils/
│   ├── data.ts           # Data types & defaults
│   ├── storage.ts        # AsyncStorage helpers
│   └── firebase.ts       # Firebase configuration
├── tailwind.config.js    # Tailwind configuration
├── metro.config.js       # Metro bundler config
└── global.css            # Global Tailwind styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac only) or Android Emulator

### Installation

```bash
cd native
npm install
```

### Development

```bash
# Start Expo development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

### Google Sign-In Setup

To enable Google Sign-In, you need to:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials for:
   - iOS application (get the bundle ID from app.json)
   - Android application (get the package name from app.json)
   - Web application (for Expo Go development)
3. Update the client IDs in `hooks/useGoogleAuth.ts`

## Building for Production

### iOS

```bash
eas build --platform ios
```

### Android

```bash
eas build --platform android
```

## Data Structure

The app uses the same data structure as the web version for seamless cloud sync:

```typescript
interface AppData {
  itemLibrary: Item[];      // All available items
  lists: PackingList[];     // User's packing lists
  activeListId: number;     // Currently selected list
}

interface Item {
  id: number;
  name: string;
  category: string;
  note: string;
}

interface PackingList {
  id: number;
  name: string;
  icon: string;
  items: number[];          // Item IDs in this list
  checkedItems: number[];   // Checked item IDs
}
```

## License

MIT
