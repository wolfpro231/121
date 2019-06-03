const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
var adminprefix = '-'


const developers = ["421272639198330900"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'bt2')) {
    client.user.setGame(argresult);
      message.channel.send(`**تـــ تغيير الحالة يا انجل ــم   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'bt3')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تـــ تغيير الحالة ــم   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'bt4')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تـــ تغيير الحالة ــم   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'bt')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**تـــ تغيير الحالة يا انجل ــم**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
