const entries = [
    { id: 1, pillar: "legal", year: 2026, headline: "Jewish lawyers"},
    { id: 2, pillar: "ethical", year: 2025, headline: "We don't kill people"},
    { id: 3, pillar: "social", year: 2026, headline: "Have good friend"},
    { id: 4, pillar: "ethical", year: 2026, headline: "Love babies"},
    { id: 5, pillar: "legal", year: 2024, headline: "Terms of services"},
    { id: 6, pillar: "legal", year: 2026, headline: "Charity"}
];
console.log(entries.length);

const legal = entries.filter(e => e.pillar === "legal");
console.log(legal.length);
console.log(legal);

function byPillar(list, pillar) {
    return list.filter(e => e.pillar === pillar && e.year >=2025);
}
console.log(byPillar(entries, "ethical").length);

const allLegal = entries.find(e => e.id === 3);

console.log(allLegal);

console.log(entries.find(e => e.id === 99));

console.log(entries.find(e => e.pillar === "legal").headline);

console.log(entries.find(e => e.id == 99) ? entries.find(e => e.id === 99) : "Not found");

console.log(entries.map(e => e.headline));

console.log(entries.map(e => e.year));

console.log(entries.filter(e => e.pillar === "legal").map(e => e.pillar));