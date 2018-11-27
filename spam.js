const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const jackeo = ['' , '434327219310034954' , '432619208363474945' , ''];

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!jackeo.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "1say")  {
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});




client2.on('message', message => {
var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!jackeo.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "3say")  {
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => {
    if(message.content === '—Ì»'){
        message.channel.send('#rep <@!434327219310034954>')
    }
});

client2.on('message', message => {
    if(message.content === '—Ì»'){
        message.channel.send('#rep <@!434327219310034954>')
    }
});

client.on('message', message => {
    if(message.content === '-—« »'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-„»·€'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-—Ì»'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-—« »'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-„»·€'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-—Ì»'){
        message.channel.send('#credits')
    }
});



client.on('message', message => { 
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**boom boom lol lol lol lol lol lol | Ì« ⁄„Ì ”»««««««««««««««««««„ = ﬂ—ÌœÌÌÌÌÌÌÌÌÌÌÌ            ·Ê· ·Ê· ·Ê· «‰« »Ê  „Õ‘‘ ’Õ **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { 
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**boom boom lol lol lol lol lol lol | Ì« ⁄„Ì ”»««««««««««««««««««„ = ﬂ—ÌœÌÌÌÌÌÌÌÌÌÌÌ            ·Ê· ·Ê· ·Ê· «‰« »Ê  „Õ‘‘ ’Õ **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);