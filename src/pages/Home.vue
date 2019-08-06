<template>
    <div class="home">
        <h2>{{  $t('home.heading2') }}</h2>
        <div class="section"
             v-for="(section, index) in $t('home.sections')"
             v-bind:key="index">
            <h3 class="section__heading">{{ section.heading3 }}</h3>
            <div class="section__content">
                <p v-for="(paragraph, index) in section.paragraphs"
                   v-bind:key="index"
                   class="section__paragraph">{{ paragraph }}</p>
                <router-link v-bind:to="getLinkURL(section.link)"
                             class="link">{{ section.linkText }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                // vars in locale
                varLinks: {
                    "{aboutURL}": "about",
                    "{servicesURL}":"services",
                    "{contactURL}":"contact"
                }
            }
        },
        methods: {
            getLinkURL: function (link) {
                return this.varLinks[`${link}`];
            }
        }
    }
</script>
