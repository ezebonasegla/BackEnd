import {
    fork
} from 'child_process';

export const apiRandomController = {
    get: (req, res) => {
        res.render('randoms');
    },
    post: (req, res) => {
        try {
            const cant = req.query.cant || 100000;
            const random = fork("./utils/randoms.js");
            random.send({ message: "start", cant: cant });
            random.on("message", (obj) => {
                res.json(obj);
            });
        } catch (error) {
            throw new Error(error);
        }
    }
}