        //Zad 1
        class Prostokat{

            constructor(wysokosc, szerokosc, nazwa){
                this.wysokosc = wysokosc;
                this.szerokosc = szerokosc;
                this.nazwa = nazwa;
            }

            liczObwod(){
                return this.wysokosc*2 + this.szerokosc*2;
            }

            liczPole(){
                return this.wysokosc * this.szerokosc;
            }

            static porownajPolaProstokatow(pr1, pr2){
                if(pr1.liczPole() > pr2.liczPole()) return pr1;
                return pr2;
            }

            //Zad 6 (na koncu jest wywolanie)
            setName(name){
                this.nazwa = name;
            }
        }

        var prost1 = new Prostokat(2, 3, "Prostokacik");
        var prost2 = new Prostokat(5, 7, "Prostokont");
        var prost3 = new Prostokat(8, 2, "Prostykat");

        console.log("Pole wiekszego prostokata: " + Prostokat.porownajPolaProstokatow(prost1, prost2).liczPole());

        //Zad 2
        class Trojkat{
            constructor(wysokosc, dlugosc_podstawy, nazwa){
                this.wysokosc = wysokosc;
                this.dlugosc_podstawy = dlugosc_podstawy;
                this.nazwa = nazwa;
            }

            liczPole(){
                return 0.5*this.wysokosc*this.dlugosc_podstawy;
            }

            static porownajPolaTrojkatow(tr1, tr2){
                if(tr1.liczPole() > tr2.liczPole()) return tr1;
                return tr2;
            }
        }

        var troj1 = new Trojkat(2, 3, "Trojkacik");
        var troj2 = new Trojkat(5, 7, "Trojkacicho");
        var troj3 = new Trojkat(8, 2, "Trujkont");

        console.log("Pole wiekszego trojkata: " + Trojkat.porownajPolaTrojkatow(troj1, troj3).liczPole());

        //Zad 3
        class Trapez{
            constructor(wysokosc, podstawa1, podstawa2, nazwa){
                this.wysokosc = wysokosc;
                this.podstawa1 = podstawa1;
                this.podstawa2 = podstawa2;
                this.nazwa = nazwa;
            }

            liczPole(){
                return 0.5*(this.podstawa1 + this.podstawa2)*this.wysokosc;
            }
        }

        var trap1 = new Trapez(2, 3, 5, "Trapezik");
        var trap2 = new Trapez(5, 7, 7, "Trapezisko");
        var trap3 = new Trapez(8, 2, 3, "Trapezzz");

        console.log("Pole trapezu: " + trap1.liczPole());
        //console.log(trap2.liczPole());
        //console.log(trap3.liczPole());

        //Zad 4

        function wezNajwiekszaFigure(pros, troj, trap){
            var najwieksza = pros;
            if(troj.liczPole() > najwieksza.liczPole()) najwieksza = troj;
            if(trap.liczPole() > najwieksza.liczPole()) najwieksza = trap;
            
            console.log(najwieksza.nazwa + " : " + najwieksza.liczPole());
        }

        //console.log(prost1.liczPole());
        //console.log(troj1.liczPole());
        //console.log(trap1.liczPole());

        wezNajwiekszaFigure(prost1, troj1, trap1);

        //Zad 5

        function getProstokatZWiekszymObwodem(pr1, pr2){
            if(pr1.liczObwod() > pr2.liczObwod()) return pr1;
            return pr2;
        }

        //Zad 6

        console.log(prost1.nazwa);
        prost1.setName("bardzo duzy prostokat");
        console.log(prost1.nazwa);

        //------------------------------
        console.log("");
        // drugi pdf (Lab6+ - Tablice)
        console.log("");
        //------------------------------

        //Zad 1

        var tablica = [1, 2, 3, 4, 6, 6, 7, 8, 9, 10];
        console.log("Tablica:  " + tablica);
        var suma = 0;
        var liczbyParzyste = [];
        tablica.forEach(function(liczba, index, tab){
            suma += liczba;
            if(liczba%2 == 0) liczbyParzyste.push(liczba);
        });
        console.log("Suma liczb z tablicy: " + suma);
        console.log("Liczby parzyste: " + liczbyParzyste);

        liczbyParzyste = tablica.filter(el => el%2==0); //2 sposob (metoda)
        console.log("Liczby parzyste (2 sposob): " + liczbyParzyste);

        console.log("Tablica pomnozona przez 3: " + tablica.map(el => el*3));

        tablica.push(67230);
        var ind = 0;
        var srednia = 0;
        var max = tablica[0];
        tablica.forEach(function(liczba, index, tab){
            if(liczba == 67230) ind = index;
            srednia += liczba;
            if(max < liczba) max = liczba;
        });
        srednia /= tablica.length;

        console.log("Indeks elementu zawierajacego moj numer albumu: " + ind);
        console.log("Średnia arytmetyczna elementow tablicy: " + srednia);
        console.log("Najwieksza liczba w tablicy: " + max);

        var iloscDanychElementow = tablica.filter(el => el == 6);
        console.log("Ilosc wystapien liczby 6 w tablicy: " + iloscDanychElementow.length);
        iloscDanychElementow = tablica.filter(el => el == 5);
        console.log("Ilosc wystapien liczby 5 w tablicy: " + iloscDanychElementow.length);

        //Zad 2

        var fib = [0, 1];
        for(let i = 1; i < 99; i++){
            fib.push(fib[i] + fib[i-1]);
        }

        console.log("Setny element ciagu fibonnaciego (pierwsze dwa wynosily 0 i 1)" + fib[99]);
        


        

        
        