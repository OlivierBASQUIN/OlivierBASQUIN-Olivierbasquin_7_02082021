<template>
    <div class="onePost">
        <div class="post-wrapper" v-if="!modify">
            <h2 class="post-title">{{this.post.title}}</h2>
            <div class="post-content" v-html="this.post.content"></div>
        </div>

        <div class="modify-wrapper" v-if="modify">
            <label for="modify-title">Modifier le titre :</label>
            <input type="text" id="modify-title" v-model="this.post.title">

            <label for="modify-content">Modifier le contenu :</label>
            <editor 
                :initialValue="this.post.content"
                apiKey="5iun9sezv4kibsn6zxsf7v0i3gedfka1yxjb1p4du317qo0u"
                v-model="modifiedContent"
                :init="{
                menubar: false,
                plugins: [
                    'advlist autolink lists link',
                    'searchreplace visualblocks code fullscreen',
                    'print preview anchor insertdatetime media',
                    'paste code help wordcount table'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
                }"
            >
                <textarea id="modify-content" v-model="this.post.content"></textarea>
            </editor>
        </div>

        <button v-if="authorized && !modify" @click="modify = true">Modifier</button>
        <button v-if="modify" @click="modify = false">Annuler</button>
        <button v-if="modify" @click="modifyOnePost()">Publier les modifications</button>
        <button v-if="modify" class="delete-btn" @click="deleteOnePost()">Supprimer le post</button>
    </div>
    
</template>

<script>
import axios from 'axios';
import Editor from '@tinymce/tinymce-vue';

export default {
    name: 'OnePost',

    components: {
      editor: Editor
    },

    data(){
        return{
            modifiedContent: '',
            post: [],
            authorized: false,
            modify: false
        }
    },

    mounted(){
        this.getOnePost();
    },

    methods: {
        getOnePost(){
            const postId = this.$route.params.id;
            
            axios.get(`${this.$apiUrl}/posts/${postId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(res => {
                this.post = res.data[0];

                if(this.$user.userId === this.post.userId || this.$user.admin == 1){
                    this.authorized = true;
                 }

                else{
                    this.authorized = false;
                }
            })
        },

        deleteOnePost(){
            const postId = this.$route.params.id;
            
            axios.delete(`${this.$apiUrl}/posts/${postId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(location.href = "/");
        },

        modifyOnePost(){
            const postId = this.$route.params.id;
            const title = document.querySelector('#modify-title').value;
            const content = this.modifiedContent;
            
            axios.put(`${this.$apiUrl}/posts/${postId}`,
                {
                    postId,
                    title,
                    content
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(location.href = "/");
        },
    }
}
</script>

<style scoped>
    /* Post style */
    .post-wrapper{
        margin: 50px auto 30px auto;
        padding: 30px;
        max-width: 800px;
        text-align: left;
        border: 5px solid burlywood;
        box-shadow: 0px 0px 50px -15px black;
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
        box-shadow: 0px 0px 50px -15px black;
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
        background-color: rgb(202, 9, 9) !important;
    }

    label{
        font-size: 0.8rem;
        font-weight: bold;
        color: rgb(109, 109, 109);
        text-align: left;
        border: 0;
        clip: rect(0 0 0 0);
        margin: -1px;
        padding: 0;
    }
</style>