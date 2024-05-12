import { create } from "zustand";

export const useRandomStore = create((set) => ({
  currentRuby: 0,
  nextTime: "29/12/9999",
  resultList: [
    { player: "Admin", gift: "Đang tải dữ liệu !" }
  ],
  increaseCurrentRuby: (gift) => set((state) => ({ currentRuby: state.currentRuby + gift })),
  setCurrentRuby: (ruby) => set({ currentRuby: ruby }),
  setNextTime: (time) => set({ nextTime: time }),
  updateResult: (newList) => set({ resultList: newList }),
}));
