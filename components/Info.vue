<template>
  <div class="w-auto py-4 px-7">
    <img
      class="mx-auto h-64 w-64"
      :src="
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
        pokemon.id +
        '.png'
      "
      :alt="pokemon.name"
    />
    <div class="flex flex-row justify-center my-3" v-if="pokemon.types">
      <span
        class="mx-2 border-2 rounded-3xl w-1/4 text-center capitalize"
        :class="'border-' + pokemon.types[0].type.name"
        >{{ pokemon.types[0].type.name }}</span
      >
      <span
        v-if="pokemon.types[1] !== undefined"
        class="mx-2 border-2 rounded-3xl w-1/4 text-center capitalize"
        :class="'border-' + pokemon.types[1].type.name"
        >{{ pokemon.types[1].type.name }}</span
      >
    </div>
    <p class="text-3xl text-center capitalize">{{ pokemon.name }}</p>
    <div v-if="species" class="text-center my-2">
      <p class="text-lg" v-if="!(species.genera[7] == undefined)">
        {{ species.genera[7].genus }}
      </p>
      <p v-if="!(species.flavor_text_entries[0] == undefined)">
        {{ species.flavor_text_entries[0].flavor_text }}
      </p>
    </div>
    <h1 class="text-center text-xl my-2">Stats:</h1>
    <div v-if="pokemon.stats">
      <Stats
        :hp="pokemon.stats[0].base_stat"
        :attack="pokemon.stats[1].base_stat"
        :defense="pokemon.stats[2].base_stat"
        :spAtk="pokemon.stats[3].base_stat"
        :spDef="pokemon.stats[4].base_stat"
        :speed="pokemon.stats[5].base_stat"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: ['pokemon', 'species'],
  };
</script>

<style></style>
