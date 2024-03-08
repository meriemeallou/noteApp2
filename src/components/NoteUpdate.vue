<template>
    <div class="container my-3">
       <h1 style="text-align: center;">Update Note</h1>
       <div class="card my-2 mx-auto" style="width: 400px;">
         <div class="card-body">
           <form @submit.prevent="updateR">
             <div class="form-group">
               <input type="text" placeholder="Enter Note name here" class="form-control" v-model="note.name"><br>
               <textarea class="form-control" rows="3" placeholder="Enter note description here" v-model="note.description"></textarea>
             </div>
             <br>
             <button type="submit" class="btn btn-primary">Update</button>
           </form>
         </div>
       </div>
       <div class="row container-fluid" id="notes"></div>
    </div>
   </template>
   
   <script>
   import axios from 'axios';
   
   export default {
    name: 'NoteUpdate',
    data() {
       return {
         note: {
           name: '',
           description: '',
           date: ''
         }
       }
    },
    async created() {
       try {
         const response = await axios.get('http://localhost:3000/notes/' + this.$route.params.id);
         this.note = response.data;
       } catch (error) {
         console.error(error);
       }
    },
    methods: {
       async updateR() {
         try {
            this.note.date = new Date().toLocaleString()
           const response = await axios.put('http://localhost:3000/notes/' + this.$route.params.id, this.note);
           if (response.status === 200) {
             this.$router.push('/');
           }
         } catch (error) {
           console.error(error);
         }
       }
    }
   }
   </script>
   