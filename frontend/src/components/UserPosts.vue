<template>
    <div class="UserPost">
        <div  v-for= "post in posts" :key="post.id">
            <router-link :to="{ name: 'Post', params: { id: post.id } }">
                <div class="post">
                    {{post.title}}
                </div> 
            </router-link>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserPosts',

    data(){
        return{
            posts: []
        }
    },

    mounted(){
        this.getUserPosts();
    },

    methods: {
        getUserPosts(){
            const userId = this.$user.userId;
            
            axios.get(`${this.$apiUrl}/posts/user${userId}/posts`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.$token}`
                    }
                }
            )
            .then(res => this.posts = res.data)
        }
    }

}
</script>

<style scoped>
    .UserPost{
        margin: 30px auto;
        padding: 0 0 120px 0;
        max-width: 700px;
    }

    .post{
        padding: 20px 20px 20px 30px;
        border: 5px solid burlywood;
        box-shadow: 0px 0px 50px -15px black;
        margin: 20px;
        text-align: left;
        transition-duration: .1s;
    }

    .post:hover{
        box-shadow: 0px 0px 25px -7px rgba(0, 0, 0, 0.3);
    }

</style>