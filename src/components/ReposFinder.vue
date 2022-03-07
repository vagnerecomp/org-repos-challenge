<template>
    <div id="repos-table">
        <label for="org-name-input">Buscar Empresa: </label> <br>
        <input type="search" placeholder="Ex: google" v-model="orgName" id="org-name-input">
    </div>
   
</template>

<script>
export default {
    data() {
        // orgName
    },
    name: "ReposFinder"
}
</script>

<style scoped>
#repos-table{
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto; 
}
</style>
