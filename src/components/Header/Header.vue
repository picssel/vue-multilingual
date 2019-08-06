<template>
    <div class="header">
        <div class="container">
            <h1 class="header__heading">{{ $t("companyName") }}</h1>
            <Navigation />
            <LangSelector />
        </div>
    </div>
</template>

<script>
    import "./header.less";
    import Navigation from "../Navigation/Navigation.vue";
    import LangSelector from "../LangSelector/LangSelector.vue";

    export default {
        name: 'Header',
        components: {
            Navigation,
            LangSelector
        }
    }
</script>
