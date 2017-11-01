# sunset
A group project for the Angular.JS elective class

Made by Kasper, Mikael and Thomas

Hele problemet opstod da der skulle tages billeder af en klients restaurant. Imens vi gik og tog billeder begyndte solen at gå ned og der kom ”uregelmæssigheder” i billederne, da solen og lyset på stedet blev forringet gradvis som timerne gik og solen gik ned. Her kom Ideen så til en AngularJS app hvor man skulle kunne se hvad tid solen gå ned, set fra det klokkeslæt man er i. Det skulle så kunne bruges af fotografer, jægere, fiskere og andre der ville have glæde af at vide, hvad tid solen ville gå ned.
Derudover skulle vores AngularJS app illustreres på en pæn måde, så det ville være behageligt for en bruger at se på. Der skulle være en konstant opdatering så der ville være en flydende bevægelse mellem dag og nat. Der skulle også placeres flere forskellige knapper der ville give brugeren mulighed for at få mere data, hvis det skulle ønskes end blot et klokkeslæt og noget flot grafik.

# APP’ENS STRUKTUR

Der er flere steder vi bruger kommentarer i vores kode, for at gøre det lettere for andre at finde rundt. En af de steder det har givet god mening kommentere i vores tilfælde har det været i index.html. Her har vi 3 knapper der hver især ligner hinanden meget og derpå har de fået en kommentar.
På samme måde er der også skrevet en del kommentarer i vores script.js fil, da der er flere forskellige funktioner og variabler, der hver især er med til at omregne vores data, så den kan bruges til at animere bevægelsen af baggrunden i CSS’en.
Da koden nogle steder bliver lidt komplekst, var det derfor en god idé at skrive nogle kommentarer rundt omkring, så det giver mere mening.

Koden til venstre viser vores scripts-fil, og den starter ud med at lave to variabler der sætter tidspunktet for henholdsvis solopgangen og solnedgangen. Dernæst bliver disse tidspunkter omregnet til Unix timestamp, som er en standard der tæller millisekunder fra datoen 1. januar 1970. Derefter laves der også lige en variabel med det nuværende timestamp, som bruges senere i koden.
Nu bruger vi så variablerne med de to tidspunkter i til at udregne hvor mange sekunder der er mellem dem. Slutresultatet viser så hvor mange sekunder solen skinner i i alt.
Dernæst bruger vi vores timestamp for solnedgangen i et Javascript library der hedder countdown, det kan vi blandt andet bruge til at lave en aktiv nedtælling til hvornår dette timestamp rammes.
Nu laves der en funktion der hedder percentage, som har til formål at udregn hvor mange procent af dagen som solen indtil videre har været oppe på.
Først sørger vi dog for at trække 1 fra vores timeLeft, dette bruges til at lave siden dynamisk, og ved hjælp af en setInterval funktion bliver dette gentaget hvert sekund, så det er muligt at lave en illustrativ nedtælling i form af vores grafik på hjemmesiden.
Dernæst tjekker den hvis vores nuværende timestamp (curTimestamp) er større end solnedgangens timestamp, for hvis den er det, så skal den stoppe med at stige, da det betyder at den har passeret 100%. Hvis ikke, så skal den blot udregne procenten. Til sidst sættes denne procent i vores CSS som bredden af vores element.

Vores filstruktur bygger på den simple mappe, mappe i mappe. Der er flere muligheder når det kommer til filstruktur, men vi bruger den mest overskuelige. Her har vi en overmappe der er basen for vores filer, som indebærer vores index-fil og assets-mappen. Den leder så indtil tre andre mapper: Javascript-mappen (js), image (billeder) og vores Cascading Style Sheets (css). I js-mappen er der app.js der indeholder vores AngularJS scripts, der er også vores countdown library, moment library, der bruges til at udregne timestamp, og til sidst vores scripts fil.
Hvis vi så går tilbage og ind i vores images mappe er der de billedfiler vi bruger til at illustrerer vores AngularJS app med, det er en blanding af SVG (Scalable Vector Graphics) filer og PNG filer.
Vi indsamler data til vores AngularJS app fra hjemmesiden sunrise-sunset.org, da de har en god og velopdateret API med den information vi ønsker, den tilbyder et datasæt der indeholder data om solop- og nedgang, der er nem at omskrive til den AngularJS app vi har lavet. Der er også anden data såsom tider på hvornår den astronomiske skumringen begynder {“astronomical_twilight_begin”:”2017-11-01T04:20:06+00:00”}.
Alt sammen data der kan implementeres ind i vores applikation. Dog er det ikke alt vi har brug for, men det kan implementeres i en senere version. 

# FUNKTIONER

Vores AngularJS applikation adskiller sig fra Codeschools gemstore, blandt andet ved at vi i stedet for at hente data fra lokale javascript arrays, så henter den information fra en ekstern API. API’en opdateres dagligt og ligger som en JSON-fil, der er offentligt tilgængelig.
I toppen af vores side er der tre knapper der hedder Solopgang, Solnedgang og Middag. Knapperne henter ved hjælp af AngularJS opdateret information fra vejr API ‘en, om henholdsvis hvornår solen står op, hvornår solen går ned og hvornår solen står på sit højeste (middag).
Informationerne bliver printet på siden fra den eksterne API/JSON-fil, ved at bruge et AngularJS direktiv: {{dataset.results.sunrise}}. I dette eksempel bliver der printet tidspunktet for dagens solopgang.
{{dataset.results.sunrise | date: ”HH:mm”}} her er der tilføjet er angular.js filter der skriver informationen som en dato. ”HH:mm” specificerer at det er timer og minutter vi vil have printet.
Selve knapperne bliver vist og skjult når man klikker på dem ved hjælp af AngularJS directives ng-click og ng-show. HTML elementet der indeholder informationerne om solopgang osv. er skjult som standard og bliver vist når man trykker på knappen ved hjælp af ng-click og ng-show. Når man har trykket på knappen bliver informationerne i "<h1>" vist og en ny knap der hedder ”Skjul” bliver også vist.
Skjul knappen har også en ng-click og ng-show fx med værdien !sunset. Udråbstegnet gør at ng-show i realiteten gør det modsatte og skjuler "<h1>" elementet.

# PROCESSEN

Vi har brugt GitHub som vores primære platform. Her er der blevet arbejde på selve masteren og under-branches for at vi bedre kunne udvikle på app’en samtidig, men på hver vores computer.
I starten havde vi en del problemer med at arbejde flere samtidig, idet der hele tiden opstod konflikter, men mod enden af projektet fik vi det til at lykkes - hovedsageligt på grund af vores under-branches. Hvis vi havde været bedre til at bruge GitHub fra starten kunne det nok have gået bedre i forhold til hvor mange der kunne udvikle på applikationen.
Der blev lavet en mindre tidsplan der har været med til at strukturere arbejdet og de forskellige opgaver der skulle laves, og med den har det været muligt at kunne nå alt vi ville i forhold til udvikling af applikationen.
For at vi alle vidste hvordan vores AngularJS applikation virkede, var det vigtigt at der blev lavet skitser, der alle var med til at gøre selve arbejdesvisionen mere overskuelig, samt sætte et mål for hvad der skulle sigtes efter for at få et tilfredsstillende produkt. Samtidig har vi også lavet en model af hvordan selve applikationen fungerer og hvor den henter data fra.

# KONKLUSION

Projektet er blevet opfyldt tilfredsstillendene - de ønskede mål vi havde sat i forbindelse med projektet er opfyldt og vores realtistiske mål nåede vi.
Dog har vi lidt ting vi gerne ville inkludere i en fremtidig version. Det kunne være bedre at applikationen var responsiv, så den kunne have været brugt på alle enheder. En anden mulighed for at “dele ens lokation” med applikationen så man kunne bruge den i hele verden ville havde givet den en endnu større brugerflade. Et andet ønske var at prøvet kræfter med at få lavet applikationen om til en ionic app, men det grundet tid var det ikke muligt. En mindre ting ville være at selve siden vende så det var mere realistisk i forhold til om det var natten der pressede sig på eller om det var dagen.