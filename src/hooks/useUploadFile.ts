import { useMutation } from '@tanstack/react-query'
import { useToast } from 'react-native-toast-notifications'

import { api } from '@/libs/api'

export function useUploadFile() {
  const toast = useToast()

  const {
    data: file,
    mutateAsync: handleUploadFile,
    isPending: isPendingUpload,
  } = useMutation({
    mutationFn: async (pictureUri: string) => {
      const uploadFormData = new FormData()

      uploadFormData.append('file', {
        uri: pictureUri,
        name: 'image.jpg',
        type: 'image/jpeg',
      } as any)

      const file = await api.post('/upload', uploadFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return file.data.fileUrl
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
