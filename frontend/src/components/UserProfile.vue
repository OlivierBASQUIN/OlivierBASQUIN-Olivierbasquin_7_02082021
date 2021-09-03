<template>
    <div class="UserProfile">
        <div class="profile-info">
            <h2>Titulaire du compte :</h2>
            <span>{{this.$user.prenom}} </span> <span>{{this.$user.nom}}</span>
        </div>

        <div class="delete-profile" @click="deleteUser()">Supprimer le compte</div>

        <h3>Vos posts :</h3>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserProfile',


  methods: {

    deleteUser(){
      const userId = this.$user.userId;

      axios.delete(`${this.$apiUrl}/auth/${userId}`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.$token}`
            }
          }
      )
      .then(localStorage.removeItem('user'))
      .then(location.href = "/");
    }

  }
}
</script>

<style scoped>

    .profile-info{
        margin: 50px auto;
        max-width: 800px;
    }

    .profile-info h2 {
        margin-bottom: 20px;
        font-size: 3rem;
    }

    .profile-info span {
        font-size: 3rem;
    }

    .delete-profile{
      color: blue;
      margin-bottom: 30px;
      font-size: 24px;
      cursor: pointer;
      width: 250px;
      margin: auto;
    }
     .delete-profile:hover{
      color: red;
      transform: scale(1.02);
      transition-duration: 0.1s;
    }
</style>