<template>
    <form>
        <div class="d-flex flex-column gap-3 container "> 
            <div class="whole-inputs d-flex gap-4 main-inputs">
                <div class="form-group d-flex gap-3 ">
                    <label for="exampleInputEmail1">NAME:</label>
                    <input v-model="user.name" type="text" class="form-control name-input" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Name">
                </div>
                <div class="form-group d-flex gap-3">
                    <label for="exampleInputPassword1">AGE:</label>
                    <input v-model="user.age" type="text" class="form-control age-input" id="exampleInputPassword1" placeholder="Age">
                </div>
            </div>
           <select v-model="user.role" class="custom-select">
                <option disabled selected value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <button  class="btn btn-primary done" @click.prevent="createUser">Submit</button>
        </div>
    </form>

   
 </template>

<style scoped>
    form{
        margin-top: 68px;
    }
    input{
        width: fit-content;
    }

    label{
        padding-top: 6px;
    }

    button{
        width: 565px;
    }

    .container{
        border: 2px solid grey;
        align-items: center;
        height: 233px;
    }
    .done{
            background:black !important;
            color:white;
                border-radius: 22px;
    }
    .main-inputs{
            margin-top: 47px;
    }
    .custom-select{
        width:230px;
    }
</style>

<script>
    export default {
    data() {
        return {
        user:{
            name:"",
            age:"",
            role:"",
        },
        
        };
    },
    methods: {
        createUser() {
            // console.log(this.user,"user");
            this.$emit('userDataEmitter', this.user)
        }

    }
    };
</script>