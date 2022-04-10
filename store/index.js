export const state = () => {
  return {
    pokemonsList: [],
    loaded: true,

    index: 1,
    endpoint: 20,
  };
};

export const getters = {
  pokemons: state => state.pokemonsList,
  loaded: state => state.loaded,
};

export const mutations = {
  SET_LIST: (state, list) => {
    state.pokemonsList = [...state.pokemonsList, ...list];
  },
  SET_INDEX_ENDPOINT_VALUES: state => {
    state.index = state.endpoint + 1;
    state.endpoint = state.endpoint + 20;
  },
  CHANGE_LOADED: (state, payload) => (state.loaded = payload),
};

export const actions = {
  fetchList({ commit, state }) {
    const pokemonPromises = [];

    commit('CHANGE_LOADED', false);
    for (let i = state.index; i <= state.endpoint; i++) {
      pokemonPromises.push(
        this.$axios.get(`pokemon/${i}`).then(response => response.data)
      );
    }

    Promise.all(pokemonPromises).then(pokemons => {
      commit('SET_LIST', pokemons);
    });

    commit('SET_INDEX_ENDPOINT_VALUES');
    commit('CHANGE_LOADED', true);
  },
};
