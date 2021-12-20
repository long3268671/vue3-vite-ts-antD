<template>
    <div>
        这是测试
        <button @click="goUser">去用户页面</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import { useStore } from '@/store/index';
export default defineComponent({
    setup(){
        let useroute = useRoute();
        let userouter = useRouter();
        let store = useStore()
        let count = store.state.count
        console.log('store',store)
        console.log(useroute,userouter)
        let goUser = ()=>{
            console.log(11111)
            userouter.push('./user')
        }
        return {
            count,
            goUser
        }
    }
})
</script>

<style>

</style>