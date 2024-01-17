<template>
  <TitlePage :number="'01'" :title="'Pick your destination'" />
  <DestinationContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DestinationContent from '@/components/DestinationContent.vue'

export default defineComponent({
  name: 'DestinationView',
  components: { DestinationContent }
})
</script>
