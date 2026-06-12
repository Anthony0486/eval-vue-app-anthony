<script setup>

import { ref } from 'vue';
import ActiveUser from './ActiveUser.vue';
import UserData from './UserData.vue';

const oneUser = ref(
    {
        name: 'Gérard Bouchard',
        age: 18
    },
);

const updateUser = (userName, userAge) => {
    Object.assign(oneUser.value, {
        name: userName,
        age: Number(userAge),
    });
};

</script>

<template>
    <div class="card bg-base-100 shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
            <h1 class="p-8 text-3xl uppercase font-bold md:text-3xl tracking-[0.1em] text-center">Composant gestion de l'utilisateur</h1>
<ActiveUser
    :name="oneUser.name"
    :age="oneUser.age"
 />
<UserData @new-user="updateUser" />
</div>

</template>

