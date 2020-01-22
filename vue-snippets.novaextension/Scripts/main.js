require('./registrars/vueRegistrar.js');
require('./registrars/vueTemplateRegistrar.js');
require('./registrars/vueScriptRegistrar.js');

exports.activate = function() {
    // Do work when the extension is activated
    console.log('Hello, your vue snippet extension is now active!')
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
    console.log('Goodbye!')
}
