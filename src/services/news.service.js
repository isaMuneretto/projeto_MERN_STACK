import News from "../models/News.js";

export const createService = (body) => News.create(body);

//o findAll é quando busca no banco de dados. Aqui define vários parâmetros de busca
//-1 ordena do último id criado (mais recente) até o primeiro id
//skip começa de offset que é o zero e depois pula de 5 em 5 e limit que define quantos vai trazer
//populate traz os dados 
export const findAllService = (offset, limit) => News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

export const countNews = () => News.countDocuments();

export const topNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");//busca a ultima noticia. Find One não traz o último

export const findByIdService = (id) => News.findById(id).populate("user");

export const searchByTitleService = (title) => News.find({
    title: { $regex: `${title || ""}`, $options: "i" },   //busca pelo titulo ou vazio e as options é para dizer se vai ser casesensitive ou não
}).sort({ _id: -1 }).populate("user");

export const byUSerService = (id) => News.find({user: id}).sort({ _id: -1 }).populate("user"); //o id é buscado pelo user

//export { createService, findAllService, countNews, topNewsService }; exportado já nas funções