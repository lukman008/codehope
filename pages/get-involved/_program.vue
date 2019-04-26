<template>
  
</template>

<script>
export default {
  async asyncData ({ params, error }) {
    try {
      let {program} = params;
      let data = await fetch(`/api/get-involved/${program}`);
      
    } catch (err) {
      
    }
  }
}
</script>

<style>

</style>
