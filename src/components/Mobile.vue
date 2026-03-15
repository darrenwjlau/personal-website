<template>
    <BContainer fluid>
    <BRow>
        <BCol>
            <h1 style="color: white;">Welcome to my website</h1>
    <h2 style="color: white;"> About Me</h2>
    <h3 style="color: white;">{{ AboutStore.about_message }}</h3>
    <h2 style="color: white;">My social media</h2>
    <div style="border:1px solid white; border-radius: 7px; display: inline-block; padding: 10px; width:max-content; flex-wrap: nowrap; ">
        <div v-for="(items, index) in SocialStore.items" :key="index" >
            <div style="display: flex; align-items: center; padding-right: 5px;">
                <b-button v-for="(item, idx) in items" :key="idx" variant="dark" :href="item.link" target="_blank" style="display: flex; align-items: center; margin-right: 10px;">
                    <img :src="item.img" style="width: 30px; height: 30px; margin-right: 5px;">
                </b-button>
            </div>
            <br>
        </div>
    </div>
   
    <h2 style="color: white;">Tech gadgets that I own</h2>
    <BTable show-empty :items="TechItems.items" style="width: 95%" :fields="TableFieldStore.tech_field" :table-class="'table-dark .th-lg'" responsive>
        <template #cell(img)="row">
             <img style="width:100px; height: 100px;" :srcset="row.value" :alt="row.item.name">
                </template>
    </BTable>
    <h2 style="color: white;">Projects</h2>
    <BTable show-empty :items="repos" style="width: 95%" :fields="TableFieldStore.repos_field" :table-class="'table-dark .th-lg'" responsive>
        <template #cell(html_url)="row">
         <a :href="row.item.html_url" target="_blank">Github</a>
        </template>
    </BTable>
</BCol>
</BRow>
</BContainer>
</template>

<style scoped>
    .left {
  width: 20rem;
  display: table-cell;
}
.right {
  width: auto;

  display: table-cell;
}
.wrapper {
  display: table;

  width: 100%;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import { useTechItems } from '@/stores/TechItemsStore';
import { useTableFieldStore } from '@/stores/TableFieldStore';
import { BTable } from 'bootstrap-vue-next';
import { useAboutStore } from '@/stores/AboutStore';
import { useSocialStore } from '@/stores/SocialStore';

const TechItems = useTechItems();

const TableFieldStore = useTableFieldStore();

const AboutStore = useAboutStore();
const SocialStore =  useSocialStore();


const repos = ref([]);

    
onMounted(async () => {

    const reposResponse = await fetch('https://api.github.com/users/Darren-project/repos');
    repos.value = await reposResponse.json();

    
                
</script>
