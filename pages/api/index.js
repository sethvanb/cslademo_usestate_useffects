const url = require("url");

export async function getList(query){
  var url;
  if(query == ""){
    url = "http://universities.hipolabs.com/search?";
  }else{
    url = "http://universities.hipolabs.com/search?name=" + query;
  }
  const response = await fetch(url, {method: "GET"});

  return await response.json();
}

export default async function performAction(req, res) {
  const queryObject = url.parse(req.url, true).query;

  switch (req.method) {
    case "GET": {
      var list = await getList(queryObject.search);
      res.statusCode = 200;
      res.end(JSON.stringify(list));
      break;
    }
    default: 
      res.statusCode = 405;
      res.end("Method not found");
  }
}
