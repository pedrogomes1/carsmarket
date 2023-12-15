import { useMutation } from '@tanstack/react-query'
import { useToast } from 'react-native-toast-notifications'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../config/firebase'

export function useUploadFile() {
  const toast = useToast()

  const {
    data: file,
    mutateAsync: handleUploadFile,
    isPending: isPendingUpload,
  } = useMutation({
    mutationFn: async (pictureUri: string) => {
      const response = await fetch(pictureUri)
      const blob = await response.blob()

      const storageRef = ref(storage, 'cars/' + new Date().getTime())

      const upload = await uploadBytes(storageRef, blob)

      return await getDownloadURL(upload.ref).then(async (downloadURL) => {
        return downloadURL
      })
    },
    onError: () => {
      toast.show('Error to upload file', {
        placement: 'top',
        type: 'danger',
      })
    },
  })

  return { file, handleUploadFile, isPendingUpload }
}
