<template lang="html">
	<div class="app-header">
			<!--<div class="city">
				北京<i class="yo-ico">&#xf031;</i>
			</div>-->
			<router-link to="/AppPosition" tag="div" class="city">
				{{city}}<i class="yo-ico">&#xf031;</i>
			</router-link>
			<div class="title">
				<a href="#">奥买家</a>
			</div>
			<!--<div class="search">
				<i class="yo-ico">&#xf067;</i>
			</div>-->
			<router-link to="/AppSearch" tag="div" class="search">
				<i class="yo-ico">&#xf067;</i>
			</router-link>
		</div>
</template>
	
<script>
	
	import {mapState,mapActions} from 'vuex'
    export default {
        name:'app-header',
         computed:{
        	...mapState(['city'])
        },
         methods:{
        	...mapActions(['getPosition'])
        },
        mounted(){
        	//开始定位
        	this.getPosition()
        }
    }
</script>

<style lang="scss" scoped>
.app-header{
	div:nth-child(2) a{
	font-size: 24px;
	}
}
</style>