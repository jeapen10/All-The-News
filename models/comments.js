var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
	articleId: {
		type: String
	},
	comment: {
		type: String
    },
    name: {
		type: String
	}
});

var Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;