var Generator = {
	makeNew:function(){
		return this.resolve(Dictionary.sentences[this.randomInt(Dictionary.sentences.length)])
	},
	resolve:function(phrase){
		var placeholderRegex = /{(.*?)}/,
		words = phrase.split(' '),
		finalString = phrase,
		i = 0,
		wordObj = {}
		
		for(i = 0; i < words.length; i++){
			var current = words[i]
			if(placeholderRegex.test(current)){
				var matches = placeholderRegex.exec(current),
				variable = matches[1]
				
				variable = variable.split(':')
				
				var name = variable[0],
				params = variable[1],
				arr = Dictionary[name + 's'],
				fin = ''
				
				if(!params){
					fin = arr[this.randomInt(arr.length)]
				}
				else{
					fin = arr[params]
				}
				finalString = finalString.replace(new RegExp(matches[0], ''), fin)
			}
			else{
				continue
			}
		}
		return finalString
	},
	randomInt:function(max){
		return Math.floor((Math.random()*max - 1)+1)
	}
	
}