<template>
    <div class='login'>
        <form @submit='getUserInfo' class='login-form'>
            <input type='text' v-model='name' name='name' required placeholder='name'>
            <input type='date' v-model='dateOfBirth' required name='dateOfBirth' placeholder='Enter date of birth'>
            <input type='submit' value='Submit' class='btn'>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                name: '',
                dateOfBirth: '',
            }
        },
        methods: {
            getUserInfo(e) {
                e.preventDefault()
                const newUser = {
                    id: Date.now(),
                    name: this.name,
                    dateOfBirth: this.dateOfBirth,
                }
                this.$emit('login-handler', newUser);
                this.$emit('isLoggedIn', true);
                this.$router.replace({ name: 'CardSection' });
            }
        }
    }
</script>

<style scoped>

</style>
