<template>
    <div id="input-main-container">
        
        <label for="org-name-input">Buscar Empresa: </label> <br>
        <div id="input-container">
            <input type="text" placeholder="Ex: google" v-model="orgName" id="org-name-input">
            <ion-icon name="search-outline"></ion-icon>
        </div>
        <br>
        <button @click="getRepos" id="btn-finder">Buscar</button>
        
    </div>

    <!-- Tabela de repositórios -->

    <div id="repos-table">
        <div>
            <div v-if="notFound && notFoundMessage !== '' " id="not-found-message">
                <Message :msg="notFoundMessage"/>
            </div>
            <div else>
                
                <div id="repos-table-heading" v-if="orgPublicRepos != null && notFound === false">
                    <div class="order-id">ID:</div>
                    <div>Repositório:</div>
                
                </div>
                <div id="repos-table-rows" v-if="notFound === false">
                    <div class="repos-table-row" v-for="repo in orgPublicRepos" :key="repo.id">
                        <div class="order-number"> {{ repo.id }}</div>
                        <div>{{ repo.name }}</div>
                        <a target="_blank" :href="repo.html_url">
                            <button id="access-btn">Acessar no Github</button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <!-- fim da tabela -->
   
</template>

<script>
import Message from "../components/Message.vue"
export default {
    name: "ReposFinder",
    data() {
        return{
            orgName: '',
            orgPublicRepos: null,
            notFound: false,
            notFoundMessage: 'Ainda não temos repositórios dessa empresa' 

        }
    },
    components:{
        Message
    },
    methods: {
        async getRepos(){
            const req = await fetch(`https://api.github.com/orgs/${this.orgName}/repos`);
            const data = await req.json();
            this.orgPublicRepos = data;
            this.notFound = this.orgPublicRepos.message === "Not Found";
            console.log(this.orgPublicRepos.message)
            setTimeout(()=>this.notFoundMessage = '', 3000)
        }
    },
   
}
</script>

<style scoped>
#input-main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
}
#input-main-container label{
    font-weight: bold;
    color: #00D96F;
}
#input-main-container #input-container{
    position: relative;
    border: 2px solid #D3D3D3;
    height: 30px;
    width: 200px;
    border-radius: 15px;
}
#input-main-container #org-name-input{
    left:5px;
    border: none;
    border-radius: 15px;
    width: 80%;
    height: 26px;
    padding: 8px 15px;
}
#input-main-container #org-name-input:active{
    border: none;
}
ion-icon{
    position: absolute;
    top: 5px;
    right: 10px;
}
#btn-finder{
    background-color:#00D96F;
    color: #FFF;
    width: 200px;
    border: none;
    border-radius: 15px;
    height: 30px;
    transition: 0.3s;
}
#btn-finder:hover{
    background-color: #222;
    cursor: pointer;
}
#repos-table{
    max-width: 1200px;
    margin: 0 auto; 
}
ul{
    list-style: none;
}


/* Estilização da tabela */

    #repos-table{
        max-width: 670px;
        margin: auto; 
    }
    #repos-table-heading,
    #repos-table-rows,
    .repos-table-row{
        display: flex;
        flex-wrap: wrap; /*colocando um item ao lado do outro nan horizontal*/
        justify-content: center;
    }
    #repos-table-heading{
        font-weight: bold;
        /* padding: 12px; */
        border-bottom: 3px solid #00D96F;
        color: #00D96F;
        padding-bottom: 20px;
       
    }
    /* #not-found-message{
        
    } */
    #repos-table-heading div,
    .repos-table-row div{
        width: 30%;
        margin-right: 20px;
    }
    .repos-table-row{
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #ccc;
        margin: auto;
        justify-content: flex-end;
        padding-right: 40px;
    }
    #repos-table-heading .order-id,
    .repos-table-row .order-number{
        width: 15%;
    }
   
    #access-btn{
        background-color: #00D96F;
        color: #FFF;
        font-weight: bold;
        border: none;
        padding: 10px;
        font-size: 16;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.5s;
        height: 35px;
    }
    .access-btn:hover{
        background-color: transparent;
        color: #222;
    }

@media (max-width: 600px)
{
    #repos-table-heading{
        display: flex;
        justify-content: flex-start;
    }
   .repos-table-row{
        
       display:flex;
       flex-wrap: wrap;
       padding-right: 12px;
       justify-content: space-between;
        
    }
    .repos-table-row div:nth-child(1) {
        margin-right: 20px;
    }
    #access-btn{
        width: 90px;
        height: 60px;
    }
}
</style>
