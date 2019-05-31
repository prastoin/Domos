<template>
    <div>
        <footer>
           <span class="allTxt">Contact</span> 
           <span class="allTxt">About us</span> 
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
footer {
    margin-top: auto;
    background: #24292e;
    width: 100%;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        padding-right: 6px;
        color: white;
    }
}

footer span:not(:first-child) {
    border-left: 1px solid white;
    padding-left: 6px;
}
</style>
