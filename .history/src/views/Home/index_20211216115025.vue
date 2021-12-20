<template>
    <div>
        这是测试
        <button @click="goUser">去用户页面</button>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {us} from 'vuex'
export default defineComponent({
    setup(){
        let useroute = useRoute();
        let userouter = useRouter();
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