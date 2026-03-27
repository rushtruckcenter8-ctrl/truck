export interface Truck {
  // ── Identity ──────────────────────────────────────────────────
  id: string;
  name: string;
  brand: string;
  year: number;
  condition?: string;          // e.g. "Used" | "New"
  stockNumber?: string;
  vin?: string;
  hours?: number;
  dot?: boolean;

  // ── Pricing ───────────────────────────────────────────────────
  price: number;
  downPayment?: number;
  currency?: "EUR" | "USD";   // defaults to "EUR"

  // ── Mileage ───────────────────────────────────────────────────
  mileage: number;
  mileageUnit?: "km" | "mi";  // defaults to "km"

  // ── Images ────────────────────────────────────────────────────
  image: string;              // primary / thumbnail image
  images?: string[];          // full gallery (used on detail page)

  // ── Description ───────────────────────────────────────────────
  description: string;
  category: "tractor" | "dump truck" | "trailer" | "box truck" | "flatbed" | "parts";

  // ── Engine ────────────────────────────────────────────────────
  engine: string;             // formatted display string
  engineManufacturer?: string;
  engineModel?: string;
  engineDisplacement?: number; // litres
  horsepower: number;
  fuelType: string;

  // ── Transmission ──────────────────────────────────────────────
  transmission: string;
  transmissionSpeeds?: number;

  // ── Chassis / Body ────────────────────────────────────────────
  color?: string;
  drive?: string;             // e.g. "6x4"
  suspension?: string;        // e.g. "Air Ride"
  rearAxles?: string;         // e.g. "Tandem"
  gvwr?: string;              // e.g. "Class 8 (33,001 lbs+)"
  wheelType?: string;         // e.g. "All Steel"
  wheelbase?: string;         // e.g. "178 in"
  driveSide?: string;         // e.g. "Left Hand Drive"
  fifthWheelType?: string;
  cabStyle?: string;
  sleeperType?: string;
  sleeperSize?: string;
  fuelCapacity?: string;
  axleRatio?: string;
  beds?: number;
  hasApu?: boolean;
}

// ── Helper: build gallery paths for files named "prefix (n).jpeg" ──────────
function galleryImages(prefix: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/images/${prefix}%20(${i + 1}).jpeg`
  );
}

export const trucks: Truck[] = [
  {
    id: "north-star-rims-22-5x8-5-rim1",
    name: "North Star Aluminum Rims",
    brand: "North Star",
    year: 2026,
    condition: "Used",

    price: 150,
    currency: "USD",

    mileage: 0,
    mileageUnit: "mi",

    image: "/images/rim1%20(1).jpeg",
    images: galleryImages("rim1", 4),

    description:
      "North Star aluminum rims, size 22.5x8.5. Priced at $150 each. Clean set, ready for install.",
    category: "parts",

    engine: "Size 22.5x8.5",
    horsepower: 0,
    fuelType: "N/A",
    transmission: "N/A",
    wheelType: "Aluminum",
  },
  {
    id: "tire1-295-75r22-5-full-set",
    name: "295/75R22.5 Tires on Hub Pilot Rims",
    brand: "Generic",
    year: 2026,
    condition: "New",

    price: 1500,
    currency: "USD",

    mileage: 0,
    mileageUnit: "mi",

    image: "/images/tire1.jpeg",
    images: ["/images/tire1.jpeg"],

    description:
      "Full set of 295/75R22.5 tires mounted on hub pilot rims. 14-ply, brand-new virgin open-shoulder tires. Shipping is available.",
    category: "parts",

    engine: "295/75R22.5 (14 Ply)",
    horsepower: 0,
    fuelType: "N/A",
    transmission: "Mounted on Hub Pilot Rims",
    wheelType: "Hub Pilot Rims",
  },
  {
    id: "alcoa-aluminum-rims-rim2",
    name: "Alcoa Aluminum Rims",
    brand: "Alcoa",
    year: 2026,
    condition: "New",

    price: 100,
    currency: "USD",

    mileage: 0,
    mileageUnit: "mi",

    image: "/images/rim2%20(1).jpeg",
    images: galleryImages("rim2", 3),

    description:
      "Upgrade your ride with premium Alcoa Aluminum Rims. Sizes available: 22.5 import ($100), 22.5 Alcoa ($150), 24.5 Alcoa ($180), car carrier rim ($250), and dump truck rim ($300). FREE nationwide delivery. Don't wait - stock is limited!",
    category: "parts",

    engine: "Multiple Sizes Available",
    horsepower: 0,
    fuelType: "N/A",
    transmission: "N/A",
    wheelType: "Aluminum (Import and Alcoa options)",
  },
  {
    id: "heavy-duty-295-75r22-5-drive-tires-tire2",
    name: "HEAVY-DUTY 295/75R22.5 DRIVE TIRES",
    brand: "Multi-Brand",
    year: 2026,
    condition: "New",

    price: 0,
    currency: "USD",

    mileage: 0,
    mileageUnit: "mi",

    image: "/images/tire2%20(1).jpeg",
    images: galleryImages("tire2", 7),

    description:
      "READY FOR THE ROAD! Looking for strong, reliable drive tires for your semi-truck? We've got you covered with top budget-friendly brands that deliver serious performance and durability. KORYO 295/75R22.5 - built tough for long hauls with excellent traction and solid tread life. ROADX 295/75R22.5 - smooth ride, strong grip, and designed for long-distance trucking. V Drive Force 295/75R22.5 - heavy-duty construction made for power, stability, and reliability under heavy loads. V Land Golden 295/75R22.5 - durable drive tires with aggressive tread patterns that handle tough roads and keep your truck moving.",
    category: "parts",

    engine: "295/75R22.5 Drive Tires",
    horsepower: 0,
    fuelType: "N/A",
    transmission: "KORYO, ROADX, V Drive Force, V Land Golden",
    wheelType: "Heavy-Duty Drive Tire",
  },
  {
    id: "alcoa-level-1-polish-rim3",
    name: "Alcoa Wheels - Level 1 Polish",
    brand: "Alcoa",
    year: 2026,
    condition: "New",

    price: 250,
    currency: "USD",

    mileage: 0,
    mileageUnit: "mi",

    image: "/images/rim3.jpeg",
    images: ["/images/rim3.jpeg"],

    description:
      "22.5 and 24.5 Alcoa wheels with Level 1 polish. In stock now. Pricing: 22.5 ($250) and 24.5 ($300). We can pallet and ship.",
    category: "parts",

    engine: "22.5 and 24.5",
    horsepower: 0,
    fuelType: "N/A",
    transmission: "Can pallet and ship",
    wheelType: "Alcoa Aluminum Wheels (Level 1 Polish)",
  },
  {
    id: "alcoa-22-5-drive-rims-285-pcd-rim4",
    name: "22.5 Drive Rims Alcoa 285 PCD",
    brand: "Alcoa",
    year: 2026,
    condition: "Used",

    price: 250,
    currency: "USD",

    mileage: 0,
    mileageUnit: "mi",

    image: "/images/rim4%20(1).jpeg",
    images: galleryImages("rim4", 5),

    description:
      "22.5 drive rims, Alcoa 285 PCD. All in good condition. $250 each.",
    category: "parts",

    engine: "22.5 Drive Rims (285 PCD)",
    horsepower: 0,
    fuelType: "N/A",
    transmission: "N/A",
    wheelType: "Alcoa Aluminum Drive Rims",
  },

  // ────────────────────────────────────────────────
  //  REAL TRUCKS
  // ────────────────────────────────────────────────
  {
    id: "freightliner-cascadia-177536",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2019,
    condition: "Used",
    stockNumber: "177536",
    vin: "3AKJHLDV5KSKF2003",

    price: 11500,
    downPayment: 1500,
    currency: "USD",

    mileage: 283528,
    mileageUnit: "mi",

    image: "/images/truck1%20(1).jpeg",
    images: galleryImages("truck1", 10),

    description:
      "2019 Freightliner Cascadia 126 tractor unit with a Detroit DD13 engine producing 435 HP. Equipped with the Detroit DT12 12-speed automated transmission and 6×4 drive. Air Ride suspension, All Steel wheels, and a Left Hand Drive setup make this an outstanding long-haul workhorse at an exceptional price.",
    category: "tractor",

    engine: "Detroit DD13 — 12.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD13",
    engineDisplacement: 12.81,
    horsepower: 435,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8 (33,001 lbs or greater)",
    wheelType: "All Steel",
    wheelbase: "178 in",
    driveSide: "Left Hand Drive",
  },

  {
    id: "freightliner-cascadia-100666",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2023,
    condition: "Used",
    stockNumber: "100666",
    vin: "3AKJHHDR9PSUH3028",
    hours: 11811,

    price: 13000,
    downPayment: 2000,
    currency: "USD",

    mileage: 287402,
    mileageUnit: "mi",

    image: "/images/truck2%20(1).jpeg",
    images: galleryImages("truck2", 26),

    description:
      "2023 Freightliner Cascadia 126 with Detroit DD15 rated at 455 HP and Detroit DT12 12-speed automated transmission. 6x4 drivetrain, Air Ride suspension, sliding fifth wheel, and aluminum wheels with 295/75 R22.5 tires. Raised roof sleeper, dual 100-gallon fuel tanks (200-gallon capacity), and well-equipped cab make this an ideal late-model long-haul tractor.",
    category: "tractor",

    engine: "Detroit DD15 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 lbs or greater (52,350 lbs GVW)",
    wheelType: "All Aluminum",
    wheelbase: "262 in",
    fifthWheelType: "Sliding",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "70 in",
    fuelCapacity: "200 gal",
    color: "White",
    cabStyle: "Conventional",
  },

  {
    id: "freightliner-cascadia-268250",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2023,
    condition: "Used",
    stockNumber: "268250",
    vin: "3AKJHHDRXPSNN5516",
    dot: true,

    price: 13000,
    downPayment: 2000,
    currency: "USD",

    mileage: 380535,
    mileageUnit: "mi",

    image: "/images/truck3%20(1).jpeg",
    images: galleryImages("truck3", 26),

    description:
      "2023 Freightliner Cascadia 126 with Detroit DD15 (455 HP) and Detroit 12-speed automated transmission. 6x4 drivetrain, tandem rear axles, Class 8 rating, and aluminum wheels. Raised roof sleeper with two beds and 72-inch bunk, plus APU for comfortable rest periods. Ideal linehaul tractor with 80,000 lb GVW capability.",
    category: "tractor",

    engine: "Detroit DD15 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "Detroit 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "2.64",

    drive: "6x4",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 lbs or greater (80,000 lbs GVW)",
    wheelType: "Aluminum",
    wheelbase: "241 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "72 in",
    beds: 2,
    hasApu: true,
    color: "Grey",
    cabStyle: "Conventional",
  },

  {
    id: "freightliner-cascadia-107644",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2023,
    condition: "Used",
    stockNumber: "107644",
    vin: "3AKJHHDR2PSNU8480",

    price: 14000,
    downPayment: 2000,
    currency: "USD",

    mileage: 632734,
    mileageUnit: "mi",

    image: "/images/truck4%20(1).jpeg",
    images: galleryImages("truck4", 15),

    description:
      "High-mileage 2023 Freightliner Cascadia 126 with Detroit DD15 Gen 5 engine (505 HP) and Detroit DT-12-1650-OHE 12-speed automated transmission. 6x4 drivetrain, tandem rear axles, Air Ride suspension, and 2.79 gear ratio. 72-inch sleeper, 200-gallon total fuel capacity, and mixed steel/aluminum wheel setup. Sold strictly as-is, where-is, with active and inactive fault codes and cosmetic wear noted.",
    category: "tractor",

    engine: "Detroit DD15 Gen 5 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15 Gen 5",
    engineDisplacement: 14.81,
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Detroit DT-12-1650-OHE 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "2.79",

    drive: "6x4",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 lbs or greater (53,300 lbs GVW)",
    wheelType: "Steel front / Aluminum rear",
    wheelbase: "229 in",
    suspension: "Air Ride",
    fuelCapacity: "200 gal",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "72 in",
    color: "Grey",
    cabStyle: "Conventional",
  },

  {
    id: "freightliner-cascadia-2022-775k",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2022,
    condition: "Used",

    price: 13000,
    downPayment: 1500,
    currency: "USD",

    mileage: 775000,
    mileageUnit: "mi",

    image: "/images/truck5%20(1).jpeg",
    images: galleryImages("truck5", 8),

    description:
      "2022 Freightliner Cascadia 126 with Detroit DD15 engine producing 505 HP. Equipped with Detroit DT12 12-speed automated transmission, 6x4 drive, Air Ride suspension, and tandem rear axles. Aluminum wheels and 230-inch wheelbase. Raised roof sleeper configuration for long-haul comfort.",
    category: "tractor",

    engine: "Detroit DD15 — 14.8L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "Aluminum",
    wheelbase: "230 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
  },

  {
    id: "freightliner-cascadia-uc5646",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2022,
    condition: "Used",
    stockNumber: "UC5646",
    vin: "3AKJHHDR5NSNC7132",

    price: 12500,
    downPayment: 2000,
    currency: "USD",

    mileage: 431254,
    mileageUnit: "mi",

    image: "/images/truck6%20(1).jpeg",
    images: galleryImages("truck6", 16),

    description:
      "2022 Freightliner Cascadia 126 with Detroit DD15 engine producing 455 HP. Equipped with Detroit DT12 12-speed automated transmission, 6x4 drive, Air Ride suspension, and tandem rear axles. All aluminum wheels and 223-inch wheelbase. Raised roof sleeper configuration for long-haul comfort.",
    category: "tractor",

    engine: "Detroit DD15 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "All Aluminum",
    wheelbase: "223 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
  },

  {
    id: "freightliner-cascadia-2339",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2020,
    condition: "Used",
    stockNumber: "2339",
    vin: "3AKJHHDR8LSLW2940",

    price: 12000,
    downPayment: 1500,
    currency: "USD",

    mileage: 577275,
    mileageUnit: "mi",

    image: "/images/truck7%20(1).jpeg",
    images: galleryImages("truck7", 16),

    description:
      "2020 Freightliner Cascadia 126 with Detroit DD15 14.8L engine rated at 505 HP and Detroit DT12 12-speed automated transmission. 6x4 drive, tandem axles, Air Ride suspension, and 3.08 rear ratio. All aluminum wheels, 227-inch wheelbase, 72-inch raised roof sleeper with single bunk and bunk heater. 200-gallon fuel capacity and conventional cab make this a solid long-haul tractor, sold ready to work.",
    category: "tractor",

    engine: "Detroit DD15 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.81,
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "3.08",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater (52,350 lbs GVW)",
    wheelType: "All Aluminum",
    wheelbase: "227 in",
    fifthWheelType: "Sliding",
    fuelCapacity: "200 gal",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "72 in",
    beds: 1,
    hasApu: true,
    color: "White",
    cabStyle: "Conventional",
  },

  {
    id: "freightliner-cascadia-21-frht-350",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2021,
    condition: "Used",
    stockNumber: "21 FRHT#350",
    vin: "3AKJHHDR7MSMK1350",

    price: 11000,
    downPayment: 1500,
    currency: "USD",

    mileage: 571418,
    mileageUnit: "mi",

    image: "/images/truck8%20(1).jpeg",
    images: galleryImages("truck8", 17),

    description:
      "2021 Freightliner Cascadia 126 with Detroit DD15 14.8L engine rated at 505 HP and Detroit DT12 12-speed automated transmission. 6x4 drivetrain with 2.94 rear ratio, Air Ride suspension, tandem axles, and all aluminum wheels. 231-inch wheelbase, 70-inch raised roof sleeper with two beds, sliding fifth wheel, and collision mitigation system for added safety.",
    category: "tractor",

    engine: "Detroit DD15 — 14.8L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.8,
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "2.94",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater (52,000 lbs GVW)",
    wheelType: "All Aluminum",
    wheelbase: "231 in",
    fifthWheelType: "Sliding",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "70 in",
    beds: 2,
    color: "Maroon",
    cabStyle: "Conventional",
  },

  {
    id: "freightliner-cascadia-lllc1833",
    name: "Freightliner Cascadia 126 Mid Roof",
    brand: "Freightliner",
    year: 2020,
    condition: "Used",
    vin: "1FUJHHDV5LLLC1833",

    price: 11500,
    downPayment: 1500,
    currency: "USD",

    mileage: 548469,
    mileageUnit: "mi",

    image: "/images/truck9%20(1).jpeg",
    images: galleryImages("truck9", 23),

    description:
      "2020 Freightliner Cascadia 126 Mid Roof powered by a Detroit DD13 12.81L engine rated at 450 HP, paired with a Detroit DT12 12-speed automated transmission. Equipped with PTO and 2-line wet kit for walking floor trailer, Thermo King APU, engine brake, Air Ride suspension with dump, and double locking differentials. Strong, clean truck regularly serviced with no reported oil or coolant leaks and active DEF system, ready to work.",
    category: "tractor",

    engine: "Detroit DD13 — 12.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD13",
    engineDisplacement: 12.81,
    horsepower: 450,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "3.25",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelbase: "235 in",
    fifthWheelType: "Sliding",
    driveSide: "Left Hand Drive",
    sleeperType: "Mid Roof Sleeper",
    hasApu: true,
  },

  {
    id: "freightliner-cascadia-dml8828",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2021,
    condition: "Used",
    stockNumber: "DML8828",
    vin: "3AKJHHDR9MSML8828",

    price: 11500,
    downPayment: 1500,
    currency: "USD",

    mileage: 538828,
    mileageUnit: "mi",

    image: "/images/truck10%20(1).jpeg",
    images: galleryImages("truck10", 14),

    description:
      "2021 Freightliner Cascadia PT126SLP heavy duty conventional sleeper with Detroit DD15 14.81L engine rated at 505 HP and Detroit DT12 12-speed automated transmission. 6x4 drivetrain with 3.08 rear ratio, Air Ride suspension, tandem axles, and all aluminum wheels. Class 8 GVWR, 223-inch wheelbase, and 72-inch mid roof sleeper with single bunk make this an efficient long-haul truck backed by OEM support.",
    category: "tractor",

    engine: "Detroit DD15 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.81,
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "3.08",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater (52,000 lbs GVW)",
    wheelType: "All Aluminum",
    wheelbase: "223 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Mid Roof Sleeper",
    sleeperSize: "72 in",
    beds: 1,
    color: "Blue",
  },

  {
    id: "freightliner-cascadia-smj3191",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2021,
    condition: "Used",
    stockNumber: "SMJ3191",
    vin: "3AKJHHDR6MSMJ3191",

    price: 11500,
    downPayment: 1500,
    currency: "USD",

    mileage: 797002,
    mileageUnit: "mi",

    image: "/images/truck11%20(1).jpeg",
    images: galleryImages("truck11", 17),

    description:
      "2021 Freightliner Cascadia PT126SLP heavy duty sleeper with Detroit DD15 14.8L engine rated at 400 HP and Detroit DT12 12-speed automated transmission. 6x4 drivetrain with 2.28 rear ratio, Air Ride suspension, tandem axles, and all aluminum wheels. 233-inch wheelbase and 72-inch raised roof sleeper with double bunks make this red Cascadia a high-mileage but capable long-haul truck backed by OEM support.",
    category: "tractor",

    engine: "Detroit DD15 — 14.8L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.8,
    horsepower: 400,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "2.28",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "All Aluminum",
    wheelbase: "233 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "72 in",
    beds: 2,
    color: "Red",
  },

  {
    id: "volvo-vnl64t760-95948",
    name: "Volvo VNL64T760",
    brand: "Volvo",
    year: 2024,
    condition: "Used",
    stockNumber: "95948",
    vin: "4V4C9EH1RN643459",

    price: 15000,
    downPayment: 2000,
    currency: "USD",

    mileage: 382465,
    mileageUnit: "mi",

    image: "/images/truck12%20(1).jpeg",
    images: galleryImages("truck12", 17),

    description:
      "2024 Volvo VNL64T760 heavy duty conventional sleeper truck with Volvo D13 engine producing 455 HP and automatic transmission. 6x4 drivetrain, Air Ride suspension, tandem rear axles, and aluminum wheels. 252-inch wheelbase and 96-inch raised roof sleeper. Sold as-is, where-is without warranty. Started on site, full operations not tested. Pre-purchase inspections encouraged.",
    category: "tractor",

    engine: "Volvo D13 — 12.81L Inline-6",
    engineManufacturer: "Volvo",
    engineModel: "D13",
    engineDisplacement: 12.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "Automatic",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater (50,678 lbs GVWR)",
    wheelType: "Aluminum",
    wheelbase: "252 in",
    fuelCapacity: "150 gal",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "96 in",
    fifthWheelType: "Air Slide",
    cabStyle: "Conventional",
  },

  {
    id: "volvo-vnl64t760-uc5543",
    name: "Volvo VNL64T760",
    brand: "Volvo",
    year: 2023,
    condition: "Used",
    stockNumber: "UC5543",
    vin: "4V4NC9EH1PN308439",

    price: 13500,
    downPayment: 1500,
    currency: "USD",

    mileage: 357079,
    mileageUnit: "mi",

    image: "/images/truck13%20(1).jpeg",
    images: galleryImages("truck13", 24),

    description:
      "2023 Volvo VNL64T760 heavy duty conventional sleeper truck with Volvo D13 engine producing 455 HP and I-Shift 12-speed automatic transmission. 6x4 drivetrain, Air Ride suspension, tandem rear axles, and aluminum wheels. 228-inch wheelbase and raised roof sleeper. Copper exterior color.",
    category: "tractor",

    engine: "Volvo D13 — 12.81L Inline-6",
    engineManufacturer: "Volvo",
    engineModel: "D13",
    engineDisplacement: 12.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "I-Shift 12-Speed Automatic",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "Aluminum",
    wheelbase: "228 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    color: "Copper",
    cabStyle: "Conventional",
  },

  {
    id: "volvo-vnl64t760-pn326201",
    name: "Volvo VNL64T760",
    brand: "Volvo",
    year: 2023,
    condition: "Used",
    vin: "4V4NC9EH3PN326201",
    hours: 14986,

    price: 14000,
    downPayment: 1500,
    currency: "USD",

    mileage: 558183,
    mileageUnit: "mi",

    image: "/images/truck14%20(1).jpeg",
    images: galleryImages("truck14", 15),

    description:
      "2023 Volvo VNL64T760 with Volvo D13N 455 HP engine (2022 US EPA Label) and 14,986 engine hours. Equipped with Volvo ATO2612F 12-speed automated transmission, 6x4 drivetrain, Air Ride suspension, tandem rear axles, and aluminum wheels. 70-inch high rise sleeper cab with bunk beds and bunk heater. 221-inch wheelbase, air sliding 5th wheel, and dual fuel tanks. Overall condition for age: Good. Remaining factory warranty may be applicable TBD.",
    category: "tractor",

    engine: "Volvo D13N — 12.81L Inline-6",
    engineManufacturer: "Volvo",
    engineModel: "D13N",
    engineDisplacement: 12.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "Volvo ATO2612F 12-Speed Automated (Autoshift)",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater (53,200 lbs GVWR)",
    wheelType: "All Aluminum",
    wheelbase: "221 in",
    fuelCapacity: "Dual Fuel Tanks",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "70 in",
    beds: 2,
    hasApu: true,
    cabStyle: "Conventional",
    fifthWheelType: "Air Sliding",
  },

  {
    id: "volvo-vnl64t760-2531",
    name: "Volvo VNL64T760",
    brand: "Volvo",
    year: 2024,
    condition: "Used",
    stockNumber: "2531",
    vin: "4V4NC9EH1RN662531",
    dot: true,

    price: 15000,
    downPayment: 2000,
    currency: "USD",

    mileage: 168605,
    mileageUnit: "mi",

    image: "/images/truck15%20(1).jpeg",
    images: galleryImages("truck15", 29),

    description:
      "2024 Volvo VNL64T760 with only 168,605 original miles! Still under factory warranty! California truck with no rust. All virgin tires on polished aluminum wheels. Volvo D13 455 HP engine with I-Shift 12-speed automated transmission and 2.64 gear ratio. Features include refrigerator, microwave, TV, inverter, double bunk, and fully inspected, serviced, and detailed. Financing and extended warranty available!",
    category: "tractor",

    engine: "Volvo D13 — 12.81L Inline-6",
    engineManufacturer: "Volvo",
    engineModel: "D13",
    engineDisplacement: 12.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "I-Shift 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "2.64",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater (80,000 lbs GVWR)",
    wheelType: "All Aluminum",
    wheelbase: "225 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "70 in",
    beds: 2,
    color: "White",
    cabStyle: "Conventional",
    fifthWheelType: "Sliding",
  },

  {
    id: "freightliner-cascadia-lj3604",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2020,
    condition: "Used",
    stockNumber: "LJ3604",
    vin: "1FUJHHDR6LLLJ3604",

    price: 13000,
    downPayment: 2000,
    currency: "USD",

    mileage: 572857,
    mileageUnit: "mi",

    image: "/images/truck16%20(1).jpeg",
    images: galleryImages("truck16", 22),

    description:
      "2020 Freightliner Cascadia 126 with 572,857 miles. Detroit DD15 engine producing 505 HP with engine brake, paired with Detroit DT12 12-speed automated transmission. 72-inch mid-roof XT sleeper, 40,000 lb rear ends with 3.08 ratio, TriPac auxiliary power unit, super singles, Air Ride suspension, hydraulic power steering, dual aluminum fuel tanks, stainless steel quarter fenders, bunk heater, tilt and telescoping steering wheel, cruise control, power windows, adjustable 5th wheel, 240-inch wheelbase, disc brakes, and aluminum disc wheels. Green Elite exterior.",
    category: "tractor",

    engine: "Detroit DD15 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.81,
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,
    axleRatio: "3.08",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater (53,300 lbs GVWR)",
    wheelType: "Aluminum",
    wheelbase: "240 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Mid Roof Sleeper",
    sleeperSize: "72 in",
    beds: 1,
    hasApu: true,
    color: "Green Elite",
    cabStyle: "Conventional",
    fifthWheelType: "Fixed",
    fuelCapacity: "Dual Aluminum Fuel Tanks",
  },

  {
    id: "freightliner-cascadia-2022-775k-2",
    name: "Freightliner Cascadia 126",
    brand: "Freightliner",
    year: 2022,
    condition: "Used",

    price: 12000,
    downPayment: 1500,
    currency: "USD",

    mileage: 775000,
    mileageUnit: "mi",

    image: "/images/truck17%20(1).jpeg",
    images: galleryImages("truck17", 6),

    description:
      "2022 Freightliner Cascadia 126 with 775,000 miles. Detroit DD15 engine producing 505 HP paired with Detroit DT12 12-speed automated transmission. 6x4 drivetrain, Air Ride suspension, tandem rear axles, and aluminum wheels. 230-inch wheelbase and raised roof sleeper configuration for long-haul comfort.",
    category: "tractor",

    engine: "Detroit DD15 — 14.8L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Detroit DT12 12-Speed Automated",
    transmissionSpeeds: 12,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "Aluminum",
    wheelbase: "230 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
  },

  {
    id: "freightliner-122sd-6834",
    name: "Freightliner 122SD",
    brand: "Freightliner",
    year: 2022,
    condition: "Used",
    stockNumber: "6834",
    vin: "3AKJGNDR4NDNP5196",

    price: 14000,
    downPayment: 1500,
    currency: "USD",

    mileage: 241587,
    mileageUnit: "mi",

    image: "/images/truck18%20(1).jpeg",
    images: galleryImages("truck18", 13),

    description:
      "2022 Freightliner 122SD with only 241,587 miles! Premium long and tall sleeper configuration. SelecTrucks certified with extended SelecTrucks warranties available. DOT inspection and full service included in price. Ready to go to work! Two in stock.",
    category: "tractor",

    engine: "Detroit DD15 — 14.81L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.81,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "Automatic",

    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "All Aluminum",
    wheelbase: "226 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    cabStyle: "Conventional",
  },

  {
    id: "freightliner-122sd-a357",
    name: "Freightliner 122SD",
    brand: "Freightliner",
    year: 2022,
    condition: "Used",
    stockNumber: "A357",
    vin: "3AKJGNDRONDNF7595",

    price: 14000,
    downPayment: 1500,
    currency: "USD",

    mileage: 399974,
    mileageUnit: "mi",

    image: "/images/truck19%20(1).jpeg",
    images: galleryImages("truck19", 9),

    description:
      "2022 Freightliner 122SD with 399,974 miles. 72-inch raised roof sleeper with double bunk. Just polished! California compliant. Detroit DD15 engine producing 455 HP paired with Eaton-Fuller 13-speed automatic transmission. 6x4 drivetrain, Air Ride suspension, tandem rear axles, and aluminum wheels. 226-inch wheelbase.",
    category: "tractor",

    engine: "Detroit DD15 — 14.8L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.8,
    horsepower: 455,
    fuelType: "Diesel",

    transmission: "Eaton-Fuller 13-Speed Automatic",
    transmissionSpeeds: 13,
    axleRatio: "3.08",

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "Aluminum",
    wheelbase: "226 in",
    driveSide: "Left Hand Drive",
    sleeperType: "Raised Roof Sleeper",
    sleeperSize: "72 in",
    beds: 2,
    cabStyle: "Conventional",
  },

  {
    id: "freightliner-122sd-ndnn4022",
    name: "Freightliner 122SD",
    brand: "Freightliner",
    year: 2022,
    condition: "Used",
    stockNumber: "NDNN4022",
    vin: "3AKJGNDR9NDNN4022",

    price: 14000,
    downPayment: 1500,
    currency: "USD",

    mileage: 371749,
    mileageUnit: "mi",

    image: "/images/truck20%20(1).jpeg",
    images: galleryImages("truck20", 11),

    description:
      "2022 Freightliner 122SD (Coronado) with 371,749 miles. One owner truck! Detroit DD15 engine producing 505 HP paired with Eaton Ultra Shift 13-speed automated transmission. 6x4 drivetrain, Air Ride suspension, tandem rear axles, and all aluminum wheels. Flat top sleeper configuration. Call today!",
    category: "tractor",

    engine: "Detroit DD15 — 14.8L Inline-6",
    engineManufacturer: "Detroit",
    engineModel: "DD15",
    engineDisplacement: 14.8,
    horsepower: 505,
    fuelType: "Diesel",

    transmission: "Eaton Ultra Shift 13-Speed Automated",
    transmissionSpeeds: 13,

    drive: "6x4",
    suspension: "Air Ride",
    rearAxles: "Tandem",
    gvwr: "Class 8: 33,001 pounds or greater",
    wheelType: "All Aluminum",
    driveSide: "Left Hand Drive",
    sleeperType: "Flat Top Sleeper",
    cabStyle: "Conventional",
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

/** Format price with correct currency symbol */
export function formatPrice(truck: Truck): string {
  const symbol = truck.currency === "USD" ? "$" : "€";
  return `${symbol}${truck.price.toLocaleString()}`;
}

/** Format mileage with correct unit */
export function formatMileage(truck: Truck): string {
  return `${truck.mileage.toLocaleString()} ${truck.mileageUnit ?? "km"}`;
}
