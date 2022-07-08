import create from 'zustand'

interface DataProps {
  title: string
  subtitle: string
  image_Url: string
  type: string
}

interface DataStoreProps {
  data: DataProps[]
  selectedData: DataProps
  setSelectedData: (data: {}) => void
}

export const useDataStore = create<DataStoreProps>((set) => ({
  data: [],
  selectedData: null,
  setData: (data: DataProps) =>
    set((store) => ({
      ...store,
      data: [...store.data, data],
    })),
  setSelectedData: (currentSelectedData: any) =>
    set({ selectedData: { ...currentSelectedData } }),
}))
