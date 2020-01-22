const vueTemplateJson = require('../snippets/vue-template.json');

class VueTemplateRegistrar
{
	provideCompletionItems(editor, context) {
		let snippets = [];
		
		for (let snippet in vueTemplateJson) {
			let item = new CompletionItem(vueTemplateJson[snippet].prefix, CompletionItemKind.Statement);
	
			item.documentation = vueTemplateJson[snippet].description;
			item.insertText = vueTemplateJson[snippet].body.join('\n');
			item.tokenize = true;
			
			snippets.push(item)
		}
		
		return snippets;
	};
}

nova.assistants.registerCompletionAssistant({
	"syntax": "html"
}, new VueTemplateRegistrar());

module.exports = VueTemplateRegistrar;