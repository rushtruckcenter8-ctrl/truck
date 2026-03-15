export interface Truck {
  id: string;
  name: string;
  brand: string;
  year: number;
  mileage: number; // in km
  price: number; // in EUR
  image: string;
  description: string;
  category: "tractor" | "dump truck" | "trailer" | "box truck" | "flatbed";
  engine: string;
  horsepower: number;
  transmission: string;
  fuelType: string;
  color: string;
}

export const trucks: Truck[] = [
  {
    id: "scania-r500-2020",
    name: "Scania R500",
    brand: "Scania",
    year: 2020,
    mileage: 320000,
    price: 72000,
    image: "/images/truck-1.svg",
    description:
      "Powerful Scania R500 tractor unit with full service history. Equipped with a 500 HP engine, retarder, and premium cabin. Ideal for long-haul transport across Europe.",
    category: "tractor",
    engine: "DC13 154 — 12.7L Inline-6",
    horsepower: 500,
    transmission: "Opticruise 12-speed automated",
    fuelType: "Diesel",
    color: "White",
  },
  {
    id: "volvo-fh16-2019",
    name: "Volvo FH16 750",
    brand: "Volvo",
    year: 2019,
    mileage: 410000,
    price: 89000,
    image: "/images/truck-2.svg",
    description:
      "Flagship Volvo FH16 with 750 HP — one of the most powerful production trucks available. Low-wear engine, excellent cab comfort, and Volvo I-Shift dual-clutch transmission.",
    category: "tractor",
    engine: "D16K — 16.1L Inline-6",
    horsepower: 750,
    transmission: "I-Shift 12-speed dual-clutch",
    fuelType: "Diesel",
    color: "Blue",
  },
  {
    id: "man-tgx-2021",
    name: "MAN TGX 18.510",
    brand: "MAN",
    year: 2021,
    mileage: 195000,
    price: 81000,
    image: "/images/truck-3.svg",
    description:
      "Latest-generation MAN TGX with the new D26 engine. Features MAN TipMatic transmission, digital cockpit, and improved fuel efficiency. Perfect for international routes.",
    category: "tractor",
    engine: "D2676 — 12.4L Inline-6",
    horsepower: 510,
    transmission: "TipMatic 12-speed automated",
    fuelType: "Diesel",
    color: "Silver",
  },
  {
    id: "daf-xf-2018",
    name: "DAF XF 480",
    brand: "DAF",
    year: 2018,
    mileage: 520000,
    price: 45000,
    image: "/images/truck-4.svg",
    description:
      "Reliable DAF XF 480 with spacious Super Space Cab. Well-maintained with complete dealer history. Great value for experienced fleet operators.",
    category: "tractor",
    engine: "MX-13 — 12.9L Inline-6",
    horsepower: 480,
    transmission: "TraXon 12-speed automated",
    fuelType: "Diesel",
    color: "Red",
  },
  {
    id: "renault-t-2020",
    name: "Renault T480",
    brand: "Renault",
    year: 2020,
    mileage: 280000,
    price: 56000,
    image: "/images/truck-5.svg",
    description:
      "Renault T480 High Sleeper Cab with Optidriver automated transmission. Low fuel consumption and comfortable cabin make this a driver-friendly choice.",
    category: "tractor",
    engine: "DTI 13 — 12.8L Inline-6",
    horsepower: 480,
    transmission: "Optidriver 12-speed automated",
    fuelType: "Diesel",
    color: "White",
  },
  {
    id: "scania-p410-dump-2019",
    name: "Scania P410 XT Tipper",
    brand: "Scania",
    year: 2019,
    mileage: 175000,
    price: 67000,
    image: "/images/truck-6.svg",
    description:
      "Scania P410 XT 8×4 tipper truck built for heavy construction work. Reinforced chassis, heavy-duty rear suspension, and Halfpipe body for hauling aggregates.",
    category: "dump truck",
    engine: "DC13 148 — 12.7L Inline-6",
    horsepower: 410,
    transmission: "Opticruise 8-speed automated",
    fuelType: "Diesel",
    color: "Yellow",
  },
  {
    id: "volvo-fe-box-2021",
    name: "Volvo FE 280 Box",
    brand: "Volvo",
    year: 2021,
    mileage: 98000,
    price: 53000,
    image: "/images/truck-7.svg",
    description:
      "Volvo FE 280 with insulated box body — ideal for city distribution and temperature-controlled deliveries. Tail lift included. Low mileage and well-maintained.",
    category: "box truck",
    engine: "D8K — 7.7L Inline-6",
    horsepower: 280,
    transmission: "I-Shift 12-speed",
    fuelType: "Diesel",
    color: "White",
  },
  {
    id: "man-tgs-flatbed-2020",
    name: "MAN TGS 26.470 Flatbed",
    brand: "MAN",
    year: 2020,
    mileage: 230000,
    price: 59000,
    image: "/images/truck-8.svg",
    description:
      "MAN TGS 26.470 6×2 with aluminium flatbed body. Comes with side boards and a loading crane. Versatile for building materials, machinery, and palletised goods.",
    category: "flatbed",
    engine: "D2676 — 12.4L Inline-6",
    horsepower: 470,
    transmission: "TipMatic 12-speed",
    fuelType: "Diesel",
    color: "Blue",
  },
  {
    id: "daf-cf-dump-2017",
    name: "DAF CF 440 Tipper",
    brand: "DAF",
    year: 2017,
    mileage: 390000,
    price: 38000,
    image: "/images/truck-9.svg",
    description:
      "Sturdy DAF CF 440 8×4 tipper with steel body. Proven workhorse for quarries and construction sites. AS Tronic automated transmission and rear air suspension.",
    category: "dump truck",
    engine: "MX-11 — 10.8L Inline-6",
    horsepower: 440,
    transmission: "AS Tronic 12-speed",
    fuelType: "Diesel",
    color: "Orange",
  },
  {
    id: "renault-d-box-2022",
    name: "Renault D Wide 280 Box",
    brand: "Renault",
    year: 2022,
    mileage: 62000,
    price: 61000,
    image: "/images/truck-10.svg",
    description:
      "Nearly new Renault D Wide 280 with curtainside body. Excellent for distribution work with low running costs. Features include GPS, reversing camera, and air-con.",
    category: "box truck",
    engine: "DTI 8 — 7.7L Inline-6",
    horsepower: 280,
    transmission: "Optidriver 6-speed",
    fuelType: "Diesel",
    color: "White",
  },
];

/** Utility: get all unique brands from the data */
export const allBrands = [...new Set(trucks.map((t) => t.brand))];

/** Utility: get all unique categories from the data */
export const allCategories = [...new Set(trucks.map((t) => t.category))];

/** Look up a single truck by id */
export function getTruckById(id: string): Truck | undefined {
  return trucks.find((t) => t.id === id);
}
