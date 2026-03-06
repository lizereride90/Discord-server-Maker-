🛠️ Server Maker

Server Maker is a powerful Discord bot that allows you to create, export, and manage Discord server templates using JSON files.
It helps you quickly set up complete server structures including roles, categories, channels, and permissions.

---

✨ Features

- ⚙️ Create a server structure from a JSON template
- 📦 Export an existing server structure to JSON
- 💾 Save reusable server templates
- 🧹 Wipe server setups created by templates
- 🔐 Supports roles, categories, channels, and permissions
- 🚀 Built with modern slash commands

---

📋 Commands

"/setup"

Build a server from a JSON template.

Usage:
Upload a ".json" template file and the bot will create:

- Roles
- Categories
- Channels
- Permissions

---

"/export"

Export the current server structure to a JSON file.

The bot will generate:

- Roles
- Categories
- Channels
- Permission overwrites

You will receive a downloadable "server-template.json".

---

"/template"

Save a JSON template for later usage.

Usage:
Upload a ".json" file and give it a template name.

The bot stores it inside the "/templates" folder.

---

"/delete-setup"

Remove server structures created by templates.

Behavior:

- Deletes all channels except the current one
- Deletes all roles except "@everyone"
- Requires Administrator permission
- Asks for confirmation before executing

---

📁 Project Structure

server-maker-bot
│
├── commands
│   ├── setup.js
│   ├── export.js
│   ├── template.js
│   └── delete-setup.js
│
├── templates
│
├── utils
│   └── jsonParser.js
│
├── index.js
├── deploy-commands.js
├── package.json
└── .env

---

⚙️ Installation

1️⃣ Clone the repository

git clone https://github.com/YOUR_USERNAME/server-maker-bot.git
cd server-maker-bot

2️⃣ Install dependencies

npm install

3️⃣ Create ".env"

TOKEN=your_bot_token
CLIENT_ID=your_client_id

4️⃣ Deploy commands

node deploy-commands.js

5️⃣ Start the bot

node index.js

---

📄 JSON Template Example

{
  "roles": [
    { "name": "Admin", "permissions": ["Administrator"] },
    { "name": "Member", "permissions": ["SendMessages"] }
  ],
  "categories": [
    {
      "name": "General",
      "channels": [
        { "name": "chat", "type": "text" },
        { "name": "voice", "type": "voice" }
      ]
    }
  ]
}

---

🔒 Permissions

The bot requires the following permissions:

- Manage Roles
- Manage Channels
- Manage Guild
- Send Messages
- Attach Files

---

🚀 Future Features

- Server template marketplace
- Template preview system
- Server cloning
- Backup & restore
- Web dashboard

---

📜 License

MIT License
