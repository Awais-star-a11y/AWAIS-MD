const { cmd, commands } = require('../command');
const axios = require('axios');

// Truth command
cmd({
    pattern: "truth",
    alias: ["t", "truthquestion"],
    react: '❔',
    desc: "Get a random truth question.",
    category: "fun",
    use: '.truth',
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        // Inform the user
        reply("*🔍 Fetching a truth question...*");

        // API URL for truth
        const truthApiUrl = `https://api.davidcyriltech.my.id/truth`;

        // Fetch truth question from the API
        const truthResponse = await axios.get(truthApiUrl);
        if (!truthResponse.data || !truthResponse.data.success) {
            return reply("❌ Failed to fetch a truth question. Please try again later.");
        }

        // Extract truth question
        const truthQuestion = truthResponse.data.question;
        if (truthQuestion) {
            reply(`*Truth Question:* ${truthQuestion}`);
        }
    } catch (e) {
        console.error(e);
        reply("❌ An error occurred while fetching the truth question.");
    }
});

// Dare command
cmd({
    pattern: "dare",
    alias: ["d", "darequestion"],
    react: '🔥',
    desc: "Get a random dare question.",
    category: "fun",
    use: '.dare',
    filename: __filename
},
async (conn, mek, m, { from, args, reply }) => {
    try {
        // Inform the user
        reply("*🔥 Fetching a dare question...*");

        // API URL for dare
        const dareApiUrl = `https://api.davidcyriltech.my.id/dare`;

        // Fetch dare question from the API
        const dareResponse = await axios.get(dareApiUrl);
        if (!dareResponse.data || !dareResponse.data.success) {
            return reply("❌ Failed to fetch a dare question. Please try again later.");
        }

        // Extract dare question
        const dareQuestion = dareResponse.data.question;
        if (dareQuestion) {
            reply(`*Dare:* ${dareQuestion}`);
        }
    } catch (e) {
        console.error(e);
        reply("❌ An error occurred while fetching the dare question.");
    }
});
