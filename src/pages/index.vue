<template>
    <div>
        首页
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/api/axios'
export default defineComponent({
    name:"Index",
    created(){
        this.globalAction()
    },
    methods:{
        globalAction(){
            this.$axios.get('users').then((res: any)=>console.log(res)).catch((err: any)=>err)
        },
        includeAction(){
            axios.get('users').then(res=>console.log(res)).catch(err=>err)
        }
    }
})
</script>
<style lang="">
    
</style>