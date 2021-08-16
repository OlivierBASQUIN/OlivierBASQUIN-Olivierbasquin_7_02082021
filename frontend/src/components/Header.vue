<template>
    <div class="header">
        <router-link to='/'>
        <h1>
            <img src="/assets/img/icon-left-font-monochrome-black.png" alt="Groupomania logo">
        </h1>
        </router-link>

        <nav>
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
        width: 250px;
        height: auto;
    }

    nav{
        display: flex;
    }

    nav div{
        margin-left: 30px;
        font-weight: bold;
        cursor: pointer;
    }

    .fas{
        font-size: 1.5rem;
    }

    nav div:hover{
        color: rgb(117, 117, 117);
    }

    @media (max-width: 670px) {
        .header{
            flex-direction: column;
            padding: 30px 20px 20px 20px;
        }
    }
</style>