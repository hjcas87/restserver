const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const query = req.query;

    res.json({
        msg: 'get API - desde controlador',
        query,
    });
};

const usersPut = (req, res) => {

    const params = req.params
    
    res.json({
        msg: 'put API',
        params
    });
};

const usersPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post API - desde controlador',
        body,
    });
};

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - desde controlador',
    });
};
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - desde controlador',
    });
};

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete,
    usersPatch,
};
