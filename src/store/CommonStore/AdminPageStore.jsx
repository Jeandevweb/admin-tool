import { create } from "zustand";
import { createTrackedSelector } from "react-tracked";

const useStore = create((set) => ({
  getDataRows: [],

  setDataRows: (data) => set({ getDataRows: data }),
}));

export const useAdminPageStore = createTrackedSelector(useStore);
