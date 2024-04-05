import { create } from "zustand";
import { createTrackedSelector } from "react-tracked";

const useStore = create((set) => ({
  getTemplateRows: [],
  setTemplateRows: (data) => set({ getTemplateRows: data }),
}));

export const useTemplatePageStore = createTrackedSelector(useStore);
