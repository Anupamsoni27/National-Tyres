//var hide_empty_list=true; //uncomment this line to hide empty selection lists
var disable_empty_list=true; //uncomment this line to disable empty selection lists

var onclickaction="navigator" //set to "alert" or "goto". Former is for debugging purposes, to tell you the value of the final selected list that will be used as the destination URL. Set to "goto" when below configuration is all set up as desired. 

var newwindow=0 //Open links in new window or not? 1=yes, 0=no.

/////DEFINE YOUR MENU LISTS and ITEMS below/////////////////

addListGroup("chainedmenu", "First-Select");

addOption("First-Select", "MAKE", "", 1); //HEADER OPTION
addList("First-Select", "BAJAJ", "", "bajaj");
addList("First-Select", "SUZUKI", "", "SUZUKI");
addList("First-Select", "Royal Enfield", "", "RE");
addList("First-Select", "PIAGGIO", "", "PIGG");
addList("First-Select", "DSK HYOSUNG", "", "DSKH");
addList("First-Select", "DSK BENELLI", "", "DSKB");
addList("First-Select", "HONDA", "", "HONDA");
addList("First-Select", "MAHINDRA", "", "mahindra");
addList("First-Select", "YAMAHA", "", "YAMAHA");
addList("First-Select", "HERO", "", "HERO");
addList("First-Select", "TVS", "", "TVS");




addOption("bajaj", "Select Model", "", 1); //HEADER OPTION
addList("bajaj", "PULSAR 220", "", "bajaj-PULSAR 220");
addList("bajaj", "KTM DUKE 200", "", "bajaj-KTM DUKE 200");
addList("bajaj", "KTM DUKE 390", "", "bajaj-KTM DUKE 390");
addList("bajaj", "KTM RC 200", "", "bajaj-KTM RC 200");
addList("bajaj", "KTM RC 390", "", "bajaj-KTM RC 390");
addList("bajaj", "PULSAR 180", "", "bajaj-PULSAR 180");
addList("bajaj", "PULSAR 200", "", "bajaj-PULSAR 200");
addList("bajaj", "PULSAR 200 NS", "", "bajaj-PULSAR 200 NS");
addList("bajaj", "PULSAR 200 RS", "", "bajaj-PULSAR 200 RS");
addList("bajaj", "PULSAR 200 AS", "", "bajaj-PULSAR 200 AS");
addList("bajaj", "PULSAR 220", "", "bajaj-PULSAR 220");
addList("bajaj", "PULSAR 150 AS", "", "bajaj-PULSAR 150 AS");
addList("bajaj", "PULSAR 135", "", "bajaj-PULSAR 135");
addList("bajaj", "PULSAR 150", "", "bajaj-PULSAR 150");
addList("bajaj", "AVENGER 220", "", "bajaj-AVENGER 220");
addList("bajaj", "DISCOVER 135", "", "bajaj-DISCOVER 135");
addList("bajaj", "DISCOVER H 150", "", "bajaj-DISCOVER H 150");
addList("bajaj", "PLATINA 100", "", "bajaj-PLATINA 100");
addList("bajaj", "PLATINA 125", "", "bajaj-PLATINA 125");
addList("bajaj", "CT 100", "", "bajaj-CT 100");
addList("bajaj", "BOXER AR/ BM 100", "", "bajaj-BOXER AR/ BM 100");
addList("bajaj", "BOXER 150", "", "bajaj-BOXER 150");
addList("bajaj", "CALIBER 115", "", "bajaj-CALIBER 115");
addList("bajaj", "BOXER CT", "", "bajaj-BOXER CT");
addList("bajaj", "BOXER AT", "", "bajaj-BOXER AT");
addList("bajaj", "PULSAR 220", "", "bajaj-PULSAR 220");




addOption("bajaj-KTM RC 200", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-KTM RC 200", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-KTM RC 200", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("bajaj-KTM RC 390", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-KTM RC 390", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-KTM RC 390", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("bajaj-PULSAR 180", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 180", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PULSAR 180", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("bajaj-PULSAR 200", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 200", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PULSAR 200", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("bajaj-PULSAR 200 NS", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 200 NS", "Front","df" );
addOption("bajaj-PULSAR 200 NS", "Rear", "http://www.tyreathome.com/pricing.html");



addOption("bajaj-PULSAR 200 RS", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 200 RS", "Front", src="C:/Users/Anupam/Desktop/work space/National Tyres/pricing.html");
addOption("bajaj-PULSAR 200 RS", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-PULSAR 200 AS", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 200 AS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PULSAR 200 AS", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-PULSAR 220", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 220", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PULSAR 220", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-PULSAR 150 AS", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 150 AS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PULSAR 150 AS", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("bajaj-PULSAR 135", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 135", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PULSAR 135", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("bajaj-PULSAR 150", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PULSAR 150", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PULSAR 150", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-AVENGER 220", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-AVENGER 220", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-AVENGER 220", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-DISCOVER 135", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-DISCOVER 135", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-DISCOVER 135", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-DISCOVER H 150", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-DISCOVER H 150", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-DISCOVER H 150", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-PLATINA 100", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PLATINA 100", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PLATINA 100", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-PLATINA 125", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-PLATINA 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-PLATINA 125", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-CT 100", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-CT 100", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-CT 100", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-BOXER AR/ BM 100", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-BOXER AR/ BM 100", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-BOXER AR/ BM 100", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("bajaj-BOXER 150", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-BOXER 150", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-BOXER 150", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("bajaj-CALIBER 115", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-CALIBER 115", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-CALIBER 115", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("bajaj-BOXER CT", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-BOXER CT", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-BOXER CT", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("bajaj-BOXER AT", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-BOXER AT", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-BOXER AT", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("bajaj-KTM DUKE 200", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-KTM DUKE 200", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-KTM DUKE 200", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("bajaj-KTM DUKE 390", "Select Model", "", 1); //HEADER OPTION
addOption("bajaj-KTM DUKE 390", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("bajaj-KTM DUKE 390", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("mahindra", "Select Model", "", 1); //HEADER OPTION
addList("mahindra", "STALLIO", "", "mahindra-STALLIO");
addList("mahindra", "CENTURO", "", "mahindra-CENTURO");
addList("mahindra", "PANTERO", "", "mahindra-PANTERO");
addList("mahindra", "RODEO 125", "", "mahindra-RODEO 125");
addList("mahindra", "RODEO UZO 125", "", "mahindra-RODEO UZO 125");
addList("mahindra", "DURO", "", "mahindra-DURO");
addList("mahindra", "DURO DZ", "", "mahindra-DURO DZ");
addList("mahindra", " FLYTE 125", "", "mahindra-FLYTE 125");
addList("mahindra", "KINE", "", "mahindra-KINE");
addList("mahindra", "GUSTO", "", "mahindra-GUSTO");



addOption("mahindra-STALLIO", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-STALLIO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-STALLIO", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("mahindra-CENTURO", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-CENTURO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-CENTURO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("mahindra-PANTERO", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-PANTERO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-PANTERO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("mahindra-RODEO 125", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-RODEO 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-RODEO 125", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("mahindra-RODEO UZO 125", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-RODEO UZO 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-RODEO UZO 125", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("mahindra-DURO", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-DURO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-DURO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("mahindra-DURO DZ", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-DURO DZ", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-DURO DZ", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("mahindra-FLYTE 125", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-FLYTE 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-FLYTE 125", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("mahindra-KINE", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-KINE", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-KINE", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("mahindra-GUSTO", "Select Model", "", 1); //HEADER OPTION
addOption("mahindra-GUSTO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("mahindra-GUSTO", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("TVS", "Select Model", "", 1); //HEADER OPTION
addList("TVS", "APACHE RTR 180", "", "TVS-APACHE RTR 180");
addList("TVS", "APACHE RTR 160", "", "TVS-APACHE RTR 160");
addList("TVS", "JIVE", "", "TVS-JIVE");
addList("TVS", "FLAME (OLD)", "", "TVS-FLAME (OLD)");
addList("TVS", "FLAME DS 125", "", "TVS-FLAME DS 125");
addList("TVS", "FLAME SR 125", "", "TVS-FLAME SR 125");
addList("TVS", "VICTOR", "", "TVS-VICTOR");
addList("TVS", "STAR CITY (OLD)", "", "TVS-STAR CITY (OLD)");
addList("TVS", "STAR CITY/SPORTS", "", "TVS-STAR CITY/SPORTS");
addList("TVS", "TVS MAX 100R", "", "TVS-TVS MAX 100R");
addList("TVS", "FLAME", "", "TVS-FLAME");
addList("TVS", "TVS FIERO F2", "", "TVS-TVS FIERO F2");
addList("TVS", "TVS VICTOR GLX 125", "", "TVS-TVS VICTOR GLX 125");
addList("TVS", "WEGO", "", "TVS-WEGO");
addList("TVS", "JUPITER", "", "TVS-JUPITER");
addList("TVS", "SCOOTY PEP+", "", "TVS-SCOOTY PEP+");
addList("TVS", "SCOOTY ES/TEENZ", "", "TVS-SCOOTY ES/TEENZ");



addOption("TVS-APACHE RTR 180", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-APACHE RTR 180", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-APACHE RTR 180", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("TVS-APACHE RTR 160", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-APACHE RTR 160", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-APACHE RTR 160", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("TVS-JIVE", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-JIVE", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-JIVE", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("TVS-FLAME (OLD)", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-FLAME (OLD)", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-FLAME (OLD)", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("TVS-FLAME DS 125", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-FLAME DS 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-FLAME DS 125", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("TVS-FLAME SR 125", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-FLAME SR 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-FLAME SR 125", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("TVS-VICTOR", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-VICTOR", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-VICTOR", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-STAR CITY (OLD)", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-STAR CITY (OLD)", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-STAR CITY (OLD)", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-STAR CITY/SPORTS", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-STAR CITY/SPORTS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-STAR CITY/SPORTS", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("TVS-TVS MAX 100R", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-TVS MAX 100R", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-TVS MAX 100R", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-FLAME", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-FLAME", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-FLAME", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-TVS FIERO F2", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-TVS FIERO F2", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-TVS FIERO F2", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-TVS VICTOR GLX 125", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-TVS VICTOR GLX 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-TVS VICTOR GLX 125", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-WEGO", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-WEGO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-WEGO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-JUPITER", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-JUPITER", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-JUPITER", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("TVS-SCOOTY PEP+", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-SCOOTY PEP+", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-SCOOTY PEP+", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("TVS-SCOOTY ES/TEENZ", "Select Model", "", 1); //HEADER OPTION
addOption("TVS-SCOOTY ES/TEENZ", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("TVS-SCOOTY ES/TEENZ", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO", "Select Model", "", 1); //HEADER OPTION
addList("HERO", "KARIZMA(OLD MODEL)", "", "HERO-KARIZMA(OLD MODEL)");
addList("HERO", "KARIZMA ZMR/R", "", "HERO-KARIZMA ZMR/R");
addList("HERO", "NEW HUNK", "", "HERO-NEW HUNK");
addList("HERO", "HUNK", "", "HERO-HUNK");
addList("HERO", "X-TREME", "", "HERO-X-TREME");
addList("HERO", "X-TREME SPORTS", "", "HERO-X-TREME SPORTS");
addList("HERO", "SPLENDER PLUS/PRO", "", "HERO-SPLENDER PLUS/PRO");
addList("HERO", "SUPER SPLENDER", "", "HERO-SUPER SPLENDER");
addList("HERO", "SPLENDER NXG", "", "HERO-SPLENDER NXG");
addList("HERO", "SPLENDER I SMART", "", "HERO-SPLENDER I SMART");
addList("HERO", "SPLENDOUR PRO CLASSIC", "", "HERO-SPLENDOUR PRO CLASSIC");
addList("HERO", "PASSION PLUS/PRO", "", "HERO-PASSION PLUS/PRO");
addList("HERO", "PASSION PRO TR", "", "HERO-PASSION PRO TR");
addList("HERO", "PASSION XPRO", "", "HERO-PASSION XPRO");
addList("HERO", "CDN STANDERD/DELUXE", "", "HERO-CDN STANDERD/DELUXE");
addList("HERO", "CD 100", "", "HERO-CD 100");
addList("HERO", "CD 100 SS", "", "HERO-CD 100 SS");
addList("HERO", "ACHIEVER", "", "HERO-ACHIEVER");
addList("HERO", "IGNITOR", "", "HERO-IGNITOR");
addList("HERO", "MAESTRO", "", "HERO-MAESTRO");
addList("HERO", "MAESTRO STANDERD", "", "HERO-MAESTRO STANDERD");
addList("HERO", "MAESTRO DELUXE", "", "HERO-MAESTRO DELUXE");
addList("HERO", "PLEASURE", "", "HERO-PLEASURE");
addList("HERO", "PLEASURE 2014", "", "HERO-PLEASURE 2014");


addOption("HERO-KARIZMA(OLD MODEL)", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-KARIZMA(OLD MODEL)", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-KARIZMA(OLD MODEL)", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("HERO-KARIZMA ZMR/R", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-KARIZMA ZMR/R", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-KARIZMA ZMR/R", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-NEW HUNK", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-NEW HUNK", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-NEW HUNK", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-HUNK", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-HUNK", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-HUNK", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-X-TREME", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-X-TREME", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-X-TREME", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-X-TREME SPORTS", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-X-TREME SPORTS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-X-TREME SPORTS", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-SPLENDER PLUS/PRO", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-SPLENDER PLUS/PRO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-SPLENDER PLUS/PRO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-SUPER SPLENDER", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-SUPER SPLENDER", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-SUPER SPLENDER", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-SPLENDER NXG", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-SPLENDER NXG", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-SPLENDER NXG", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("HERO-SPLENDER I SMART", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-SPLENDER I SMART", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-SPLENDER I SMART", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("HERO-SPLENDOUR PRO CLASSIC", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-SPLENDOUR PRO CLASSIC", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-SPLENDOUR PRO CLASSIC", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("HERO-PASSION PLUS/PRO", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-PASSION PLUS/PRO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-PASSION PLUS/PRO", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("HERO-PASSION PRO TR", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-PASSION PRO TR", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-PASSION PRO TR", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-PASSION XPRO", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-PASSION XPRO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-PASSION XPRO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-CDN STANDERD/DELUXE", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-CDN STANDERD/DELUXE", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-CDN STANDERD/DELUXE", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-CD 100", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-CD 100", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-CD 100", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-CD 100 SS", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-CD 100 SS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-CD 100 SS", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-ACHIEVER", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-ACHIEVER", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-ACHIEVER", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("HERO-IGNITOR", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-IGNITOR", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-IGNITOR", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-MAESTRO", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-MAESTRO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-MAESTRO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HERO-MAESTRO STANDERD", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-MAESTRO STANDERD", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-MAESTRO STANDERD", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("HERO-MAESTRO DELUXE", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-MAESTRO DELUXE", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-MAESTRO DELUXE", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("HERO-PLEASURE", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-PLEASURE", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-PLEASURE", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("HERO-PLEASURE 2014", "Select Model", "", 1); //HEADER OPTION
addOption("HERO-PLEASURE 2014", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HERO-PLEASURE 2014", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("YAMAHA", "Select Model", "", 1); //HEADER OPTION
addList("YAMAHA", "FZ 16/FAZER/FZS-V1", "", "YAMAHA-FZ 16/FAZER/FZS-V1");
addList("YAMAHA", "FZ 16/FAZER/FZS-V2", "", "YAMAHA-FZ 16/FAZER/FZS-V2");
addList("YAMAHA", "YAMAHA R 15-V1", "", "YAMAHA-YAMAHA R 15-V1");
addList("YAMAHA", "YZF R15-V2.0", "", "YAMAHA-YZF R15-V2.0");
addList("YAMAHA", "LIBERO(G5)", "", "YAMAHA-LIBERO(G5)");
addList("YAMAHA", "LIBERO YBR 110", "", "YAMAHA-LIBERO YBR 110");
addList("YAMAHA", "LIBERO YBR 125", "", "YAMAHA-LIBERO YBR 125");
addList("YAMAHA", "GLANDIATOR/SS 125", "", "YAMAHA-GLANDIATOR/SS 125");
addList("YAMAHA", "YAMAHA RX 100/RS 135/CRUX", "", "YAMAHA-YAMAHA RX 100/RS 135/CRUX");
addList("YAMAHA", "SZ/SZX", "", "YAMAHA-SZ/SZX");
addList("YAMAHA", "RAY/RAY-Z", "", "YAMAHA-RAY/RAY-Z");
addList("YAMAHA", "RAY Z 2014", "", "YAMAHA-RAY Z 2014");
addList("YAMAHA", "ALPHA", "", "YAMAHA-ALPHA");
addList("YAMAHA", "ENTICER", "", "YAMAHA-ENTICER");

addOption("YAMAHA-FZ 16/FAZER/FZS-V1", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-FZ 16/FAZER/FZS-V1", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-FZ 16/FAZER/FZS-V1", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("YAMAHA-FZ 16/FAZER/FZS-V2", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-FZ 16/FAZER/FZS-V2", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-FZ 16/FAZER/FZS-V2", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("YAMAHA-YAMAHA R 15-V1", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-YAMAHA R 15-V1", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-YAMAHA R 15-V1", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("YAMAHA-YZF R15-V2.0", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-YZF R15-V2.0", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-YZF R15-V2.0", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("YAMAHA-LIBERO(G5)", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-LIBERO(G5)", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-LIBERO(G5)", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("YAMAHA-LIBERO YBR 110", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-LIBERO YBR 110", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-LIBERO YBR 110", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("YAMAHA-LIBERO YBR 125", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-LIBERO YBR 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-LIBERO YBR 125", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("YAMAHA-GLANDIATOR/SS 125", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-GLANDIATOR/SS 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-GLANDIATOR/SS 125", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("YAMAHA-YAMAHA RX 100/RS 135/CRUX", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-YAMAHA RX 100/RS 135/CRUX", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-YAMAHA RX 100/RS 135/CRUX", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("YAMAHA-SZ/SZX", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-SZ/SZX", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-SZ/SZX", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("YAMAHA-RAY/RAY-Z", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-RAY/RAY-Z", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-RAY/RAY-Z", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("YAMAHA-RAY Z 2014", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-RAY Z 2014", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-RAY Z 2014", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("YAMAHA-ALPHA", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-ALPHA", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-ALPHA", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("YAMAHA-ENTICER", "Select Model", "", 1); //HEADER OPTION
addOption("YAMAHA-ENTICER", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("YAMAHA-ENTICER", "Rear",  "http://www.tyreathome.com/pricing.html");





addOption("HONDA", "Select Model", "", 1); //HEADER OPTION
addList("HONDA", "HONDA CBR 250R", "", "HONDA-HONDA CBR 250R");
addList("HONDA", "HONDA CBR 150R", "", "HONDA-HONDA CBR 150R");
addList("HONDA", "CB UNICORN", "", "HONDA-CB UNICORN");
addList("HONDA", "CB UNICORN 160", "", "HONDA-CB UNICORN 160");
addList("HONDA", "CB UNICORN DAZZLER/CB TRIGGER", "", "HONDA-CB UNICORN DAZZLER/CB TRIGGER");
addList("HONDA", "SHINE-PREVIOUS MODELS", "", "HONDA-SHINE-PREVIOUS MODELS");
addList("HONDA", "DREAM YUGA/CB SHINE/DREAM NEO", "", "HONDA-DREAM YUGA/CB SHINE/DREAM NEO");
addList("HONDA", "CBF STUNNER", "", "HONDA-CBF STUNNERCBF STUNNER");
addList("HONDA", "CB TWISTER", "", "HONDA-CB TWISTER");
addList("HONDA", "ACTIVA-PREV MODELS", "", "HONDA-ACTIVA-PREV MODELS");
addList("HONDA", "ACTIVA 125", "", "HONDA-ACTIVA 125");
addList("HONDA", "ACTIVA i", "", "HONDA-ACTIVA i");
addList("HONDA", "ACTIVA 3G", "", "HONDA-ACTIVA 3G");
addList("HONDA", "DIO-PREV MODEL", "", "HONDA-DIO-PREV MODEL");
addList("HONDA", "DIO 2015", "", "HONDA-DIO 2015");
addList("HONDA", "ACTIVA 2013/DIO 2013", "", "HONDA-ACTIVA 2013/DIO 2013");
addList("HONDA", "ETERNO", "", "HONDA-ETERNO");
addList("HONDA", "AVIATOR-PREV MODEL", "", "HONDA-AVIATOR-PREV MODEL");
addList("HONDA", "AVIATOR 2013 MODEL", "", "HONDA-AVIATOR 2013 MODEL");







addOption("HONDA-HONDA CBR 250R", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-HONDA CBR 250R", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-HONDA CBR 250R", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-HONDA CBR 150R", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-HONDA CBR 150R", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-HONDA CBR 150R", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("HONDA-CB UNICORN", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-CB UNICORN", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-CB UNICORN", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-CB UNICORN 160", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-CB UNICORN 160", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-CB UNICORN 160", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-CB UNICORN DAZZLER/CB TRIGGER", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-CB UNICORN DAZZLER/CB TRIGGER", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-CB UNICORN DAZZLER/CB TRIGGER", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-SHINE-PREVIOUS MODELS", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-SHINE-PREVIOUS MODELS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-SHINE-PREVIOUS MODELS", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-DREAM YUGA/CB SHINE/DREAM NEO", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-DREAM YUGA/CB SHINE/DREAM NEO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-DREAM YUGA/CB SHINE/DREAM NEO", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-CBF STUNNERCBF STUNNER", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-CBF STUNNERCBF STUNNER", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-CBF STUNNERCBF STUNNER", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-CB TWISTER", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-CB TWISTER", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-CB TWISTER", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-ACTIVA-PREV MODELS", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-ACTIVA-PREV MODELS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-ACTIVA-PREV MODELS", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-ACTIVA 125", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-ACTIVA 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-ACTIVA 125", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-ACTIVA i", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-ACTIVA i", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-ACTIVA i", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-ACTIVA 3G", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-ACTIVA 3G", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-ACTIVA 3G", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-DIO-PREV MODEL", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-DIO-PREV MODEL", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-DIO-PREV MODEL", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-DIO 2015", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-DIO 2015", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-DIO 2015", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-ACTIVA 2013/DIO 2013", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-ACTIVA 2013/DIO 2013", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-ACTIVA 2013/DIO 2013", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("HONDA-ETERNO", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-ETERNO", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-ETERNO", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("HONDA-AVIATOR-PREV MODEL", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-AVIATOR-PREV MODEL", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-AVIATOR-PREV MODEL", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("HONDA-AVIATOR 2013 MODEL", "Select Model", "", 1); //HEADER OPTION
addOption("HONDA-AVIATOR 2013 MODEL", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("HONDA-AVIATOR 2013 MODEL", "Rear",  "http://www.tyreathome.com/pricing.html");





addOption("DSKB", "Select Model", "", 1); //HEADER OPTION
addList("DSKB", "GT 250R", "", "DSKB-GT 250R");


addOption("DSKB-GT 250R", "Select Model", "", 1); //HEADER OPTION
addOption("DSKB-GT 250R", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("DSKB-GT 250R", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("DSKH", "Select Model", "", 1); //HEADER OPTION
addList("DSKH", "TNT 300", "", "DSKH-TNT 300");


addOption("DSKH-TNT 300", "Select Model", "", 1); //HEADER OPTION
addOption("DSKH-TNT 300", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("DSKH-TNT 300", "Rear",  "http://www.tyreathome.com/pricing.html");

addOption("PIGG", "Select Model", "", 1); //HEADER OPTION
addList("PIGG", "VESPA LX", "", "PIGG-VESPA LX");
addList("PIGG", "VESPA VX 125/S", "", "PIGG-VESPA VX 125/S");



addOption("PIGG-VESPA LX", "Select Model", "", 1); //HEADER OPTION
addOption("PIGG-VESPA LX", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("PIGG-VESPA LX", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("PIGG-VESPA VX 125/S", "Select Model", "", 1); //HEADER OPTION
addOption("PIGG-VESPA VX 125/S", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("PIGG-VESPA VX 125/S", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("RE", "Select Model", "", 1); //HEADER OPTION
addList("RE", "BULLET THUNDERBIRD(OLD)/500 CC(OLD)", "", "RE-BULLET THUNDERBIRD(OLD)/500 CC(OLD)");
addList("RE", "CLASSIC-350", "", "RE-CLASSIC-350");
addList("RE", "CLASSIC-500", "", "RE-CLASSIC-500");
addList("RE", "THUNDERBIRD-350/500", "", "RE-THUNDERBIRD-350/500");
addList("RE", "BULLET 500 NEW", "", "RE-BULLET 500 NEW");



addOption("RE-BULLET THUNDERBIRD(OLD)/500 CC(OLD)", "Select Model", "", 1); //HEADER OPTION
addOption("RE-BULLET THUNDERBIRD(OLD)/500 CC(OLD)", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("RE-BULLET THUNDERBIRD(OLD)/500 CC(OLD)", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("RE-CLASSIC-350", "Select Model", "", 1); //HEADER OPTION
addOption("RE-CLASSIC-350", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("RE-CLASSIC-350", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("RE-CLASSIC-500", "Select Model", "", 1); //HEADER OPTION
addOption("RE-CLASSIC-500", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("RE-CLASSIC-500", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("RE-THUNDERBIRD-350/500", "Select Model", "", 1); //HEADER OPTION
addOption("RE-THUNDERBIRD-350/500", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("RE-THUNDERBIRD-350/500", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("RE-BULLET 500 NEW", "Select Model", "", 1); //HEADER OPTION
addOption("RE-BULLET 500 NEW", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("RE-BULLET 500 NEW", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("SUZUKI", "Select Model", "", 1); //HEADER OPTION
addList("SUZUKI", "GIXXER/GIXXER SF", "", "SUZUKI-GIXXER/GIXXER SF");
addList("SUZUKI", "ZEUS", "", "SUZUKI-ZEUS");
addList("SUZUKI", "HEAT", "", "SUZUKI-HEAT");
addList("SUZUKI", "GS 150R", "", "SUZUKI-GS 150R");
addList("SUZUKI", "SLINGSHOT & PLUS", "", "SUZUKI-SLINGSHOT & PLUS");
addList("SUZUKI", " HAYATE", "", "SUZUKI-HAYATE");
addList("SUZUKI", "LETS", "", "SUZUKI-LETS");
addList("SUZUKI", "SWISH 125", "", "SUZUKI-SWISH 125");
addList("SUZUKI", "ACCESS 125", "", "SUZUKI-ACCESS 125");



addOption("SUZUKI-GIXXER/GIXXER SF", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-GIXXER/GIXXER SF", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-GIXXER/GIXXER SF", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("SUZUKI-ZEUS", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-ZEUS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-ZEUS", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("SUZUKI-HEAT", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-HEAT", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-HEAT", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("SUZUKI-GS 150R", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-GS 150R", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-GS 150R", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("SUZUKI-SLINGSHOT & PLUS", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-SLINGSHOT & PLUS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-SLINGSHOT & PLUS", "Rear",  "http://www.tyreathome.com/pricing.html");





addOption("SUZUKI-HAYATE", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-HAYATE", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-HAYATE", "Rear",  "http://www.tyreathome.com/pricing.html");




addOption("SUZUKI-LETS", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-LETS", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-LETS", "Rear",  "http://www.tyreathome.com/pricing.html");



addOption("SUZUKI-SWISH 125", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-SWISH 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-SWISH 125", "Rear",  "http://www.tyreathome.com/pricing.html");


addOption("SUZUKI-ACCESS 125", "Select Model", "", 1); //HEADER OPTION
addOption("SUZUKI-ACCESS 125", "Front",  "http://www.tyreathome.com/pricing.html");
addOption("SUZUKI-ACCESS 125", "Rear",  "http://www.tyreathome.com/pricing.html");


