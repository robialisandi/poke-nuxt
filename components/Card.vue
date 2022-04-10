<template>
  <div>
    <nuxt-link :to="'/' + pokemon" class="text-center text-sm">
      <div class="w-64 h-min-max m-3 p-4 rounded-3xl" :class="'bg-' + typeOne">
        <h1 class="text-2xl capitalize text-center text-white">
          {{ pokemon }}
        </h1>
        <img
          :src="imgUrl"
          :alt="pokemon"
          class="w-36 h-36 mx-auto my-2"
          loading="lazy"
        />
        <h1 class="text-xl text-center text-white">#{{ id }}</h1>
        <div class="flex flex-row justify-center">
          <span
            class="mx-2 border-2 rounded-3xl w-1/2 text-center capitalize bg-white"
          >
            {{ typeOne }}
          </span>
          <span
            v-if="typeOne !== typeTwo"
            class="mx-2 border-2 rounded-3xl w-1/2 text-center capitalize bg-white"
          >
            {{ typeTwo }}
          </span>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: ['pokemon', 'typeOne', 'typeTwo', 'imgUrl', 'id'],
  };
</script>

<style></style>
