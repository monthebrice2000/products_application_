<template>
    <i class="far fa-star"
       :class="display_star"
       @click="change_star"></i>
</template>

<script>
    export default {
        name: "Star",
        props: [ 'id', 'mode' ],
        data(){
            return {
                fas_star_mode : this.mode === 'fas' ,
            }
        },
        methods:{
          change_star(){
              this.fas_star_mode = !this.fas_star_mode;
              this.$store.dispatch({
                  type:'setStar',
                  value: this.id,
                  parameter: this.fas_star_mode ? +1 : -1,
              })
          }
        },
        computed: {
            display_star(){
                if( this.fas_star_mode ){
                    return { 'fas fa-star': this.fas_star_mode }
                }else{
                   return { 'far fa-star': this.fas_star_mode }
                }
            }
        }
    }
</script>

<style scoped>
    /*.popular .box-container .box .stars i{*/
    /*    color:gold;*/
    /*    font-size: 1.7rem;*/
    /*    padding:1rem .1rem;*/
    /*}*/
</style>
