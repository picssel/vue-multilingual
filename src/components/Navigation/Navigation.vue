<template>
    <div class="navigation">
        <router-link v-for="(page, index) in $t('navigation')"
                     v-bind:key="index"
                     v-bind:to="index"
                     class="navigation__link">{{ page }}</router-link>
    </div>
</template>

<script>
    import "./navigation.less";

    export default {
        name: 'Navigation'
    }
</script>
