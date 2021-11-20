<template lang="">
    <div>
        <el-divider content-position="center">响应式变量</el-divider>
        <div>ref：{{title}}</div>
        <div>reactive：{{people.name}}-{{people.age}}</div>
        <div>toRefs：{{name}}-{{age}}</div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref,reactive,toRefs } from "vue"

export default defineComponent({
    name:"React",
    setup(){
        // 单值
        let title = ref('标题');
        // 多值
        let people = reactive({
            name:'此言差矣',
            age:24
        })
        // 多值展开&解构
        const user = toRefs(people);

        return {
            title,
            people,
            ...user
        }
    }
})
</script>
<style lang="">
    
</style>