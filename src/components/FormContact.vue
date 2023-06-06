<template>
    <div class="alert alert-success" v-show="success">Messaggio inviato con successo</div>
    <form @submit.prevent="send()">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" class="form-control" :class="{'is-invalid': errors.email}" v-model="email">
            <div v-for='error in errors.email' class="invalid-feedback">
                {{ error }}
            </div>
        </div>
        <div class="mb-3">
            <label for="name" class="form-label">nome</label>
            <input type="text" class="form-control" name="name" :class="{'is-invalid': errors.name}" v-model="name">
            <div v-for='error in errors.name' class="invalid-feedback">
                {{ error }}
            </div>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Messaggio</label>
            <textarea class="form-control" name="message"  :class="{'is-invalid': errors.message}" v-model="message"></textarea>
            <div v-for='error in errors.message' class="invalid-feedback">
                {{ error }}
            </div>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="sending">{{sending ? 'Invio In Corso' : 'Invia'}}</button>
    </form>
</template>


<script>
    import axios from 'axios';
    export default {
        name: 'ContactForm',
        data() {
            return {
                name: '',
                message: '',
                email: '',
                success: false,
                sending: false,
                errors: {}
            }
        },
        methods: {
            send() {
                this.success = false
                this.sending = true
                this.errors = {}
                axios.post(`http://localhost:8000/api/contacts`, {
                    name: this.name,
                    message: this.message,
                    email: this.email
                }).then( res => {
                    if(res.data.success) {
                        this.email = ''
                        this.name = ''
                        this.message = ''
                        this.success = true
                        
                    } else {
                        this.errors = res.data.errors
                    }
                    this.sending = false
                })

               
            }
        }
    }


</script>