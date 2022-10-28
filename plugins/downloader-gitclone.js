//AL? Offc
import fs from 'fs'
import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example user ${usedPrefix}gitclone https://github.com/Hyuura-Official/YushinoMdV2`
    if (!regex.test(args[0])) throw 'link salah!'
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendButtonDoc(m.chat,'Waitt...', wm, 'Back To Menu', '.menu', m, { contextInfo: { externalAdReply: {
title: 'Repositor sedang di proses...',
body: wm, 
thumbnail: fs.readFileSync("./thumbnail.jpg"),
mediaType:1,
mediaUrl: "https://telegra.ph/file/1216a636cb2add65a34ae.jpg",
sourceUrl: snh 
}}})
   await conn.sendFile(m.chat, url, filename, null, m)
   }
handler.help = ['gitclone'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /gitclone/i

handler.limit = true

export default handler
