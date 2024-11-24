require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const FormData = require("form-data");
const { fromBuffer } = require('file-type')
const fetch = require('node-fetch')
const { color, bgcolor, pickRandom, randomNomor } = require('./lib/console.js')
const { TelegraPh } = require('./lib/uploader')
const { uptotelegra } = require('./lib/upload')
const { remini } = require('./lib/remini')
const toRupiah = require('./lib/toRupiah')
const xst = fs.readFileSync(`./image/Chatbot.gif`)
let set_bot = JSON.parse(fs.readFileSync('./database/set_bot.json'));
let limitBase = JSON.parse(fs.readFileSync('./database/limit.json'))
const { smsg, sleep, fetchJson, getBuffer, telegraPh } = require('./lib/simple')
const {stalkVA, stalkpln, stalkBank} = require('./controller/ewaletController')
const initializeBankList = require('./controller/bankIndo')
const stalkerController = require('./controller/stalkerController')
const { 
  isSetBot,
    addSetBot,
    removeSetBot,
    changeSetBot,
    getTextSetBot,
  updateResponList,
  delResponList,
  renameList,
  isAlreadyResponListGroup,
  sendResponList,
  isAlreadyResponList,
  getDataResponList,
  addResponList,
  isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome,
    addSewaGroup,
    getSewaExpired,
    getSewaPosition,
    expiredCheck,
    checkSewaGroup,
    addPay,
    updatePay
} = require("./lib/store")

// Validasi Nick Name 
const {
  validateMobileLegendsMoogold,
  validateHonkaiStarRailMoogold
} = require('./lib/validasi/validasiMoogold');
const { mooCountry } = require('./lib/region');
const { downloadVideo } = require('./lib/ytdownload');

//const { tiksave } = require('./lib/tiktok');
async function getGroupAdmins(participants){
        let admins = []
        for (let i of participants) {
        i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
}

function runtime(seconds) {

	seconds = Number(seconds);

	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
function msToDate(mse) {
               temp = mse
               days = Math.floor(mse / (24 * 60 * 60 * 1000));
               daysms = mse % (24 * 60 * 60 * 1000);
               hours = Math.floor((daysms) / (60 * 60 * 1000));
               hoursms = mse % (60 * 60 * 1000);
               minutes = Math.floor((hoursms) / (60 * 1000));
               minutesms = mse % (60 * 1000);
               sec = Math.floor((minutesms) / (1000));
               return days + " Days " + hours + " Hours " + minutes + " Minutes";
            }
            
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

   
async function UploadDulu(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new FormData()
        form.append('file', medianya, 'tmp.'+ext)
        let jsonnya = await fetch('https://tenaja.zeeoneofc.repl.co/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
        return jsonnya
}

const tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

// ############################################################################
module.exports = xstbott = async (xstbott, m, chatUpdate, store, opengc, setpay, antilink, antiwame, antilink2, antiwame2, set_welcome_db, set_left_db, set_proses, set_done, set_open, set_close, sewa, _welcome, _left, db_respon_list) => {
    try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '' //omzee
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
     //   const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const botNumber = await xstbott.decodeJid(xstbott.user.id)
        const murxst = JSON.parse(fs.readFileSync('./lib/murxst.json'))
        const isMurxst = [botNumber, ...murxst].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
     //   const botNumber = await xstbott.decodeJid(xstbott.user.id)
        const isCreator = ["6285380779466@s.whatsapp.net","84584225091@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
     //   const senderNumber = sender.split('@')[0]   
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await xstbott.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
      	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
      	const isSewa = checkSewaGroup(m.chat, sewa)
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false  
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false  
const isWelcome = _welcome.includes(m.chat)
const isLeft = _left.includes(m.chat)
const jam = moment().format("HH:mm:ss z")
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')

const reply = (text) =>{
  m.reply(text)
}

   xstbott.sendButtonImage = async (jid, buttons, quoted, opts = {}) => {
      var image = await prepareWAMessageMedia({
         image: {
            url: opts && opts.image ? opts.image : ''
         }
      }, {
         upload: xstbott.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
                  body: {
                     text: opts && opts.body ? opts.body : ''
                  },
                  footer: {
                     text: opts && opts.footer ? opts.footer : ''
                  },
                  header: {
                     hasMediaAttachment: true,
                     imageMessage: image.imageMessage,
                  },
                  nativeFlowMessage: {
                     buttons: buttons,
                     messageParamsJson: ''
                  }
               }
            }
         }
      }, {
         quoted
      })
      await xstbott.sendPresenceUpdate('composing', jid)
      return xstbott.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }


xstbott.sendListMsg = (jid, text = '', footer = '', butText = '', sects = [], quoted) => {
  // Memastikan bahwa variabel sections benar-benar array
  let sections = Array.isArray(sects) ? sects : [];
  
  // Membentuk pesan daftar
  var listMes = {
    text: text,
    footer: footer,
    buttonText: butText,
    sections
  };

  // Membuat pesan berbasis WAMessage dari konten yang dibentuk
  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
message: {
"messageContextInfo": {
  "deviceListMetadata": {},
  "deviceListMetadataVersion": 1
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
	mentionedJid: [m.sender], 
	businessMessageForwardInfo: { businessOwnerJid: xstbott.decodeJid(xstbott.user.id) },
  }, 
  body: proto.Message.InteractiveMessage.Body.create({
text: `${text}`
  }),
  footer: proto.Message.InteractiveMessage.Footer.create({
text: `${footer}`
  }),
  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [  
 {
name: "single_select",
buttonParamsJson: `{"title":${JSON.stringify(butText)},"sections": ${JSON.stringify(sects)}
}`
}, 
   ],
  })
})
}
  }
}, { quoted: quoted })

  // Mengirimkan pesan yang telah dibuat
  xstbott.relayMessage(jid, msg.message, { messageId: msg.key.id });
};

        
        

async function tiktok(query) {
  let response = await axios("https://lovetik.com/api/ajax/search", {
    method: "POST",
    data: new URLSearchParams(Object.entries({ query })),
  });

  result = {};

  result.creator = "YNTKTS";
  result.title = clean(response.data.desc);
  result.author = clean(response.data.author);
  result.nowm = await shortener(
    (response.data.links[0].a || "").replace("https", "http")
  );
  result.watermark = await shortener(
    (response.data.links[1].a || "").replace("https", "http")
  );
  result.audio = await shortener(
    (response.data.links[2].a || "").replace("https", "http")
  );
  result.thumbnail = await shortener(response.data.cover);
  return result;
}
        
        
async function getGcName(groupID) {
            try {
                let data_name = await xstbott.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }
        if (m.message) {
            xstbott.readMessages([m.key])
        }
if(m.isGroup){
    expiredCheck(xstbott, sewa)
    }
        
      if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await xstbott.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await xstbott.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        xstbott.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiLink2) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return //m.reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await xstbott.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return //m.reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return //m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await xstbott.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
        }
      if (isAntiWame) {
        if (budy.match(`wa.me/`)) {
        m.reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await xstbott.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        xstbott.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiWame2) {
        if (budy.match(`wa.me/`)) {
        if (!isBotAdmins) return //m.reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return //m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
await xstbott.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        }
        }
      if (isAntiWame) {
        if (budy.includes((`Wa.me/`) || (`Wa.me/`))) {
        m.reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return m.reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return m.reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        xstbott.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        if (isAlreadyResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)) {
            var get_data_respon = getDataResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list)
            if (get_data_respon.isImage === false) {
                xstbott.sendMessage(m.chat, { text: sendResponList((m.isGroup ? m.chat: botNumber), body.toLowerCase(), db_respon_list) }, {
                    quoted: m
                })
            } else {
                xstbott.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: m
                })
            }
        }
// ===============================================================================================
let http = require('http')
            http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
            resp.on('data', function(ip) {
                (global.ipserver = ip);
            })
          })
// CEK WINRATE MOBILE LEGENDS
function cwr(tMatch, tWr, wrReq) {
    let tLose = tMatch * (100 - tWr) / 100;
    let seratusPersen = tLose * (100 / (100 - wrReq));
    let final = seratusPersen - tMatch;
    return Math.round(final);
  }
// ===============================================================================================
function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }

// Sayying time
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam 🌌'
}
// ===============================================================================================
const xstreply = (teks) => {
return xstbott.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `XSTBot`,"body": `Hai ${pushname}`, "previewType": "PHOTO","thumbnail": xst,"sourceUrl": `https://bit.ly/3USFO5F`}}}, { quoted:m})}
// ===============================================================================================
  let xs = '`'
  let simbol = `${pickRandom(["⌬","〆","»","≿","⊁","⊚","⊷","⊹","⋄","⋡","⋫","⊰","⌑","⌾"])}`
  let simbolgame = `${pickRandom(["❂","⊛","⊁","⊚","⊷","⊹","⋄"])}`
  const pickRandom2 = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
  }
// ======================================================================

/* Limit */
const { addUser, addLimit, subtractLimit, updateLimit } = require('./lib/limit')
function cekUserLimit(userId) {
  return limitBase.limit.some(user => user[userId])
}

function batasLimit(userId, limitDiperlukan) {
  const user = limitBase.limit.find(user => user[userId])
  if (user) {
    if (user[userId].limit >= limitDiperlukan) {
      subtractLimit(userId, limitDiperlukan)
      reply(`Fitur ini membutuhkan limit, limit anda berkurang sebanyak ${limitDiperlukan}`)
    } else {
      return reply(`Fitur ini membutuhkan limit, sebanyak ${limitDiperlukan} buah, sedangkan anda tidak memiliki limit yang cukup untuk memenuhi persyaratan tersebut`)
      return
    }
  } else {
    return reply(`Fitur ini membutuhkan limit, sebanyak ${limitDiperlukan} buah, sedangkan anda tidak memiliki limit yang cukup untuk memenuhi persyaratan tersebut`)
    return
  }
}

if (!cekUserLimit(m.sender)) {
addUser(m.sender, 0)
}

                     switch(command) {
// ======================================================================

case 'bukti':{
if (!quoted) return reply(`Kirim/Reply Gambar Dengan Caption *${prefix + command}*`)
if (/image/.test(mime)) {
let media = await quoted.download()
m.reply(`Berhasil terkirim ke owner,silahkan menunggu konfirmasi`)
let idny = m.sender.split("@")[0]
let buktii = `「 *ORDERAN MASUK* 」`
xstbott.sendMessage(global.owner+'@s.whatsapp.net', {image: media, caption: buktii},{quoted: null})
}
else {
reply(`Kirim/Reply Gambar Dengan Caption *${prefix + command}*`)
}
}
case 'saran':{
let lenwy_txt = args[0]
if (!text) return reply('☘️ *Mana Teksnya?*')
if (text.length > 300) return reply(`☘️ *Maksimal 300 Karakter*`)    
reply('☘️ *Saran Berhasil Terkirim, Terimakasih*')
xstbott.sendMessage(`${global.owner}@s.whatsapp.net`, { text: `📦 *Saran / Masukan*\n🎁 *Dari :* @${m.sender.split('@')[0]}\n📃 *Pesan :* ${q}\n\n 📣 *Saran Ini Dikirim Oleh Bot Lenwy*`, mentions: [m.sender]}, { quoted: m })
}
break

case 'addmurxst':
if (!isCreator) return m.reply(`Khusus owner...!!`)
if (!args[0]) return m.reply(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxx`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekkanbre = await xstbott.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekkanbre.length == 0) return m.reply(`Enter a valid number and register on WhatsApp!!!`)
murxst.push(bnnd)
fs.writeFileSync('./lib/murxst.json', JSON.stringify(murxst))
m.reply(`Number ${bnnd} Has Been Added to Murxst!!!`)
break

case 'dellmurxst':
if (!isCreator) return m.reply(`Khusus owner...!!`)
if (!args[0]) return m.reply(`Use ${prefix+command} Number\nExample ${prefix+command} 62xxxxx`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = murxst.indexOf(yaki)
murxst.splice(unp, 1)
fs.writeFileSync('./lib/murxst.json', JSON.stringify(murxst))
m.reply(`Number ${yaki} Has Been Removed From Murxst!!!`)
break
                         case 'ptt': case 'paptt':
if (!isMurxst) return m.reply(`Untuk menggunakan fitur ini silahkan join jadi murid XSTBot terlebih dahulu`)
if (!q) return m.reply(`Example ${prefix + command} foto/video`)
papttfoto = JSON.parse(fs.readFileSync('./lib/paptt-foto.json'))
papttvideo = JSON.parse(fs.readFileSync('./lib/paptt-video.json'))
titid1 = (pickRandom(papttfoto))
titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
m.reply("Photos will be sent via private chat ( *PC* )")
xstbott.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan🥵'}, { quoted: m })
} else if (q == 'video') {
m.reply("Video will be sent via private chat ( *PC* )")
xstbott.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🥵'}, { quoted: m })
}
break

 case'tourl':{
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('🚩 reply image!')
  let media = await q.download()
  let uploadImage = require('./lib/uploadImage')
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  reply(`${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}`)
}
break
                         
// ======================================================================
case 'delete': case 'del': {
if (!m.isGroup) return //xstreply(mess.group)
if (!isAdmins) return //xstreply(mess.admin)
if (!m.quoted) return 
xstbott.sendMessage(m.chat, { delete: { remoteJid: m.chat, Input: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break;
// ======================================================================
case 'allmenu': case 'help': {
        let message = `*${waktuucapan} ${pushname}*
🏅Creator : ${global.namaowner}
🤖Bot Name : ${global.namabot}

WAKTU INDONESIA BARAT 
⏰Jam : ${time}
📆Tanggal : ${hariini}

͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
${xs}SIMPLE MENU${xs}
 ${simbol} .sewabot
 ${simbol} .sticker
 ${simbol} .remini
 ${simbol} .mlreg (cek reg)
 ${simbol} .mlid (cek id)
 ${simbol} .openai
 ${simbol} .cekwinrate
•──━━━── •_• ──━━━──•

${xs}DOWNLOAD MENU${xs}
 ${simbol} .tiktok/tt
 ${simbol} .Instagram/ig
•──━━━── •_• ──━━━──•

${xs}STORE MENU${xs}
 ${simbol} .menu & .list
 ${simbol} .addlist
 ${simbol} .dellist
 ${simbol} .update
 ${simbol} .renamelist
 ${simbol} .jeda
 ${simbol} .kalkulator
•──━━━── •_• ──━━━──•

${xs}SET BOT MENU${xs}
 ${simbol} .setbot Teksnya
 ${simbol} .updatesetbot TeksBaru
 ${simbol} .delsetbot
• Bot = Untuk Respon Bot
•──━━━── •_• ──━━━──•

${xs}PROSES/DONE MENU${xs}
 ${simbol} .p < reply orderan >
 ${simbol} .d < reply orderan >
 ${simbol} .setp
 ${simbol} .updatep
 ${simbol} .delsetp
 ${simbol} .setd
 ${simbol} .updated
 ${simbol} .delsetd
•──━━━── •_• ──━━━──•
 
${xs}GRUB MENU${xs}
 ${simbol} .welcome
 ${simbol} .left
 ${simbol} .setwelcome
 ${simbol} .updatewelcome
 ${simbol} .delwelcome
 ${simbol} .setleft
 ${simbol} .changeleft
 ${simbol} .delsetleft
 ${simbol} .linkgc
 ${simbol} .setppgc
 ${simbol} .setnamegc
 ${simbol} .setdesc
 ${simbol} .antilink
 ${simbol} .antilinkwame
 ${simbol} .antipoke
 ${simbol} .closetime 
 ${simbol} .opentime
 ${simbol} .open
 ${simbol} .close
 ${simbol} .setopen
 ${simbol} .updateopen
 ${simbol} .delsetopen
 ${simbol} .setclose
 ${simbol} .updateclose
 ${simbol} .delsetclose
 ${simbol} .add
 ${simbol} .kick
 ${simbol} .promote
 ${simbol} .demote
 ${simbol} .revoke
 ${simbol} .hidetag
 ${simbol} .checksewa
•──━━━── •_• ──━━━──•

${xs}CEK RATE MENU${xs}
 ${simbol} .soc (Smile of Coin)
 ${simbol} .valo (Valorant)
 ${simbol} .aov (Arena Of Valor)
 ${simbol} .socl (Gatau)
 ${simbol} .kios (Kios Games)
 ${simbol} .kachi (Kachi Shop)
 ${simbol} .uniph (Unipin Philipina)
 ${simbol} .unibrl (Unipin Brazil)
 ${simbol} .codm (Call Of Duty Mobile)
 ${simbol} .unimy (Unipin Malay)
 ${simbol} .undawn (Garena Undawn)
 ${simbol} .unicodm (Unipin Cal Of Duty M)
 ${simbol} .aceracer (Gatau)
 ${simbol} .genshinph (Genshin Impact)
 ${simbol} .genshinmy (Genshin Malay)
•──━━━── •_• ──━━━──•

${xs}OWNER MENU${xs}
 ${simbol} .owner
 ${simbol} .addsewa
 ${simbol} .delsewa
 ${simbol} .backup
 ${simbol} .infobot (Broadcast Group)
 ${simbol} .cekip
•──━━━── •_• ──━━━──•`
;
        let response = {
            text: message,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: "ALL MENU",
                    body: namabot,
                    thumbnailUrl: 'https://files.catbox.moe/b5f40u.jpg', // Ganti dengan URL gambar thumbnail Anda
                    sourceUrl: 'https://whatsapp.com/channel/0029VaarWXN6RGJGIlAVmm0Q',
                    mediaType: 1,
                    renderLargerThumbnail: true // true untuk on - false untuk off
                }
            }
        };
        await xstbott.sendMessage(m.chat, response, { quoted: m });        
    }
break
// ======================================================================sewa.json
case "bc": case "backup":{
if (!isCreator) return reply(`khusus owner`)
const { execSync } = require("child_process");
const ls = (await execSync("ls")).toString().split("\n").filter(
  (pe) =>
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "tmp" &&
pe != ""
);
const exec = await execSync(`zip -r backup.zip ${ls.join(" ")}`);
await xstbott.sendMessage(m.chat, { document: await fs.readFileSync("./backup.zip"), mimetype: "application/zip", fileName: "XSTBOT-Backup.zip",},{quoted: m}); await execSync("rm -rf backup.zip");
}
break
case 'ping':{
  xstreply(runtime(process.uptime()))
}
break 
// ======================================================================
case 'cekip': case 'getip':{
if (!isCreator) return m.reply("Fitur khusus owner!")
let anu = await fetch(`https://api.myip.com`)
let res = await anu.json()
let XshopTopup = `*📮INFO IP SERVER*

*IP :* ${res.ip}
*Country :* ${res.country}`
m.reply(XshopTopup)
}
break
// ======================================================================
case 'owner': case 'creator': {
xstbott.sendContact(m.chat, global.owner, m)}
break
// ======================================================================

// ===============================================================================================
//    CASE LIST MENU
case 'menu2':  case 'list2': {
if (!m.isGroup) return reply("Khusus grup")
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup((m.isGroup ? m.chat: botNumber), db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini\n\n*Untuk Melihat Fitur Bot Ketik* /help`)
        
let { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("@whiskeysockets/baileys")
let Kyuu = '`'
let tekss = `✄┈⟬ *List Menu* ⟭
                    
${Kyuu}I N F O${Kyuu}
${simbol} ${waktuucapan}
${simbol} Name : ${pushname}
${simbol} Jam: ${time}\n${simbol} Tanggal: ${hariini}`
            let arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === (m.isGroup ? m.chat: botNumber)) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
        
if (arr_rows.length === 0) return reply(`Belum ada list message yang terdaftar di group ini\n\n*Untuk Melihat Fitur Bot Ketik* /help`)
        
            let rows = arr_rows.map(row => ({
                "header": row.title,
                "title": `${simbol} ${row.title}`,
                "description": "",
                "id": row.rowId
            }));
        
            let sections = JSON.stringify([
                {
                    "title": groupName,
                    "highlight_label": pushname,
                    "rows": rows
                }
            ]);

            xstbott.sendListMsg(m.chat, tekss,'','Klik Disini',`${sections}`, m);
            
        }
       
break;


case 'list': case 'menu':{
let simbol = `${pickRandom(["⌬","〆","»","≿","⊁","⊚","⊷","⊹","⋄","⋡","⋫","⊰","⌑","⌾"])}`
if (db_respon_list.length === 0) return m.reply(`Belum ada list message yang terdaftar di grub ini`)
if (!isAlreadyResponListGroup((m.isGroup ? m.chat: botNumber), db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di grub ini`)
if(m.isGroup){
let teks = `♥︎  ∩._..._.∩\n （˵• ֊ •˵) ♥︎\n╭━∪━∪━━━━━━━━━━━━\n┃ ${waktuucapan} @${m.sender.split("@")[0]}\n┃ ⏰ ${timee}\n┃ 📅 ${hariini}\n╰━━━━━━━━━━━━━━━━\n   *Berikut daftar list nya...!!* ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n╭━━━━━━━━━━━━━━━━\n`
for (let i of db_respon_list) {
if (i.id === (m.isGroup ? m.chat : botNumber)) {
teks += `┃ ${simbol} ⋆ ${i.key.toUpperCase()}\n`
}
}
teks += `╰━━━━━━━━━━━━━━━━\nSilahkan ketik salah satu list diatas.`
xstbott.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m})
} else {
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === (m.isGroup ? m.chat : botNumber)) {
arr_rows.push({
               title: x.key,
               rowId: x.key
               })
               }
            }
            var listMsg = {
               text: `Halo @${m.sender.split("@")[0]} 👋\n\nSilahkan pilih item yang kamu butuhkan 🌟`,
               buttonText: 'Click Here',
               footer: footer_text,
               mentions: [m.sender],
               sections: [{
                  title: groupName,
                  rows: arr_rows
               }]
            }
            xstbott.sendMessage(m.chat, listMsg, {
               quoted: m
            })
            }
			}
break

// ===============================================================================================
case'addlist':{
//if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus Admin')
 var args1 = q.split("|")[0].toLowerCase()
 var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan Dengan Cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
if (isAlreadyResponList((m.isGroup ? m.chat :botNumber), args1, db_respon_list)) return m.reply(`List respon *${args1}* sudah terdaftar di database`)
if(m.isGroup){
if (/image/.test(mime)) {
let media = await xstbott.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(media)
addResponList(m.chat, args1, args2, true, mem, db_respon_list)
reply(`Sukses menambah respon list *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses Menambah respon list *${args1}*`)
}
} else {
if (/image/.test(mime)) {
let media = await xstbott.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(media)
addResponList(botNumber, args1, args2, true, mem, db_respon_list)
reply(`Sukses menambah respon list *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(botNumber, args1, args2, false, '-', db_respon_list)
reply(`Sukses menambah respon list *${args1}*`)
}
}
}
break
// ===============================================================================================
case 'updatelist': {
// if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${command} *key|response*\n\n_Contoh_\n\n${command} tes|apa`)
if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), args1, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di chat ini`)
if (/image/.test(mime)) {
let media = await xstbott.downloadAndSaveMediaMessage(quoted)
let mem = await TelegraPh(media)
updateResponList((m.isGroup? m.chat: botNumber), args1, args2, true, mem, db_respon_list)
reply(`Sukses update respon list *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList((m.isGroup? m.chat: botNumber), args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list *${args1}*`)
}
}
break
// ===============================================================================================
case 'rename': case 'renamelist': {
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} *key|new key*\n\n_Contoh_\n\n${prefix+command} list dm|list dm baru`)
if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), args1, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di database`)
renameList((m.isGroup? m.chat: botNumber), args1, args2, db_respon_list)
reply(`Sukses`)
}
break
// ===============================================================================================
case 'dellist':{
// if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus Admin Group')
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} hello`)
if (!isAlreadyResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di databasee`)
delResponList((m.isGroup? m.chat: botNumber), q.toLowerCase(), db_respon_list)
reply(`Sukses delete list *${q}*`)
}
break
// ===============================================================================================
//    CASE GROUP
case 'setname': case 'setnamegc': case 'setsubject': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai Admin")
if (!text) return reply(`Example ${prefix+command} XSHOPTOPUP STORE`)
await xstbott.groupUpdateSubject(m.chat, text).then((res) => reply("Done")).catch((err) => reply("Terjadi Kesalahan"))
}
break
// ===============================================================================================
case 'setdesc': case 'setdesk': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai Admin")
if (!text) return m.reply(`Example ${prefix + command} WhatsApp Bot`)
await xstbott.groupUpdateDescription(m.chat, text).then((res) => m.reply("Done")).catch((err) => m.reply("Terjadi kesalahan"))
}
break
// ===============================================================================================
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai Admin")
if (!quoted) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return m.reply (`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await xstbott.downloadAndSaveMediaMessage(quoted)
await xstbott.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Berhasil Mengganti pp group")
}
break
// ===============================================================================================
case 'linkgrup': case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai admin")
let response = await xstbott.groupInviteCode(m.chat)
m.reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`)
}
break
// ===============================================================================================
case "setlinkgc": case'revoke':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai Admin")
await xstbott.groupRevokeInvite(m.chat)
.then( res => {
reply(`Sukses Menyetel Tautan Undangan Grup Ini`)
}).catch(() => reply("Terjadi Kesalahan"))
}
break
// ===============================================================================================
case 'promote': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai Admin")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xstbott.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses Menaikkan Jabatan Member✅')).catch((err) => m.reply('❌ Terjadi Kesalahan'))
}
break
// ===============================================================================================
case 'demote': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai Admin")
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xstbott.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses Menurunkan Jabatan Admin✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
}
break
// ===============================================================================================
case 'jeda': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus Admin!')
if (!isBotAdmins) return m.reply("Jadikan *Bot* Sebagai Admin Terlebih Dahulu")
if (!text) return m.reply(`kirim ${command} waktu\nContoh: ${command} 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari`)
opengc[m.chat] = { id: m.chat, time: Date.now() + toMs(text) }
fs.writeFileSync('./database/opengc.json', JSON.stringify(opengc))
xstbott.groupSettingUpdate(m.chat, "announcement")
.then((res) => reply(`Sukses, group akan dibuka ${text} lagi`))
.catch((err) => reply('err'))
}
break
// ===============================================================================================
case 'bot':{
var bot = `Iya Kakak, Ada Yang Bisa ${namabot} Bantu?\nKetik ${prefix}list untuk menampilkan list menu`
const getTextB = getTextSetBot((m.isGroup? m.chat: botNumber), set_bot);
if (getTextB !== undefined) {
var pull_pesan = (getTextB.replace('@bot', namabot).replace('@owner', namaowner).replace('@jam', time).replace('@tanggal', tanggal(new Date())))
xstbott.sendMessage(m.chat, { text: `${pull_pesan}` }, { quoted: m })
} else {
xstbott.sendMessage(m.chat, { text: bot }, { quoted: m })
}
}
break
// ===============================================================================================
case "updatesetbot": case 'setbot': case 'changebot':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
if (!q) return reply(`Gunakan dengan cara ${command} *teks_bot*\n\n_Contoh_\n\n${command} Halo saya adalah @bot\n\n@bot = nama bot\n@owner = nama owner\n@jam = jam\n@tanggal = tanggal`)
if (isSetBot((m.isGroup? m.chat: botNumber), set_bot)) {
changeSetBot(q, (m.isGroup? m.chat: botNumber), set_bot)
reply(`Sukses update set bot teks!`)
} else {
addSetBot(q, (m.isGroup? m.chat: botNumber), set_bot)
reply(`Sukses set teks bot!`)
}
}
break
// ===============================================================================================
case 'delsetbot':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin & owner!')
if (!isSetBot((m.isGroup? m.chat: botNumber), set_bot)) return reply(`Belum ada set bot di chat ini`)
removeSetBot((m.isGroup? m.chat: botNumber), set_bot)
reply(`Sukses delete set bot`)
}
break
// ===============================================================================================
case 'remini2': case 'hd2': case 'hdr2':{
if (!m.quoted) return xstreply(`Reply gambar nya\nPenggunaan : ${prefix}${command}`)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhpance");
xstbott.sendMessage(m.chat, { image: proses, caption:"Udah HD, Bilang apa?"}, { quoted: m})
}
break
case 'hd': case 'hdr': case 'remini': {
if (!/image/.test(mime)) return m.reply(`Reply/kirim fotonya dengan caption ${prefix + command}`)
m.reply('Please wait...!!')
let media = await quoted.download()
let proses = await remini(media, "enhance");
xstbott.sendMessage(m.chat, { image: proses, caption: 'Selesai'}, { quoted: m})
}
break
// ===============================================================================================

// ===============================================================================================
case"p": case"proses":{
if (!(m.isGroup? isAdmins : isCreator)) return
if (!m.quoted) return //m.reply('Reply pesanan yang akan proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 @tanggal\n⌚ @jam\n✨ Status Pending\`\`\`\n\n📝 Catatan :\n@pesanan\n\nPesanan @user sedang di proses!`
const getTextP = getTextSetProses((m.isGroup? m.chat: botNumber), set_proses);
if (getTextP !== undefined) {
var anunya = (getTextP.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
xstbott.sendTextWithMentions(m.chat, anunya, m)
} else {
   xstbott.sendTextWithMentions(m.chat, (proses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
}
}
break
// ===============================================================================================
case 'setproses': case 'setp':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return m.reply(`Set proses already active`)
addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
reply(`✅ Done set proses!`)
}
break
// ===============================================================================================
case 'changeproses': case 'changep':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetProses((m.isGroup? m.chat: botNumber), set_proses)) {
changeSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
m.reply(`Sukses ubah set proses!`)
} else {
addSetProses(text, (m.isGroup? m.chat: botNumber), set_proses)
m.reply(`Sukses ubah set proses!`)
}
}
break
// ===============================================================================================
case 'delsetproses': case 'delsetp':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
if (!isSetProses((m.isGroup? m.chat: botNumber), set_proses)) return m.reply(`Belum ada set proses di gc ini`)
removeSetProses((m.isGroup? m.chat: botNumber), set_proses)
reply(`Sukses delete set proses`)
}
break
// ===============================================================================================
case "d": case'done':{
if (!(m.isGroup? isAdmins : isCreator)) return
if (!m.quoted) return // m.reply('Reply pesanan yang telah di proses')
let tek = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 @tanggal\n⌚ @jam\n✨ Berhasil\`\`\`\n\nTerimakasih @user Next Order ya🙏`            
const getTextD = getTextSetDone((m.isGroup? m.chat: botNumber), set_done);
if (getTextD !== undefined) {
var anunya = (getTextD.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0]))
xstbott.sendTextWithMentions(m.chat, anunya, m)
} else {
xstbott.sendTextWithMentions(m.chat, (sukses.replace('@pesanan', tek ? tek : '-').replace('@user', '@' + m.quoted.sender.split("@")[0]).replace('@jam', time).replace('@tanggal', tanggal(new Date())).replace('@user', '@' + m.quoted.sender.split("@")[0])), m)
}
}
break
// ===============================================================================================
case 'setdone':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) return m.reply(`Udh set done sebelumnya`)
addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
reply(`Sukses set done!`)
}
break
// ===============================================================================================
case 'changedone': case 'changed':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks*\n\n_Contoh_\n\n${prefix + command} Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) `)
if (isSetDone((m.isGroup? m.chat: botNumber), set_done)) {
changeSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
m.reply(`Sukses ubah set done!`)
} else {
addSetDone(text, (m.isGroup? m.chat: botNumber), set_done)
m.reply(`Sukses ubah set done!`)
}
}
break
// ===============================================================================================
case 'delsetdone': case 'delsetd':{
if (!(m.isGroup? isAdmins : isCreator)) return m.reply('Fitur Khusus admin!')
if (!isSetDone((m.isGroup? m.chat: botNumber), set_done)) return m.reply(`Belum ada set done di gc ini`)
removeSetDone((m.isGroup? m.chat: botNumber), set_done)
m.reply(`Sukses delete set done`)
}
break            
// ===============================================================================================

case'welcome':{
if (args[0] === "on") {
if (isWelcome) return m.reply(`Udah on`)
_welcome.push(m.chat)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Sukses mengaktifkan welcome di grup ini')
} else if (args[0] === "off") {
if (!isWelcome) return m.reply(`Udah off`)
let anu = _welcome.indexOf(m.chat)
_welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2))
reply('Sukses menonaktifkan welcome di grup ini')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
// ===============================================================================================
case'setwelcome':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Set welcome already active`)
addSetWelcome(text, m.chat, set_welcome_db)
reply(`Successfully set welcome!`)
}
break
// ===============================================================================================
case'changewelcome':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Halo @user, Selamat datang di @group`)
if (isSetWelcome(m.chat, set_welcome_db)) {
changeSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
} else {
addSetWelcome(q, m.chat, set_welcome_db)
reply(`Sukses change set welcome teks!`)
}}
break
// ===============================================================================================
case'delsetwelcome':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!isSetWelcome(m.chat, set_welcome_db)) return m.reply(`Belum ada set welcome di sini..`)
removeSetWelcome(m.chat, set_welcome_db)
reply(`Sukses delete set welcome`)
}
break
// ===============================================================================================
case'left': case 'goodbye':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (args[0] === "on") {
if (isLeft) return m.reply(`Udah on`)
_left.push(m.chat)
fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2))
reply('Sukses mengaktifkan goodbye di grup ini')
} else if (args[0] === "off") {
if (!isLeft) return m.reply(`Udah off`)
let anu = _left.indexOf(m.chat)
_left.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_left, null, 2))
reply('Sukses menonaktifkan goodbye di grup ini')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
// ===============================================================================================
case'setleft':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) return m.reply(`Set left already active`)
addSetLeft(q, m.chat, set_left_db)
reply(`Successfully set left!`)
}
break
// ===============================================================================================
case'changeleft':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!text) return m.reply(`Gunakan dengan cara ${prefix + command} *teks_left*\n\n_Contoh_\n\n${prefix + command} Halo @user, Selamat tinggal dari @group`)
if (isSetLeft(m.chat, set_left_db)) {
changeSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
} else {
addSetLeft(q, m.chat, set_left_db)
reply(`Sukses change set left teks!`)
}
}
break
// ===============================================================================================
case'delsetleft':{
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isCreator && !isAdmins) return m.reply('Fitur Khusus owner!')
if (!isSetLeft(m.chat, set_left_db)) return m.reply(`Belum ada set left di sini..`)
removeSetLeft(m.chat, set_left_db)
reply(`Sukses delete set left`)
}
break 
// ===============================================================================================
case'open': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return //m.reply('Fitur Khusus Dewa!')
if (!isBotAdmins) return m.reply("Bot Bukan Admin")
xstbott.groupSettingUpdate(m.chat, 'not_announcement')
const textOpen = await getTextSetOpen(m.chat, set_open);
reply(textOpen || `O━━━━━• *Group Open* •━━━━━O
\`\`\`
🎊 Group Open
📆 ${hariini}
⏰ ${time}
\`\`\`
━━━━━O━O━••••••••••━O━O━━━━━`)
}
break
// ===============================================================================================
case'close': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return //m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply("Bot bukan admin")
xstbott.groupSettingUpdate(m.chat, 'announcement')
const textClose = await getTextSetClose(m.chat, set_close);
reply(textClose || `O━━━━━• *Group Close* •━━━━━O
\`\`\`
🎊 Group Close 
📆 ${hariini}
⏰ ${time}
\`\`\`
━━━━━O━O━••••••••••━O━O━━━━━`)
}
break
// ===============================================================================================
case 'closetime': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply("Bot bukan admin")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*Penggunaan :* closetime 10 detik')
}
m.reply(`Group akan ditutup dalam ${q} lagi`)  // kalo mau ganti misalnya: grup akan di tutup dalam ${q} lagi
setTimeout(() => {
var nomor = m.participant
const close = `O━━━━━• *Group Close* •━━━━━O
\`\`\`
🎊 Group Close 
📆 ${hariini}
⏰ ${time}
\`\`\`
━━━━━O━O━••••••••••━O━O━━━━━` // bebas mau ganti gimana, itu teks kalo grub nya sukses ditutup
xstbott.groupSettingUpdate(m.chat, 'announcement')
m.reply(close)
}, timer)
}
break
// ============================================================================        
case 'opentime': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply("Bot bukan admin")
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('*Penggunaan :* opentime 10 detik')
}
m.reply(`Group akan dibuka dalam ${q} lagi`) // kalo mau ganti misalnya: grup akan di buka dalam ${q} lagi
setTimeout(() => {
var nomor = m.participant
const open = `O━━━━━• *Group Open* •━━━━━O
\`\`\`
🎊 Group Open
📆 ${hariini}
⏰ ${time}
\`\`\`
━━━━━O━O━••••••••••━O━O━━━━━` // bebas mau ganti gimana, itu teks kalo grub nya sukses dibuka
xstbott.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(open)
}, timer)
}
break 
// ===============================================================================================
case'addsewa':{
if (!isCreator) return m.reply("Fitur khusus owner!")
if (text < 2) return m.reply(`Gunakan dengan cara ${prefix + command} *linkgc waktu*\n\nContoh : ${command} https://chat.whatsapp.com/XSTBot 30d\n\n*CATATAN:*\nd = hari (day)\nm = menit(minute)\ns = detik (second)\ny = tahun (year)\nh = jam (hour)`)
if (!isUrl(args[0])) return m.reply("Link grup wa gk gitu modelnya cuy")
var url = args[0]
url = url.split('https://chat.whatsapp.com/')[1]
if (!args[1]) return m.reply(`Waktunya?`)
var data = await xstbott.groupAcceptInvite(url)
if(checkSewaGroup(data, sewa)) return m.reply(`Bot sudah disewa oleh grup tersebut!`)
addSewaGroup(data, args[1], sewa)
reply(`Success Add Sewa Group Berwaktu!`)
}
break
// ===============================================================================================
case'delsewa':{
if (!isCreator) return m.reply("Fitur khusus owner!")
if (!m.isGroup) return m.reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
if (!isSewa) return m.reply(`Bot tidak disewa di Grup ini`)
sewa.splice(getSewaPosition(m.chat, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
reply(`Sukses del sewa di grup ini`)
}
break
case 'join': {
            if (!isCreator) return m.reply("Fitur khusus owner!")
            if (!text) return reply('Masukkan Link Group!')
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
            reply('Please wait..!!')
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await xstbott.groupAcceptInvite(result).then((res) => m.reply("Done")).catch((err) => m.reply(jsonformat(err)))
        }
        break;
// ===============================================================================================
case 'checksewa': case 'ceksewa': case 'listsewa':{
let list_sewa_list = `*LIST SEWA*\n\n*Total:* ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
if (x.expired === 'PERMANENT') {
let ceksewa = 'PERMANENT'
list_sewa_list += `*Expire :* PERMANENT\n\n`
} else {
let ceksewa = x.expired - Date.now()
list_sewa_list += `*Expired :* ${msToDate(ceksewa)}\n\n`
}
}
xstbott.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
}
break
// ===============================================================================================

case'antiwame':{
if (args[0] === "on") {
if (isAntiWame) return m.reply(`Udah aktif`)
antiwame.push(m.chat)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
reply('Successfully Activate Antiwame In This Group')
} else if (args[0] === "off") {
if (!isAntiWame) return m.reply(`Udah nonaktif`)
let anu = antiwame.indexOf(m.chat)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
reply('Successfully Disabling Antiwame In This Group')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
// ===============================================================================================

case'antiwame2':{
if (args[0] === "on") {
if (isAntiWame2) return m.reply(`Udah aktif`)
antiwame2.push(m.chat)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
reply('Successfully Activate antiwame2 In This Group')
} else if (args[0] === "off") {
if (!isAntiWame2) return m.reply(`Udah nonaktif`)
let anu = antiwame2.indexOf(m.chat)
antiwame2.splice(anu, 1)
fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
reply('Successfully Disabling antiwame2 In This Group')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
// ===============================================================================================

       case'antilink':{
if (args[0] === "on") {
if (isAntiLink) return m.reply(`Udah aktif`)
antilink.push(m.chat)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Activate Antilink In This Group')
} else if (args[0] === "off") {
if (!isAntiLink) return m.reply(`Udah nonaktif`)
let anu = antilink.indexOf(m.chat)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
reply('Successfully Disabling Antilink In This Group')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break
// ===============================================================================================
       case'antipoke':{
if (args[0] === "on") {
if (isAntiLink2) return m.reply(`Udah Aktif`)
antilink2.push(m.chat)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Sukses Mengaktifkan *Anti Poke* Di Grup Ini!')
} else if (args[0] === "off") {
if (!isAntiLink2) return m.reply(`Udah Nonaktif`)
let anu = antilink2.indexOf(m.chat)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
reply('Sukses Menonaktifkan *Anti Poke* Di Grup Ini!')
} else {
reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
}
}
break 
// ===============================================================================================
case "hidetag": case "h": {
if (!m.isGroup) return reply("Khusus Grup")
if (!(isAdmins || isCreator)) return reply("Fitur Khusus admin!!")
xstbott.sendMessage(m.chat, { text : m.quoted ? m.quoted.text :text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break; 
// ===============================================================================================
case 'sgif': case 'stikerin': case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Reply foto/video dengan caption ${prefix + command}\n\ndurasi video maks 1-9 detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await xstbott.sendImageAsSticker(m.chat, media, m, {
packname: global.sticker1,
author: global.sticker2
})
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Reply foto/video dengan caption ${prefix + command}\n\ndurasi video maks 1-9 detik`)
let media = await quoted.download()
let encmedia = await xstbott.sendVideoAsSticker(m.chat, media, m, {
packname: global.sticker1,
author: global.sticker2
})
await fs.unlinkSync(encmedia)
} else {
reply(`Reply foto/video dengan caption ${prefix + command}\n\ndurasi video maks 1-9 detik`)
}
}
break

            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply(`Please wait...!!`)
                if (/image/.test(mime)) {
                    let media = await xstbott.downloadMediaMessage(qmsg)
                    let encmedia = await xstbott.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await xstbott.downloadMediaMessage(qmsg)
                    let encmedia = await xstbott.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
// ===============================================================================================
case 'kick': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply('Bot harus menjadi admin!')
if (!text) return reply('Reply/Tag Yang mau di kick.')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xstbott.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply('Sukses kick target✅')).catch((err) => m.reply('❌ Terjadi kesalahan'))
}
break
// ===============================================================================================
case 'add': {
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
if (!isAdmins) return m.reply('Fitur Khusus admin!')
if (!isBotAdmins) return m.reply('Fitur Khusus admin!')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xstbott.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply('Sukses add member✅')).catch((err) => m.reply('❌ Terjadi kesalahan, mungkin nmr nya privat'))
}
break
// ===============================================================================================
case 'infobot': case 'info': {
if (!isCreator) return reply(`Khusus Owner`)
if (!text) return reply(`☘️ *Contoh : ${prefix + command} Anu*`)
let getGroups = await xstbot.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(2000)
xstbot.sendMessage(i, {text: `${text}`}, {quoted:len})
    }
reply(`☘️ Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

// ===============================================================================================
case "kalkulator": case "hitung": case "hasil":
  if (!text) return m.reply(`*[ PENGGUNAAN ]*\n\nKali [ *10 × 2* ]\nBagi [ *10 ÷ 2* ]\nKurang [ *10 - 2* ]\nTambah [ *10 + 2* ]\n\n*Contoh :*\n- Kalkulator 10 + 2`)
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`${format} = *${result}*`)
  } catch (e) {
    if (e == undefined) return m.reply('Isinya?')
    m.reply('*[ PENGGUNAAN ]*\n\nKali [ *10 × 2* ]\nBagi [ *10 ÷ 2* ]\nKurang [ *10 - 2* ]\nTambah [ *10 + 2* ]\n\n*Contoh :*\n- Kalkulator 10 + 2')
  }
  break
  // ===============================================================================================
  case 'valo' : {  
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
   	let tekvalo = text.split(' ')[0]
  if (isNaN(tekvalo)) return m.reply('Masukan hanya angka yah\nContoh : valo 2900')
  m.reply(`*VALORANT R${tekvalo}*

300 ⭐️ = Rp ${toRupiah(9.51*tekvalo)}
625 ⭐️ = Rp ${toRupiah(19.02*tekvalo)}
1125 ⭐️ = Rp ${toRupiah(33.29*tekvalo)}
1650 ⭐️ = Rp ${toRupiah(47.55*tekvalo)}
3400 ⭐️ = Rp ${toRupiah(95.1*tekvalo)}
7000 ⭐️ = Rp ${toRupiah(190.2*tekvalo)}`
)
  }
  break;                                         
// ===============================================================================================
 case 'genshinph': {
if (!isAdmins) return 
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekgennph = text.split(' ')[0]
  if (isNaN(tekgennph)) return m.reply('Masukan hanya angka yah\nContoh : genshinph 220')
  
  m.reply(`*GENSHIN UNI PH R${tekgennph}*

60 🔮 = Rp ${toRupiah(55*tekgennph)}
330 🔮 = Rp ${toRupiah(280*tekgennph)}
1090 🔮 = Rp ${toRupiah(830*tekgennph)}
2240 🔮 = Rp ${toRupiah(1670*tekgennph)}
3880 🔮 = Rp ${toRupiah(2800*tekgennph)}
8080 🔮 = Rp ${toRupiah(5500*tekgennph)}

Blessing of the Welkin Moon  = Rp ${toRupiah(280*tekgennph)}`
)
  }
  break;                
// ===============================================================================================
  case 'genshinmy' : {  
if (!isAdmins) return 
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
   	let tekgenmy = text.split(' ')[0]
  if (isNaN(tekgenmy)) return m.reply('Masukan hanya angka yah\nContoh : genshinmy 2900')
  m.reply(`*GENSHIN UNI MY R${tekgenmy}*

60 🔮 = Rp ${toRupiah(3.9*tekgenmy)}
330 🔮 = Rp ${toRupiah(19.9*tekgenmy)}
1090 🔮 = Rp ${toRupiah(59.9*tekgenmy)}
2240 🔮 = Rp ${toRupiah(129.9*tekgenmy)}
3880 🔮 = Rp ${toRupiah(199.9*tekgenmy)}

Blessing of the Welkin Moon  = Rp ${toRupiah(19.9*tekgenmy)}`
)
  }
  break; 
// ===============================================================================================
  case 'aov' : {  
if (!isAdmins) return 
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
   	let tekaov = text.split(' ')[0]
  if (isNaN(tekaov)) return m.reply('Masukan hanya angka yah\nContoh aov 265')
  m.reply(`*ARENA OF VALOR R${tekaov}*

40 💳 = Rp ${toRupiah(33*tekaov)}
90 💳 = Rp ${toRupiah(66*tekaov)}
230 💳 = Rp ${toRupiah(165*tekaov)}
470 💳 = Rp ${toRupiah(330*tekaov)}
950 💳 = Rp ${toRupiah(660*tekaov)}
1.430 💳 = Rp ${toRupiah(990*tekaov)}
2.390 💳 = Rp ${toRupiah(1660*tekaov)}
4.800 💳 = Rp ${toRupiah(3300*tekaov)}
24.050 💳 = Rp ${toRupiah(16500*tekaov)}
48.200 💳 = Rp ${toRupiah(33000*tekaov)}`
)
  }
  break; 
// ===============================================================================================; 
  case 'undawn' : {  
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
   	let tekud = text.split(' ')[0]
  if (isNaN(tekud)) return m.reply('Masukan hanya angka yah\nContoh : undawn 265')
  m.reply(`*GARENA UNDAWN R${tekud}*

80 💵 = Rp ${toRupiah(50*tekud)}
250 💵 = Rp ${toRupiah(150*tekud)}
450 💵 = Rp ${toRupiah(250*tekud)}
920 💵 = Rp ${toRupiah(495*tekud)}
1.850 💵 = Rp ${toRupiah(990*tekud)}
2.800 💵 = Rp ${toRupiah(1485*tekud)}
4.750 💵 = Rp ${toRupiah(2475*tekud)}
9.600 💵 = Rp ${toRupiah(4950*tekud)}
33.000 💵 = Rp ${toRupiah(16500*tekud)}
66.500 💵 = Rp ${toRupiah(33000*tekud)}

Kartu Mingguan 💳 = Rp ${toRupiah(96*tekud)}
Kartu Bulanan 💳 = Rp ${toRupiah(159*tekud)}
Growth Fund (REBATE) 💳 = Rp ${toRupiah(319*tekud)}
Glory Pass Premium 💳 = Rp ${toRupiah(479*tekud)}`
)
  }
  break; 
// ===============================================================================================
   case 'kios': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekkios = text.split(' ')[0]
  if (isNaN(tekkios)) return m.reply('Masukan hanya angka yah\nContoh : kios 265')
  m.reply(`*FREE FIRE R${tekkios}*

💎 5 = Rp ${toRupiah(3*tekkios)}
💎 10 = Rp ${toRupiah(6*tekkios)}
💎 15 = Rp ${toRupiah(9*tekkios)}
💎 20 = Rp ${toRupiah(12*tekkios)}
💎 25 = Rp ${toRupiah(15*tekkios)}
💎 30 = Rp ${toRupiah(18*tekkios)}
💎 50 = Rp ${toRupiah(24*tekkios)}
💎 55 = Rp ${toRupiah(27*tekkios)}
💎 60 = Rp ${toRupiah(30*tekkios)}
💎 70 = Rp ${toRupiah(33*tekkios)}
💎 75 = Rp ${toRupiah(36*tekkios)}
💎 80 = Rp ${toRupiah(39*tekkios)}
💎 90 = Rp ${toRupiah(45*tekkios)}
💎 100 = Rp ${toRupiah(48*tekkios)}
💎 120 = Rp ${toRupiah(57*tekkios)}
💎 130 = Rp ${toRupiah(63*tekkios)}
💎 140 = Rp ${toRupiah(66*tekkios)}
💎 145 = Rp ${toRupiah(69*tekkios)}
💎 150 = Rp ${toRupiah(72*tekkios)}
💎 160 = Rp ${toRupiah(78*tekkios)}
💎 190 = Rp ${toRupiah(90*tekkios)}
💎 200 = Rp ${toRupiah(96*tekkios)}
💎 210 = Rp ${toRupiah(99*tekkios)}
💎 250 = Rp ${toRupiah(120*tekkios)}
💎 280 = Rp ${toRupiah(132*tekkios)}
💎 300 = Rp ${toRupiah(144*tekkios)}
💎 355 = Rp ${toRupiah(165*tekkios)}
💎 360 = Rp ${toRupiah(168*tekkios)}
💎 375 = Rp ${toRupiah(177*tekkios)}
💎 405 = Rp ${toRupiah(189*tekkios)}
💎 425 = Rp ${toRupiah(198*tekkios)}
💎 475 = Rp ${toRupiah(222*tekkios)}
💎 500 = Rp ${toRupiah(234*tekkios)}
💎 510 = Rp ${toRupiah(240*tekkios)}
💎 515 = Rp ${toRupiah(243*tekkios)}
💎 520 = Rp ${toRupiah(246*tekkios)}
💎 545 = Rp ${toRupiah(255*tekkios)}
💎 565 = Rp ${toRupiah(264*tekkios)}
💎 600 = Rp ${toRupiah(282*tekkios)}
💎 635 = Rp ${toRupiah(297*tekkios)}
💎 645 = Rp ${toRupiah(303*tekkios)}
💎 655 = Rp ${toRupiah(309*tekkios)}
💎 725 = Rp ${toRupiah(333*tekkios)}
💎 740 = Rp ${toRupiah(342*tekkios)}
💎 770 = Rp ${toRupiah(354*tekkios)}
💎 790 = Rp ${toRupiah(363*tekkios)}
💎 800 = Rp ${toRupiah(369*tekkios)}
💎 860 = Rp ${toRupiah(396*tekkios)}
💎 930 = Rp ${toRupiah(429*tekkios)}
💎 1000 = Rp ${toRupiah(462*tekkios)}
💎 1050 = Rp ${toRupiah(486*tekkios)}
💎 1060 = Rp ${toRupiah(492*tekkios)}
💎 1075 = Rp ${toRupiah(495*tekkios)}
💎 1080 = Rp ${toRupiah(498*tekkios)}
💎 1200 = Rp ${toRupiah(558*tekkios)}
💎 1215 = Rp ${toRupiah(561*tekkios)}
💎 1300 = Rp ${toRupiah(603*tekkios)}
💎 1440 = Rp ${toRupiah(660*tekkios)}
💎 1450 = Rp ${toRupiah(666*tekkios)}
💎 1490 = Rp ${toRupiah(684*tekkios)}
💎 1510 = Rp ${toRupiah(693*tekkios)}
💎 1580 = Rp ${toRupiah(726*tekkios)}
💎 1795 = Rp ${toRupiah(825*tekkios)}
💎 1800 = Rp ${toRupiah(828*tekkios)}
💎 2000 = Rp ${toRupiah(924*tekkios)}
💎 2160 = Rp ${toRupiah(990*tekkios)}
💎 2180 = Rp ${toRupiah(1002*tekkios)}
💎 2200 = Rp ${toRupiah(1014*tekkios)}
💎 2210 = Rp ${toRupiah(1023*tekkios)}
💎 2280 = Rp ${toRupiah(1056*tekkios)}
💎 2355 = Rp ${toRupiah(1089*tekkios)}
💎 2720 = Rp ${toRupiah(1254*tekkios)}
💎 3640 = Rp ${toRupiah(1674*tekkios)}
💎 3800 = Rp ${toRupiah(1746*tekkios)}
💎 4000 = Rp ${toRupiah(1842*tekkios)}
💎 4340 = Rp ${toRupiah(1992*tekkios)}
💎 7290 = Rp ${toRupiah(3300*tekkios)}
Member Mingguan 1 = Rp ${toRupiah(100*tekkios)}
Member Mingguan 2 = Rp ${toRupiah(200*tekkios)}
Member Mingguan 3 = Rp ${toRupiah(300*tekkios)}
Member Bulanan 1 = Rp ${toRupiah(300*tekkios)}
Member Bulanan 2 = Rp ${toRupiah(600*tekkios)}
Member Bulanan 3 = Rp ${toRupiah(900*tekkios)}
Level Up Pass = Rp ${toRupiah(50*tekkios)}
BP Card = Rp ${toRupiah(150*tekkios)}`
)
  }
  break; 
// ===============================================================================================
  case 'unicodm': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekucodm = text.split(' ')[0]
  if (isNaN(tekucodm)) return m.reply('Masukan hanya angka yah\nContoh : unicodm 0.8')
  m.reply(`*UNIPIN ID CODM R${tekucodm}*

32🪙 = Rp ${toRupiah(5000*tekucodm)}
62🪙 = Rp ${toRupiah(10000*tekucodm)}
127🪙 = Rp ${toRupiah(20000*tekucodm)}
320🪙 = Rp ${toRupiah(50000*tekucodm)}
644🪙 = Rp ${toRupiah(100000*tekucodm)}
1373🪙 = Rp ${toRupiah(200000*tekucodm)}
2059🪙 = Rp ${toRupiah(300000*tekucodm)}
3564🪙 = Rp ${toRupiah(500000*tekucodm)}
7656🪙 = Rp ${toRupiah(1000000*tekucodm)}`
)
  }
  break; 
// ===============================================================================================
  case 'codm' : {  
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
   	let tekkcodm = text.split(' ')[0]
  if (isNaN(tekkcodm)) return m.reply('Masukan hanya angka yah\ncodm 265')
  m.reply(`*CALL OF DUTY MOBILE R${tekkcodm}*

63 🪙 = Rp ${toRupiah(33*tekkcodm)}
128 🪙 = Rp ${toRupiah(66*tekkcodm)}
321 🪙 = Rp ${toRupiah(165*tekkcodm)}
645 🪙 = Rp ${toRupiah(330*tekkcodm)}
800 🪙 = Rp ${toRupiah(396*tekkcodm)}
1.373 🪙 = Rp ${toRupiah(660*tekkcodm)}
2.060 🪙 = Rp ${toRupiah(990*tekkcodm)}
2.750 🪙 = Rp ${toRupiah(1254*tekkcodm)}
3.564 🪙 = Rp ${toRupiah(1650*tekkcodm)}
5.619 🪙 = Rp ${toRupiah(2409*tekkcodm)}
7.656 🪙 = Rp ${toRupiah(3300*tekkcodm)}`
)
  }
  break; 
// ===============================================================================================
  case 'aceracer': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekacer = text.split(' ')[0]
  if (isNaN(tekacer)) return m.reply('Masukan hanya angka yah\naceracer 2900')
  m.reply(`*Ace Racer R${tekacer}*

65🪙 ( 60 + 5 ) = Rp ${toRupiah(4.9*tekacer)}
270🪙 ( 250 + 20 ) = Rp ${toRupiah(18.9*tekacer)}
740🪙 ( 680 + 80 ) = Rp ${toRupiah(44.9*tekacer)}
1300🪙 ( 1180 + 120 ) = Rp ${toRupiah(84.9*tekacer)}
2180🪙 ( 2880 + 300 ) = Rp ${toRupiah(214.9*tekacer)}
6530🪙 ( 5880 + 650 ) = Rp ${toRupiah(429.9*tekacer)}`
)
  }
  break; 
// ===============================================================================================
  case 'uniph': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekuniph = text.split(' ')[0]
  if (isNaN(tekuniph)) return m.reply('Masukan hanya angka yah\nContoh : uniph 220')
  m.reply(`*MLC R${tekuniph}*

10💎 = Rp ${toRupiah(10*tekuniph)}
19💎 = Rp ${toRupiah(20*tekuniph)}
47💎 = Rp ${toRupiah(50*tekuniph)}
93💎 = Rp ${toRupiah(100*tekuniph)}
184💎 = Rp ${toRupiah(200*tekuniph)}
277💎 = Rp ${toRupiah(300*tekuniph)}
570💎 = Rp ${toRupiah(500*tekuniph)}
954💎 = Rp ${toRupiah(1000*tekuniph)}
1968💎 = Rp ${toRupiah(2000*tekuniph)}
4955💎 = Rp ${toRupiah(5000*tekuniph)}
Twilight = Rp ${toRupiah(500*tekuniph)}
Weekly Pass 1 = Rp ${toRupiah(99*tekuniph)}
Weekly Pass 2 = Rp ${toRupiah(198*tekuniph)}
Weekly Pass 3 = Rp ${toRupiah(297*tekuniph)}
Weekly Pass 4 = Rp ${toRupiah(396*tekuniph)}
Weekly Pass 5 = Rp ${toRupiah(495*tekuniph)}`
)
  }
  break; 
// ===============================================================================================
   case 'pmb': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekunimy = text.split(' ')[0]
  if (isNaN(tekunimy)) return m.reply('Masukan hanya angka yah\nContoh : pmb 2900')
  m.reply(`*PROMO MLB R${tekunimy}*

14💎 = Rp ${toRupiah(1*tekunimy)}
42💎 = Rp ${toRupiah(2.85*tekunimy)}
70💎 = Rp ${toRupiah(4.75*tekunimy)}
140💎 = Rp ${toRupiah(9.51*tekunimy)}
284💎 = Rp ${toRupiah(19.02*tekunimy)}
355💎 = Rp ${toRupiah(23.77*tekunimy)}
429💎 = Rp ${toRupiah(28.53*tekunimy)}
716💎 = Rp ${toRupiah(47.55*tekunimy)}
1084💎 = Rp ${toRupiah(71.32*tekunimy)}
1446💎 = Rp ${toRupiah(95.09*tekunimy)}
2976💎 = Rp ${toRupiah(190.19*tekunimy)}
7502💎 = Rp ${toRupiah(475.47*tekunimy)}
Weekly Diamond Pass = Rp ${toRupiah(7.64*tekunimy)}
Twilight = Rp ${toRupiah(38.04*tekunimy)}`
)
  }
  break; 
// ===============================================================================================
  case 'unimy': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekunimy = text.split(' ')[0]
  if (isNaN(tekunimy)) return m.reply('Masukan hanya angka yah\nContoh : unimy 2900')
  m.reply(`*MLB R${tekunimy}*

14💎 = Rp ${toRupiah(1.06*tekunimy)}
28💎 = Rp ${toRupiah(2.12*tekunimy)}
42💎 = Rp ${toRupiah(3.18*tekunimy)}
56💎 = Rp ${toRupiah(4.24*tekunimy)}
70💎 = Rp ${toRupiah(5.3*tekunimy)}
112💎 = Rp ${toRupiah(8.48*tekunimy)}
140💎 = Rp ${toRupiah(10.6*tekunimy)}
284💎 = Rp ${toRupiah(21.2*tekunimy)}
355💎 = Rp ${toRupiah(26.5*tekunimy)}
429💎 = Rp ${toRupiah(31.8*tekunimy)}
716💎 = Rp ${toRupiah(53*tekunimy)}
1446💎 = Rp ${toRupiah(106*tekunimy)}
Weekly Diamond Pass = Rp ${toRupiah(8.48*tekunimy)}
Twilight = Rp ${toRupiah(42.4*tekunimy)}`
)
  }
  break; 
// ===============================================================================================
                
  case 'unibrl': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekunibrl = text.split(' ')[0]
  if (isNaN(tekunibrl)) return m.reply('Masukan hanya angka yah\nContoh : unibrl 2900')
  m.reply(`*MLA R${tekunibrl}*

86💎 = Rp ${toRupiah(7.1*tekunibrl)}
172💎 = Rp ${toRupiah(14.2*tekunibrl)}
257💎 = Rp ${toRupiah(21.3*tekunibrl)}
344💎 = Rp ${toRupiah(28.4*tekunibrl)}
429💎 = Rp ${toRupiah(35.5*tekunibrl)}
514💎 = Rp ${toRupiah(42.6*tekunibrl)}
600💎 = Rp ${toRupiah(49.7*tekunibrl)}
706💎 = Rp ${toRupiah(56.8*tekunibrl)}
878💎 = Rp ${toRupiah(71*tekunibrl)}
963💎 = Rp ${toRupiah(78.1*tekunibrl)}
1050💎 = Rp ${toRupiah(85.19*tekunibrl)}
1135💎 = Rp ${toRupiah(92.3*tekunibrl)}
1220💎 = Rp ${toRupiah(99.4*tekunibrl)}
1412💎 = Rp ${toRupiah(113.6*tekunibrl)}
1584💎 = Rp ${toRupiah(127.8*tekunibrl)}
1669💎 = Rp ${toRupiah(134.9*tekunibrl)}
1756💎 = Rp ${toRupiah(142*tekunibrl)}
1841💎 = Rp ${toRupiah(149.1*tekunibrl)}
2195💎 = Rp ${toRupiah(170.4*tekunibrl)}
2539💎 = Rp ${toRupiah(198.8*tekunibrl)}
2901💎 = Rp ${toRupiah(227.2*tekunibrl)}
3073💎 = Rp ${toRupiah(241.4*tekunibrl)}
3688💎 = Rp ${toRupiah(284*tekunibrl)}
4394💎 = Rp ${toRupiah(340.8*tekunibrl)}
5532💎 = Rp ${toRupiah(426*tekunibrl)}
6238💎 = Rp ${toRupiah(482.8*tekunibrl)}
7727💎 = Rp ${toRupiah(596.4*tekunibrl)}
9288💎 = Rp ${toRupiah(710*tekunibrl)}
Twilight = Rp ${toRupiah(46.86*tekunibrl)}
SL + 12💎 = Rp ${toRupiah(46.86*tekunibrl)}
Starlight Plus = Rp ${toRupiah(106.5*tekunibrl)}`
)
  }
  break; 
// ===============================================================================================
                
case 'soc': {
if (!isAdmins) return 
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
      
  	let teksoc = text.split(' ')[0]
  if (isNaN(teksoc)) return m.reply('Masukan hanya angka yah\nContoh : soc 2900')
  m.reply(`*MLA R${teksoc}*

86   💎 = Rp ${toRupiah(6.4*teksoc)}
172  💎 = Rp ${toRupiah(12.7*teksoc)}
257  💎 = Rp ${toRupiah(19.1*teksoc)}
344  💎 = Rp ${toRupiah(24.9*teksoc)}
429  💎 = Rp ${toRupiah(31.2*teksoc)}
514  💎 = Rp ${toRupiah(37*teksoc)}
600  💎 = Rp ${toRupiah(43.4*teksoc)}
706  💎 = Rp ${toRupiah(50*teksoc)}
878  💎 = Rp ${toRupiah(62.7*teksoc)}
963  💎 = Rp ${toRupiah(68.5*teksoc)}
1050 💎 = Rp ${toRupiah(75.4*teksoc)}
1135 💎 = Rp ${toRupiah(81.2*teksoc)}
1220 💎 = Rp ${toRupiah(87.6*teksoc)}
1412 💎 = Rp ${toRupiah(100*teksoc)}
1584 💎 = Rp ${toRupiah(112.7*teksoc)}
1669 💎 = Rp ${toRupiah(119.1*teksoc)}
1756 💎 = Rp ${toRupiah(125.4*teksoc)}
1841 💎 = Rp ${toRupiah(131.8*teksoc)}
2195 💎 = Rp ${toRupiah(151.3*teksoc)}
2539 💎 = Rp ${toRupiah(176.2*teksoc)}
2901 💎 = Rp ${toRupiah(201.3*teksoc)}
3073 💎 = Rp ${toRupiah(214*teksoc)}
3688 💎 = Rp ${toRupiah(252.4*teksoc)}
4394 💎 = Rp ${toRupiah(302.4*teksoc)}
5532 💎 = Rp ${toRupiah(381*teksoc)}
6238 💎 = Rp ${toRupiah(431*teksoc)}
7727 💎 = Rp ${toRupiah(532.3*teksoc)}
9288 💎 = Rp ${toRupiah(632.9*teksoc)}
Twilight = Rp ${toRupiah(41.9*teksoc)}
Weekly Pass 1 = Rp ${toRupiah(7.92*teksoc)}
Weekly Pass 2 = Rp ${toRupiah(15.84*teksoc)}
Weekly Pass 3 = Rp ${toRupiah(23.76*teksoc)}
Weekly Pass 4 = Rp ${toRupiah(31.68*teksoc)}
Weekly Pass 5 = Rp ${toRupiah(39.6*teksoc)}`
)
  }
  break; 
// ===============================================================================================
     case 'hsr': {
if (!isAdmins) return 
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekhsr = text.split(' ')[0]
  if (isNaN(tekhsr)) return m.reply('Masukan hanya angka yah\nContoh : hsr 2900')
  m.reply(`*Honkai Star Rail R${tekhsr}*
_Bonus hanya terhitung untuk Top Up pertama_

60 OS = Rp ${toRupiah(4.90*tekhsr)}
300 + Bonus 30 OS = Rp ${toRupiah(19.90*tekhsr)}
980 + Bonus 110 OS = Rp ${toRupiah(59.90*tekhsr)}
1980 + Bonus 260 OS = Rp ${toRupiah(129.90*tekhsr)}
3280 + Bonus 600 OS = Rp ${toRupiah(199.90*tekhsr)}
6480 + Bonus 1600 OS = Rp ${toRupiah(399.90*tekhsr)}

Express Supply Pass = Rp ${toRupiah(19.90*tekhsr)}`
)
  }
  break; 
// ===============================================================================================
    case 'kachi': { 
if (!isAdmins) return 
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekachi = text.split(' ')[0]
  if (isNaN(tekachi)) return m.reply('Masukan hanya angka yah\nContoh : kachi 2900')
  m.reply(`*RATE KACHI R${tekachi}*

140💎 = Rp ${toRupiah(9.19*tekachi)}
280💎 = Rp ${toRupiah(18.38*tekachi)}
355💎 = Rp ${toRupiah(22.99*tekachi)}
425💎 = Rp ${toRupiah(27.58*tekachi)}
565💎 = Rp ${toRupiah(36.77*tekachi)}
716💎 = Rp ${toRupiah(46.99*tekachi)}
1446💎 = Rp ${toRupiah(94.99*tekachi)}
2976💎 = Rp ${toRupiah(189.99*tekachi)}
7502💎 = Rp ${toRupiah(467*tekachi)}`
)
  }
  break; 
// ===============================================================================================
case 'socl': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
      
  	let teksoc = text.split(' ')[0]
  if (isNaN(teksoc)) return m.reply('Masukan hanya angka yah\nContoh : soc 2900')
  m.reply(`*MLA R${teksoc}*

86   💎 = Rp ${toRupiah(6.4*teksoc)}
172  💎 = Rp ${toRupiah(12.7*teksoc)}
257  💎 = Rp ${toRupiah(19.1*teksoc)}
344  💎 = Rp ${toRupiah(25.4*teksoc)}
429  💎 = Rp ${toRupiah(31.8*teksoc)}
514  💎 = Rp ${toRupiah(38.2*teksoc)}
600  💎 = Rp ${toRupiah(44.6*teksoc)}
706  💎 = Rp ${toRupiah(51*teksoc)}
878  💎 = Rp ${toRupiah(63.7*teksoc)}
963  💎 = Rp ${toRupiah(70.1*teksoc)}
1050 💎 = Rp ${toRupiah(76.4*teksoc)}
1135 💎 = Rp ${toRupiah(82.8*teksoc)}
1220 💎 = Rp ${toRupiah(89.2*teksoc)}
1412 💎 = Rp ${toRupiah(102*teksoc)}
1584 💎 = Rp ${toRupiah(114.7*teksoc)}
1669 💎 = Rp ${toRupiah(121.1*teksoc)}
1756 💎 = Rp ${toRupiah(127.4*teksoc)}
1841 💎 = Rp ${toRupiah(133.8*teksoc)}
2195 💎 = Rp ${toRupiah(153.2*teksoc)}
2539 💎 = Rp ${toRupiah(178.6*teksoc)}
2901 💎 = Rp ${toRupiah(204.2*teksoc)}
3073 💎 = Rp ${toRupiah(216.9*teksoc)}
3688 💎 = Rp ${toRupiah(255.6*teksoc)}
4394 💎 = Rp ${toRupiah(306.6*teksoc)}
5532 💎 = Rp ${toRupiah(383.6*teksoc)}
6238 💎 = Rp ${toRupiah(434.6*teksoc)}
7727 💎 = Rp ${toRupiah(536.8*teksoc)}
9288 💎 = Rp ${toRupiah(638*teksoc)}
Twilight = Rp ${toRupiah(41.9*teksoc)}
Weekly Pass 1 = Rp ${toRupiah(7.92*teksoc)}
Weekly Pass 2 = Rp ${toRupiah(15.84*teksoc)}
Weekly Pass 3 = Rp ${toRupiah(23.76*teksoc)}
Weekly Pass 4 = Rp ${toRupiah(31.68*teksoc)}
Weekly Pass 5 = Rp ${toRupiah(39.6*teksoc)}`
)
  }
  break; 
  
  
// ===============================================================================================
    case 'fifa': {
if (!isAdmins) return
if (!m.isGroup) return m.reply('Fitur Khusus Group!')
  	let tekachi = text.split(' ')[0]
  if (isNaN(tekachi)) return m.reply('Masukan hanya angka yah\nContoh : fifa 2900')
  m.reply(`*RATE FIFA R${tekachi}*

50 FIFA POINTS = Rp ${toRupiah(1.90*tekachi)}
100 FIFA POINTS= Rp ${toRupiah(3.40*tekachi)}
150 FIFA POINTS = Rp ${toRupiah(4.90*tekachi)}
500 FIFA POINTS = Rp ${toRupiah(13.90*tekachi)}
1050 FIFA POINTS = Rp ${toRupiah(23.90*tekachi)}
2200 FIFA POINTS = Rp ${toRupiah(44.90*tekachi)}
5750 FIFA POINTS = Rp ${toRupiah(119.90*tekachi)}
12000 FIFA POINTS = Rp ${toRupiah(239.90*tekachi)}
17500 FIFA POINTS = Rp ${toRupiah(329.90*tekachi)}
26000 FIFA POINTS = Rp ${toRupiah(479.90*tekachi)}`
)
  }
  break;
// ===============================================================================================
case 'cekwinrate': case 'cekwr': {
let simbol = `${pickRandom(["⭔","⌬","〆","»"])}`
if (!text) return m.reply('☘️ *Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')
var cwl = text.split(' ')
if (!cwl || cwl.length !== 3) return m.reply('☘️ *Format : Cwr [Total Match] [Winrate Saat Ini] [Target Winrate]*\n\n📑 *Contoh : Cwr 1200 67% 89%*')          
const tMatch = parseFloat(cwl[0])
const tWr = parseFloat(cwl[1])
const wrReq = parseFloat(cwl[2])          
if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
return m.reply('⚠️ *Pastikan Semuanya Berupa Angka*');
}          
const resultNum = cwr(tMatch, tWr, wrReq);
const tekl = `*WINRATE MOBILE LEGENDS*

📑 *Data Yang Diberikan*
 ${simbol} Total Petandingan : ${tMatch}
 ${simbol} Winrate Saat Ini : ${tWr}%
 ${simbol} Target Winrate : ${wrReq}%

🎁 *Hasil :*
Butuh ${resultNum} Pertandingan Tanpa Kalah Untuk Mencapai ${wrReq}% Winrate`;
m.reply(tekl);
}
break
// ===============================================================================================

// ===============================================================================================

case 'idmlbb': case 'mlreg': {
  if (!text) {
    return m.reply(`Example : ${prefix + command} 12345678 1234`);
  }

  const userId = args[0];
  const zoneId = args[1];

  if (!userId || !zoneId) {
    return m.reply(`Example : ${prefix + command} 12345678 1234`);
  }
m.reply('Please wait..!!')
  try {
    const data = await validateMobileLegendsMoogold(userId, zoneId);

    if (data.message) {
      const userData = data.message;
      const nicknameMatch = userData.match(/In-Game Nickname:\s*(\S+)/);
      const countryMatch = userData.match(/Country:\s*(\S+)/);
      const nicknameUser = nicknameMatch ? nicknameMatch[1] : 'ID Server salah atau apikey expired';
      const countryCode = countryMatch ? countryMatch[1] : 'ID Server salah atau apikey expired';
//m.reply('Please wait..!!')
      // Konversi country code menjadi region menggunakan fungsi mooCountry
      const regionUser = mooCountry(countryCode);

      const message = `🔎 ${xs}Mobile Legends${xs} 🔍

${simbolgame} *Nickname :* ${nicknameUser}
${simbolgame} *Negara:* ${regionUser}`;
      return reply(message);

    } else {
      return m.reply(`𝘔𝘢𝘢𝘧, 𝘵𝘪𝘥𝘢𝘬 𝘥𝘢𝘱𝘢𝘵 𝘮𝘦𝘯𝘦𝘮𝘶𝘬𝘢𝘯 𝘥𝘢𝘵𝘢. 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘤𝘦𝘬 𝘬𝘦𝘮𝘣𝘢𝘭𝘪 𝘐𝘋 / 𝘚𝘦𝘳𝘷𝘦𝘳 𝘺𝘢𝘯𝘨 𝘬𝘢𝘮𝘶 𝘪𝘯𝘱𝘶𝘵`);
    }
  } catch (error) {
    console.error('Error:', error);
    return m.reply('𝘔𝘢𝘢𝘧, 𝘵𝘦𝘳𝘫𝘢𝘥𝘪 𝘬𝘦𝘴𝘢𝘭𝘢𝘩𝘢𝘯. 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘤𝘦𝘬 𝘤𝘰𝘯𝘴𝘰𝘭𝘦 𝘶𝘯𝘵𝘶𝘬 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘴𝘪 𝘭𝘦𝘣𝘪𝘩 𝘭𝘢𝘯𝘫𝘶𝘵.');
  }

  break;
}
// ===============================================================================================
case "openai": {
if (!text) return m.reply("Masukan text!")
let prompt = "Nama kamu adalah XSTBot AI" // Isi prompt AI kamu disini
try {
  let { data } = await axios({
    "method": "GET",
    "url": "https://mannoffc-x.hf.space/ai/prompt",
    "params": {
      "prompt": prompt,
      "message": text
    }
  })
  m.reply(data.result);
} catch (e) {
  m.reply(e.message);
  console.log(e);
}
}
break;
// ===============================================================================================
/*case 'openai': case 'xstai': {
if (!text) return m.reply (`Example : ${prefix + command} Siapakah orang yang menemukan Komputer di jaman Majapahit`);
    try {
        // Fetch jawaban dari API OpenAI
        let gpt = await (await fetch(`https://widipe.com/openai?text=${text}`)).json();
        let message = `${gpt.result}`;
        let response = {
            text: message,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: "OPEN AI XSTBOT",
                    body: sticker2,
                    thumbnailUrl: 'https://files.catbox.moe/su7pm3.jpg',
               //     thumbnailUrl: 'https://h.top4top.io/p_3205tgxf50.jpg', // Ganti dengan URL gambar thumbnail Anda
                    sourceUrl: 'https://chat.whatsapp.com/ETd1zXj4fvmAtUc8veO4zY',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };
        // Mengirim pesan
        await xstbott.sendMessage(m.chat, response, { quoted: m });        
    } catch (e) {
        // Menangani error jika fetch gagal
       return m.reply("`Terjadi kesalahan saat memproses permintaan.`");
    }
}
break */
// ===============================================================================================

// ===============================================================================================
// ===============================================================================================
// ===============================================================================================
// ===============================================================================================

// ===============================================================================================
case 'ppay': case 'ppaym': {
    m.reply('Sabar...')
let lenwycap = `╾─────╼[ *PAYMENT* ]╾─────╼

${simbol} Seabank : 901364676849
${simbol} Bank Jago : 105017273426
${simbol} Line Bank : 19379313760
${simbol} ShopePay : 085380779466
${simbol} Gopay : 085380779466
${simbol} Dana : 085380779466

*A/N :* _Andrian OktaVianto_ 

*Tanya Admin*
> BCA - BNI - BRI - BSI - CIMB - Danamon - DigiBank - Permata - Mandiri - Jenius
- A/N : PT Fliptech Lentera IP
- + Kode Unik`
xstbott.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/dd3kj7.jpg' }, caption: lenwycap}, { quoted: m });
}

break; 
// ===============================================================================================

// ===============================================================================================

// ===============================================================================================
  case 'sewa': case 'sewabot': {
        let message = `       ‎ • ${xs}SEWA XSTBOT${xs} •

Berikut harga sewa bot grup store

 ${simbol} Sewa 30 hari Rp,8.000
 ${simbol} Sewa 90 hari Rp,20.000
 ${simbol} Sewa 180 hari Rp,35.000

Pembayaran silahkan ketik: ppay
`
;
        let response = {
            text: message,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: "SEWA BOT",
                    body: namabot,
                    thumbnailUrl: 'https://files.catbox.moe/5qbrbs.jpg', // Ganti dengan URL gambar thumbnail Anda
                  //  sourceUrl: 'https://whatsapp.com/channel/0029VaarWXN6RGJGIlAVmm0Q/115',
                    sourceUrl: 'https://wa.me/6285380779466',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        };
        await xstbott.sendMessage(m.chat, response, { quoted: m });        
    }
break
// ===============================================================================================

// ===============================================================================================
case 'spam': {
if (!isCreator) return //reply(mess.OnlyOwner)
if (!text) return reply(`*Example:* ${prefix + command} +628xxxxxx|150`)
let [peenis, pepekk = "200"] = text.split("|")

let target = peenis.replace(/[^0-9]/g, '').trim()
let { default: makeWaSocket, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys')
let { state } = await useMultiFileAuthState('pepek')
let { version } = await fetchLatestBaileysVersion()
let pino = require("pino")
let sucked = await makeWaSocket({ auth: state, version, logger: pino({ level: 'fatal' }) })

for (let i = 0; i < pepekk; i++) {
await sleep(1500)
let prc = await sucked.requestPairingCode(target)
await console.log(`_Succes Spam Pairing Code - Number : ${target} - Code : ${prc}_`)
}
await sleep(15000)
}
break
// ======================================================================
case 'ig': case 'instagram': case 'igvid': case 'igmp4': case 'igdl':{
    if (!text) return m.reply(`Anda perlu memberikan URL video/reel Instagram`);
   m.reply (`Pliase wait...!!`)
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try { 
    api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `Download selesai...!!`;

            await xstbott.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break
// ======================================================================
case 'tiktok': case 'tt': case 'tt2': {
  let input = `Anda perlu memberikan URL video tiktok`
    if (!text) return m.reply(input)
  m.reply('Please wait..!!')  
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			
			let domain = 'https://www.tikwm.com/api/';
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
let down = await tiktokDl(text)
let berak = `Download selesai...!!

Download tiktok via website tanpa iklan.
👉 https://ttdown-xst.vercel.app
`
await xstbott.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
//await xstbott.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'infogempa':{
m.reply(`_Waitt... sedang mencari Informasi gempa di Indonesia_`)
await sleep(4000)
	let data = await fetchJson(`https://api.maulanaa.xyz/lana/infogempa?apikey=${global.api_key}`)
	
	let jsn =`*INFORMASI GEMPA*\n\n
	- Waktu: ${data.result.Waktu}
	- Lintang: ${data.result.Lintang}
	- Bujur: ${data.result.Bujur}
	- Magnitudo: ${data.result.Magnitudo}
	- Kedalaman: ${data.result.Kedalaman}
	- Wilayah: ${data.result.Wilayah}`
	
	await xstbott.sendMessage(m.chat, {image: {url: data.result.Map}, caption: jsn})
	 }
	 break
 case 'ceknik':{
if (!q) return reply(`*Example:* ${prefix + command} Nik ktp`)
let ana = await fetchJson(`https://api.maulanaa.xyz/tools/ceknik?apikey=${global.api_key}&text=${q}`)
let caption = `Status: *${ana.status}*
Pesan : ${ana.pesan}

Nik : *${ana.data.nik}*
Kelamin : *${ana.data.kelamin}*
Lahir : *${ana.data.lahir}*
Provinsi : *${ana.data.provinsi}*
Kota/Kabupaten : *${ana.data.kotakab}*
Kecamatan : *${ana.data.kecamatan}*
Uniqcode : *${ana.data.uniqcode}*
Kodepos : *${ana.data.tambahan.kodepos}*
Pasaran : *${ana.data.tambahan.pasaran}*
Umur : *${ana.data.tambahan.usia}*
Ultah : *${ana.data.tambahan.ultah}*
Zodiak : *${ana.data.tambahan.zodiak}* `

xstbott.sendMessage(m.chat, { text: caption},{quoted:m})
}
break
case 'ffid': case 'freefirestalk': case 'ffstalk': {
            if (!text) return reply(`Contoh penggunaan:\n${prefix + command} user id\n\nEx.\n${prefix + command} 7424606065`)
async function ffstalk(userId) {
  let data = {
    "voucherPricePoint.id": 8050,
    "voucherPricePoint.price": "",
    "voucherPricePoint.variablePrice": "",
    "email": "",
    "n": "",
    "userVariablePrice": "",
    "order.data.profile": "",
    "user.userId": userId,
    "voucherTypeName": "FREEFIRE",
    "affiliateTrackingId": "",
    "impactClickId": "",
    "checkoutId": "",
    "tmwAccessToken": "",
    "shopLang": "in_ID",
  }
  let ff = await axios({
    "headers": {
    "Content-Type": "application/json; charset\u003dutf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": data
  })
  return {
    id: userId,
    nickname: ff.data["confirmationFields"]["roles"][0]["role"]
  }
}

var { id , nickname } = await ffstalk(args[0]).catch(async _ => await reply("User tidak di temukan"))
var xstff = `🔎 ${xs}Free Fire${xs} 🔍

${simbolgame} *ID Server :* ${args[0]}
${simbolgame} *Nickname:* ${nickname ? nickname : "Zeeoneofc"}`
reply(xstff)
         }
         break
         case 'mlid': case 'mobilelegendsstalk': case 'mlstalk': {
            if (!text) return reply(`Contoh penggunaan:\n${prefix + command} 12345678 1234`)
 async function mlstalk(id, zoneId) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
}

var { userName } = await mlstalk(text.split(' ')[0], text.split(' ')[1]).catch(async _ => await reply("User tidak di temukan"))
var xstml = `🔎 ${xs}Mobile Legends${xs} 🔍

${simbolgame} *ID Server :* ${text.split(' ')[0]} (${text.split(' ')[1]})
${simbolgame} *Nickname:* ${userName ? userName : "Zeeoneofc"}`
reply(xstml)
         }
         break
         
         
//------------------------------------------------------------------------------------------------------------------------------------------------------------
//          B A T A S   A K H I R
            default:
if (budy.startsWith('>')) {
                    if (!isCreator) return
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }
       }
        
    } catch (err) {
        m.reply(util.format(err))
    }
}
