<script setup>
import { ref } from 'vue';
import ActiveUser from './ActiveUser.vue';

const users = ref([
    {
        id: '1',
        name: 'Gérard Bouchard',
        age: 18
    },
]);

</script>

<template>
    <div>
            <h1 class="p-8 text-3xl uppercase font-bold md:text-4xl tracking-[0.1em] text-center">Composant gestion de l'utilisateur</h1>
<ActiveUser
    v-for="user in users"
    :key="user.id"
    :name="user.name"
    :phone="user.age"
/>
</div>

</template>