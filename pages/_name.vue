<template>
  <div class="mt-12">
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
        const dataActual = await $axios.get(`pokemon/${params.name}`);
        const dataSpecies = await $axios.get(`pokemon-species/${params.name}`);
        return { actual: dataActual.data, species: dataSpecies.data };
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
