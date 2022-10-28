/*let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_Masih ada vote di chat ini!_\n\n*${usedPrefix}hapusvote* - untuk menghapus vote`
    }
    m.reply(`Vote dimulai!\n\n*${usedPrefix}upvote* - untuk ya\n*${usedPrefix}devote* - untuk tidak\n*${usedPrefix}cekvote* - untuk mengecek vote\n*${usedPrefix}hapusvote* - untuk menghapus vote`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
export default handler 
*/
//Buatan Aldi Lesmana
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----Vote
conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    //******
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
let wibb = `${wktuwib}`

if (id in conn.vote) {
        throw `_Masih ada vote di chat ini!_\n\n*${usedPrefix}hapusvote* - untuk menghapus vote`
    }
    
let info = ` Dᴇɴɢᴀɴ Aʟᴀsᴀɴ ▻ ${text}
`
const sections = [{
title: `⟥⟝⟢⟨ Upᴠote Atau Devote ⟩⟣⟞⟤`,
rows: [
{title: "⟣⟨ Uᴘᴠᴏᴛᴇ ⟩⟢",
rowId: '.upvote',
description: 'Klik Ini Untuk Vote' },
{title: "⟣⟨ Dᴇᴠᴏᴛᴇ ⟩⟢",
rowId: '.devote',
description: 'Klik Ini Untuk Devote' }
]},
{
title: `⟥⟝⟢⟨ Generate ⟩⟣⟞⟤`,
rows: [
{title: "Cek Vote", 
rowId: '.cekvote', 
description: 'Menampilkan anggota yang sudah menvote' },
{title: "Delete Vote", 
rowId: '.hapusvote', 
description: 'Menghapus sesi vote' },
]},
]

const listMessage = {
  text: info,
  footer:  `Vᴏᴛᴇ Dɪᴍᴜʟᴀɪ Oʟᴇʜ ${name}\n📆 : ${week} ${weton} ${date}\n⌛: ${wibb}\n`,
  title: '⬒ ───⟢⟨ *Vᴏᴛᴛɪɴɢ Oɴ Gʀᴏᴜᴘ* ⟩⟣─── ⬒',
  buttonText: "Click Here!",
  sections
}
 conn.sendMessage(m.chat, listMessage)
 conn.vote[id] = [ text, [], [] ]
  }

handler.help = ['mulaivote <alasan>']
handler.tags = ['main']
handler.group = true
handler.admin = true
handler.command = /^(mulaivote|startvote)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}