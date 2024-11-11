<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters(['userData']),
    },
    methods: {
      formatUserData(name, age) {
        return name ? `${name}${age ? `, ${age} ${this.formatAge(age)}` : ''}` : '';
      },
      formatAge(age) {
        const lastDigit = age % 10;
        const lastTwoDigits = age % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
          return 'лет';
        } else if (lastDigit === 1) {
          return 'год';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
          return 'года';
        } else {
          return 'лет';
        }
      },
    },
  };
</script>

<template>
  <div class="preview">
    <h2 class="preview__title">Персональные данные</h2>
    <p class="preview__data user__data">{{ formatUserData(userData.name, userData.age) }}</p>

    <h2 class="preview__title">Дети</h2>
    <div v-if="userData.children.length > 0" v-for="(child, index) in userData.children" :key="index">
      <p class="preview__data child__data">{{ formatUserData(child.name, child.age) }}</p>
    </div>
  </div>
</template>

<style scoped>
  .preview {
    flex-grow: 1;
    max-width: 616px;
    width: 100%;
    margin: 30px auto;
  }

  .preview__title {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #111111;
    margin-bottom: 20px;
  }

  .preview__data {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #111111;
  }

  .user__data {
    margin-bottom: 60px;
  }

  .child__data {
    margin-bottom: 20px;
    background-color: #F1F1F1;
    padding: 10px 20px;
    border-radius: 5px;
    width: max-content;
  }

  @media screen and (max-width: 768px) {
    .preview {
      max-width: 400px;
    }
  }

  @media screen and (max-width: 425px) {
    .preview {
      max-width: 350px;
    }
  }

  @media screen and (max-width: 320px) {
    .preview {
      max-width: 280px;
    }
  }
</style>
