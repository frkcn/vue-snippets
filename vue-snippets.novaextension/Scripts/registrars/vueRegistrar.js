const vueJson = require('../snippets/vue.json');

class VueRegistrar
{
	provideCompletionItems(editor, context) {
		let snippets = [];
		
		for (let snippet in vueJson) {
			let item = new CompletionItem(vueJson[snippet].prefix, CompletionItemKind.File);
	
			item.documentation = vueJson[snippet].description;
			item.insertText = vueJson[snippet].body.join('\n');
			item.tokenize = true;
			
			snippets.push(item)
		}
		
		return snippets;
	};
}

nova.assistants.registerCompletionAssistant({
	"syntax": "html",
}, new VueRegistrar());

module.exports = VueRegistrar;