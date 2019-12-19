<template>
    <div>
        <a v-if="flag" class="block"  :href="showAd.adhref">
            <div class="img">
                <img :src="showAd.imgurl" alt="">
            </div>
            <div class="content">
                <span @click.prevent="closeAd">关闭广告</span>
                <p>好物推荐 - 限时抢购</p>
                <P>点击立即查看！</P>
                <p class="text">{{showAd.imgalt}}</p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    components:{

    },
    data(){
        return{
            flag:true
        }
    },
    computed:{
        showAd(){
            let adlist = this.$store.state.adList
            if(adlist){
                let num = this.getrandom(0,adlist.length)
                return adlist[num]
            }
            return {}
            
        }
    },
    methods:{
        getrandom(min=0,max=1){
          return  Math.floor(Math.random()*(max-min)+min);
        },
        closeAd(){
            this.flag=false;
        }

    },
    mounted(){
    }
}
</script>
<style  scoped>
    .block{
        display: flex;
        width: 100%;
        height: 3.2rem;
        border-top: 1px solid #ccc;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
    }
    .img{
        margin:0 10px;
        height: 2.7rem;
    }
    .img img{
        height: 2.7rem;
        width: 2.7rem;
    }
    .content{
        flex: 1;
        text-align: center;
        position: relative;
    }
    .content p{
        line-height: 2em;
        font-size: 0.4rem;
        color:#f7a822;
    }
    .content .text{
        font-weight: 900;
        color:#f88722;
    }
    .content span{
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 2px;
        border-radius: 4px;
    }

  

</style>