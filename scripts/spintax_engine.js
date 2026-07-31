/**
 * ==========================================
 * STATEFUL ABM ENGINE - SPINTAX GENERATOR
 * ==========================================
 * Architecture: Generates structural variance to bypass mass-email filters.
 * Usage: Invoked within n8n Code Node prior to SMTP dispatch.
 */

function generateSpintax(companyName, painPoint) {
    // Structural Array 1: Openers
    const openers = [
        `Hi team at ${companyName},`,
        `Hello ${companyName} leadership,`,
        `Reaching out to the team at ${companyName},`,
        `Hope you're having a productive week at ${companyName}.`
    ];

    // Structural Array 2: Context Bridges
    const bridges = [
        `I was reviewing your operational architecture and noticed a bottleneck regarding ${painPoint}.`,
        `While mapping out infrastructure solutions in your sector, your current workflow for ${painPoint} caught my attention.`,
        `Our analysis engine flagged a potential efficiency leak in how you handle ${painPoint}.`
    ];

    // Structural Array 3: Call to Actions
    const ctas = [
        `Are you open to a brief technical review this Thursday?`,
        `Does it make sense to explore an automated solution for this next week?`,
        `I'd love to share an architecture blueprint that solves this. Open to a quick chat?`
    ];

    // Cryptographically secure randomizer (better than Math.random for evasion)
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    return {
        subject: getRandom([
            `Fixing ${painPoint} at ${companyName}`,
            `Infrastructure idea for ${companyName}`,
            `Operational efficiency / ${companyName}`
        ]),
        body: `${getRandom(openers)}\n\n${getRandom(bridges)}\n\nWe build stateful automation pipelines that autonomously resolve exactly this type of latency.\n\n${getRandom(ctas)}\n\nBest,\nAli Rosyid\nEnterprise Automation Architect`
    };
}

module.exports = { generateSpintax };
