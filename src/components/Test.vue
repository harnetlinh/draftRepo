<template>
    <div>
        <br><br>
        <b-table-simple hover small caption-top responsive>
            <b-tr>
                <b-th>Region</b-th>
                <b-th>Accessories</b-th>
            </b-tr>
            <b-tbody v-for="(item,id) in list" :key="id">
                <b-tr>
                    <b-td> {{item.name}} </b-td>
                    <b-td>
                        <b-button @click="openModal(item.id,item.name)">
                            open
                        </b-button>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>

</template>

<script>
export default {
    data(){
        return{
            list:[
                { name: "dog 1", id: 1 },
                { name: "dog 2", id: 2 },
                { name: "dog 3", id: 3 },
                { name: "dog 4", id: 4 }
            ]
        }
    },
    methods:{
        openModal(id,name){
            console.log(id+"  "+name)
        }
    }
}
</script>

<style>

</style>