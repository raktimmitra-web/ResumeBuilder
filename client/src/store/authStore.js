import { create } from "zustand";
import { persist } from "zustand/middleware";

const authStore = create(
  persist((set) => ({
    user: null,
    accessToken: null,
    setUser: (user) => set({ user }),
    setAccessToken: (accessToken) => set({ accessToken }),
    setUserAuth: (user, accessToken) => set({ user, accessToken }),
    clearAuth: () => set({ user: null, accessToken: null }),
  }))
);

export default authStore;
