<template>
  <TitlePage :number="'02'" :title="'Meet your crew'" />
  <CrewContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CrewContent from '@/components/CrewContent.vue'

export default defineComponent({
  name: 'CrewView',
  components: { CrewContent }
})
</script>

<style scoped></style>
