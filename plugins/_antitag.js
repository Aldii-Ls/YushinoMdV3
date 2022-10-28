let handler = m => m

handler.before = async function (m) {
   if (m.mentionedJid.length >= 20) await conn.send2ButtonDoc(m.chat, `Ada Apa Tag Saya Kak`, wm, 'Menu', '.menu', 'SewaBot', '.sewabot', m, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: 'ɪ ɴ ᴛ ʀ ᴏ ᴄ ᴀ ᴅ ᴜ ᴛ ɪ ᴏ ɴ'}}})
    }

export default handler
