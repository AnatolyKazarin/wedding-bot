const TelegramApi = require('node-telegram-bot-api')

// Replace 'YOUR_API_TOKEN' with your bot's API token
const API_TOKEN = '7437370733:AAGY2Bmfyvpch7btEsWURgri3H1GwIxMG2I'
const TELEGRAM_API_URL = `https://api.telegram.org/bot${API_TOKEN}`

const bot = new TelegramApi(API_TOKEN, {polling: true})

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, chatId)
})
