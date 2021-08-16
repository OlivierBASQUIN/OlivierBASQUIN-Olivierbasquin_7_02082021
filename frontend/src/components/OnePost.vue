<template>
    <div class="onePost">
        <div class="post-wrapper">
            <h2 class="post-title">Meilleur Post du monde</h2>
            <div class="post-content">c'est un super post</div>
        </div>

        <div class="modify-wrapper">
            <label for="modify-title">Modifier le titre :</label>
            <input type="text" id="modify-title" placeholder= "Titre du post">

            <label for="modify-content">Modifier le contenu :</label>
            
                <textarea id="modify-content" placeholder="Contenu du post"></textarea>
        
        </div>

        <button>Modifier</button>
        <button>Annuler</button>
        <button>Valider les modifications</button>
        <button>Supprimer</button>
    </div>
    
</template>

<script>
export default {
    name: 'OnePost',
}
</script>

<style scoped>
    /* Post style */
    .post-wrapper{
        margin: 50px auto 30px auto;
        padding: 30px;
        max-width: 800px;
        text-align: left;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
    }

    .post-title {
        margin: 0;
        color: blue;
        font-size: 2rem;
    }

    .post-content{
        margin-top: 20px;
    }

    /* Modify style */

    .modify-wrapper{
        display: flex;
        flex-direction: column;
        margin: 50px auto;
        padding: 30px;
        max-width: 800px;
        text-align: left;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
    }

    #modify-title {
        margin: 0;
        margin-bottom: 20px;
        color: blue;
        font-size: 2rem;
    }

    #modify-content{
        margin-top: 20px;
        height: 200px;
        width: calc(100% - 22px);
        padding: 10px;
        resize: none;
        overflow-y: scroll;
    }

    .onePost button{
        margin-top: 20px;
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: rgb(43, 42, 42);
        border: none;
        border-radius: 10px;
        transition-duration: 0.2s;
        cursor: pointer;
        margin: 0px 20px 50px 20px;
    }

    .delete-btn{
        background-color: red !important;
    }

    label{
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(109, 109, 109);
        text-align: left;
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
</style>