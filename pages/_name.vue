<template>
  <div class="mt-12">
    <div class="flex space-x-4 justify-between px-6">
      <OtherPokemon :id="prev.id" :pokemon="prev.name" type="prev" />
      <OtherPokemon :id="next.id" :pokemon="next.name" type="next" />
    </div>
    <div class="flex justify-around items-center">
      <Info :pokemon="actual" :species="species" />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    async asyncData({ $axios, params, error }) {
      try {
        const getActual = await $axios.get(`pokemon/${params.name}`);
        const getSpecies = await $axios.get(`pokemon-species/${params.name}`);
        const dataActual = getActual.data;
        const dataSpecies = getSpecies.data;

        const prev =
          dataActual.id === 1
            ? $axios.$get(`pokemon/898`)
            : await $axios.$get(`pokemon/${dataActual.id - 1}`);
        const next =
          dataActual.id === 898
            ? await $axios.$get(`pokemon/1`)
            : await $axios.$get(`pokemon/${dataActual.id + 1}`);

        return { actual: dataActual, species: dataSpecies, prev, next };
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
        title: `${this.capitalize(this.$route.params.name)} | Nuxt pokedex`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `${this.capitalize(
              this.$route.params.name
            )} Pokemon character`,
          },
        ],
      };
    },
    methods: {
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
    },
  };
</script>

<style></style>
