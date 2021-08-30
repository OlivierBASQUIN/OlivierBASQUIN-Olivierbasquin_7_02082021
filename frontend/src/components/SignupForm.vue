<template>
    <div class="wrapper">
        <form @submit.prevent = signup()>
            <img src="/assets/img/icon-left-font-monochrome-black.png" alt="Groupomania logo">
            <nav><router-link to="/">Connexion</router-link><br/><br/>
            <router-link to="/signup" class="active">Incription</router-link></nav><br/><br/>
            <label for="signup-nom">Nom :</label>
            <input id="signup-nom" type="text" placeholder="Nom" pattern= "[a-zA-Zéèêöï -]+" required>
            
            <label for="signup-prenom">Prenom :</label>
            <input id="signup-prenom" type="text" placeholder="Prenom" pattern= "[a-zA-Zéèêöï -]+" required>

            <label for="signup-password">Mot de passe :</label>
            <input id="signup-password" type="password" placeholder="Mot de passe" minlength="8" pattern= "[0-9a-zA-Zéèêöï -+]+" required>

            <label for="signup-password-verification">Vérification du mot de passe :</label>
            <input id="signup-password-verification" type="password" placeholder="Entrez une nouvelle fois le mot de passe" required>

            <label for="signup-email">Email :</label>
            <input id="signup-email" type="email" placeholder="Email" required>

            <div class="error-message">{{message}}</div>

            <button id="signup-btn" type="submit">S'inscrire</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SignupForm',

    data() {
        return {
            message: "",
        };
    },

    methods: {
        signup(){
            const nom = document.getElementById("signup-nom").value;
            const prenom = document.getElementById("signup-prenom").value;
            const password = document.getElementById("signup-password").value;
            const passwordVerif = document.getElementById("signup-password-verification").value;
            const email = document.getElementById("signup-email").value;

            if(password === passwordVerif){
                axios.post(`${this.$apiUrl}/auth/signup`,
                    {
                        nom,
                        prenom,
                        password,
                        email
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(res => {
                    if(res.status === 201) {
                         location.href = '/';
                    }
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        this.message = "Email non disponible.";
                    }  
                });
            }
            else if( password != passwordVerif){
                this.message = "Vérifier le mot de passe";
            }
            
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

    #signup-btn{
        padding: 10px;
        font-size: 1.1rem;
        color: white;
        background-color: blue;
        border: none;
        border-radius: 30px;
        transition-duration: 0.2s;
        cursor: pointer;
    }

    #signup-btn:hover{
        transform: scale(1.030);
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