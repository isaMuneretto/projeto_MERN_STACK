import News from "../models/News.js";

const createService = (body) => News.create(body);

//o findAll é quando busca no banco de dados. Aqui define vários parâmetros de busca
//-1 ordena do último id criado (mais recente) até o primeiro id
//skip começa de offset que é o zero e depois pula de 5 em 5 e limit que define quantos vai trazer
//populate traz os dados 
const findAllService = (offset, limit) => News.find().sort({_id: -1}).skip(offset).limit(limit).populate("user"); 

const countNews = () => News.countDocuments();

export {
    createService,
    findAllService,
    countNews
};