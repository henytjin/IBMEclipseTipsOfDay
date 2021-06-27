function createJson(lang = en)
{
	jsonObj = [];
	item1 = {};
	item1 ["url"] = "page1.html"
	jsonObj.push(item1);
	item2 = {};
	item2 ["url"] = "page2.html";
	jsonObj.push(item2);
	console.log(jsonObj);
}

createJson()