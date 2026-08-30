<template>
  <div>
    <HomeHeroSection />
    <HomeStatSection />
    <div class="space-y-8 sm:space-y-12 mt-8 pl-1 pr-1">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-2xl font-extrabold tracking-tight sm:text-4xl">
          Où en est le projet ?
        </h2>
        <p class="text-l text-gray-500">
          Initié en 2018 et présenté officiellement en 2021, le Réseau Express Vélo vise à structurer des liaisons cyclables continues entre Rennes et les communes de la métropole. Après une phase de concertation et les premiers travaux lancés en 2022, plusieurs liaisons sont désormais en service. Les aménagements se poursuivent sur d’autres sections reliant Rennes et sa première couronne, tandis que la poursuite du maillage intra rocade est prévue pour s'étaler au delà de 2026.
        </p>
        <div class="max-w-7xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 lg:mt-24">
          <ProgressBar :voies="voies" class="mt-8 md:mt-10" />
          <Stats :voies="voies" class="mt-8" />
          <StatsQuality :voies="voies" class="mt-8" />
          <Typology :voies="voies" class="mt-8 max-w-2xl mx-auto" />
        </div>
        <div class="max-w-7xl mx-auto mt-14 px-4 sm:px-6 lg:px-8 lg:mt-12">
          <div class="space-y-8 sm:space-y-12">
            <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-center">
              <p class="text-xl text-gray-500">
                Choisissez une ligne pour connaitre le détail du projet et voir son niveau d'avancement :
              </p>
            </div>
            <HomeLinesSection class="mt-5" />
          </div>
        </div>
        <h2 class="text-2xl font-extrabold tracking-tight sm:text-4xl">
          Un réseau en plein essor, avec des marges de progression
        </h2>
        <p class="text-l text-gray-500">
          Le <strong>Réseau Express Vélo (REV)</strong> métropolitain a déjà transformé les déplacements à Rennes,
          <strong>rendant accessibles des trajets autrefois difficiles ou risqués</strong>. Adopté par un nombre croissant d’usagers,
          il s’impose comme une alternative crédible à la voiture pour les trajets du quotidien.
        </p>
        <p class="text-l text-gray-500">
          Pourtant, <strong>pour devenir un outil encore plus central dans la mobilité rennaise</strong>, plusieurs points importants doivent être pris en considération :
        </p>
        <ul class="text-l text-gray-500">
          <li>→ <strong>Densifier le maillage intra-rocade</strong> : pour compléter le réseau existant, il est essentiel de compléter les liaisons à l’intérieur de la rocade, tout en maintenant le niveau qualitatif et sécuritaire des aménagements actuels.</li>
          <li>→ <strong>Améliorer la qualité des aménagements</strong> : la qualité des infrastructures, bien qu’en progression, gagne à être renforcée sur certains secteurs du réseau.</li>
          <li>→ <strong>Créer une identité visuelle structurante</strong> : le repérage des lignes, tant sur le terrain que sur les supports cartographiques, pourrait être amélioré pour faciliter l’usage, en mettant une numérotation et un code couleur sur les lignes, comme nous le proposons sur cette plateforme.</li>
          <li>→ <strong>Combler les vides</strong> : quelques axes stratégiques, intra-rocade ou entre communes de la première couronne, restent à développer pour renforcer l'intérêt du réseau. Nous proposons sur cette plateforme un anneau cyclable entre les premières couronnes que vous pouvez visualiser en sélectionnant le "réseau attendu par les usagers" en haut à gauche des cartes affichées.</li>
        </ul>

        <h2 class="text-2xl font-extrabold tracking-tight sm:text-4xl">L’ambition de cette plateforme</h2>
        <ul class="text-l text-gray-500">
          <li>✅ <strong>Valoriser</strong> les avancées déjà réalisées par la métropole, qui font du REV un levier clé de la mobilité cyclable.</li>
          <li>⚠️ <strong>Alerter</strong> la métropole sur les points ou sections problématiques du réseau.</li>
          <li>🔍 <strong>Identifier</strong> les pistes d’amélioration, pour que le réseau réponde toujours mieux aux besoins des usagers.</li>
        </ul>
      </div>
    </div>
    <div class="py-16">
      <LvvCta />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

const { displayQuality, displayQualityOnHomePage } = useConfig();

const { data } = await useAsyncData(() => {
  return queryCollection('voiesCyclablesGeojson').all();
});

const voies: Ref<Collections['voiesCyclablesGeojson'][]> = computed(() => data.value || []);
</script>
