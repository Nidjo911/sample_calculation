
(async function funkcijaKojaSePokreceNaPocetku(){
    alert("hi");
})();

async function dohvatiMiPodatke(){
    console.log("this function runs!"); //works
    const response = await fetch('/performTestSampleCalculations');
    console.log(response.body);
    const odgovor = await response.json();
    console.log(odgovor);
}