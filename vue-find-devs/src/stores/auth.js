import {defineStore} from "pinia";
import client from "@/helpers/client.js";
import {computed, ref} from "vue";

export const useAuthStore = defineStore('auth', () => {

    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
    const apiKey = 'AIzaSyDBL_KiNP1IxnPisjRUpUgmtVzyvKbkn_E';
    const user = ref(JSON.parse(localStorage.getItem('user')) || null);

    async function signUp(user) {
        const response = await client.post(`${url}signUp?key=${apiKey}`, user);
        // console.log(response)
    }

    async function logIn(user) {
        const response = await client.post(`${url}signInWithPassword?key=${apiKey}`, user);

        if(response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        // console.log(response)
    }

    // getters
    const loggedInUser = computed(() => {
        return user.value;
    })

    return { signUp, logIn, loggedInUser }
})