import { create } from "zustand";

export const useRandomStore = create((set) => ({
  currentRuby: 9000,
  resultList: [
    { player: "Admin1", gift: "Đã nhận được gói 10K ruby" },
    { player: "Admin2", gift: "Đã nhận được gói 10K ruby" },
    { player: "Admin3", gift: "Đã nhận được gói 10K ruby" },
    { player: "Admin4", gift: "Đã nhận được gói 10K ruby" },
    { player: "Admin5", gift: "Đã nhận được gói 10K ruby" },
    { player: "Admin6", gift: "Đã nhận được gói 10K ruby" },
    { player: "Admin5", gift: "Đã nhận được gói 10K ruby" },
    { player: "Admin6", gift: "Đã nhận được gói 10K ruby" },
  ],
  increaseCurrentRuby: (gift) => set((state) => ({ currentRuby: state.currentRuby + gift })),
  removeAllBears: () => set({ bears: 0 }),
  updateResult: (newList) => set({ resultList: newList }),
}));
