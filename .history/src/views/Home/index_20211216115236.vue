<template>
    <div>
        这是测试
        <button @click="goUser">去用户页面</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {use}
export default defineComponent({
    setup(){
        let useroute = useRoute();
        let userouter = useRouter();
        let store = useStore()
        console.log(useroute,userouter)
        let goUser = ()=>{
            console.log(11111)
            userouter.push('./user')
        }
        return {
            goUser
        }
    }
})
</script>

<style>

</style>