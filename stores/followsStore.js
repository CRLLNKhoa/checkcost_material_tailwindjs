import { create } from 'zustand'

export const useFollowStore = create((set) => ({
  follows: [],
  setFollows: (newFollow) => set({ follows: newFollow }),
}))