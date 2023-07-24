import Aos from "aos";
import * as flsFunctions from "./files/functions.js";
import "./files/sliders.js";
import "./files/scroll.js";
import "./files/marquee.js";

flsFunctions.burger();
flsFunctions.mediaAdaptive();
flsFunctions.handlerAnchor();

Aos.init();
