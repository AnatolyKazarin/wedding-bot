const config = require('dotenv').config()

const TelegramApi = require('node-telegram-bot-api')

const API_TOKEN = process.env.TELEGRAM_TOKEN
const TELEGRAM_API_URL = `https://api.telegram.org/bot${API_TOKEN}`

const bot = new TelegramApi(API_TOKEN, {polling: true})

bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    await bot.sendMessage(chatId, chatId)
})
