const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Jbsy3ZyZ#Wq2ZlpUfZUbzEG2bRX2_LiFrMzzoUYM242BWVJZC3IE",
    CAPTION: process.env.CAPTION || "*xIKRATOSx*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/ruBrlLo.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || `- ᴀssᴀʟᴀᴍ-ᴏ-ᴀʟᴀɪᴋᴜᴍ ,: 👋🙈9>    :)\nɪ'ᴍ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀʜᴍᴀᴅ ᴀʟɪ\n\nᴀɴʏ ǫᴜᴇsᴛɪᴏɴs?\nᴄᴏɴᴛᴀᴄᴛ ᴀʜᴍᴀᴅ ᴀʟɪ:\n   wa.me/923470027813\n\n//--------(🥀)--------\\\n#quote:) 🦋😻🌸 9>\n\nUptime : #uptime 🐱⏰ :)\n\n\n#\n\n            ┈┈┈┈․°👑°․┈┈┈┈\n\n\n-𝐄𝐠𝐎 𝐈𝐬 𝐍𝐨𝐓 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐓² 𝐈𝐧 𝐋𝐢𝐟𝐞\n     -𝐁𝐮𝐓 𝐒𝐞𝐥𝐅 𝐑𝐞𝐬𝐩𝐞𝐜𝐓 𝐈𝐬 𝐌𝐨𝐬𝐓 𝐈𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐓  ￣<²💖.                 🔐'🍁✨\n\n: ] 🙂🌸♡シ\n\nمخلص ہو کر ملنا، جان بھی وار دیں گے۔  💸🌍🦅'#`,
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    PREFIX: process.env.PREFIX || "/",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "xIKRATOSx",
    ANTI_VV: process.env.ANTI_VV || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
