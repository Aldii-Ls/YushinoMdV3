import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    let vte = `Tɪᴅᴀᴋ ᴀᴅᴀ sᴇsɪ ᴠᴏᴛᴛɪɴɢ ᴅɪ ɢʀᴏᴜᴘ ɪɴɪ!`
 if (!(id in conn.vote)) throw await conn.sendButtonDoc(id, vte, `▻ Tᴇᴋᴀɴ Bᴜᴛᴛᴏɴ Uɴᴛᴜᴋ Mᴇᴍᴜʟᴀɪ`, 'Start Vote', '.startvote', m )
 
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`Done!\n\n*${usedPrefix}cekvote* - untuk mengecek vote`)

}
handler.help = ['vote']
handler.tags = ['vote']
handler.command = /^(up|de)?vote$/i
handler.group = true
export default handler 