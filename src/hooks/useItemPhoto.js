import { useState } from 'react';
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../utils/firebase';
import { compressImage } from '../utils/imageCompressor';

export function useItemPhoto(user) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadPhoto = async (itemId, file) => {
    if (!user) throw new Error('Not logged in');
    setUploading(true);
    setError(null);
    try {
      const compressed = await compressImage(file);
      const path = `users/${user.uid}/items/${itemId}/photo.jpg`;
      const fileRef = storageRef(storage, path);
      await uploadBytes(fileRef, compressed, { contentType: 'image/jpeg' });
      const url = await getDownloadURL(fileRef);
      return url;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setUploading(false);
    }
  };

  const deletePhoto = async (itemId) => {
    if (!user) return;
    try {
      const path = `users/${user.uid}/items/${itemId}/photo.jpg`;
      const fileRef = storageRef(storage, path);
      await deleteObject(fileRef);
    } catch (err) {
      // Ignore not-found errors (file already deleted)
      if (err.code !== 'storage/object-not-found') {
        console.error('Failed to delete photo:', err);
      }
    }
  };

  return { uploadPhoto, deletePhoto, uploading, error };
}
