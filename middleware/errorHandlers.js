module.exports = async (error, req, res, next) => {
    res.status(500).json({
        ok: false,
        status: 500,
        data: error.message
    });
};