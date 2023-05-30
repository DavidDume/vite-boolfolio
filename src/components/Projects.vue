<template>
    <div class="row">
        <div class="col-3 my-card p-3" v-for="proj in projects.data">
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{{ proj.title }}</h5>
                    <p class="card-text">{{ proj.description }}</p>
                    <button class="btn btn-primary">Show Project</button>
                </div>
            </div>
        </div>
        <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item">
            <button class="page-link" :class="{'disabled' : currPage == 1}" @click="getProjects(currPage--)">Previous</button>
        </li>
        <li class="page-item">
            <button class="page-link" :class="{'disabled' : currPage == projects.last_page}" @click="getProjects(currPage++)">Next</button>
        </li>
    </ul>
</nav>
    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Projects',
        data() {
            return {
                projects: [],
                currPage: 15
            }
        },
        methods: {
            getProjects(page) {
                axios.get(`http://localhost:8000/api/projects?page=${this.currPage}`).then( res => {
                    this.projects = res.data.results;
                })
            }
        },
        mounted() {
            this.getProjects(this.currPage);
        }
    }

</script>