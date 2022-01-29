import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      allEvents: [],
      currentListEvents: []
    }
  },
  mutations: {
    FETCH_EVENTS(state, fetchedList) {
      state.allEvents = fetchedList;
    },
    SHOW_ALL(state, allList) {
      state.currentListEvents = allList;
    },
    TOGGLE_BOOKMARK(state, index) {
      state.allEvents[index].bookmark = !state.allEvents[index].bookmark;
    }
  },
  actions: {
    fetchEvents({ commit }, fetchedList) {
      commit('FETCH_EVENTS', fetchedList);
    },
    showAll({ commit }, allList) {
      commit('SHOW_ALL', allList);
    },
    toggleBookmark({ commit }, index) {
      commit('TOGGLE_BOOKMARK', index);
    }
  }
});

export default store;
