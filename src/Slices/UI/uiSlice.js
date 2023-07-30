//this manages state of ui such as current tap to show

import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    partyTab: {
      show: false,
      img: { src: "", avgColor: "" },
      artists: [],
      title: "",
    },
    partiesTab: {
      show: true,
    },
  },
  reducers: {
    showPartyTab: (state, action) => {
      const { data } = action.payload;

      state.partyTab.show = true;
      state.partiesTab.show = false;
      state.partyTab.img.src = data.img.src;
      state.partyTab.artists = data.artists;
      state.partyTab.title = data.title;
      state.partyTab.img.avgColor = data.img.avgColor;
    },
    showPartiesTab: (state) => {
      state.partiesTab.show = true;
      state.partyTab.show = false;
    },
  },
});
export const { showPartiesTab, showPartyTab } = uiSlice.actions;
export default uiSlice.reducer;
