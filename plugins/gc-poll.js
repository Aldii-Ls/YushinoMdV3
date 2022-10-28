//Credit? ImYanXiao
//Gunakan Fitur Ini Dengan Bijak Karena Ini Termasuk Bug Whatsapp
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `Tidak ada teks untuk survei \n\nExample : \n*${usedPrefix + command}* Pesan|Hai|Kak`
if (!text.includes('|')) throw `Pisahkan dengan tanda *|* \n\nExample : \n*${usedPrefix + command}* Makan Apa?|Bakso|Cilok` /**/

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])}

return conn.sendPoll(m.chat, `📋: Sᴜʀᴠᴇɪ Dɪ Mɪɴᴛᴀ Oʟᴇʜ\n◈ ${name}\n\n*Pesan:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <halo|apa|kabar>']
handler.tags = ['group'] 
handler.command = ['poll', 'polling'] 
handler.group = true
handler.admin = true
export default handler
