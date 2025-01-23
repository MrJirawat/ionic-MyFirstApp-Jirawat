<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"

  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <memory-overview 
      v-else 
      :title="loadedMemory.title" 
      :image="loadedMemory.image" 
      :description="loadedMemory.description"
    ></memory-overview>
  </base-layout>
</template>

<script>
import MemoryOverview from "../component/memories/MemoryOverview.vue";

export default {
  components: {
    MemoryOverview,
  },
  data() {
    return {
      memoryId: this.$route.params.id, 
     
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memoryById(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>