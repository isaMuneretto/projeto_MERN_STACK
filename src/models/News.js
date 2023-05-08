import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema ({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    banner: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now(), //em js usa esse comando para inserir data atual 
    },
    user: { //aqui é o relacionamento do arquivo News com o User 
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", //precisa ser obrigatoriamente igual ao nome que exporta na model User.js
        required: true,
    },
    likes: {
        type: Array,
        required: true,
        
    },
    comments: {
        type: Array,
        required: true,
    },
});

const News = mongoose.model("News", NewsSchema);

export default News;