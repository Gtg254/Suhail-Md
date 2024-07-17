const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="toshg30@gmail.com "
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "East Africa";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254112851562" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254112851562";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254112851562";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254112851562,254112851562";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_05_31_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA4MSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMjQyLFxuICAgICAgICA3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDMzLFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDk5LFxuICAgICAgICA0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLQmg0azlsbGY4aEFxK3FqNkxLUkMwMXdGYko0Q3Rkc0lNcy9Xa0ExTEpNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJNeGxKQjFsZlNPYV94SXNNMkpldnZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQyNGQzMzdhLTJjMGYtNDIxNS1iMjEwLTYyY2ZjNjZiODBiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE3NSxcbiAgICAgIDIzMSxcbiAgICAgIDkwLFxuICAgICAgMjQsXG4gICAgICAxNjIsXG4gICAgICA3MyxcbiAgICAgIDE0MyxcbiAgICAgIDExNSxcbiAgICAgIDE0MixcbiAgICAgIDY1LFxuICAgICAgMTY5LFxuICAgICAgMTk1LFxuICAgICAgMTE3LFxuICAgICAgNDQsXG4gICAgICA1OCxcbiAgICAgIDEyMyxcbiAgICAgIDYsXG4gICAgICAxNTQsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICAxMDIsXG4gICAgICA1MixcbiAgICAgIDE5NyxcbiAgICAgIDExNyxcbiAgICAgIDEzOCxcbiAgICAgIDExOCxcbiAgICAgIDIxNixcbiAgICAgIDEyNixcbiAgICAgIDE0OCxcbiAgICAgIDIyLFxuICAgICAgMTMsXG4gICAgICAyMjEsXG4gICAgICAyMixcbiAgICAgIDEwNyxcbiAgICAgIDI0MyxcbiAgICAgIDc0LFxuICAgICAgMTQxLFxuICAgICAgMjQsXG4gICAgICAxNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0MxV0FCRExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMjg1MTU2MjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYxNTg1Njc5MDkzOTU0OjE4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092bytMd0RFTUt1M2JRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic3hDL3RKT2ZyMklpSG0xa001SW1UVHl1Z2c3bHU5dXRnT2dxNzkzeVV6az1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQb0FQVDZYWjgxVjd1ZzVJM3FOdjc0TnZQU1M2bFVxd1FkTnRRSVZXam9JM2R3UHlQS1d3bXNEQVdJU1I2VkdpRVhRYUlVOG9ZWitWNzE4RjFZV29EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ0TXh4T2xOckptRWsxRHZwWllvdDlNa1MwWGR1SWpSUGJKNlFSTjlaR1BrWGp1Z015c2wwVUtjZEV1NnRsV3F0T2dDUWZmeVgyNHlqelg3TXltLzVEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTI4NTE1NjI6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExOTQzMTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBdHpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF0ei5qc29uIjogIntcImtleURhdGFcIjpcIkQrV0JqS3dPQnB3N1VwMnVpcWQ5RG1xSVMrNmJoUmlJU1lRM0FjVmdVeVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMzMTE0OTg2LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ== "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Tosh",
  packname: process.env.PACK_NAME || "Greg",
  botname : process.env.BOT_NAME  || "Doreen bot",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
