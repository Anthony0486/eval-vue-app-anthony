<template>
    <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl"> <RouterLink to="/">Evaluation Vue.js</RouterLink></a>
  </div>
  <div class="flex items-center gap-2">
    <label class="flex cursor-pointer gap-2">
  <span class="label-text">Obscur</span>
  <input v-on:click="darkTheme" type="checkbox" value="synthwave" class="toggle theme-controller" />
  <span class="label-text">Clair</span>
</label>
    <div class="dropdown dropdown-end">
        
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="/src/assets/mario.jpg" />
        </div>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><RouterLink class="justify-between" to="/component_communication">Component Communication</RouterLink></li>
        <li><RouterLink to="/conditional_list_rendering">Contionel list rendering</RouterLink></li>
        <li><RouterLink to="/computed_properties">Computed properties</RouterLink></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script setup>
const darkTheme = () => {
  const body = document.querySelector('body');
  body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
};
</script>