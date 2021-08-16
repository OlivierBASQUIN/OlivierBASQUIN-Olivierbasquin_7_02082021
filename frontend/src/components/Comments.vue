<template>
  <div class="Comments">
      
        <form>
            <label for="new-comment">Laisser un commentaire :</label>
            <textarea name="newComment" id="new-comment" placeholder="Laisser un commentaire" required></textarea>
            <button type="submit" id="send-comment">Envoyer</button>
        </form>

        <h2>Commentaires :</h2>

        <div class="comments">
            <div class="comment">
            <div>
                <span class="comment-info">Posté par BASQUIN Olivier le 16/08/2021 </span>
                <span>Supprimer</span>
            </div>
           Quel beau post :)
            </div>
        </div>
        
  </div>
</template>

<script>
export default {
    names: 'Comments',
}
</script>

<style scoped>
    .Comments{
        max-width: 800px;
        margin: 0 auto;
        padding: 30px;
    }

    label{
        text-align: left !important;
    }

    textarea{
        margin: 20px 0px 20px 0px;
        height: 70px;
        width: calc(100% - 22px);
        padding: 10px;
        resize: none;
        overflow-y: scroll;
    }

    button{
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

    .comment{
        padding: 20px 20px 20px 30px;
        border-left: 5px solid rgb(43, 42, 42);
        margin-top: 20px;
        box-shadow: 0px 0px 50px -7px rgba(0,0,0,0.1);
        text-align: left;
        transition-duration: .1s;
    }

    .comment-info{
        display: flex;
        justify-content: space-between;
        color: rgb(0, 0, 0);
        font-size: .8rem;
        margin-bottom: 10px;
    }

    .comment-info span{
        cursor: pointer;
        color: rgb(255, 0, 0);
        font-weight: bold;
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