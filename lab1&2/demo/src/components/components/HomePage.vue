<template>
<div>
  <formInputs @userDataEmitter="saveUserData"></formInputs>
  <div class="d-flex gap-4 justify-content-center p-4">
    <button @click="setSelectedUserType('ADMIN')" class="role-buttons">ADMIN</button>
    <button @click="setSelectedUserType('USER')" class="role-buttons">USER</button>
  </div>

  <TableData v-if="tableData.length" :data="tableData" @deleteEmitter="deleteRow"></TableData>
</div>
</template>

<script>
import FormInputs from '@/components/FormInputs'
import TableData from '@/components/TableData'

export default {
  name: 'HomePage',
  components:{
    FormInputs,
    TableData
  },
  data(){
    return{
      users:[],
      admins:[],
      tableData:[],
    }
  },
  methods:{
   saveUserData(userData) {
      if (userData.role === "Admin") {
        this.admins.push({...userData});
      } else if (userData.role === "User") {
        this.users.push({...userData});
      }
    },
    setSelectedUserType (userType){
      this.tableData = userType === "ADMIN" ? this.admins : this.users;
    },
    deleteRow(index){
      console.log(this.tableData,"weeeee")
      if(this.tableData.length){
        this.tableData.splice(index, 1);
        console.log({
          TableData:this.tableData,
          admins:this.admins,
          index:index
        })
      }
      console.log({
        TableData:this.tableData,
        admins:this.admins,
          index:index

      })
    }
  },
 
}
</script>


<style scoped>

  .role-buttons{
    width: 100px;
    background: black;
    color: white;
    height: 38px;
    border-radius: 19px;
  }
</style>