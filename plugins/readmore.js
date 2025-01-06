const { cmd } = require('../command');

cmd({
    pattern: "readmore",
    alias: ["rm", "rmore", "readm"],
    desc: "Generate a Read More message.",
    category: "convert",
    use: ".readmore <text>",
    react: '📝',
    filename: __filename,
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        const text = args.join(" ") || "No text provided.";
        const readMoreSeparator = String.fromCharCode(8206).repeat(4000);
        const finalMessage = `${text}${readMoreSeparator}`;

        await conn.sendMessage(from, { text: finalMessage }, { quoted: m });
    } catch (error) {
        console.error("Error:", error);
        reply(`❌ An error occurred: ${error.message}`);
    }
});
