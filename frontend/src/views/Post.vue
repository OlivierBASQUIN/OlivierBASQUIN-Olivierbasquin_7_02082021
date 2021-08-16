<template>
  <div class="post">
    <LoginForm/>
    <Header/>
    <OnePost/>
    <Comments/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue';
import Header from '@/components/Header.vue';
import OnePost from '@/components/OnePost.vue';
import Comments from '@/components/Comments.vue';


export default {
  name: 'Post',

  components: {
    Header,
    LoginForm,
    OnePost,
    Comments
  },
}
</script>
