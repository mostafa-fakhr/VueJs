<template>
    <div class="p-5">
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">ID</th>
                    <td colspan="2">{{id}}</td>
                </tr>
                    <tr>
                    <th scope="row">Title</th>
                    <td colspan="2">{{prd.title}}</td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td colspan="2">{{prd.description}}</td>
                </tr>
                    <tr>
                    <th scope="row">Price</th>
                    <td colspan="2">{{prd.price}}</td>
                </tr>
                <tr>
                    <th scope="row">Discount Percentage</th>
                    <td colspan="2">{{prd.discountPercentage}}</td>
                </tr>
                <tr>
                    <th scope="row">Rating</th>
                    <td colspan="2">{{prd.rating}}</td>
                </tr>
                    <tr>
                    <th scope="row">Stock</th>
                    <td colspan="2">{{prd.stock}}</td>
                </tr>
                <tr>
                    <th scope="row">Brand</th>
                    <td colspan="2">{{prd.brand}}</td>
                </tr>
                <tr>
                    <th scope="row">Category</th>
                    <td colspan="2">{{prd.category}}</td>
                </tr>
                    <tr>
                    <th scope="row">Images</th>
                    <td colspan="2">{{prd.thumbnail}}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
import crudOperations from '../../../public/Mixins/crudOperations.js';
    export default {
        name:'ProductDetails',
        mixins:[crudOperations], 
    }
</script>

<style scoped>
</style>