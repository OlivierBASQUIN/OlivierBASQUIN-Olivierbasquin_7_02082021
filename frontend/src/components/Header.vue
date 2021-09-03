<template>
    <div class="header">
        <router-link to='/'>
        <h1>
            <img src="/assets/img/icon-left-font-monochrome-black.2.png" alt="Groupomania logo">
         </h1>
        </router-link>

        <nav>
             <router-link to='/'>
                <div>Page d'Accueil</div>
            </router-link>
            <router-link to='/profile'>
                <div>Mon compte</div>
            </router-link>
            <div id="disconnect-btn" @click = disconnect()>Se déconnecter</div>
        </nav>
    </div> 
</template>

<script>
export default {
    name: 'Header',

    methods: {
        disconnect(){
            localStorage.removeItem('user');
            location.href = "/";
        }
    }
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 30px ;
    }

    .header img{
        height: auto;
    }

    nav{
        display: flex;
    }

    nav div{
        font-weight: bold;
        cursor: pointer;
        margin: 0px 15px
    }

    .fas{
        font-size: 1.5rem;
    }

    nav div:hover{
        color: rgb(90, 88, 88);
        text-decoration: underline;
    }

    @media (max-width: 670px) {
        .header{
            flex-direction: column;
            padding: 30px 20px 20px 20px;
        }
    }
</style>
