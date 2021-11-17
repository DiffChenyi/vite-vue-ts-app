<template lang="">
    <div class="title">
        Style Page
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:"Style"
})
</script>
<style lang="scss">
    $--color-primary:#409eff;
    .title{
        color:$--color-primary
    }
</style>