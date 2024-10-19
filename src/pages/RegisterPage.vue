<template>
  <q-page class="q-pa-md text-primary q-pt-xl q-px-xl">
    <p class="text-h4 text-weight-bold text-center">Register</p>
    <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md">
     <q-card flat class="row my-card bg-grey justify-center">
        <q-card-section class="q-pt-xl col-4">
          <q-input
          filled
          v-model="first_name"
          label="First name*"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type your first name']"/>
        </q-card-section>

        <q-card-section class="q-pt-xl col-4">
          <q-input
          filled
          v-model="last_name"
          label="Last name*"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type your last name']"/>
        </q-card-section>

        <q-card-section class="q-pt-none col-8">
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
          v-model="email"
          label="Email*"
          type="email"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type your email address']"/>
        </q-card-section>

        <q-card-section class="q-pt-none col-8">
           <q-input
            filled
            v-model="password"
            label="Password*"
            type="password"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Please type your password',
            ]"/>
        </q-card-section>

        <q-card-section class="col-8 q-pt-none">
          <q-toggle v-model="accept" label="I accept the license and terms" />

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

    const first_name = ref(null)
    const last_name = ref(null)
    const name = ref(null)
    const email = ref(null)
    const password = ref(null)
    const accept = ref(false)

    return {
      first_name,
      last_name,
      name,
      email,
      password,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            progress: true,
            color: 'grey',
            textColor: 'primary',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
            position: 'top',
            actions: [
              { icon: 'close', color: 'primary', round: true, handler: () => { /* ... */ } }
            ]
          })
        }
        else if (name.value !== 'expectedUsername' || password.value !== 'expectedPassword') {
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
        }
      },

      onReset () {
        first_name.value = null
        last_name.value = null
        name.value = null
        email.value = null
        password.value = null
        accept.value = false
      }
    }
  }
}
</script>
