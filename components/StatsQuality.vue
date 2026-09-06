<template>
  <div v-if="stat.distance > 0 || stat.dangerCount > 0" class="my-5 not-prose p-4 bg-[#F9FAFB]">
    <div class="flex flex-col sm:flex-row sm:justify-between gap-y-2 gap-x-8">
      <div v-if="stat.distance > 0" class="text-base font-normal text-gray-900">
        <span class="italic">Sur le total des aménagements réalisés à ce jour, </span>
        <span class="text-ra-orange font-bold">{{ displayDistanceInKm(stat.distance, precision) }}</span> ({{ displayPercent(stat.percent) }})
        <span class="italic">{{ stat.distance < (2 * 1000) ? 'est non satisfaisant' : 'sont non satisfaisants.' }}</span>
      </div>
      <div v-if="stat.dangerCount > 0" class="text-base font-normal text-gray-900">
        <span class="text-ra-orange font-bold">{{ stat.dangerCount }}</span>
        <span class="italic">{{ stat.dangerCount <= 1 ? ' zone problématique subsiste' : ' zones problématiques subsistent' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';
const { getStatsQuality, displayDistanceInKm, displayPercent } = useStats();

const { voies, precision } = defineProps<{
  voies: Collections['voiesCyclablesGeojson'][];
  precision?: number;
}>();

const stat = getStatsQuality(voies);

</script>
