<template>
  <TitlePage :number="'03'" :title="'SPACE LAUNCH 101'" />
  <TechnologyContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TechnologyContent from '@/components/TechnologyContent.vue'

export default defineComponent({
  name: 'TechnologyView',
  components: { TechnologyContent }
})
</script>

<style scoped></style>
