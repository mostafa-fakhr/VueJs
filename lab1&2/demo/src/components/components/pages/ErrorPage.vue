<template>
    <div class="alert-partition p-5 d-flex flex-column align-items-center">
    <h1 class="not-found p-5 d-flex flex-column align-items-center">404 <span>NOT FOUND</span></h1>
    <button class="w-100 btn btn-dark" @click="HandleBackToHome()">Back To Home</button>

    </div>

</template>

<script>
    export default {
        name:'ErrorPage',
        methods:{
            HandleBackToHome(){
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
button{
    width:300px !important;
}
.not-found{
    border:1px solid #80808036;
    width:800px
}
</style>