<template>
<form class="p-5" action="" @submit.prevent="this.id ? HandlePutRequest() : HandlePostRequest()">

        <div class="d-flex flex-column gap-3 container "> 
            <div class="whole-inputs d-flex gap-4 main-inputs flex-column">
                <div class="form-group d-flex gap-3 flex-column">
                    <label for="exampleInputEmail1">Title:</label>
                    <input v-model.lazy.trim="title" type="text" class="form-control name-input" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Product Title">
                </div>
                <div class="form-group d-flex gap-3 flex-column">
                    <label for="exampleInputPassword1">Price:</label>
                    <input v-model.lazy.number="price" type="number" class="form-control age-input" id="exampleInputPassword1" placeholder="Enter Product Price">
                </div>
                <div class="form-group d-flex gap-3 flex-column">
                    <label for="exampleInputEmail1">Brand:</label>
                    <input v-model="brand" type="text" class="form-control name-input" id="exampleInputEmail1" aria-describedby="name" placeholder="Enter Product Brand">
                </div>
                <div class="form-group d-flex gap-3 flex-column">
                    <label for="exampleInputPassword1">Description:</label>
                    <input v-model="description" type="text" class="form-control age-input" id="exampleInputPassword1" placeholder="Enter Product Description">
                </div>
            </div>
            <button  class="btn btn-dark done">Submit</button>
        </div>
    </form>

</template>

<script>
import crudOperations from '../../../public/Mixins/crudOperations.js';

    export default {
        name:'AddProduct',
        mixins:[crudOperations], 
    }
</script>

<style scoped>

.container{
    border: 2px solid #80808036;
    height: 500px;
}
.whole-inputs{
        padding-top: 20px;
}
</style>