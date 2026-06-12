<script setup>
import { ref } from "vue";

const isHidden = ref(false);

const displayList = () => {
    isHidden.value = !isHidden.value;
};

const shopList = ref([]);
const productValue = ref('');

const addProduct = (product) => {
    shopList.value.push(product.trim());
};
const deleteProduct = (index) => {
  shopList.value.splice(index, 1)
};
</script>

<template>
  <div class="p-8 pt-8 flex flex-col  items-center justify-center gap-4 counter-card">
    <h1 class="p-8 text-3xl uppercase font-bold md:text-4xl tracking-[0.1em]">Liste de courses 📝</h1>
        <input v-model="productValue"
      type="text"
      placeholder="Nom du produit"
      class="input input-bordered w-full max-w-xs"
    />
    <button @click="addProduct(productValue)" class="btn btn-success">Ajouter à votre liste de courses</button>
    <p v-if="shopList.length === 0" class="py-4"><strong>La liste est vide</strong></p>
    <ul v-else :class="isHidden ? 'hidden' : ''">
    <li v-for="(product, index) in shopList" :key="index">
    {{ product }} <i class="cursor-pointer" @click="deleteProduct(index)">&#x274C</i>
</li>
</ul>
<button @click="displayList" class="btn" :class="isHidden ? 'btn-primary' : 'btn-secondary'">Afficher/Cacher la liste</button>

  </div>
</template>