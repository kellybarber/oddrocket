export default {
  state : {
    filmOverlayOpen : false,
    filmData        : {}
  },
  mutations : {
    setOverlay(state, data) {
      state.filmData = data;
      state.filmOverlayOpen = true;
    },
    unsetOverlay(state) {
      state.filmOverlayOpen = false;
    }
  }
}
