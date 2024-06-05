<script setup>
import AppCard from "@/components/ui/AppCard.vue";
import AppButton from "@/components/ui/AppButton.vue";
import {reactive, ref} from "vue";
import client from "@/helpers/client.js";
import {useDevsStore} from "@/stores/devs.js";
import {useRouter} from "vue-router";

const loading = ref(false);
const devsStore = useDevsStore();
const router = useRouter();

const formData = reactive({
  firstName: { val: '', isValid: true },
  lastName: { val: '', isValid: true },
  bio: { val: '', isValid: true },
  hourlyRate: { val: null, isValid: true },
  areas: { val: [], isValid: true },
  formIsValid: true
})


const validateForm = () => {
  formData.formIsValid = true;

  if(!formData.firstName.val) {
    formData.firstName.isValid = false;
    formData.formIsValid = false;
  }

  if(!formData.lastName.val) {
    formData.lastName.isValid = false;
    formData.formIsValid = false;
  }

  if(!formData.bio.val) {
    formData.bio.isValid = false;
    formData.formIsValid = false;
  }

  if(!formData.hourlyRate.val || formData.hourlyRate < 0) {
    formData.hourlyRate.isValid = false;
    formData.formIsValid = false;
  }
}

const clearValidity = (key) => {
  formData[key].isValid = true;
}


function handleSubmit() {
  validateForm()

  if(!formData.formIsValid) {
    return;
  }

  try {
    loading.value = true;

    const devToCreate = {
      id: new Date().toISOString(),
      firstName: formData.firstName.val,
      lastName: formData.lastName.val,
      bio: formData.bio.val,
      hourlyRate: formData.hourlyRate.val,
      areas: formData.areas.val,
    }

    // const reponse = await client.post('http://localhost:8080', devToCreate)


    setTimeout(() => {
      devsStore.allDevs.push(devToCreate)
      router.push({name: 'devs'})

      loading.value = false;
    }, 2000)
  }
  catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <transition appear>
    <app-card has-shadow>
      <h2>Register as Dev</h2>
      <hr>

      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="firstname" class="form-label">First name</label>
          <input type="text"
                 id="firstname"
                 class="form-control"
                 :class="{'is-invalid': !formData.firstName.isValid }"
                 v-model.trim="formData.firstName.val"
                 @blur="clearValidity('firstName')">
          <div class="invalid-feedback">
            First name is required.
          </div>
        </div>

        <div class="mb-3">
          <label for="lastname" class="form-label">Last name</label>
          <input type="text"
                 id="lastname"
                 class="form-control"
                 :class="{'is-invalid': !formData.lastName.isValid }"
                 v-model.trim="formData.lastName.val"
                 @blur="clearValidity('lastName')">
          <div class="invalid-feedback">
            Last name is required.
          </div>
        </div>
        <div class="mb-3">
          <label for="bio" class="form-label">Bio</label>
          <textarea id="bio"
                    class="form-control"
                    :class="{'is-invalid': !formData.bio.isValid }"
                    v-model.trim="formData.bio.val"
                    @blur="clearValidity('bio')"></textarea>
          <div class="invalid-feedback">
            Bio is required.
          </div>
        </div>
        <div class="mb-3">
          <label for="hourlyRate" class="form-label">Hourly rate</label>
          <input type="number"
                 id="hourlyRate"
                 class="form-control"
                 :class="{'is-invalid': !formData.hourlyRate.isValid }"
                 v-model.number="formData.hourlyRate.val"
                 @blur="clearValidity('hourlyRate')">
          <div class="invalid-feedback">
            Hourly rate is required.
          </div>
        </div>
        <div class="mb-3">
          <label>Check areas</label>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value="Frontend"
                   id="frontend"
                   v-model="formData.areas.val">
            <label class="form-check-label" for="frontend">
              Frontend Development
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value="Backend"
                   id="backend"
                   v-model="formData.areas.val">
            <label class="form-check-label" for="backend">
              Backend Development
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input"
                   type="checkbox"
                   value="Fullstack"
                   id="fullstack"
                   v-model="formData.areas.val">
            <label class="form-check-label" for="fullstack">
              Fullstack Development
            </label>
          </div>
        </div>

        <hr>

        <div class="text-center">
          <router-link :to="{name: 'devs'}" class="btn btn-secondary">Cancel</router-link>
<!--          <button class="btn btn-primary ms-2">Save</button>-->
          <app-button :loading="loading" class="btn-primary ms-2">
            Save
          </app-button>
        </div>
      </form>
    </app-card>
  </transition>
</template>

<style scoped>

</style>