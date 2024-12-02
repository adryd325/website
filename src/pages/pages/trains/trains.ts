import bart from "./bart.svg";
import bombardierTorontoBilevelCoach from "./bombardier_toronto_bilevel_coach.svg";
import bombardierTorontoT1 from "./bombardier_toronto_t1.svg";
import bombardierTorontoTR from "./bombardier_toronto_tr.svg";
import mbtaBlueLine from "./mbta_blue_line.svg";
import mbtaGreenLine from "./mbta_green_line.svg";
import mbtaOrangeLine from "./mbta_orange_line.svg";
import mbtaRedLine from "./mbta_red_line.svg";
import montrealRem from "./montreal_rem.svg";
import nsVirm from "./ns_virm.svg";
import nycR211 from "./nyc_r211.svg";
import peterWittRochesterCar60 from "./peter_witt_rochester_car_60.svg";
import peterWittRochesterIntercity from "./peter_witt_rochester_forgor.svg";

type train = {
  location: String;
  alt: String;
  image: ImageMetadata;
};

export default [
  {
    location: "Toronto",
    name: "Bombardier BiLevel Cab",
    alt: "Bombardier BiLevel cab car in Toronto paint scheme",
    image: bombardierTorontoBilevelCoach,
  },
];
