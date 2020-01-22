const vueScriptJson = require('../snippets/vue-script.json');

class VueScriptRegistrar
{
	provideCompletionItems(editor, context) {
		let snippets = [];
		
		for (let snippet in vueScriptJson) {
			let item = new CompletionItem(vueScriptJson[snippet].prefix, CompletionItemKind.Statement);
	
			item.documentation = vueScriptJson[snippet].description;
			item.insertText = vueScriptJson[snippet].body.join('\n');
			item.tokenize = true;
			
			snippets.push(item)
		}
		
		return snippets;
	};
}

nova.assistants.registerCompletionAssistant({
	"syntax": "javascript"
}, new VueScriptRegistrar());

module.exports = VueScriptRegistrar;