<template>
  <q-page class="q-pa-md text-primary q-pt-xl q-px-xl">
    <p class="text-h4 text-weight-bold text-center">Login</p>
    <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md">
     <q-card flat class="row my-card bg-grey justify-center">
        <q-card-section class="q-pt-xl col-8">
          <q-input
          filled
          v-model="name"
          label="Username*"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type your username']"/>
        </q-card-section>

        <q-card-section class="q-pt-none col-8">
           <q-input
            filled
            v-model="password"
            label="Password*"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Please type your password',
            ]"/>
        </q-card-section>

        <q-card-section class="col-8 q-pt-none">
          <div class="row q-pt-xl justify-end">
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
            <q-btn label="Submit" type="submit" color="primary"/>
          </div>
        </q-card-section>
    </q-card>
  </q-form>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const password = ref(null)

    return {
      name,
      password,

      onSubmit () {
        if (name.value !== 'matej' || password.value !== '123') {
          $q.notify({
            progress: true,
            color: 'grey',
            textColor: 'primary',
            icon: 'warning',
            message: 'Username or password is incorrect',
            position: 'top',
            actions: [
              { icon: 'close', color: 'primary', round: true, handler: () => { /* ... */ } }
            ]
          })
        }
        else {
          $q.notify({
            progress: true,
            color: 'grey',
            textColor: 'primary',
            icon: 'done',
            message: 'Logged in successfully',
            position: 'top'
          })
          window.location.href = 'http://localhost:9000/client/c8a023ed/62e0d22a';
        }
      },

      onReset () {
        name.value = null
        password.value = null
        accept.value = false
      }
    }
  }
}
</script>
