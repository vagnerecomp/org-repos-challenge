<template>
    <ul>
        <li v-for="repo in repository" :key="repo.id">{{repo.name}}</li>
    </ul>
</template>

<script>
        // Criar data "repository" no data()
        async getRepos(){
            const req = await fetch("https://api.github.com/orgs/google/repos");
            const data = await req.json();
            this.repository = data;
        }


        this.getRepos();


</script>