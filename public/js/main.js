
(async function funkcijaKojaSePokreceNaPocetku(){
    alert("hi");

})();

async function dohvatiMiPodatke(){
    console.log("this function runs!");
    const response = await fetch('/performTestSampleCalculations');
    const odgovor = await response.json();
    
}