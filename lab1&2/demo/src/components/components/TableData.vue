<template>
    <div class="table-container d-flex justify-content-center">
        <table class="table">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Role</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row,index) in data" :key="index">
                <th scope="row">{{index + 1}}</th>
                <td>{{row.name}}</td>
                <td>{{row.age}}</td>
                <td>{{row.role}}</td>
                <td><button @click="deleteRow(index)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  name: 'TableData',
  props: {
    data:Array
  },
  methods: {
    deleteRow(index){
        this.$emit('deleteEmitter', index)
    }
  }
  }
</script>

<style scoped>
table{
    width:1320px
}
</style>