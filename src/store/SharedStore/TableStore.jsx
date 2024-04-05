import { create } from "zustand";
import { createTrackedSelector } from "react-tracked";

import { titleToExclude } from "SharedElements/constants/titleToExclude.js";

const useStore = create((set, get) => ({
  cellData: [],
  editingId: null,
  createData: {},
  getJsonSchema: [],
  getTitleTable: [],
  titleToExclude: titleToExclude,
  currentPage: 1,
  recordsPerPage: 100,

  setCellData: (data) => set(() => ({ cellData: data })),
  setEditingId: (id) => set(() => ({ editingId: id })),
  setCreateData: (state) => set(() => ({ ...state, createData: state })),
  setCurrentPage: (state) => set(() => ({ ...state, currentPage: state })),

  handleChange: (column, value) => {
    const newData = {
      [column]: value,
    };
    set((state) => ({
      cellData: { ...state.cellData, ...newData },
    }));
  },

  handleEdit: (id, row) => {
    get().setEditingId(id), get().setCellData(row);
  },

  columnsTitle: () =>
    get().getTitleTable.filter((el) => !get().titleToExclude.includes(el)),

  setJsonData: (data, titleTable) =>
    set(() => ({
      getJsonSchema: data,
      getTitleTable: titleTable,
    })),
  handleUpdate: () => {
    set(() => ({ editingId: null, cellData: {} }));
  },
}));

export const useTableStore = createTrackedSelector(useStore);
