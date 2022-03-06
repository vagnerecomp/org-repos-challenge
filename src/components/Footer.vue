<template>
    <footer id="footer">
        <p>Vagner José &copy; 2022</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    #footer{
        position: absolute;
        bottom: 0;
        height: 100px;
        background-color: #00D96F;
        border-top: 4px solid #111;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>