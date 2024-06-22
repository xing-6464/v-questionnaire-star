<template>
  <div style="width: 300px; height: 400px">
    <Pie :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import type { QuestionRadioStatPropsType } from './interface'
import { STAT_COLORS } from '../../../constant/index'
ChartJS.register(ArcElement, Tooltip, Legend)
const options = {
  responsive: true,
  maintainAspectRatio: false
}

defineOptions({ name: 'QuestionRadioStat' })
const props = defineProps<{ stat: QuestionRadioStatPropsType }>()

const data = computed(() => {
  const labels: string[] = []
  const backgroundColor: string[] = []
  const data: number[] = []

  props.stat.forEach((item, index) => {
    labels.push(item.name)
    backgroundColor.push(STAT_COLORS[index])
    data.push(item.count)
  })

  return {
    labels,
    datasets: [
      {
        backgroundColor,
        data
      }
    ]
  }
})
</script>
