<template>
    <div class="box">
        这是测试
        {{count}}
        <button @click="addCount">增加</button>
        <button @click="goUser">去用户页面</button>
         <a-button type="primary">Primary Button</a-button>
         <a-button>Default Button</a-button>
        <a-button type="dashed">Dashed Button</a-button>
        <a-button type="text">Text Button</a-button>
        <a-button type="link">Link Button</a-button>
    </div>
</template>

<script lang="ts">
import {defineComponent,computed } from 'vue'
import {useRoute,useRouter} from 'vue-router'
import { useStore } from '@/store/index';
export default defineComponent({
    setup(){
        let useroute = useRoute();
        let userouter = useRouter();
        let store = useStore()
        let count = computed(()=>store.state.count)
        console.log('store',store)
        console.log(useroute,userouter)
        let goUser = ()=>{
            console.log(11111)
            userouter.push('./user')
        }
        let addCount = ()=>{
            store.commit('increment')
        }
        return {
            count,
            goUser,
            addCount
        }
    }
})
</script>

<style scoped lang="less">
.box{
    border: ;
}
</style>