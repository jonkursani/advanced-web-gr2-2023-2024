import {defineStore} from "pinia";
import {ref} from "vue";

export const useResourceStore
    = defineStore('resource', () => {
    const resources = ref([]);

    const requestUrl = 'https://learning-resources-gr2-default-rtdb.firebaseio.com/resources.json'

    async function getAllResources() {
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));

        const response = await fetch(requestUrl);
        const data = await response.json();
        // console.log(data)

        resources.value = [];
        for (const key in data) {
            resources.value.push({
                fid: key,
                id: data[key].id,
                title: data[key].title,
                description: data[key].description,
                resourcePlace: data[key].resourcePlace,
                link: data[key].link,
            })
        }

    }

    async function addResource(resource) {
        // resources.value.push({
        //     id: new Date().toISOString(),
        //     ...resource
        // })

        const resourceToSave = {
            id: new Date().toISOString(),
            ...resource
        }
        await fetch(requestUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resourceToSave)
        })
    }

    function deleteResource(id) {
        resources.value = resources.value.filter(resource => resource.id !== id);
    }

    function updateResource(resource) {
        const index = resources.value.findIndex(res => res.id === resource.id);

        resources.value[index].title = resource.title;
        resources.value[index].description = resource.description;
        resources.value[index].resourcePlace = resource.resourcePlace;
        resources.value[index].link = resource.link;
    }

    return {resources, addResource, deleteResource, updateResource, getAllResources}
})