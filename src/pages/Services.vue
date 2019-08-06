<template>
    <div class="services">
        <h2>{{  $t('services.heading2') }}</h2>
        <div class="section"
             v-for="(section, index) in $t('services.sections')"
             v-bind:key="index">
            <h3 class="section__heading">{{ section.heading3 }}</h3>
            <div class="section__content">
                <p v-for="(paragraph, index) in section.paragraphs"
                   v-bind:key="index"
                   class="section__paragraph">{{ paragraph }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Services'
    }
</script>
