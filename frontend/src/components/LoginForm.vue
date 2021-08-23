<template>
    <div class="wrapper">
        <img src="/assets/img/icon-left-font-monochrome-black.png" alt="Groupomania logo">
        <nav><router-link to="/" class="active">Connexion</router-link> <br/><br/>
        <router-link to="/signup">Inscription</router-link></nav> <br/><br/>
        <form @submit.prevent = login()>

           <label for="login-email">Email :</label>
            <input id="login-email" type="text" placeholder="Email" required>
            
            <label for="login-password">Mot de passe :</label>
            <input id="login-password" type="password" placeholder="Mot de passe" required>

            <div class="error-message">{{message}}</div>

            <button id="login-btn" type="submit">Connexion</button>

            
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginForm',

    data() {
        return {
            message: "",
        };
    },

    methods: {

        login(){
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            axios.post(`${this.$apiUrl}/auth/login`,
                {
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data));
                location.reload();
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    this.message = "Utilisateur inconnu.";
                }
                if (error.response.status === 401) {
                    this.message = "Email ou mot de passe invalide.";
                }
                if (error.response.status === 500) {
                    this.message = "Erreur serveur.";
                }
            });
        }
    }
}
</script>

<style scoped>
    .wrapper{
        max-width: 400px;
        margin: 90px auto;
    }

    img{
        width: 100%;
    }

    nav{
        font-size: 1.5rem;
        margin: 20px;
    }

    .active{
        color: blue;
        font-weight: bold;
    }

    form{
        display: flex;
        flex-direction: column;
    }

    form label{
        color: rgba(0, 0, 0, .5);
        margin: 10px;
    }

    form input{
        font-size: 1rem;
        padding: 10px;
        margin-bottom: 15px;
        text-align: left;
    }

    #login-btn{
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: blue;
        border: none;
        border-radius: 30px;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    #login-btn:hover{
        transform: scale(1.030);
    }

    .error-message{
        background-color: rgba(255, 0, 0, 0.459);
    }

    label{
        font-size: 0.8rem;
        font-weight: bold;
        color: grey;
        text-align: left;
        border: 0;
        height: 1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    
</style>