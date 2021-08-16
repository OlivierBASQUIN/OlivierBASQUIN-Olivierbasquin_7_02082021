<template>
    <div class="UserPost">
        <div  >
                <div class="post">
                    Voici mon post!
                </div> 
            
        </div>

    </div>
</template>

<script>
export default {
    name: 'UserPosts',
}
</script>

<style scoped>
    .UserPost{
        margin: 30px auto;
        max-width: 800px;
    }

    .post{
        padding: 20px 20px 20px 30px;
        border-left: 5px solid red;
        margin-top: 20px;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        text-align: left;
        transition-duration: .1s;
    }

    .post:hover{
        box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.2);
    }

</style>