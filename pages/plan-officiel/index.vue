
<template>
  <div style="display: flex; justify-content: center;">
    <img
        src="https://www.tourisme-rennes.com/voy_content/uploads/2025/02/Carte-reseau-express-velo.jpg"
        :alt="`plan officiel du ${getRevName()}`"
        style="width: 800px;"
    >
  </div>
</template>

<script setup lang="ts">
const { getRevName } = useConfig();

const description = `Découvrez le plan officiel du ${getRevName()}`;
const COVER_IMAGE_URL = 'https://cyclopolis.rayonsdaction.org/cover-rayonsdaction.jpg';
useHead({
  title: `Plan du ${getRevName()}`,
  meta: [
    // description
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
    // cover image
    { hid: 'og:image', property: 'og:image', content: COVER_IMAGE_URL },
    { hid: 'twitter:image', name: 'twitter:image', content: COVER_IMAGE_URL }
  ]
});
</script>
