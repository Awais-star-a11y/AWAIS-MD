const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "mute",	
    alias: ["lock"],
    react: "🔒",
    desc: "mute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*GROUP CHAT MUTED BY xIKRATOSx* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*PLEASE GIVE ME A ADDMIN ROLE❗👻*')    
} 
})

cmd({
    pattern: "unmute",	
    alias: ["unlock"],
    react: "🔓",
    desc: "unmute group.",
    category: "group",
    filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
if (!isOwner || !isAdmins) return;


if (!m.isGroup) return reply(mg.onlygroup);
if (!isBotAdmins) return reply(mg.needbotadmins);     
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*GROUP CHAT UNMUTED BY xIKRATOSx* 🔒' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔒', key: mass.key } });
} catch(e) {
console.log(e);
reply('*PLEASE GIVE ME A ADDMIN ROLE❗👻*')    
} 
})

