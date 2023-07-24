import Aos from "aos";
import * as flsFunctions from "./files/functions.js";
import "./files/sliders.js";
import "./files/scroll.js";
import "./files/marquee.js";
import GraphTabs from "./files/tabs.js";
("./files/tabs.js");

flsFunctions.burger();
flsFunctions.mediaAdaptive();
flsFunctions.handlerAnchor();

Aos.init();
new GraphTabs("tab");
