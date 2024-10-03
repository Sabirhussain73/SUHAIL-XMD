const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923166187002";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_37_10_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTksXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAzOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDc4LFxuICAgICAgICA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgODYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZkdhSTNBTzNJOHRxM0psUWM5a1dpME8rOUdFTisyWFlVd1hmUVZFR3ZGVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNjYxODcwMDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA3QzZEODU1NTdEODJCQzYyRTNGMzFEN0FBMTFFRDdCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNzk1MTgyMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE2NjE4NzAwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTVDRUU2QjQ5NDdBQjM1MkJCQTVDMUQ2MjFFM0RDMTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3OTUxODIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRDM25ma25YVHhTblVkN0NocW84b2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDEyYmZiODQtODdhMC00NGE3LTg0NGUtNjkwMWM1NjU1MjQ0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDIzMSxcbiAgICAgIDg2LFxuICAgICAgMTUyLFxuICAgICAgNCxcbiAgICAgIDksXG4gICAgICAxNDQsXG4gICAgICAxMzYsXG4gICAgICA0MixcbiAgICAgIDgsXG4gICAgICAyMjYsXG4gICAgICA1NyxcbiAgICAgIDU0LFxuICAgICAgMTg1LFxuICAgICAgNDksXG4gICAgICAzOSxcbiAgICAgIDcwLFxuICAgICAgMjE2LFxuICAgICAgMjUzLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjI3LFxuICAgICAgMjEzLFxuICAgICAgMixcbiAgICAgIDE4NCxcbiAgICAgIDEzOCxcbiAgICAgIDE1MCxcbiAgICAgIDM5LFxuICAgICAgMzIsXG4gICAgICAxODUsXG4gICAgICAxNDMsXG4gICAgICAyNTQsXG4gICAgICA5LFxuICAgICAgMTMyLFxuICAgICAgMTAsXG4gICAgICAxNTAsXG4gICAgICAyNTAsXG4gICAgICAxODMsXG4gICAgICA0NSxcbiAgICAgIDg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFUTlM4QzlOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNjYxODcwMDI6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwMTUzMjk2ODU5MTU3OToyOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBYXNoaXIgSGVyZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXZm1kd0JFTVRuK2JjR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicElIRWRVUVBkaVFJdHZ5ZmluQTBiU0NEZm55M2xiVDlkUEhBQ0wvd3RsMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0TnFhYWZ6eDVDaDhYNDFnWEg5L3Q3QlJUUW1HaTVoWlc5TC9uYUM1L1NCWGRLMG5wc3dzOHpyblYxQWJTNHJZd3c4TVlNVzM5TmZLNjlmSnFmdkpCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2Y0M4b2FMQnJIKzIyc1JxWlRDT3BEdkZCdVduWjgvb2hSaC8zQk1MNkp2V0VSYmtXY2cweHRjS0hEVWZMRjV5MFJVTWU4RnJWc1VRN0FjMmZTNG9Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNjYxODcwMDI6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzk1MTgxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUp0RFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSnRELmpzb24iOiAie1wia2V5RGF0YVwiOlwieFpXa2FEdlM4UGNobVNHVEI3L1EzVlQyaEtRblpzU1VaZkV1eTRpamRpZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NjE3ODcwMTMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIxNzI3OTAxODkwNDE0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
