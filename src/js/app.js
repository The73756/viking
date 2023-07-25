import Aos from "aos";
import * as flsFunctions from "./files/functions.js";
import "./files/sliders.js";
import "./files/scroll.js";
import "./files/marquee.js";
import GraphTabs from "./files/tabs.js";
import GraphModal from "graph-modal";

flsFunctions.burger();
flsFunctions.mediaAdaptive();
flsFunctions.handlerAnchor();

Aos.init();
new GraphTabs("tab");
new GraphModal();
