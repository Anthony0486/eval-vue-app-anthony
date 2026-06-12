<script setup>
import { ref } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

const emit = defineEmits(['show-info']);
const show = ref(false);

const showInfo = () => {
    show.value = !show.value;
};

</script>

<template>
<div class="card bg-base-100 shadow-xl transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl">
 <div class="card-body text-center">
    <p :class="show ? '' : 'hidden'">Nom: {{ name }}</p>
    <p :class="show ? '' : 'hidden'">Age: {{ age }}</p>
</div>
</div>
</template>