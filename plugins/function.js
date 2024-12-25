const { cmd } = require('../command')
const fs = require('fs');
const path = require('path');
const config = require('../config')
// List of bad words to check against
 // Replace with actual words
cmd({
  on: "body"
},
async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
    try {
    
        const badWords = ["wtf", "mia", "xxx","fuck","sex","huththa","pakaya","ponnaya","hutto","lol"]
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
      
        const lowerCaseMessage = body.toLowerCase();
        const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
        
        if (containsBadWord & config.ANTI_BAD === 'true') {
          await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
          await conn.sendMessage(from, { text: "🚫 ⚠️BAD WORDS NOT ALLOWED⚠️ 🚫" }, { quoted: mek });
        }
    } catch (error) {
        console.error(error)
        reply("An error occurred while processing the message.")
    }
})

const linkPatterns = [
    /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   // WhatsApp group or chat links
    /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           // Telegram links
    /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi,           // YouTube links
    /https?:\/\/youtu\.be\/\S+/gi,                        // YouTube short links
    /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi,          // Facebook links
    /https?:\/\/fb\.me\/\S+/gi,                           // Facebook short links
    /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi,         // Instagram links
    /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi,           // Twitter links
    /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi,            // TikTok links
    /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,          // LinkedIn links
    /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,          // Snapchat links
    /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,         // Pinterest links
    /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            // Reddit links
    /https?:\/\/ngl\/\S+/gi,                              // NGL links
    /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           // Discord links
    /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             // Twitch links
    /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,             // Vimeo links
    /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,       // Dailymotion links
    /https?:\/\/(?:www\.)?medium\.com\/\S+/gi             // Medium links
];

cmd({
    on: "body"
}, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
    try {
        if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin

        const containsLink = linkPatterns.some(pattern => pattern.test(body));

        if (containsLink && config.ANTI_LINK === 'true') {
            // Delete the message
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });

            // Warn the user
            await conn.sendMessage(from, { text: `⚠️ Links are not allowed in this group.\n@${sender.split('@')[0]} has been removed. 🚫`, mentions: [sender] }, { quoted: mek });

            // Remove the user from the group
            await conn.groupParticipantsUpdate(from, [sender], 'remove');
        }
    } catch (error) {
        console.error(error);
        reply("An error occurred while processing the message.");
    }
});

/*cmd({
    on: "body"
}, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
        try {
            const quot = mek.msg.contextInfo.viewOnceMessageV2;
            if(quot)
            {
            if(quot.message.imageMessage) 
            { console.log("Quot Entered") 
               let cap =quot.message.imageMessage.caption;
               let anu = await conn.downloadAndSaveMediaMessage(quot.message.imageMessage)
               return conn.sendMessage(mek.chat,{image:{url : anu},caption : cap })
            }
            if(quot.message.videoMessage) 
            {
               let cap =quot.message.videoMessage.caption;
               let anu = await conn.downloadAndSaveMediaMessage(quot.message.videoMessage)
               return conn.sendMessage(mek.chat,{video:{url : anu},caption : cap })
            }
             
            }
            //else reply("```This is Not A ViewOnce Message```") 
                   
            }  
                 
            catch(e) {  console.log("error" , e ) }     
            
                   
            //if(!mek.quoted) return reply("```Uh Please Reply A ViewOnce Message```")           
            if(mek.mtype === "viewOnceMessage")
            { console.log("ViewOnce Entered") 
             if(mek.message.imageMessage )
            { 
              let cap =mek.message.imageMessage.caption;
              let anu = await conn.downloadAndSaveMediaMessage(mek.message.imageMessage)
              conn.sendMessage(mek.chat,{image:{url : anu},caption : cap })
            }
            else if(MediaKeyMessageEvent.message.videoMessage )
            {
              let cap =mek.message.videoMessage.caption;
              let anu = await conn.downloadAndSaveMediaMessage(mek.message.videoMessage)
              conn.sendMessage(mek.chat,{video:{url : anu},caption : cap })
            }
            
            }
            else return
});
*/