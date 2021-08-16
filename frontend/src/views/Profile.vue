<template>
    <div class="Profile">
        <LoginForm v-if="connected"/>

        <Header v-if="!connected"/>

        <UserProfile v-if="!connected"/>
        <UserPosts v-if="!connected"/>
        
    </div>
</template>

<script>

import LoginForm from '@/components/LoginForm.vue';
import Header from '@/components/Header.vue';
import UserProfile from '@/components/UserProfile.vue';
import UserPosts from '@/components/UserPosts.vue';

export default {
    name: 'Profile',

    components: {
        LoginForm,
        Header,
        UserProfile,
        UserPosts
  },
}
</script>

<style scoped>

</style>