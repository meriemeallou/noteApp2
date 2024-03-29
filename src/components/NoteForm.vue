<template>
    <div class="container my-3 ">
      <h1 style="text-align: center;">Add your Note</h1>
      <div class="card my-2 mx-auto" style="width: 400px;">
        <div class="card-body">
          <form>
            <div class="form-group">
              <input type="text" placeholder="Enter Note name here" class="form-control" v-model="name"><br>
              <textarea class="form-control" rows="3" placeholder="Enter note description here" v-model="description"></textarea>
            </div><br>
            <button type="submit" class="btn btn-outline-primary" v-on:click="addNote">Add Note</button>
          </form>
        </div>
      </div>
      <div class="row container-fluid" id="notes"></div>
    </div>
  </template>
     
     <script>
     import axios from 'axios';
     
     export default {
      name: 'NoteForm',
      data() {
         return {
           name: '',
           description: '',
           date:''
         }
      },
      methods: {
         async addNote() {
           if (this.name || this.description) {
             try {
               let result = await axios.post('http://localhost:3000/notes', {
                 name: this.name,
                 description: this.description,
                 date:new Date().toLocaleString()
               });
               console.log(result);
               this.name = '';
               this.description = '';
             } catch (error) {
               console.error('Error adding note:', error);
             }
           }
         }
      }
     }
     </script>
     <style>
    .btn-outline-primary {
   background-color: transparent; 
   border-color: rgb(85, 85, 168);
   color: rgb(85, 85, 168);
  }
  
  .btn-outline-primary:hover {
   background-color: rgb(85, 85, 168); 
   color: white; 
  }
    </style>
     