<template>
  <div id="app">
    <div class="sidebar">
      <router-link to="/server-table">Server Table</router-link>
      <router-link to="/other-component">Other Section</router-link>
      <!-- Más links -->
    </div>
    
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// ... Aquí tus scripts si los necesitas.
</script>

<style>
/* ... Aquí tus estilos, también puedes agregar los estilos del sidebar */
.sidebar {
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f0f0f0;
  padding: 20px;
}

.content {
  margin-left: 200px;
}
</style>
