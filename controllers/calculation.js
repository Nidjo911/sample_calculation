
//dohvatiMiKalkulacije

module.exports = {
    dohvatiMiKalkulacije: (req, res) => {

        try {
            const dummyData = 10;
            res.json({ broj: dummyData });

        } catch (error) {
            console.log(`Error in calcs! => ${error}`);
            res.status(500).json({error: "err name"});
        }
    }
}