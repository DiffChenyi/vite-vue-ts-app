<template>
    <div>
        数据状态管理 
        <div>
            useStore {{store.state.count}}
        </div>
        <div>
            $store {{$store.state.count}}
        </div>
        <div>
            <button @click="store.dispatch('setCountAsync',num)">+{{num}}</button>
        </div>
    </div>
</template>
<!-- <script setup lang="ts">
    import { ref } from 'vue';
    import { useStore } from 'vuex'
    const num = ref(10);
    const store = useStore();
    console.log(store)
</script> -->
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex'
export default defineComponent({
    name:"State",
    setup(){
        const num = ref(10);
        const store = useStore();
        return {
            num,
            store
        }
    },
    mounted(){
        this.$store.dispatch('setCountAsync',100);
        console.log(this.$store.state.count);
    }
})
</script>
<style lang="">
    
</style>