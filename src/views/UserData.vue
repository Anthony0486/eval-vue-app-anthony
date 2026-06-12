<script setup>
import { ref } from 'vue';
const userName = ref('');
const userAge = ref('');


const emit = defineEmits(['new-user']);

const newUser = () => {
    emit('new-user', userName.value, userAge.value);
};

</script>


<template>
    <div class="p-8 pt-8 flex flex-col  items-center justify-center gap-4">
        <h2 class="p-8 uppercase font-bold md:text-1xl tracking-[0.1em]">Composant formulaire d'édition</h2>
        <input v-model="userName" type="text" placeholder="Entrez votre nom" class="input input-bordered w-full max-w-xs" />Votre nom
        <input v-model="userAge" type="text" placeholder="Entrez votre age" class="input input-bordered w-full max-w-xs" />Vôtre âge
<button @click="newUser" class="btn btn-info" >Mettre à jour</button>
</div>
</template>