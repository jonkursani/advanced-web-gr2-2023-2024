import {defineStore} from "pinia";
import {ref} from "vue";

export const useResourceStore
    = defineStore('resource', () => {
    const resources = ref([]);

    function addResource(resource) {
        resources.value.push({
            id: new Date().toISOString(),
            ...resource
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

    return {resources, addResource, deleteResource, updateResource}
})