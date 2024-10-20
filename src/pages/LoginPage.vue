<template>
  <!-- Main container for the Login page -->
  <q-page class="q-pa-md text-primary q-pt-xl">
    <!-- Page title -->
    <p class="text-h4 text-weight-bold text-center">Login</p>

    <!-- Login form -->
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-card flat class="row my-card bg-grey justify-center q-pt-xl">
        <!-- Username input -->
        <q-card-section class="col-12 col-sm-10 col-md-8">
          <q-input
            filled
            v-model="name"
            label="Username*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your username']"
          />
        </q-card-section>

        <!-- Password input -->
        <q-card-section class="q-pt-none col-12 col-sm-10 col-md-8">
          <q-input
            filled
            v-model="password"
            type="password"
            label="Password*"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type your password']"
          />
        </q-card-section>

        <!-- Form buttons -->
        <q-card-section class="q-pt-none col-12 col-sm-10 col-md-8">
          <div class="row q-pt-xl justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-card-section>

        <!-- Switch to Register button -->
        <q-card-section class="q-pt-none col-12 col-sm-10 col-md-8">
          <div class="row q-pt-md justify-center">
            <q-btn label="Dont have an account yet?" color="primary" flat @click="goToRegister" />
          </div>
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useQuasar } from 'quasar';
  import { useRouter } from 'vue-router';

  export default defineComponent({
    setup() {
      const $q = useQuasar();
      const router = useRouter();

      // Form data
      const name = ref<string | null>(null);
      const password = ref<string | null>(null);

      // Form submission handler
      const onSubmit = () => {
        if (name.value !== 'matej' || password.value !== '123') {
          $q.notify({
            progress: true,
            color: 'grey',
            textColor: 'primary',
            icon: 'warning',
            message: 'Username or password is incorrect',
            position: 'top',
            actions: [ { icon: 'close', color: 'primary', round: true, handler: () => { } } ]
          });

        } else {
          $q.notify({
            progress: true,
            color: 'grey',
            textColor: 'primary',
            icon: 'done',
            message: 'Logged in successfully',
            position: 'top'
          });
          window.location.href = 'http://localhost:9000/client/c8a023ed/62e0d22a';
        }
      };

      // Form reset handler
      const onReset = () => {
        name.value = null;
        password.value = null;
      };

      // Navigate to the register page
        const goToRegister = () => {
          router.push('/register');
        };

      return {
        name,
        password,
        onSubmit,
        onReset,
        goToRegister
      };
    }
  });
</script>