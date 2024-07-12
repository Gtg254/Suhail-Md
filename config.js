const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_37_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMjM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgODMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYyLFxuICAgICAgICAyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDgyLFxuICAgICAgICA0NixcbiAgICAgICAgMjAzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUxLFxuICAgICAgICA4MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaTVxdHdEZGIvdjRadVZET1hqa1c3SVJYMWpDMnBvREIrMzZ1VTR6enN5MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY1B6OUFQSHJTZFd1bXVOYVZtMlptQVwiLFxuICBcInBob25lSWRcIjogXCJjZDgyZjYwMS01OWM0LTQxYTItYWQxMC0yZDAwYjJlMWFlYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgNjEsXG4gICAgICAyMjgsXG4gICAgICAzMCxcbiAgICAgIDIwMCxcbiAgICAgIDI1NSxcbiAgICAgIDEzOCxcbiAgICAgIDExMyxcbiAgICAgIDIyMSxcbiAgICAgIDE3NCxcbiAgICAgIDI4LFxuICAgICAgMTMyLFxuICAgICAgMTQ0LFxuICAgICAgODUsXG4gICAgICA0MixcbiAgICAgIDE2OCxcbiAgICAgIDEyNSxcbiAgICAgIDMwLFxuICAgICAgMTUyLFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MSxcbiAgICAgIDcwLFxuICAgICAgNCxcbiAgICAgIDIyNyxcbiAgICAgIDE0NSxcbiAgICAgIDEzNCxcbiAgICAgIDkyLFxuICAgICAgMjE4LFxuICAgICAgMTQsXG4gICAgICAxMzQsXG4gICAgICA3MSxcbiAgICAgIDcwLFxuICAgICAgNzEsXG4gICAgICAzNixcbiAgICAgIDIzLFxuICAgICAgMjAzLFxuICAgICAgODcsXG4gICAgICAxNzcsXG4gICAgICA0NCxcbiAgICAgIDIzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRTFNQRTIzMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk5ODk3NDY2OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4NzI3NDU3NDY0NDkzOjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xYeXIrY0dFUHlueHJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGQ0NjhST2I5QXF5MFRyekJ4cHcxZS8yYzRlN3VQaUt6MEhuOTJZSWJpbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzMDBBdGtybHdRQ1NHTk9raVlZcHNYVTlSNVU1bFFaSUhMTFdXSTMzbDlrRXJjTnlockpwemJSandHL05OMFd5OWd5VCtZTnlaVnIxcmZxYkZja1JEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJzUnZyU2orUGlNTzBvTlFHcFh4clBUVitoVmtDbWVLbWZFbnVZMXBGVFhNVzBUUVhVNWdycElPVlJxOVJsdkFhM1Z1cDNicHo4cDgxRXZvdkhGcjJqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTk4OTc0NjY6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA4MTY2NDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFb0VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVvRS5qc29uIjogIntcImtleURhdGFcIjpcIjlrR3djUldlVXprbnFzNTFQSlgzNmRMWkQvaC9EZElCWXhRamU4eEd4dmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgyNzQwNDA2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Kamaster",


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
