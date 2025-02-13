async function dohvatiMiPodatke() {
    console.log("this function runs!"); //works
    const response = await fetch('/performTestSampleCalculations');
    console.log(response.body);
    const odgovor = await response.json();
    console.log(odgovor);
}

async function dohvatiNekiBroj() {
    console.log("getting you a number... wait a sec pls");
    try {
        const response = await fetch('/getMeANumber');
        const tekst = await response.text();
        const rezultat = parseInt(tekst);
        console.log(`Dobitni broj je ... ${rezultat} `);
        console.log(`Tip podatka je: ${(typeof rezultat)} `);
        // upisi u DOM
        document.getElementById("brojFeedback").innerText = rezultat;
    }
    catch (error) {
        console.log(error.log);
    }

}