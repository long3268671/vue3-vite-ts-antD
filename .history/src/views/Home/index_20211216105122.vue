<template>
    <div>
        这是测试
        <button @click="goUser">去用户页面</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {} from 'v'
export default defineComponent({
    setup(){
        let goUser = ()=>{
            console.log(11111)
        }
        return {
            goUser
        }
    }
})
</script>

<style>

</style>