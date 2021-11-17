<template lang="">
    <div>
        <el-divider content-position="center">Button</el-divider>   
        <el-button type="primary">Primary</el-button>

        <el-divider content-position="center">Link</el-divider>   
        <el-link type="primary">primary</el-link>
    
        <el-divider content-position="center">Select</el-divider>   
        <el-select v-model="value" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
        </el-select>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
export default defineComponent({
    name:"Element",
    setup() {
    return {
      options: ref([
        {
          value: 'Option1',
          label: 'Option1',
        },
        {
          value: 'Option2',
          label: 'Option2',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
        {
          value: 'Option4',
          label: 'Option4',
        },
        {
          value: 'Option5',
          label: 'Option5',
        },
      ]),
      value: ref(''),
    }
  },
})
</script>
<style lang="">
    
</style>