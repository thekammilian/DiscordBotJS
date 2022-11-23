
const Discord = require('discord.js');
bot = new Discord.Client();
abhinavBot = new Discord.GuildMember();
let list = [];
const memePrefix = '-addmeme'
bot.on("ready", () =>{
    //bot.guilds.fetch("775511457277411328").channels.fetch("775511457277411332").send("I'm ready");
    /*bot.guilds.fetch("775511457277411328").then(guild => {
        guild.channels.resolve("775511457277411332").send("I love Vibhav")
    })*/
    console.log('bot is on');
    bot.guilds.fetch("767945503627018250").then (guild => {
       // guild.channels.resolve("767945503627018253").send("Hi, I'm Pranav Jr.")
    })
});

bot.on("message", message => {
    if(message.content === 'hi son' && message.author.id === '248903433032171521'){ //abhinav
       // console.log(message.author.id);
        message.channel.send('https://cdn.discordapp.com/attachments/684656832517636126/777075015841087498/unknown.png');
        message.channel.send('https://cdn.discordapp.com/attachments/684656832517636126/777077599804325888/unknown.png');
    }  /*else if (message.author.id === '386294869758574592'){ //nilay
        message.delete();
        message.channel.send('https://s3-us-west-1.amazonaws.com/co-directory-images/bhootvikas.jpg');
        message.channel.send('https://twitter.com/bhootvikas');
    }*/  else if(message.author.id === '382052844314034176' && message.guild.id === '775511457277411328' && message.content == 'me'){ //vibhav in the spartabot playground server
        message.channel.send('https://cdn.discordapp.com/attachments/684656832517636126/777303989083439124/yO_gQ24F_5rvZ9TVm3-axKDz3ot4b2DMH7j3N8evECe21yNNbOoKJOgjyVtBnzHz4Tf7C83qnOWNkyprDaJt8kW3d1u_zk-GvAdr.png');
        message.channel.send('https://cdn.discordapp.com/attachments/587346151859159053/648060994232516609/Screenshot_20191026-150512_Instagram.jpg');
        console.log('Vibhav sent a message')
    } else if ((message.guild.id == '767945503627018250' && message.content.toLowerCase().includes('pk')) && message.author.id != '383344074482253826'){ // if someone sends a message with pk 
        message.delete(); // should delete message that was just sent if it is 'pk'
    } else if (message.content == 'chair spin'){
        message.channel.send('https://media.discordapp.net/attachments/715231743048679436/743523140067655791/spen.gif');
    } else if (message.content.includes(memePrefix)){
        let meme = message.content.slice(memePrefix.length).split(" ");
        meme = meme.shift();
        list.push(meme);
        console.log('List length: ' + list.length )
    }/* else if (message.content == '-meme'){
        let rando = Math.random() * list.length;
        rando = Math.round(rando);
        message.channel.send(list[Math.round(rando)]);
    } /*else if (message.author.id == '778411421397417985'){ //abhinav bot
        message.delete();
    }*/ else if (message.content == 'nilay bro'){
        message.channel.send('https://cdn.discordapp.com/attachments/766113043569704980/779590113729970197/facebook_1605939042878_6735796551300310323.jpg');
    } else if (message.content.includes('tenor') || message.content.includes('giphy') || message.content.includes('.gif')){
        message.delete();
    }
});
bot.on('messageUpdate', (oldMessage,newMessage) => {
    if(newMessage.content.toLowerCase().includes('pk')){ //hehe nice try nav
        newMessage.delete();
    }
});
console.log("I love Vibhav");
console.log(list.toString());
bot.login("Nzc1NTEyNjYxNTUwNjk0NDEx.X6nacg.uCnuWD2cKXcm4p9KilY5lBpQC4M");