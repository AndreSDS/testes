import create from 'zustand'

interface DataProps {
  description: string
  id: number
  image_url: string
  subtitle: string
  title: string
  trailer_url?: string
}

interface AllDataProps {
  dataFilmes: DataProps[]
  dataPersonagens: DataProps[]
}

interface DataStoreProps {
  data: AllDataProps
  selectedData: DataProps
  setAllData: (data: AllDataProps) => void
  setSelectedData: (data: {}) => void
}

export const useDataStore = create<DataStoreProps>((set) => ({
  data: {
    dataFilmes: [],
    dataPersonagens: [],
  },
  selectedData: null,
  setAllData: (allData: AllDataProps) =>
    set((store) => ({
      ...store,
      data: allData,
    })),
  setSelectedData: (data: DataProps) =>
    set((store) => ({
      ...store,
      selectedData: data,
    })),
}))
