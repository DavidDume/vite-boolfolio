<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">BoolFolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="link in links">
                    <router-link :to="{name: link.route}" class="nav-link">{{ link.label }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="js">

    export default{
        name: 'Header',
        data() {
            return {
                links: [
                    {
                        label: 'Home',
                        route: 'home'
                    },
                    {
                        label: 'About',
                        route: 'about'
                    },
                    {
                        label: 'Contact',
                        route: 'contact'
                    },
                    {
                        label: 'Projects',
                        route: 'projects'
                    },
                ]
            }
        }
    };

</script>