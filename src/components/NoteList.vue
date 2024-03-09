<template>
    <div class="d-flex justify-content-center align-items-center">
       <div class="container">
         <h1 class="text-center my-4">Notes</h1>
         <div class="row">
           <div class="col-12 mb-4" v-for="note in notes" :key="note.id">
             <div class="card" style="width: 100%;">
               <div class="card-header d-flex justify-content-between align-items-center">
                 <h5 class="card-title">{{ note.name }}</h5>
                 <p>{{ note.date }}</p>
                 <button type="button" class="btn-close" aria-label="Close" @click="deleteN(note.id)"></button>
               </div>
               <div class="card-body">
                 <p class="card-text">{{ note.description }}</p>
               </div>
               <div class="card-footer">
                 <router-link :to="'/update/'+note.id" class="btn btn-outline-primary custom-btn">Update</router-link>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
   </template>
   
   <script>
   import axios from 'axios';
   
   export default {
    name: 'NoteList',
    data() {
       return {
         notes: [],
       };
    },
    methods: {
       async deleteN(id) {
         try {
           let result = await axios.delete('http://localhost:3000/notes/' + id);
           if (result.status === 200) {
             this.loadData();
           }
         } catch (error) {
           console.error('Error deleting note:', error);
         }
       },
       async loadData() {
         try {
           let result = await axios.get('http://localhost:3000/notes');
           this.notes = result.data;
         } catch (error) {
           console.error('Error loading notes:', error);
         }
       },
    },
    mounted() {
       this.loadData();
    },
   };
   </script>
   