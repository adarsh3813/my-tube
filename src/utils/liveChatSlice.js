import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
    clearChat: (state) => {
      state.messages.length = 0;
    },
  },
});

export const { addMessage, clearChat } = liveChatSlice.actions;
export default liveChatSlice.reducer;
