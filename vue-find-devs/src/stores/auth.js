import {defineStore} from "pinia";
import client from "@/helpers/client.js";
import {computed, ref} from "vue";
import {jwtDecode} from "jwt-decode";

export const useAuthStore = defineStore('auth', () => {

    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
    const apiKey = 'AIzaSyDBL_KiNP1IxnPisjRUpUgmtVzyvKbkn_E';
    const token = ref(localStorage.getItem('token') || null);

    async function signUp(user) {
        const response = await client.post(`${url}signUp?key=${apiKey}`, user);
        // console.log(response)
    }

    async function logIn(user) {
        const response = await client.post(`${url}signInWithPassword?key=${apiKey}`, user);
        // console.log(response)
        if (response.data) {
            localStorage.setItem('token', response.data.idToken);
            token.value = response.data.idToken;
        }
        // console.log(response)
    }

    function logOut() {
        if (isLoggedIn.value) {
            localStorage.removeItem('token');
            token.value = null;
        }
    }

    // getters
    const loggedInUser = computed(() => {
        return token.value ? jwtDecode(token.value) : null;
    })

    const isLoggedIn = computed(() => {
        return !!token.value;
    })

    return {signUp, logIn, loggedInUser, logOut, isLoggedIn}
})