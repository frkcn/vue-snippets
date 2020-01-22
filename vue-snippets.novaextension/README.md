# Vue Snippets For Panic Nova Code Editor

## Description

Vue snippets for Nova inspired by [Sarah Drasner](https://github.com/sdras) awesome [Vue VSCode Snippets](https://github.com/sdras/vue-vscode-snippets) extension for VSCode.

Vue snippets were built to increase your developer experience in Panic Nova.

## Installation

- Download the latest release archive
- Unzip the archive
- Double-click vue-snippet.novaextension to install in Nova

## Snippets

### Vue

| Snippet     | Purpose                                    |
| ----------- | ------------------------------------------ |
| `vbase`     | Single file component base with SCSS       |
| `vbase-css` | Single file component base with CSS        |
| `vbase-pcss`| Single file component base with PostCSS    |
| `vbase-ts`  | Single file component base with Typescript |

### Template

| Snippet           | Purpose                             |
| ----------------- | ----------------------------------- |
| `vfor`            | v-for directive                     |
| `vmodel`          | Semantic v-model directive          |
| `vmodel-num`      | Semantic v-model number directive   |
| `von`             | v-on click handler with arguments   |
| `vel-props`       | Component element with props        |
| `vsrc`            | Image src binding                   |
| `vstyle`          | Inline style binding                |
| `vstyle-obj`      | Inline style binding with objects   |
| `vclass`          | Class binding                       |
| `vclass-obj`      | Class binding with objects          |
| `vclass-obj-mult` | Multiple conditional class bindings |
| `vanim`           | Transition component with JS hooks  |
| `vnuxtl`          | Nuxt Routing Link                   |
| `vroutename`      | router-link Named Routing           |
| `vroutenameparam` | router-link Named with Parameters   |
| `vroutepath`      | router-link Path Routing Link       |

### Script

| Snippet          | Purpose                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| `vdata`          | Component data as a function                                             |
| `vmethod`        | Vue method                                                               |
| `vcomputed`      | Vue computed property                                                    |
| `vwatcher`       | Vue watcher with new and old value args                                  |
| `vbeforecreate`  | beforeCreate lifecycle method                                            |
| `vcreated`       | created lifecycle method                                                 |
| `vbeforemount`   | beforeMount lifecycle method                                             |
| `vmounted`       | vmounted lifecycle method                                                |
| `vbeforeupdate`  | beforeUpdate lifecycle method                                            |
| `vupdated`       | updated lifecycle method                                                 |
| `vbeforedestroy` | beforeDestroy lifecycle method                                           |
| `vdestroyed`     | destroyed lifecycle method                                               |
| `vprops`         | Props with type and default                                              |
| `vimport`        | Import one component into another                                        |
| `vcomponents`    | Import one component into another within the export statement            |
| `vimport-export` | Import one component into another and use it within the export statement |
| `vmapstate`      | import mapState from Vuex into vue component component                   |
| `vmapgetters`    | import mapGetters from Vuex into vue component component                 |
| `vmapmutations`  | import mapMutations from Vuex into vue component component               |
| `vmapactions`    | import mapActions from Vuex into vue component component                 |
| `vfilter`        | Vue filter                                                               |
| `vmixin`         | Create a Vue Mixin                                                       |
| `vmixin-use`     | Bring a mixin into a component to use                                    |
| `vc-direct`      | Vue create a custom directive                                            |
| `vimport-lib`    | Import a library                                                         |
| `vimport-gsap`   | Import GreenSock with Timeline and Eases                                 |
| `vanimhook-js`   | Using the Transition component JS hooks in methods                       |
| `vcommit`        | Commit to Vuex store in methods for mutation                             |
| `vdispatch`      | Dispatch to Vuex store in methods for action                             |
| `vtest`          | A simple unit testing component                                          |
| `vinc`           | incrementer                                                              |
| `vdec`           | decrementer                                                              |
| `vconfig`        | vue.config.js file, example imports a sass file into every component     |

### Changelog

Please see [CHANGELOG](vue-snippets.novaextension/CHANGELOG.md) for more information what has changed recently.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits

- [Faruk Can](https://github.com/frkcn)
- [All Contributors](../../contributors)

## License

Vue snippets is open-sourced software licensed under the [MIT license](LICENSE.md).

