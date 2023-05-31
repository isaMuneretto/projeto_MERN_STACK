import { createService, findAllService, countNews, topNewsService, findByIdService } from "../services/news.service.js";

export const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if (!title || !banner || !text) {
            res.status(400).send({
                message: "Submit all fields for registration",
            });
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId,
        })

        res.send(201);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const findAll = async (req, res) => {
    try {
        //para transformar o valor de limit e offset não pode ser uma constante
        let { limit, offset } = req.query;
        //de string para number
        limit = Number(limit);
        offset = Number(offset);

        if (!limit) {
            limit = 5;
        }

        if (!offset) {
            offset = 0; //é de onde eu começo, nesse caso de 0 e depois pula de 5 em 5
        }

        const news = await findAllService(offset, limit);
        const total = await countNews();
        const currentUrl = req.baseUrl;

        const next = offset + limit;;
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null; //cria uma nova url

        //typeof em js é para ver qual tipo de variável e vai ser uma string e tudo que envia no query params é uma string
        //console.log(typeof limit, typeof offset); 
        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;

        if (news.length === 0) {
            return res.status(400).send({ message: "There are no registered news" });
        }
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                userName: item.user.username,
                avatar: item.user.avatar,
            })),
        });   //manda um obj
    } catch (err) {
        res.status(500).send({ message: err.message });
    };
};

export const topNews = async (req, res) => {
    try {
        const news = await topNewsService(); //busca uma news

        if (!news) {
            return res.status(400).send({ message: "There is registered post" });
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                userName: news.user.username,
                avatar: news.user.avatar,
            },
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    };
};

export const findById = async (req, res) => {
    try {
        const { id } = req.params; //desconstruindo id

        const news = await findByIdService(id) //busca no bd a noticia (espera) e envia para o service com o id de cima

        return res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                userName: news.user.username,
                avatar: news.user.avatar,
            },
        })
    } catch (err) {
        res.status(500).send({ message: err.message });
    };
};

// export { create, findAll, topNews, findById }; (pode ser exportado também já na própria função)
