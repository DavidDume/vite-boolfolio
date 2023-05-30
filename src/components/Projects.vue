<template>
    Hello World
</template>

<script>
    export default {
        name: 'Projects',
        data() {
            return {
                projects: []
            }
        },
        methods: {
            getProjects() {
                console.log('Hello World');
            }
        },
        mounted() {
            this.getProjects();
        }
    }

</script>