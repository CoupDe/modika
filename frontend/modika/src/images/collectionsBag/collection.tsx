import pink_1 from "./pink/1263.jpg";
import pink_2 from "./pink/1267.jpg";
import pink_3 from "./pink/1274.jpg";
import pink_4 from "./pink/1282.jpg";
import pink_5 from "./pink/1286.jpg";

import cream_1 from "./cream/1298.jpg";
import cream_2 from "./cream/1299.jpg";
import cream_3 from "./cream/1306.jpg";
import cream_4 from "./cream/1312.jpg";
import cream_5 from "./cream/1317.jpg";

import white_1 from "./white/1323.jpg";
import white_2 from "./white/1326.jpg";
import white_3 from "./white/1335.jpg";
import white_4 from "./white/1342.jpg";
import white_5 from "./white/1343.jpg";

interface ICollection {
  pink: string[];
  cream: string[];
  white: string[];
}

export const collectionPreview: ICollection = {
  pink: [pink_1, pink_2, pink_3, pink_4, pink_5],
  cream: [cream_1, cream_2, cream_3, cream_4, cream_5],
  white: [white_1, white_2, white_3, white_4, white_5],
};
