module.exports = (app) => {

    app.get("/", (req, res) => {

        res.render('pages/index');

    });

    app.get("/:id", (req, res) => {
        const page = req.params.id;

        res.render('pages/' + page);

    });
};