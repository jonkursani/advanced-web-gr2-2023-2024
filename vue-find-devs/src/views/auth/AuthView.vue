<script setup>
import {computed, reactive, ref} from "vue";
import {useAuthStore} from "@/stores/auth.js";
import {useRoute, useRouter} from "vue-router";
import Swal from "sweetalert2";


const authStore = useAuthStore();
const {push} = useRouter();
const route = useRoute();

const mode = ref('login');
function onChangeMode() {
  if (mode.value === 'login') {
    mode.value = 'signup'
  } else {
    mode.value = 'login'
  }
}

const submitBtnText = computed(() => {
  if (mode.value === 'login') {
    return 'Log in'
  } else {
    return 'Sign up'
  }
})

const changeModeBtnText = computed(() => {
  if (mode.value === 'login') {
    return 'Sign up instead'
  } else {
    return 'Log in instead'
  }
})

const formData = reactive({
  email: '',
  password: ''
});
const formIsValid = ref(true);
const error = ref('');
const handleSubmit = async () => {
  formIsValid.value = true;

  if(!formData.email || !formData.password) {
    formIsValid.value = false;
    error.value = 'Email and password are required.'
    return;
  }

  try {
    if (mode.value === 'login') {
      // login
      await authStore.logIn(formData);
      const redirectUrl = `${route.query.redirect || '/'}`
      // console.log(redirectUrl)
      await push(redirectUrl);
    } else {
      // signup
      await authStore.signUp(formData)
      await Swal.fire({
        title: "Signed up successfully, please login!",
        icon: "success"
      });
      mode.value = 'login';
    }
  } catch (e) {
    formIsValid.value = false;
    error.value = e.response.data.error.message
  }

}
</script>

<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex align-items-center justify-content-center h-100">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
               class="img-fluid" alt="Phone image">
        </div>
        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form @submit.prevent="handleSubmit">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email"
                     id="form1Example13"
                     class="form-control"
                     placeholder="Email address"
                     v-model.trim="formData.email"/>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <input type="password"
                     id="form1Example23"
                     class="form-control"
                     placeholder="Password"
                     v-model.trim="formData.password"/>
            </div>

            <div class="mb-4" v-if="!formIsValid">
              <p class="text-danger">{{error}}</p>
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary col-12">{{ submitBtnText }}</button>

            <div class="divider d-flex align-items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>
          </form>

          <button class="btn btn-outline-primary col-12" @click="onChangeMode">{{ changeModeBtnText }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.divider:after,
.divider:before {
  content: "";
  flex: 1;
  height: 1px;
  background: #eee;
}
</style>