<template>
  <div style="width: 400px; height: 300px">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import type { QuestionCheckboxStatType } from './interface'
import { computed } from 'vue'

const options = {
  responsive: true,
  maintainAspectRatio: false
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const props = defineProps<{ stat: QuestionCheckboxStatType }>()
const data = computed(() => {
  const labels: string[] = []
  const data: number[] = []

  props.stat.forEach((item) => {
    labels.push(item.name)
    data.push(item.count)
  })

  return {
    labels,
    datasets: [
      {
        label: '合计',
        backgroundColor: '#8884d8',
        data
      }
    ]
  }
})
</script>
