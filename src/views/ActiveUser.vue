<script setup>
import { ref } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

</script>

<template>
<div class="">
 <div class="card-body text-center text-xl italic text-info">
    <p>{{ name }}</p>
    <p>{{ age }} ans</p>
</div>
</div>
</template>