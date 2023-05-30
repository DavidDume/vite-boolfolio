<template>
    <div class="row">
        <div class="col-3 my-card p-3" v-for="proj in projects">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{{ proj.title }}</h5>
                    <p class="card-text">{{ proj.description }}</p>
                    <button class="btn btn-primary">Show Project</button>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import axios from 'axios';

    export default {
        name: 'Projects',
        data() {
            return {
                projects: []
            }
        },
        methods: {
            getProjects() {
                axios.get('http://localhost:8000/api/projects').then( res => {
                    this.projects = res.data.results;
                })
            }
        },
        mounted() {
            this.getProjects();
        }
    }

</script>