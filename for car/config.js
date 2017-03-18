//var hide_empty_list=true; //uncomment this line to hide empty selection lists
var disable_empty_list=true; //uncomment this line to disable empty selection lists

var onclickaction="navigator" //set to "alert" or "goto". Former is for debugging purposes, to tell you the value of the final selected list that will be used as the destination URL. Set to "goto" when below configuration is all set up as desired. 

var newwindow=0 //Open links in new window or not? 1=yes, 0=no.

/////DEFINE YOUR MENU LISTS and ITEMS below/////////////////

addListGroup("chainedmenu", "First-Select");

addOption("First-Select", "MAKE", "", 1); //HEADER OPTION
addList("First-Select", "AUDI", "", "AUDI");
addList("First-Select", "BMW", "", "BMW");
addList("First-Select", "DAEWOO", "", "DAEWOO");
addList("First-Select", "DATSUN", "", "DATSUN");
addList("First-Select", "FIAT", "", "FIAT");
addList("First-Select", "FORCE MOTORS", "", "FORCE MOTORS");
addList("First-Select", "FORD", "", "FORD");
addList("First-Select", "GENERAL MOTORS", "", "GENERAL MOTORS");
addList("First-Select", "HONDA", "", "HONDA");
addList("First-Select", "HYUNDAI", "", "HYUNDAI");
addList("First-Select", "ISUZU", "", "ISUZU");
addList("First-Select", "JAGUAR", "", "JAGUAR");
addList("First-Select", "MAHINDRA", "", "MAHINDRA");
addList("First-Select", "MARUTI", "", "MARUTI");
addList("First-Select", "MERCEDES BENZ", "", "MERCEDES BENZ");
addList("First-Select", "NISSAN", "", "NISSAN");
addList("First-Select", "PORSCHE", "", "PORSCHE");
addList("First-Select", "RENAULT", "", "RENAULT");
addList("First-Select", "SKODAA", "", "SKODA");
addList("First-Select", "TATA MOTORS", "", "TATA MOTORS");
addList("First-Select", "HINDUSTAN MOTORS", "", "HINDUSTAN MOTORS");
addList("First-Select", "TOYOTA", "", "TOYOTA");
addList("First-Select", "VOLKSWAGEN", "", "VOLKSWAGEN");
addList("First-Select", "VOLVO", "", "VOLVO");






addOption("AUDI", "Select Model", "", 1); //HEADER OPTION
addList("AUDI", "A4(OLD)-2.0 TDI", "", "");
addList("AUDI", "A4-1.8 TFSI,2.0 TDI", "", "");
addList("AUDI", "Q3", "", "");
addList("AUDI", "Q5", "", "");
addList("AUDI", "Q7",  "http://www.tyreathome.com/pricing.html");







addOption("BMW", "Select Model", "", 1); //HEADER OPTION
addList("BMW", "116i/118D", "");
addList("BMW", "320d,320i", "");
addList("BMW", "535I", "");
addList("BMW", "X5", "");
addList("BMW", "750Li/760Li-FRONT fitment", "");
addList("BMW", "750Li/760Li-REAR fitment", "");









addOption("DAEWOO", "Select Model", "", 1); //HEADER OPTION
addList("DAEWOO", "CEILO", "");
addList("DAEWOO", "MATIZ", "");






addOption("DATSUN", "Select Model", "", 1); //HEADER OPTION
addList("DATSUN", "DATSUN GO", "");




addOption("FIAT", "Select Model", "", 1); //HEADER OPTION
addList("FIAT", "PAILO STILE 1.1", "");
addList("FIAT", "SIENNA", "");
addList("FIAT", "LINEA CLASSIC", "");
addList("FIAT", "LINEA NEW(ACTIVE/DYNAMIC)", "");
addList("FIAT", "LINEA NEW & T JET-EMOTION", "");
addList("FIAT", "PUNTO-ACTIVE/DYNAMIC", "");
addList("FIAT", "PUNTO-EMOTION", "");
addList("FIAT", "PUNTO EMOTION(ALLOY)", "");






addOption("FORCE MOTORS", "Select Model", "", 1); //HEADER OPTION
addList("FORCE MOTORS", "TEMPO TRAVELLER(OLD)", "");
addList("FORCE MOTORS", "TEMPO TRAVELLER(NEW)", "");










addOption("FORD", "Select Model", "", 1); //HEADER OPTION
addList("FORD", "FIGO", "");
addList("FORD", "IKON", "");
addList("FORD", "IKON-SXI/EXI/ZXI", "");
addList("FORD", "ESCORT", "");
addList("FORD", "FIESTA CLASSIC", "");
addList("FORD", "FIESTA NEW", "");
addList("FORD", "ECO SPORT(AMBIENTE/TREND)", "");
addList("FORD", "ECO SPORT(TITANIUM)", "");
addList("FORD", "FUSION", "");
addList("FORD", "MONDEO", "");
addList("FORD", "ENDEAVOUR(PRE JULY 2007)", "");
addList("FORD", "ENDEAVOUR(POST JULY 2007)", "");







addOption("GENERAL MOTORS", "Select Model", "", 1); //HEADER OPTION
addList("GENERAL MOTORS", "SPARK", "");
addList("GENERAL MOTORS", "BEAT", "");
addList("GENERAL MOTORS", "BEAT DIESEL", "");
addList("GENERAL MOTORS", "AVEO-UVA 1.2 LS", "");
addList("GENERAL MOTORS", "AVEO-UVA 1.2 LT", "");
addList("GENERAL MOTORS", "OPEL ASTRA", "");
addList("GENERAL MOTORS", "POEL ASTRA CLUB", "");
addList("GENERAL MOTORS", "CORSA SAIL", "");
addList("GENERAL MOTORS", "AVEO LS1.4/LT1.6", "");
addList("GENERAL MOTORS", "SAIL UVA", "");
addList("GENERAL MOTORS", "SAIL", "");
addList("GENERAL MOTORS", "ENJOY", "");
addList("GENERAL MOTORS", "OPTRA 1.6LS/LT", "");
addList("GENERAL MOTORS", "OPTRA MAGNUM", "");
addList("GENERAL MOTORS", "CRUZE", "");
addList("GENERAL MOTORS", "TAVERA", "");







addOption("HONDA", "Select Model", "", 1); //HEADER OPTION
addList("HONDA", "BRIO", "");
addList("HONDA", "AMAZE", "");
addList("HONDA", "HONDA CITY (PRE 2009)", "");
addList("HONDA", "HONDA CITY(2009 & 2014 MODEL)", "");
addList("HONDA", "JAZZ", "");
addList("HONDA", "CIVIC 1.8S i VTEC", "");
addList("HONDA", "CIVIC HYBRID", "");
addList("HONDA", "ACCORD (NEW)", "");
addList("HONDA", "ACCORD (OLD)", "");
addList("HONDA", "CRV", "");






addOption("HYUNDAI", "Select Model", "", 1); //HEADER OPTION
addList("HYUNDAI", "ACCENT GVS/GLS/CRDi", "");
addList("HYUNDAI", "ACCENT VIVA", "");
addList("HYUNDAI", "SANTRO", "");
addList("HYUNDAI", "EON D-LITE(O) /ERA", "");
addList("HYUNDAI", "EON-MAGNA/SPORTS", "");
addList("HYUNDAI", "i-10", "");
addList("HYUNDAI", "GETZ -GLS/GL/GVS", "");
addList("HYUNDAI", "GETZ-CRDi", "");
addList("HYUNDAI", "GRAND i10", "");
addList("HYUNDAI", "XCENT", "");
addList("HYUNDAI", "XCENT-SX MODEL", "");
addList("HYUNDAI", "VERNA(OLD)", "");
addList("HYUNDAI", "VERNA SX VTVT(OLD)", "");
addList("HYUNDAI", "VERNA FLUIDIC(1.4L)", "");
addList("HYUNDAI", "VERNA FLUIDIC(1.6L)", "");
addList("HYUNDAI", "i-20 MAGNA", "");
addList("HYUNDAI", "i-20 ASTA", "");
addList("HYUNDAI", "ELANTRA (OLD)", "");
addList("HYUNDAI", "ELANTRA FLUIDIC NEW (2013)", "");
addList("HYUNDAI", "SONATA-GLS S20/GOLD", "");
addList("HYUNDAI", "SONATA-EMBERA", "");



addOption("ISUZU", "Select Model", "", 1); //HEADER OPTION
addList("ISUZU", "MU-7", "");



addOption("JAGUAR", "Select Model", "", 1); //HEADER OPTION
addList("JAGUAR", "XJ-L FRONT", "");
addList("JAGUAR", "XJ-L REAR", "");
addList("JAGUAR", "XF", "");







addOption("MAHINDRA", "Select Model", "", 1); //HEADER OPTION
addList("MAHINDRA", "BOLERO", "");
addList("MAHINDRA", "QUANTO", "");
addList("MAHINDRA", "SCORPIO M2Di", "");
addList("MAHINDRA", "XYLO", "");
addList("MAHINDRA", "XYLO D-2", "");
addList("MAHINDRA", "MAHINDRA SCORPIO(OLD)", "");
addList("MAHINDRA", "BOLERO CAMPER", "");
addList("MAHINDRA", "SCORPIO CRDe", "");
addList("MAHINDRA", "MAHINDRA MAXX", "");
addList("MAHINDRA", "JEEP COMMAANDER", "");
addList("MAHINDRA", "BOLERO MT", "");
addList("MAHINDRA", "LOGAN/VERITO", "");
addList("MAHINDRA", "VERITO VIBE", "");
addList("MAHINDRA", "XUV500", "");
addList("MAHINDRA", "REXTON", "");
addList("MAHINDRA", "THAR", "");



addOption("MARUTI", "Select Model", "", 1); //HEADER OPTION
addList("MARUTI", "MARUTI 800", "");
addList("MARUTI", "OMNI", "");
addList("MARUTI", "GYPSY KIND", "");
addList("MARUTI", "EECO", "");
addList("MARUTI", "ALTO 800", "");
addList("MARUTI", "ALTO", "");
addList("MARUTI", "ALTO K10", "");
addList("MARUTI", "WAGON-R(OLD)", "");
addList("MARUTI", "WAGON-R VXI (OLD)", "");
addList("MARUTI", "WAGON-R NEW (LX/LXi)", "");
addList("MARUTI", "WAGON-R NEW (VX-i)", "");
addList("MARUTI", "ZEN(OLD)", "");
addList("MARUTI", "ZEN ESTILO", "");
addList("MARUTI", "ZEN ESTILO VXI", "");
addList("MARUTI", "ESTEEM - LX.LXI", "");
addList("MARUTI", "ESTEEM VXI", "");
addList("MARUTI", "A-STAR", "");
addList("MARUTI", "CELRIO", "");
addList("MARUTI", "SWIFT-LXI/VXI", "");
addList("MARUTI", "SWIFT LDI/VDI", "");
addList("MARUTI", "SWIFT- ZXi(OLD)", "");
addList("MARUTI", "SWIFT NEW -Zxi/Zdi", "");
addList("MARUTI", "D'ZIRE LXI/VXI", "");
addList("MARUTI", "D'ZIRE LDI/VDI", "");
addList("MARUTI", "D'ZIRE Zxi(OLD)", "");
addList("MARUTI", "D'ZIRE New Zxi/zDI", "");
addList("MARUTI", "RITZ-LXI/VXI", "");
addList("MARUTI", "RITZ-VDI", "");
addList("MARUTI", "RITZ Zxi", "");
addList("MARUTI", "BALENO", "");
addList("MARUTI", "SX4-VXI/VDI", "");
addList("MARUTI", "SX4-ZXI/ZDI", "");
addList("MARUTI", "ERTIGA", "");



addOption("MERCEDES BENZ", "Select Model", "", 1); //HEADER OPTION
addList("MERCEDES BENZ", "C 200 Elegance/Classic", "");



addOption("NISSAN", "Select Model", "", 1); //HEADER OPTION
addList("NISSAN", "MICRA", "");
addList("NISSAN", "SUNNY", "");
addList("NISSAN", "SUNNY XV", "");
addList("NISSAN", "TERRANO", "");
addList("NISSAN", "X TRAIL- LE/MT", "");
addList("NISSAN", "EVALIA", "");






addOption("PORSCHE", "Select Model", "", 1); //HEADER OPTION
addList("PORSCHE", "CAYNNE", "");


addOption("RENAULT", "Select Model", "", 1); //HEADER OPTION
addList("RENAULT", "PULSE-RXZ", "");
addList("RENAULT", "FLUENCE", "");
addList("RENAULT", "DUSTER", "");


addOption("SKODA", "Select Model", "", 1); //HEADER OPTION
addList("SKODA", "FABIA 1.2/1.4 MPI", "");
addList("SKODA", "FABIA -1.4 PD TDI", "");
addList("SKODA", "FABIA NEW", "");
addList("SKODA", "FABIA NEW 1.6 MP ELEGANCE", "");
addList("SKODA", "RAPID ACTIVE/AMBITION", "");
addList("SKODA", "RAPID ELEGANCE", "");
addList("SKODA", "OCTAVIA", "");
addList("SKODA", "OCTAVIA NEWV (2013)", "");
addList("SKODA", "LAURA", "");
addList("SKODA", "SUPERB", "");



addOption("TATA MOTORS", "Select Model", "", 1); //HEADER OPTION
addList("TATA MOTORS", "NANO (FRONT)", "");
addList("TATA MOTORS", "NANO (REAR)", "");
addList("TATA MOTORS", "INDICA", "");
addList("TATA MOTORS", "INDICA TURBO", "");
addList("TATA MOTORS", "INDICA eV2-PETROL", "");
addList("TATA MOTORS", "INDICA eV2-DIESEL", "");
addList("TATA MOTORS", "INDICA VISTA SAFARI", "");
addList("TATA MOTORS", "INDICA VISTA DIESEL", "");
addList("TATA MOTORS", "INDIGO", "");
addList("TATA MOTORS", "INDIGO MARINA", "");
addList("TATA MOTORS", "INDIGO-CS", "");
addList("TATA MOTORS", "MANZA", "");
addList("TATA MOTORS", "BOLT", "");
addList("TATA MOTORS", "BOLT-ZX", "");
addList("TATA MOTORS", "ZEST", "");
addList("TATA MOTORS", "ZEST ZX", "");
addList("TATA MOTORS", "SUMO VICTA", "");
addList("TATA MOTORS", "SAFARI(OLD)", "");
addList("TATA MOTORS", "SAFARI DICOR", "");
addList("TATA MOTORS", "SAFARI STORME", "");
addList("TATA MOTORS", "SUMO GRAND", "");
addList("TATA MOTORS", "SUMO (OLD)", "");
addList("TATA MOTORS", "SUMO GOLD", "");
addList("TATA MOTORS", "SPACIO", "");
addList("TATA MOTORS", "TATA WINGER", "");
addList("TATA MOTORS", "ARIA", "");

addOption("HINDUSTAN MOTORS", "Select Model", "", 1); //HEADER OPTION
addList("HINDUSTAN MOTORS", "LANCER", "");
addList("HINDUSTAN MOTORS", "CONTESSA CLASSIC", "");
addList("HINDUSTAN MOTORS", "AMBASSADOR", "");
addList("HINDUSTAN MOTORS", "LANCER SLXD/SFXI/SFXD", "");
addList("HINDUSTAN MOTORS", "LANCER CEDIA", "");
addList("HINDUSTAN MOTORS", "MITSUBISHI PAJERO SPORT", "");
addList("HINDUSTAN MOTORS", "MITSUBISHI MONTERO", "");




addOption("TOYOTA", "Select Model", "", 1); //HEADER OPTION
addList("TOYOTA", "ETIOS LIVA J/G/GD/GDST", "");
addList("TOYOTA", "ETIOS LIVA V/VX", "");
addList("TOYOTA", "ETIOS", "");
addList("TOYOTA", "ETIOS V/VX/VD/VXD", "");
addList("TOYOTA", "COROLLA", "");
addList("TOYOTA", "COROLLA ALTIS NEW(2014)", "");
addList("TOYOTA", "CAMRY-2.4M/T & A/T", "");
addList("TOYOTA", "QUALIS D-6", "");
addList("TOYOTA", "QUALIS", "");
addList("TOYOTA", "INNOVA", "");
addList("TOYOTA", "FORTUNER", "");
addList("TOYOTA", "PRADO", "");
addList("TOYOTA", "PRIUS", "");





addOption("VOLKSWAGEN", "Select Model", "", 1); //HEADER OPTION
addList("VOLKSWAGEN", "POLO", "");
addList("VOLKSWAGEN", "POLO(HIGHLINE)", "");
addList("VOLKSWAGEN", "JETTA-1.6/1.9 TDI", "");
addList("VOLKSWAGEN", "JETTA NEW 2.0L TDI", "");
addList("VOLKSWAGEN", "PASSAT", "");
addList("VOLKSWAGEN", "BEETLE", "");
addList("VOLKSWAGEN", "TOUAREG", "");
addList("VOLKSWAGEN", "VENTO", "");
addList("VOLKSWAGEN", "VENTO (HIGHLINE)", "");

addOption("VOLVO", "Select Model", "", 1); //HEADER OPTION
addList("VOLVO", "XC60", "");