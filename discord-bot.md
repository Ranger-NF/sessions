---
title: Build a Basic Discord Bot
description: A beginner-friendly guide to building your first Discord bot using Python and Replit.
layout: libdoc_page.liquid
permalink: sessions/discord-bot/index.html
eleventyNavigation:
  key: Build a Discord Bot
date: git Last Modified
tags:
  - session
  - discord
  - bot
---

{% alert 'Let’s build your first bot!', 'success', 'Welcome to the Discord Bot Guide' %}

> In this guide, you'll learn how to build a simple bot using **Python**, **Replit**, and **Discord Developer Portal**.

---

## 🧰 Requirements

- A [Replit](https://replit.com/~) account
- A [Discord account](https://discord.com)
- Basic knowledge of Python syntax

---

## 🛠️ Setup Instructions

### 1. Create the Python environment
- Go to [Replit](https://replit.com)
- Click **Create Repl**
- Choose **Python** template

### 2. Enable Developer Mode in Discord
- Open Discord → **User Settings** → **Advanced**
- Enable **Developer Mode**

### 3. Create a Discord Bot Application
- Go to [Discord Developer Portal](https://discord.com/developers/applications)
- Click **"New Application"**
- Name your bot (e.g., `HelloBot`)
- Go to **Bot** tab → Click **Add Bot**
- Click **Reset Token** → Copy the token (You’ll paste this into code)

### 4. Invite Your Bot to a Server
- Go to **OAuth2 → URL Generator**
- Check `bot` and `applications.commands`
- Under **Bot Permissions**, check `Administrator`
- Copy the generated URL and open it in a browser to invite your bot

### 5. Enable Message Intent
- In the Bot tab, scroll to **Privileged Gateway Intents**
- Enable **Message Content Intent**

---

## 🤖 Code Walkthrough

Here’s the full code, explained step by step:

### 1. Import modules

```python
import discord
import random
```

### 2. Add your token

```python
TOKEN = "PASTE_YOUR_TOKEN_HERE"
```

### 3. Set up intents and client

```python
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)
```

### 4. Event: Bot is ready

```python
@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')
```

### 5. Event: Bot responds to messages

```python
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    content = message.content.lower()
    print(f"{message.author.name} said: '{message.content}'")

    if content.startswith("!hello"):
        await message.channel.send("Hello!")
    elif content.startswith("!roll"):
        number = random.randint(1, 6)
        await message.channel.send(f"🎲 You rolled a {number}!")
    elif content.startswith("bye"):
        await message.channel.send(f"👋 Goodbye {message.author.name}!")
```

### 6. Start the bot

```python
client.run(TOKEN)
```

---

## 📦 Full Code

```python
import discord
import random

TOKEN = "PASTE_YOUR_TOKEN_HERE"

intents = discord.Intents.default()
intents.message_content = True

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'We have logged in as {client.user}')

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    content = message.content.lower()
    print(f"{message.author.name} said: '{message.content}'")

    if content.startswith("!hello"):
        await message.channel.send("Hello!")
    elif content.startswith("!roll"):
        number = random.randint(1, 6)
        await message.channel.send(f"🎲 You rolled a {number}!")
    elif content.startswith("bye"):
        await message.channel.send(f"👋 Goodbye {message.author.name}!")

client.run(TOKEN)
```

---

## 🧪 Try it Out

> Type `!hello`, `!roll`, or `bye` in any server your bot is part of and see it reply!

---
