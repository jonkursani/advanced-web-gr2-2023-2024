import {defineStore} from "pinia";
import {ref} from "vue";
import axios from "axios";
import client from "@/helpers/client.js";
import {collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "@/helpers/firebase.js";


export const useResourceStore
    = defineStore('resource', () => {
    const resources = ref([]);
    const error = ref('');
    const loading = ref(false);

    // const requestUrl = 'https://learning-resources-gr2-default-rtdb.firebaseio.com/resources.json'

    async function getResource(id) {
        try{
            loading.value = true;
            const docRef = doc(db, "resources", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                return docSnap.data();
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false;
        }

    }

    async function getAllResources() {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));

        // fetch
        // const response = await fetch(requestUrl);
        // const data = await response.json();
        // console.log(data)

        try {
            // const response = await axios.get(requestUrl);
            // const response = await client.get('resources.json');
            // const data = response.data;
            // console.log(response)

            loading.value = true;
            const querySnapshot = await getDocs(collection(db, "resources"));
            resources.value = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                resources.value.push({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    resourcePlace: doc.data().resourcePlace,
                    link: doc.data().link,
                })
            });

        } catch (e) {
            // console.log(e)
            error.value = '😒 Error getting resources.'
        } finally {
            loading.value = false;
        }
    }

    async function addResource(resource) {
        // resources.value.push({
        //     id: new Date().toISOString(),
        //     ...resource
        // })

        const resourceToSave = {
            // id: new Date().toISOString(),
            ...resource
        }

        // fetch
        // await fetch(requestUrl, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(resourceToSave)
        // })

        // axios
        // await client.post('resources.json', resourceToSave)

        await addDoc(collection(db, "resources"), resourceToSave);
    }

    async function deleteResource(id) {
        try {
            loading.value = true;
            await deleteDoc(doc(db, "resources", id));
        } catch (e) {
            console.log(e)
        } finally {
            loading.value = false;
            await getAllResources();
        }
    }

    async function updateResource(resource) {
        const resourceRef = doc(db, "resources", resource.id);
        await updateDoc(resourceRef, resource);
    }

    return {resources, addResource, deleteResource, updateResource, getAllResources, error, loading, getResource}
})