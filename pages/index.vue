<template>
  <div class="w-full">
    <div class="flex my-3 flex-wrap justify-center">
      <div v-for="(pokemon, i) in pokemons" :key="i">
        <LazyCard
          :pokemon="pokemon.name"
          :typeOne="pokemon.types[0].type.name"
          :typeTwo="
            pokemon.types[1] !== undefined
              ? pokemon.types[1].type.name
              : pokemon.types[0].type.name
          "
          :imgUrl="pokemon.sprites.other['official-artwork'].front_default"
          :id="pokemon.id"
        />
      </div>
    </div>
    <div class="text-center pb-20">
      <Spinner v-if="loaded" class="mx-auto mb-3" />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'IndexPage',
    scrollToTop: true,
    async asyncData({ store }) {
      try {
        await store.dispatch('fetchList');
      } catch (err) {
        if (err.response !== undefined) {
          return error({
            statusCode: err.response.status,
            message: err.response.statusText,
          });
        } else {
          error({ statusCode: 503, message: 'We have a problem.' });
        }
      }
    },
    head() {
      return {
        title: 'Nuxt pokedex',
      };
    },
    computed: {
      ...mapGetters(['pokemons', 'loaded']),
    },
    methods: {
      loadMorePokemons() {
        window.onscroll = () => {
          let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
          if (bottomOfWindow) {
            this.$store.commit('CHANGE_LOADED', true);
            this.fetchList();
          }
        };
      },
      ...mapActions(['fetchList']),
    },
    mounted() {
      this.loadMorePokemons();
    },
  };
</script>
