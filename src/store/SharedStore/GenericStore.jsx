import { create } from "zustand";
import { createTrackedSelector } from "react-tracked";

const useStore = create((set) => ({
  isLoading: true,
  error: null,
  success: null,
  searchInputValue: "",
  modalOpen: false,
  isShow: false,
  editAdditionalData: null,

  setIsLoading: (bool) => set(() => ({ isLoading: bool })),
  setError: (err) => set(() => ({ error: err })),
  setSuccess: (scc) => set(() => ({ success: scc })),
  setSearchInputValue: (val) =>
    set(() => ({ searchInputValue: val.toLowerCase() })),
  setModalOpen: (bool) => set(() => ({ modalOpen: bool })),
  setEditData: (id) => set(() => ({ editAdditionalData: id })),

  filterValue: (row, search) => {
    return Object.values(row).toString().toLowerCase().includes(search);
  },
}));

export const useGenericStore = createTrackedSelector(useStore);
