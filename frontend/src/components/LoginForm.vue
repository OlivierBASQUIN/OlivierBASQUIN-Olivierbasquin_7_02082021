<template>
    <div class="wrapper">
        <img src="/assets/img/groupomania-logo.png" alt="Groupomania logo">
        <nav><router-link to="/" class="active">Se connecter</router-link> | <router-link to="/signup">S'inscrire</router-link></nav>
        <form>

            <label for="login-email">Email :</label>
            <input id="login-email" type="text" placeholder="Email" required>
            
            <label for="login-password">Mot de passe :</label>
            <input id="login-password" type="password" placeholder="Mot de passe" required>

            <div class="error-message">{{message}}</div>

            <button id="login-btn" type="submit">Connexion</button>

            
        </form>
    </div>
</template>
