const company = {
    name: "Shaniqua Nails", industry: "beauty"
};
company.industry = "wellness";
console.log(company.industry);

const entries = [
    { headline: "Beautiful nails from head to toe", pillar: "social", year: 2026 },
    { headline: "Uses clean materials", pillar: "ethical", year: 2026 }
];
console.log(entries.length);
console.log(entries[0].headline);

function describe(entry) {
   return entry.headline + " (" + entry.year + ") ";
}

console.log(describe(entries[0]));