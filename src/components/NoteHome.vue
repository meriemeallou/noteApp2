<template>
    <NoteForm /><br>
    <NoteList />
</template>
<script>
import NoteList from "./NoteList.vue";
import NoteForm from "./NoteForm.vue";

export default {
    name:'NoteHome',
    components:{
        NoteForm,
        NoteList
    }
}
</script>