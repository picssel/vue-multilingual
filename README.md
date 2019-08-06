# vue-multilingual

This is the code repository for the tutorial [Create a multilingual Single Page Application with Vue](http://www.picssel.com/create-a-multilingual-spa-with-vue/).  The tutorial will show you how to create a single page application with internationalization support, using Vue and the Vue-I18n internationalization plugin.

###Tutorial goals
- Create an internationalized application that supports different languages.
- Ability to switch from one language to another within any page of the application.
- Ability to add new supported languages with a minimum impact on the application code.
- Allow translators and/or contributors to manage the language files, separated from the application base code.

###Demo page
http://www.picssel.com/demos/vue-multilingual/

## Project setup
```
vue create vue-multilingual
cd vue-multilingual
```

### Install vue-router
```
npm install vue-router --save
```

### Install the internationalization plugin
```
npm install vue-i18n --save
```

###Install additional libraries
```
npm install -D less less-loader
```

###Run the project in `localhost:3400`
```
npm run serve
```

##References
[Vue Configuration](https://cli.vuejs.org/config/).
[Vuex: State Management library](https://vuex.vuejs.org/)
[Vue-i18n plugin documentation](https://kazupon.github.io/vue-i18n/)
[Internationalization reference](https://www.w3.org/International/questions/qa-i18n)
[PO Editor](https://poeditor.com)
[Source content for this project (c)](http://www.jerometranslations.com/)
