/*
By : Fangz
*/
let handler = m => m

handler.before = function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  
  let isSticker = m.mtype
  if (chat.antiStiker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('*Terdeteksi Telah mengirim Sticker\nKamu akan di keluarkan!, jika kamu terus mengirim bakal akan di kick sama bot!*') // ganti text terserah kamu 
         // this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }
      }
    }
  }
  return true
}

export default handler 
