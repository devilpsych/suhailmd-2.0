const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_57_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA1LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDIxLFxuICAgICAgICA0NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDcwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIllWVkxPNjZNMWN3b29MMGh3MGdYNjZ3OTVqcmNEcEJNcmM3UlVhZG1UcFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNzTmJvcEJ3Um55TXZzalRPS3BUeEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzVjNDVmZjktODIyYi00OGRjLWEyZWQtZmIzYzAxMjI0NGY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MCxcbiAgICAgIDcxLFxuICAgICAgODYsXG4gICAgICAxNTQsXG4gICAgICAxOTAsXG4gICAgICAxNzMsXG4gICAgICAxMDgsXG4gICAgICAxMzIsXG4gICAgICA3OCxcbiAgICAgIDIyOSxcbiAgICAgIDE1NSxcbiAgICAgIDE5OCxcbiAgICAgIDgxLFxuICAgICAgMTgyLFxuICAgICAgMTE5LFxuICAgICAgODEsXG4gICAgICA4OSxcbiAgICAgIDE0MixcbiAgICAgIDk4LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NSxcbiAgICAgIDExNixcbiAgICAgIDE2NixcbiAgICAgIDI1MyxcbiAgICAgIDY3LFxuICAgICAgMTAwLFxuICAgICAgOTAsXG4gICAgICA3MixcbiAgICAgIDE2MyxcbiAgICAgIDExOSxcbiAgICAgIDU4LFxuICAgICAgMTkxLFxuICAgICAgMTMsXG4gICAgICAxMDcsXG4gICAgICAxMjcsXG4gICAgICAxMDEsXG4gICAgICA1OCxcbiAgICAgIDI0MyxcbiAgICAgIDE1OSxcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01DKzBrQVFqSzMxdWdZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVFVaHh1RDBLcjNxSTh6bXFaYmlBa2tlRnFFSndZQ3hJZEIxK2R3VnZBaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJhR3pVdzhsbk03QnhuSXMrUUI0NzRoWDd2alg2Nm5MeTRGQ0ErWHNUdDJMZkpPaG0yeW1lcGdpYzBab0ZZWG5nNDhoUXgvV0p1eDcvd1RVRDVqeW1Bdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCOThnSUZwZitseDlWeW9BbURMdnhFdzl3SHVSekZkTmt3ZEp4R0R2bGxmWGlTWFJsZXpxU29lU0hBd21OUXZnaldCR291QnVmOVNuT3B6bm9QZ0xnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzAyNTI1MzkzNzo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI2OTYyNzU2ODU1Mzg6NDdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTcwMjUyNTM5Mzc6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDE3MDI1NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhURVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFRELmpzb24iOiAie1wia2V5RGF0YVwiOlwiZlFub2RYWjhOR1MxN0gvanR3bExCTDJNUW5yejBkZ2FSZHpMNGdDamhvST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU1NjkyMTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjczOTgzMzUzOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhURS5qc29uIjogIntcImtleURhdGFcIjpcIkZjaTBja0Y4ejZEZHhjQjhodG9xL2Q0c0hSSjRQVy9UL2ZnZWlUL2duSFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1NTY5MjE1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTM1ODEyNDg2OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhURi5qc29uIjogIntcImtleURhdGFcIjpcIitHZDBXRnpNdHliei8vdzd5S3V0MzVWK3czVWFyN1ZNNUlldGR0K1VMZ1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1NTY5MjE1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzk1OTI1ODQ3M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhURy5qc29uIjogIntcImtleURhdGFcIjpcIkhTRlhIdWZKQlEvWk1xOURMZzBHN3hLamtTalRGd1BrZzZHNFZXNXU3bDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM1NTY5MjE1LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg0ODIxNjY2MTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIVEguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEdml1K2tYZm9MUXNreU1FMmcxczdKamZ6S0xMSUhFdE1RcGpSSW10ZXQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTU2OTIxNSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFRJLmpzb24iOiAie1wia2V5RGF0YVwiOlwib1pUVWtmRVNzb0MrOTNEd1JyWEFmaEpudEJRZU9EZ0RObmc2bWhmN2JIWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU1NjkyMTUsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAyODczMzUyNTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIVEouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrbGVWVSswSVdLT1VhUFp4SzlnWE12WDVaTDZDZzRFcmx6KzBSTnAzdjRVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTU2OTIxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwMjk0ODE1OTQ2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFRLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRG9aU3VCN2NKdlVnbTljL0wzSnNGRVZvTW1Yc0txOFB1bXdnQ0xWMnNpbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzU1NjkyMTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjg4OTQwMjA0NFwifSIKfQ=="  // PUT your SESSION_ID 


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
