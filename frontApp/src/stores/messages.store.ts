import { create } from "zustand";
import { MessagesType, MessageType } from "../types/types";

type useMessagesType = {
  messages: MessagesType;
  addNewMessage: (message: MessageType) => void;
  resetMessages: () => void;
};

export const useMessages = create<useMessagesType>((set) => ({
  messages: [],
  addNewMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  resetMessages: () => set({ messages: [] }),
}));
