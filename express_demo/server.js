var express = require("express")
var path = require("path")

var app = express()

const PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", function(request, response){
	var context = {
		name: "Jack",
		some_numbers: [3,4,5,320, Math.PI, 2.71]
	}

	response.render("index.ejs", context)
})

app.get("/other/:id", function(req, res){
	res.json({id: req.params.id})
})

app.listen(PORT, function(){
	console.log(`Listening on port ${PORT}`)
})