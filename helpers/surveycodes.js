export const BIZSECTOR_CODES = {
  1: "Accommodation and catering",
  2: "Agriculture, forestry, animal husbandry, fisheries",
  3: "Construction industry",
  4: "Culture, sports and entertainment",
  5: "Education",
  6: "Financial industry",
  7: "Health and social work",
  8: "Information transmission, software and information technology services",
  9: "Leasing and business services",
  10: "Manufacturing industry",
  11: "Mining, oil and gas industry",
  12: "Production and supply of electricity, heat, gas and water",
  13: "Real estate industry",
  14: "Residential services, repair and other services",
  15: "Scientific research and technological services",
  16: "Tourism",
  17: "Transport, storage and postal industry",
  18: "Water, environment and public facilities management",
  19: "Wholesale and retail trade",
  0: "Other",
};

export const REVCHANGE_CODES = {
  1: "+ >30%",
  2: "+ 10-30%",
  3: "+ <10%",
  4: "Neutral",
  5: "- <10%",
  6: "- 10-30%",
  7: "- >30%",
  8: "Neutral",
};

export const BIZSTATUS_CODES = {
  1: "Sole proprietorship",
  2: "Partnership or Limited Partnership",
  3: "Cooperation",
  4: "Foreign legal entity branch",
  5: "Informal business",
  6: "Unknown",
  0: "Other",
};

export const NUMEMPLOY_CODES = {
  1: "Less than 10",
  2: "11-50",
  3: "51-100",
  4: "101-250",
  5: "251-499",
  6: "More than 500",
};

export const FEMOWN_CODES = {
  1: "Female Ownership",
  2: "No Female Ownership",
};

export const FEMPERC_CODES = {
  1: "Less than half",
  2: "About half",
  3: "More than half",
  4: "I don’t know",
};

export const CHALLENGES_CODES = {
  challenge_cust:
    "Difficulties in accessing customers due to mobility restrictions and/or loss in demand",
  challenge_supp:
    "Difficulties in accessing suppliers due to mobility restrictions imposed by government",
  challenge_equip:
    "Difficulties of keeping equipment operating due to lack of imported spare parts/expertise",
  challenge_input:
    "Reduction in the availability and/or price increases for the main inputs (e.g. supply chain/logistics disruption, cancellation of public events)",
  challenge_work:
    "Difficulties with worker absenteeism arising from mobility restrictions and/or workers wellbeing or not having childcare",
  challenge_fin:
    "Difficulties in securing access to finance (e.g. banks or MF institutions are closed, operate at restricted capacity or refuse new finance)",
  challenge_fam:
    "Difficulties tending to my business because I have to take care of a family member (e.g. children, sick relative, etc)",
  challenge_cap: "Depreciation of productive capital due to inactivity",
  challenge_none: "No particular challenge, things have proceeded as normal",
  challenge_other: "Other",
};

export const CHALLENGES_CODES_SHORT = {
  challenge_cust: "Customer/Demand Access",
  challenge_supp: "Supplier Access",
  challenge_equip: "Keeping Equipment Operating",
  challenge_input: "Supply Chain Disruption",
  challenge_work: "Employee Absenteeism",
  challenge_fin: "Financial Access",
  challenge_fam: "Family Care",
  challenge_cap: "Depreciation of Capital",
  challenge_none: "No Challenges",
  challenge_other: "Other",
};

export const CHALLENGES_KEYS = [
  "challenge_cust",
  "challenge_supp",
  "challenge_equip",
  "challenge_input",
  "challenge_work",
  "challenge_fin",
  "challenge_fam",
  "challenge_cap",
  "challenge_none",
];

export const OPCAPACITY_CODES = {
  1: "100%",
  2: "75-99%",
  3: "50-74%",
  4: "25-29%",
  5: "24% or less",
};

export const LAYOFFBIN_CODES = {
  1: "Layoffs",
  2: "No Layoffs",
  3: "N/A",
};

export const TIME_OPEN_CODES = {
  1: "< 2 Weeks",
  2: "2-4 Weeks",
  3: "1-3 Months",
  4: "3-6 Months",
  5: "> 6 Months",
};

export const GOVT_SUPPORT_CODES = {
  govtsupport_bizloan: "Business Loans/Guarantees",
  govtsupport_deffloan: "Loan Payment Defferals",
  govtsupport_salsub: "Partial/Total Salary Subsidies",
  govtsupport_rentsub: "Rental/Utilities Subsidies",
  govtsupport_rentdeff: "Rental/Utitilies Deferalls",
  govtsupport_techhelp: "Training/Technical Assistance",
  govtsupport_servsub: "Subsidies of Products/Tech/Services",
  govtsupport_cuttax: "Tax Cuts",
  govtsupport_defftax: "Defferal of Tax Payments",
  govtsupport_bizadv: "Business Advisory Services",
  govtsupport_none: "No Government Support",
  govtsupport_other: "Other Government Support",
};

export const GOVT_SUPPORT_KEYS = [
  "govtsupport_bizloan",
  "govtsupport_deffloan",
  "govtsupport_salsub",
  "govtsupport_rentsub",
  "govtsupport_rentdeff",
  "govtsupport_techhelp",
  "govtsupport_servsub",
  "govtsupport_cuttax",
  "govtsupport_defftax",
  "govtsupport_bizadv",
  "govtsupport_none",
  "govtsupport_other",
];
