<template>
    <div id="app">
        <Header />
        <router-view class="view container" />
        <Footer />
    </div>
</template>

<script>
    import "./styles.less";
    import "./pages.less";
    import Header from "./components/Header/Header.vue";
    import Footer from "./components/Footer/Footer.vue";

    export default {
        name: 'app',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                defaultLanguage: "en"
            }
        },
        beforeMount() {
            // get locale on page load
            // eslint-disable-next-line
            let lang = !!localStorage.getItem("lang") ?
                localStorage.getItem("lang") :
                this.defaultLanguage;

            this.$i18n.locale = lang;
            this.$i18n.setLocaleMessage(lang, require(`./assets/lang/${lang}.json`));
        }
    }
</script>
