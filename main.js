class Koszyk {
    constructor(listaProduktow, cena_laczna) {
        this.listaProduktow = listaProduktow;
        this.cena_laczna = cena_laczna;

    }   
    
}

class Produkt {
    constructor(nazwa, kolor, rozmiar, cena) {
        this.nazwa = nazwa;
        this.kolor = kolor;
        this.rozmiar = rozmiar;
        this.cena = cena;        
         
    }
}

class Zamownienie{
    constructor(dostawa, zaplata, nr) {
        this.dostawa = dostawa;
        this.zaplata = zaplata;
        this.nr = nr;

    }


}


  wyszukaj_produkt = function(){
    produkt = new Produkt();


    if(document.getElementById('koszulka').checked) {
        produkt.nazwa = "koszulka";
        produkt.cena = 50;
    }else if(document.getElementById('spodnie').checked) {
        produkt.nazwa = "spodnie";
        produkt.cena = 100;
    }else{
        produkt.nazwa = "skarpetki";
        produkt.cena = 20;
    }

    if(document.getElementById('czerwony').checked) {
        produkt.kolor = "czerwony";
        produkt.cena += 5;
    }else if(document.getElementById('niebieski').checked) {
        produkt.kolor = "niebieski";
        produkt.cena += 2;
    }else{
        produkt.kolor = "zielony";
        produkt.cena -= 3;
    }

    if(document.getElementById('large').checked) {
        produkt.rozmiar = "L";
        produkt.cena += 1.50;
    }else if(document.getElementById('medium').checked) {
        produkt.rozmiar = "M";
    }else{
        produkt.rozmiar = "S";
        produkt.cena -= 1.50;
    }

    document.getElementById('wyszukany_produkt').textContent = produkt.nazwa + ", rozmiar: " + produkt.rozmiar + ", kolor: ";
    document.getElementById('wyszukany_produkt').textContent += produkt.kolor + "-- CENA: " + produkt.cena + " zł";
    document.getElementById('wyszukany_produkt').innerHTML += "<button type='button' onclick='dodaj_do_koszyka(produkt)'>dodaj do koszyka</button>";
    
 }

                                                                                //KOSZYK
koszyk = new Koszyk();
koszyk.listaProduktow = Array();


dodaj_do_koszyka = function(Produkt) {
alert("Dodano "+ Produkt.nazwa + " do koszyka");
koszyk.listaProduktow.push(Produkt);  
}



wyswietl_koszyk = function()
{
    document.getElementById('koszyk').innerHTML = "";

    if(koszyk.listaProduktow.length == 0)
    {
        alert("Koszyk jest pusty");
    }
    else
    {
        for(var i=0; i<koszyk.listaProduktow.length; i++)
        {
             document.getElementById('koszyk').innerHTML += i+1 + ". " + koszyk.listaProduktow[i].nazwa;
             document.getElementById('koszyk').innerHTML += " " + koszyk.listaProduktow[i].kolor + " ";
             document.getElementById('koszyk').innerHTML += koszyk.listaProduktow[i].rozmiar + "---------- ";
             document.getElementById('koszyk').innerHTML += koszyk.listaProduktow[i].cena + "zł <br>";
        }
    }
      
    var suma=0;

    for(var i=0; i<koszyk.listaProduktow.length; i++)
    {
        suma += koszyk.listaProduktow[i].cena;
        
    }

    koszyk.cena_laczna = suma;

    document.getElementById('koszyk').innerHTML += "SUMA: " + koszyk.cena_laczna + "zł <br>";
    document.getElementById('koszyk').innerHTML += "<a href='zamowienie.html'>Złóż zamównienie</a>";


 }


                                                                //ZAMOWNIENE

zamow = function(koszyk)
{
    zamowienie = new Zamownienie();
    if(document.getElementById('imie').value=="" || document.getElementById('naz').value=="" || document.getElementById('adres').value=="" || document.getElementById('mail').value==""  )
    {
        alert("Uzupelnij wszystkie pola!");
    }
    else
    {
        alert("Zamowienie zostało przyjete");
        location.href="index.html";
        
    }
    
}
