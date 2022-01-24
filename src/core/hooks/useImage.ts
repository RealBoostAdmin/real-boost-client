import { Bucket } from 'core/models/storage.model';
import { supabase } from 'core/supabase';

export function useImage() {

  const getSignedUrl = async (url: string, bucket: Bucket): Promise<string | null> => {
    const { signedURL, error } = await supabase
      .storage
      .from(bucket)
      .createSignedUrl(url, 60);

    return signedURL;
  };

  const getPublicUrl = (url: string, bucket: Bucket): string | null => {
    const { publicURL, error } = supabase
      .storage
      .from(bucket)
      .getPublicUrl(url);

    return publicURL;
  };

  return {getSignedUrl, getPublicUrl};
}