/*Nous voici dans le fichier principale du bot !
C'est ici que nous allons travailler mais avant, nous allons créer un dossier "json" qu'on y placera un fichier "config.json"*/
//Une fois le dossier créer comme ceic, nous allons nou rendre sur: "discord developpers"
//comme vous pouvez le voir, on viens de créer une nouvelle aplication et on a ajouté une nouveau bot
//maintenant dans le fichier json, vous devez mettre votre token ici:
//que vous retrouverez dans la section "bot" du site
//maintenant que cela est fait, on va initialiser notre bot avec ses constantes

const Discord = require('discord.js') //On fait appelle a la librairie "discord.js"
const bot = new Discord.Client() //on appelle un nouveau client qu'on nomme "bot"
const config = require('./json/config.json') //on appelle notre fichier json, le "./" signifiant le meme dossier et "json/config.json" le répertoire du fichier

//Maintenant on va initialiser notre bot
bot.on('ready', function()
{
    //on va ensuite définir le jeu du bot et sa précense:
    bot.user.setPresence({ game: { name: "help"}, status: "online"}); //ici nous faison appel au nom du bot: "game: { name: "help"} et a son status: "status: "online"
    console.log('Bot prêt !') //ici nous enverons au terminal que votre bot est prêt
})
//nous allons ensuite rajouté une ligne permettant a votre bot d'informer un nouveau membre dans le serveur
bot.on('guildMemberAdd', member =>
{
    //le bot prend en compte quand un membre rejoint le serveur et la stock dans la fonction "member"
    //Nous allons maintenant lui envoyé un message dans le tchat normal pui en DM par la suite
    message.channel.send('Bienvenue !') //ici il nous envoie un message de bienvenue sans mentionné le nouveau membres
    message.reply('Bienvenue !') //ici il nous enverrai un message avec la mention du nouveau membres
    member.createDM().then(channel =>
        {
            //on vient de creer un nouveau DM aussi appelé 'MP'
            //on va maintenant lui envoyé un message
            return channel.send('Bienvenue !') //on vient de lui envoyé un message privé
        })
})
//Nous allons faire la même chose quand un membre quitte le serveur
bot.on('guildMemberRemove', member =>
{
    //le bot prend en compte quand un membre quitte le serveur et le stocke dansq la fonction "member"
    //Nous allons faire le même principe qu'au dessus 
    message.channel.send('Aurevoir !') //envoie un message sans mention
    message.reply('Aurevoir') //envoie un message avec la mention
    member.createDM().then(channel =>
        {
            //création du DM
            return channel.send('Aurevoir') //envoie un message en DM
        })
})
//Nous allons nous attaquer maintenant au réponse des message via une commande ou une détection de mot
//Mais avant cela, nous devons configurer le prefix dans le dossier "config.json"
//Pour ma part, je metterai "!"
//on va initialiser le bot au message
bot.on('message', message =>
{
    //on vient de l'initialisé aux message et maintenant on va créer une commande répondant un simple message du style: "Bonjour" et le bot répond "Bonjour"
    if (message.content === `${config.prefix}bonjour`)
    {
        message.reply('Bonjour !') //réponse du bot
    }
    //maintenant on va faire en sorte qui détecte le premier mot qui sera bonjour
    if (message.content.startsWith('bonjour'))
    {
        //il cherche si le premier mot de la phrase est "bonjour"
        message.reply('Bonjour !') //il renvoie une réponse
    }
})

//Maintenant on va demander a notre code de se connecter au bot
bot.login(config.token) //"config.token" fais appel a la ligne "token" dans le fichier "config"
//ici on a configuré notre token mais notre bot n'est pas sur notre serveur !
//Maintenant on va pouvoir verifier si la commande marche !
//Je viens d'arréter le bot evec "CTRL + C"
//La commande n'a pas marché, laissez moi verifier
//je ne comprend pas pourquoi elle ne marche pas, il devrait fonctionner normalement, je chercherai et je réponderai en commentaire pour quoi sa n'as pas marché
//Comme vous pouvvez le voir, on vient de créer une commande et le bot y répond, de plus, nous lui avons attribuer un jeux "help" et son status "online"
//c'est ici que s'achéve ce premier tuto pour discord, je prendrai part de vos commentaire pour corriger les éventuels bug ou faire un sujet qui vous attire le plus
//Sur ce, Aurevoir !