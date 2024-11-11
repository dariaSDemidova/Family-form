<script>
export default {
  name: 'Header',
};
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/logo.svg" alt="logo">
    </div>
    <nav class="nav">
      <router-link to="/" class="nav-link">Форма</router-link>
      <router-link to="/preview" class="nav-link">Превью</router-link>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 574px 23px 92px;
    height: 76px;
    box-shadow: 0px 1px 0px 0px #1111111A;
  }

  .logo img {
    width: 93px;
    height: auto;
    overflow: hidden;
  }

  .nav {
    display: flex;
    gap: 24px;
  }

  .nav-link {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
    color: #1111117A;
  }

  .nav-link:hover {
    text-decoration: underline;
  }


  @media screen and (max-width: 1024px) {
    .header {
      padding-right: 400px;
    }
  }
  @media screen and (max-width: 768px) {
    .header {
      padding-right: 92px;
    }
  }

  @media screen and (max-width: 425px) {
    .header {
      padding: 24px;
    }
  }
</style>
