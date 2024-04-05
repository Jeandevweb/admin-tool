import { create } from "zustand";
import { createTrackedSelector } from "react-tracked";

const useStore = create((set) => ({
  getTelecomRows: [],
  setTelecomRows: (data) => set({ getTelecomRows: data }),
}));

export const useTelecomPageStore = createTrackedSelector(useStore);
