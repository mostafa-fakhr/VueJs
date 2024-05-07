<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th class="btn-th" scope="col">View</th>
                <th class="btn-th" scope="col">Update</th>
                <th class="btn-th" scope="col">Delete</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="p in products" :key="p.id">
                <td>{{p.id}}</td>
                <td>{{p.title}}</td>
                <td>{{p.price}}</td>
                <td><router-link class="btn btn-dark" :to="`/products/${p.id}`">See More</router-link></td>
                <td><router-link class="btn btn-dark" :to="`/add/${p.id}`">Edit</router-link></td>
                <td><button class="btn btn-dark" @click="Handledelete(p.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import crudOperations from '../../../public/Mixins/crudOperations.js';

    export default {
        name:'ProductsPage',
       
        mixins:[crudOperations]
        
    }
</script>

<style scoped>
table{
    width:1200px
}
div{
    padding-left: 220px;
    padding-top: 60px;
}
.btn{
    width: 100%;
}
.btn-th{
    text-align: center;
}
</style>