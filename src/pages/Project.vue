<template>
    
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="#" class="btn btn-primary">Preview Project</a>
        </div>
    </div>
</template>


<script>
    import axios from 'axios';

    export default {
        name: 'Project',
        data() {
            return {
                project: []
            }
        },
        mounted() {
            const id = this.$route.params.id
            axios.get(`http://localhost:8000/api/projects/${id}`).then( res => {
                    this.project = res.data.results;
                    console.log(this.project);
                })
        }
    }

</script>