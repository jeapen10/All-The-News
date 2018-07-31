var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var articlesSchema = new Schema({
	title: {
        type: String, 
        required: true
    },
    summary: {
        type: String, 
        required: true
	},
	articleLink: {
        type: String, 
        required: true
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }
});

var Articles = mongoose.model("Articles", articlesSchema);

module.exports = Articles;