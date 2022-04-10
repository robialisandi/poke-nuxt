<template>
  <div>
    <Bar stat="speed" abbr="speed" :value="speed" />
    <Bar stat="HP" abbr="hp" :value="hp" />
    <Bar stat="attack" abbr="attack" :value="attack" />
    <Bar stat="defense" abbr="defense" :value="defense" />
    <Bar stat="sp Atk" abbr="sp_atk" :value="spAtk" />
    <Bar stat="sp Def" abbr="sp_def" :value="spDef" />
  </div>
</template>

<script>
  export default {
    props: ['hp', 'attack', 'defense', 'spAtk', 'spDef', 'speed'],
  };
</script>

<style></style>
