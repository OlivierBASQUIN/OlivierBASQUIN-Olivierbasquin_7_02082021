<template>
    <div class="posts">
        <article >
                <div class="post-header">
                    <span class="post-info">Posté par BASQUIN Olivier le 16/08/2021 </span>
                    <span class="post-modify">Modifier</span> 
                </div>  
                <h2 class="post-title"> post</h2>
                <div class="post-content">Voici mon post</div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'Posts',
}
</script>

<style scoped>
    .posts{
        margin: 0 auto;
        padding: 20px;
        max-width: 800px;
    }

    .post{
        position: relative;
        padding: 20px 20px 20px 30px;
        margin-bottom: 30px;
        border-left: 5px solid red;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        text-align: left;
        transition-duration: .1s;
    }

    .post:hover{
        box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.2);
    }

    .post h2{
        margin-top: 7px;
    }

    .post-header{
        display: flex;
        justify-content: space-between;
        color: rgb(0, 0, 0);
        font-size: .8rem;
    }

    .post-modify{
        color:blue;
        font-size: 1rem;
        font-weight: bold;
    }

    .post-title{
        color:blue;
    }

    .post-content{
        font-size: 1rem;
    }
</style>