const passwordValidator = require('password-validator');

// Schéma de mot de passe plus sécure
const passwordSchema = new passwordValidator();

// Contraintes du mot de passe
passwordSchema
.is().min(8)                                    // Longueur minimun : 8
.is().max(16)                                   // Longueur maximum : 16
.has().uppercase()                              // Doit avoir au moins une majuscule
.has().digits()                                 // Doit avoir au moins un chiffre

module.exports = passwordSchema;
