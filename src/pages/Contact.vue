<template>
    <div class="contact">
        <h2>{{  $t('contact.heading2') }}</h2>
        <div class="section">
            <h3 class="section__heading">{{ $t('contact.questions') }}</h3>
            <div class="section__content">
                <label class="section__label">{{ $t('contact.tollFree') }}</label>
                <p class="section__afterLabel">1-844-JEROME1 (537-6631)</p>

                <label class="section__label">{{ $t('contact.international') }}</label>
                <p class="section__afterLabel">+1-604-889-7315</p>

                <label class="section__label">{{ $t('contact.email') }}</label>
                <p class="section__afterLabel">contact@example.com</p>

                <a class="link"
                   href="http://www.traductionsjerome.com/documents/jeromeBrochure_February2018.pdf"
                   target="_blank">{{ $t('contact.download') }}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contact'
    }
</script>
