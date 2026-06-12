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

const selectedPriority = ref('');

</script>

<template>
    <div class="p-8 pt-8 flex items-center justify-center gap-4">
s se  <fieldset className="fieldset flex flex-col ">
  <legend className="fieldset-legend">Rechercher un ticket</legend>
  <input type="text" className="input" placeholder="Ex: base de données" />
  <legend className="fieldset-legend">Sélectionner une priorité</legend>
  <select defaultValue="Pick a color" className="select">
  <option disabled={true}>Priorité</option>
  <option>Haute</option>
  <option>Moyenne</option>
  <option>Basse</option>
</select>
</fieldset>
</div>
</template>