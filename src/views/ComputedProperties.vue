<script setup>
import { ref } from 'vue';

const tickets = ref([
    {
        id: 1,
        titre: "Impossible de se connecter à la base de données",
        categorie: "infrastructure",
        priorite: "Haute"
    },
    {
        id: 2,
        titre: "Le bouton d'envoi ne répond pas",
        categorie: "interface",
        priorite: "Moyenne"
    },
    {
        id: 3,
        titre: "Erreur 500 sur la page de profil",
        categorie: "backend",
        priorite: "Haute"
    },
    {
        id: 4,
        titre: "Le texte est mal aligné sur mobile",
        categorie: "responsive",
        priorite: "Basse"
    },
    {
        id: 5,
        titre: "Les filtres de recherche ne s'appliquent pas",
        categorie: "fonctionnel",
        priorite: "Moyenne"
    },
    {
        id: 6,
        titre: "Notification reçue en double",
        categorie: "notification",
        priorite: "Basse"
    },
] 
);

</script>

<template>
    <input type="search" placeholder="Ex: base de données" class="input input-bordered w-full max-w-xs"/>Rechercher un ticket
</template>