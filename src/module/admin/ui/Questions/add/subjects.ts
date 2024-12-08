import { GroupType } from "@/component/grouped-select";

export type SubjectData = {
  [key: string]: string[];
};

export const subjects = [
  "Physics/Mechanics",
  "Physics/Heat and Thermodynamics",
  "Physics/Waves and Sound",
  "Physics/Optics",
  "Physics/Electricity and Magnetism",
  "Physics/Modern Physics",
  "Chemistry/Physical Chemistry",
  "Chemistry/Inorganic Chemistry",
  "Chemistry/Organic Chemistry",
  "Botany",
  "Zoology",
  "MAT",
];

export const subjectData: SubjectData = {
  "Physics/Mechanics": [
    "Units, Dimensions and Errors",
    "Vectors and Scalars",
    "Motion in a Straight Line",
    "Motion in Plane and Projectile Motion",
    "Newton's Laws of Motion",
    "Friction",
    "Work, Energy, Power, and Collision",
    "Circular Motion",
    "Gravitation",
    "Rotational Motion",
    "Simple Harmonic Motion",
    "Elasticity",
    "Surface Tension",
    "Fluid Dynamics and Viscosity",
    "Hydrostatics",
  ],
  "Physics/Heat and Thermodynamics": [
    "Thermometry",
    "Thermal Expansion",
    "Calorimetry, Change of State, and Hygrometry",
    "Kinetic Theory of Gases and Gas Laws",
    "Transmission of Heat",
    "Thermodynamics",
  ],
  "Physics/Waves and Sound": ["Wave", "Superposition of Waves", "Stationary|Standing Waves", "Doppler's Effect and Musical Sound"],
  "Physics/Optics": [
    "Reflection of Plane and Curved Mirrors",
    "Refraction at Plane Surfaces and Total Internal Reflection",
    "Refraction Through Prism and Dispersion of Light",
    "Refraction Through Lenses",
    "Chromatic Aberration in Lens|Optical Instruments|and Human Eye",
    "Velocity of Light",
    "Photometry",
    "Polarisation",
    "Wave Nature of Light Interference|Diffraction|and Interference",
  ],
  "Physics/Electricity and Magnetism": [
    "Charge and Force",
    "Electric Field and Potential",
    "Capacitance",
    "Electric Current",
    "Heating Effects of Current",
    "Thermoelectricity",
    "Meters",
    "Chemical Effects of Current",
    "Magnetism",
    "Magnetic Effects of Current",
    "Electromagnetic Induction",
    "Alternating Current (AC)",
  ],
  "Physics/Modern Physics": [
    "Cathode Rays, Positive Rays, and Electrons",
    "Photoelectric Effect",
    "X-Rays",
    "Atomic Structure and Spectrum",
    "Radioactivity",
    "Nuclear Physics",
    "Semiconductor and Semiconductor Devices",
    "Diode and Triode Valves",
    "Logic Gates",
    "Relativity and Universe",
  ],
  "Chemistry/Physical Chemistry": [
    "Language of Chemistry-Stoichiometry",
    "Chemical Calculation",
    "Atomic Structure",
    "Radioactivity and Nuclear Transformation",
    "Chemical Bonding",
    "Oxidation and Reduction",
    "Acids, Bases and Salts",
    "Gaseous and Liquid States",
    "Solid State",
    "Colloids and Catalysis",
    "Volumetric Analysis",
    "Chemical Equilibrium",
    "Ionic Equilibrium",
    "Solutions",
    "Chemical Kinetics",
    "Electrochemistry",
    "Thermodynamics",
  ],
  "Chemistry/Inorganic Chemistry": [
    "Periodic Table",
    "Metals and Metallurgy",
    "Hydrogen and Its Compounds",
    "The Alkali Metals",
    "The Alkaline Earth Metals",
    "Boron Family",
    "Carbon Family",
    "Nitrogen Family",
    "Group VI (Oxygen Family)",
    "The Halogen Family",
    "Noble Gases",
    "D-Block Elements",
    "Co-ordination Chemistry",
    "Qualitative Inorganic Analysis",
  ],
  "Chemistry/Organic Chemistry": [
    "Some Basic Principles",
    "Purification and Characterization",
    "Nomenclature of Organic Compound",
    "Isomerism",
    "Reaction Mechanism",
    "Hydrocarbons",
    "Halogen Derivatives",
    "Alcohol",
    "Phenols",
    "Ether",
    "Carbonyl Compounds",
    "Carboxylic Acids and Their Derivatives",
    "Compounds Containing Nitrogen",
    "The Molecules of Life",
    "Polymer & Polymerization",
    "Chemistry in Action",
  ],

  Botany: [
    "Tools and Techniques Used in Cytology",
    "Cell Biology",
    "Cell Division or Cell Cycle",
    "The Molecules of Life|Biomolecules",
    "Genetics",
    "Enzymes",
    "Plant Anatomy",
    "Plant Water Relation & Mineral Nutrition",
    "Photosynthesis",
    "Respiration",
    "Growth and Plant Hormones",
    "Plant Movement",
    "Special Modes of Nutrition",
    "Plant Diversity",
    "Virus",
    "Bacteria",
    "Algae",
    "Fungi",
    "Lichens",
    "Bryophyta",
    "Pteridophyta",
    "Gymnosperms",
    "Morphology of Angiosperm",
    "Taxonomy of Angiosperms",
    "Reproduction in Flowering Plants",
    "Ecology",
    "Application of Biology",
  ],

  Zoology: [
    "Classification of Animals",
    "Phylum Protozoa",
    "Paramecium",
    "Plasmodium",
    "Phylum Porifera",
    "Phylum Coelenterata|Cnidaria",
    "Phylum Platyhelminthes",
    "Phylum Nematelminthes|Aschelminthes",
    "Phylum Annelida",
    "Earthworm (Pheretima Posthuma)",
    "Phylum Arthropoda",
    "Phylum Mollusca",
    "Echinodermata",
    "Phylum Chordata",
    "Origin and Evolution of Life",
    "Human Evolution",
    "Animal Behavior and Animal Adaptation",
    "Frog (Rana Tigrina)",
    "Rabbit and Man",
    "Rabbit Bone",
    "Endocrinology of Mammals",
    "Animal Tissues",
    "Digestive System & Nutrition",
    "Respiratory System",
    "Nervous System",
    "Cardiovascular System & Blood",
    "Sense Organs",
    "Reproductive System",
    "Embryonic Development of Animals",
    "Excretory System",
    "Human Diseases & Immunology",
  ],

  MAT: ["Verbal reasoning", "Numerical reasoning", "Logical reasoning", "Abstract|Spatial reasoning"],
};

export const getSubjects = () => {
  const uniqueSubjects = Array.from(new Set(subjects.map((subject) => subject.split("/")[0])));
  return uniqueSubjects.map((label) => ({
    label,
    value: label.toLowerCase().replace(/\s+/g, "-"),
  }));
};

export const getUnitGroups = (subject?: string): GroupType[] => {
  const groupedSubjects: { [key: string]: string[] } = {};

  subjects.forEach((subject) => {
    const [label, option] = subject.split("/");

    if (!groupedSubjects[label]) {
      groupedSubjects[label] = [];
    }

    if (option) {
      groupedSubjects[label].push(option);
    } else {
      groupedSubjects[label].push(label);
    }
  });

  // If a subject is provided, find the subgroup matching it
  if (subject) {
    const matchedGroup = Object.entries(groupedSubjects).find(([label]) => label.toLowerCase() === subject.toLowerCase());

    // Return only the matched group if found
    if (matchedGroup) {
      const [label, options] = matchedGroup;
      return [
        {
          label,
          options: options.map((option) => ({
            label: option,
            value: option.toLowerCase().replace(/\s+/g, "-"),
          })),
        },
      ];
    }

    // Return an empty array if the subject is not found
    return [];
  }

  return Object.keys(groupedSubjects).map((label) => ({
    label,
    options: groupedSubjects[label].map((option) => ({
      label: option,
      value: option.toLowerCase().replace(/\s+/g, "-"), // Option value (unit name in lowercase with spaces replaced by dashes)
    })),
  }));
};

export const getChapterGroups = (unit?: string): GroupType[] => {
  if (unit) {
    const matchedGroup = Object.entries(subjectData).find(([key, _]) => key.toLowerCase().includes(unit.toLowerCase()));

    if (matchedGroup) {
      const [label, options] = matchedGroup;
      return [
        {
          label,
          options: options.map((option) => ({
            label: option,
            value: option,
          })),
        },
      ];
    }

    return [];
  }

  return Object.keys(subjectData).map((label) => ({
    label,
    options: subjectData[label].map((option) => ({
      label: option,
      value: option,
    })),
  }));
};

export const buildCascaderOptions = (subjects: string[], subjectData: SubjectData) => {
  return subjects.map((subject) => ({
    label: subject,
    value: subject,
    children: (subjectData[subject] || []).map((subtopic) => ({
      label: subtopic,
      value: subtopic,
    })),
  }));
};
