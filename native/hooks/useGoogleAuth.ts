import { useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/utils/firebase';

WebBrowser.maybeCompleteAuthSession();

const WEB_CLIENT_ID = '109766093944-u55gab6dh3a5gmcark6st7o0tv836na5.apps.googleusercontent.com';

export function useGoogleAuth() {
  const [isLoading, setIsLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      setIsLoading(true);
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .catch((error) => {
          console.error('Firebase sign in error:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [response]);

  const signIn = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Google sign in error:', error);
    }
  };

  return {
    signIn,
    isLoading,
    isReady: !!request,
  };
}
