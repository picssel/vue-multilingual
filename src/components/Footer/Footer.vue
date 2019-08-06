<template>
    <div class="footer">
        <div class="container">
            <p class="footer__paragraph">{{ $t("footer.copyRight", {dateYear}) }}</p>
        </div>
    </div>
</template>

<script>
    import "./footer.less";

    export default {
        name: 'Footer',
        data() {
            return {
                dateYear: new Date().getFullYear()
            }
        }
    }
</script>
