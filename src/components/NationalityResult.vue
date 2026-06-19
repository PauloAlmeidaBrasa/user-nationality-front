<script setup>
import { computed } from 'vue'

const props = defineProps({
  nationalityData: {
    type: Object,
    default: null
  }
})

const countryNames = {
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  CN: 'China',
  RU: 'Russia',
  SB: 'Solomon Islands',
  DE: 'Germany',
  IT: 'Italy',
  US: 'United States',
  GB: 'United Kingdom',
  FR: 'France',
  ES: 'Spain',
  PT: 'Portugal',
  BR: 'Brazil',
  IN: 'India',
  JP: 'Japan',
  CA: 'Canada',
  AU: 'Australia'
}

const topNationality = computed(() => {
  const countries = props.nationalityData?.country
  if (!Array.isArray(countries) || countries.length === 0) {
    return null
  }

  return countries.reduce((best, current) => {
    if (!best || current.probability > best.probability) {
      return current
    }
    return best
  }, null)
})

const topCountryName = computed(() => {
  if (!topNationality.value) {
    return null
  }

  return countryNames[topNationality.value.country_id] ?? topNationality.value.country_id
})

const topProbText = computed(() => {
  if (!topNationality.value) {
    return null
  }
  return `${(topNationality.value.probability * 100).toFixed(2)}%`
})
</script>

<template>
  <section class="nationality-result">
    <h2>Nationality Result</h2>

    <div v-if="!props.nationalityData">
      Enter a name and click search to load data.
    </div>

    <div v-else>
      <p>
        Name searched: <strong>{{ props.nationalityData.name }}</strong>
      </p>

      <div v-if="topNationality">
        <p>
          Most likely nationality: <strong>{{ topCountryName }}</strong>
        </p>
        <p>
          Probability: <strong>{{ topProbText }}</strong>
        </p>
      </div>

      <div v-else>
        No nationality candidates were returned.
      </div>
    </div>
  </section>
</template>
