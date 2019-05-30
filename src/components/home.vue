<template>
    <div id="root">
        <div class="container">
            <p class="welcome">Bienvenue</p> 
        </div>
    </div>
</template>

<script>
export default {
    name: "home"
}
</script>

<style scoped>
.container {
    background: silver;
}

.welcome {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    background: white;
    font-size: 1.5rem;
}
</style>
