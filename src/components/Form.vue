<script>
  import { mapActions } from 'vuex';
  import { useRouter } from 'vue-router';

  export default {
    data() {
      return {
        user: {
          name: '',
          age: '',
          children: [],
        },
      };
    },
    methods: {
      ...mapActions(['updateUserData']),
      addChild() {
        if (this.user.children.length < 5) {
          this.user.children.push({ name: '', age: '' });
        }
      },
      removeChild(index) {
        this.user.children.splice(index, 1);
      },
      saveData() {
        this.updateUserData(this.user);
        this.$router.push({ name: 'Preview' });
      },
    },
  };
</script>


<template>
  <div class="form">
    <form @submit.prevent="saveData">
      <div class="user">
        <h2 class="form__title">Персональные данные</h2>
        <div class="form__input">
          <input class="input" v-model="user.name" type="text" required />
          <label class="label">Имя</label>
        </div>
        <div class="form__input">
          <input class="input" v-model="user.age" type="number" required />
          <label class="label">Возраст</label>
        </div>
      </div>

      <div class="children">
        <div class="children__header">
          <h2 class="form__title">Дети (макс. 5)</h2>
          <button class="add-button" type="button" @click="addChild" v-if="user.children.length < 5">Добавить ребенка</button>
        </div>
        <div class="child" v-for="(child, index) in user.children" :key="index">

          <div class="form__input">
            <input class="input" v-model="child.name" type="text" required />
            <label class="label">Имя</label>
          </div>

          <div class="form__input">
            <input class="input" v-model="child.age" type="number" required />
            <label class="label">Возраст</label>
          </div>

          <button class="delete-button" type="button" @click="removeChild(index)">Удалить</button>
        </div>
      </div>

      <button class="save-button" type="submit">Сохранить</button>
    </form>
  </div>
</template>

<style scoped>
  .form {
    flex-grow: 1;
    max-width: 616px;
    width: 100%;
    margin: 30px auto;
  }

  .form__title {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #111111;
    margin-bottom: 20px;
  }

  .user {
    margin-bottom: 44px;
  }

  .form__input {
    position: relative;
    margin-bottom: 10px;
  }

  .input {
    width: 100%;
    outline: none;
    padding: 0 16px;
    height: 56px;
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding-top: 18px;
}

  .label {
    position: absolute;
    top: 8px;
    left: 16px;
    color: #1111117A;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.85px;
  }

  .children__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .add-button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 100px;
    border: 2px solid #01A7FD;
    background-color: transparent;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #01A7FD;
    position: relative;
    cursor: pointer;
    margin-top: -20px;
    height: 44px;
  }

  .add-button::before {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("../assets/plus.svg");
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 4px;
  }

  .add-button:hover {
    background: #6E41E20A;
  }

  .child {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
    margin-bottom: 10px;
  }

  .child .form__input {
    width: calc((100% - 96px) / 2);
    margin-bottom: 0;
  }

  .delete-button {
    border: none;
    background-color: transparent;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #01A7FD;
    cursor: pointer;
  }

  .delete-button:hover {
    background: #6E41E20A;
    border-radius: 4px;
  }

  .save-button {
    background-color: #01A7FD;
    border: none;
    padding: 10px 20px 10px 20px;
    border-radius: 100px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #FFFFFF;
    cursor: pointer;
    margin-top: 30px;
  }

  .save-button:hover {
    background-color: #0F79AF;
  }

  @media screen and (max-width: 768px) {
    .form {
      max-width: 400px;
    }
    .child .form__input {
      width: 100%;
    }
  }

  @media screen and (max-width: 425px) {
    .form {
      max-width: 350px;
    }
  }

  @media screen and (max-width: 320px) {
    .form {
      max-width: 280px;
    }
    .children__header {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 20px;
    }
  }
</style>
