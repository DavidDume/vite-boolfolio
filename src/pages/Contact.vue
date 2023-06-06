<template>
    Contact Page
    <div class="container mt-5">
        <FormContact></FormContact>
    </div>
    
</template>

<script>
    import FormContact from '../components/FormContact.vue';
    export default {
        name: 'Contact',
        components: {
            FormContact
        }
    }

</script>