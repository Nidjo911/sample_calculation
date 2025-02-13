function RndNum() {
    return Math.floor(Math.random() * 100) + 1; // Returns 1-100
}

module.exports = {
    dohvatiMiKalkulacije: (req, res) => {

        try {
            const dummyData = 10;
            res.send(dummyData.toString());
            res.json({ broj: dummyData });

        } catch (error) {
            console.log(`Error in calcs! => ${error}`);
            res.status(500).json({error: "err name"});
        }
    },
    dohvatiMiBroj: (req,res) => {

        try {
            const dummyData = RndNum();
            res.send(dummyData.toString());

        } catch (error) {
            console.log(`Err in calc => ${error}`);
            res.status(500).json({error: "err name"});
        }
    }
}