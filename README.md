# DAO TWITTER GOVERNANCE BOT USING BOARDROOM API

This twitter bot makes use of the Boardroom API to display information relating to Decentralized Organization (DAO) Governance.

This bot will tweet via [@dao_govbot](https://twitter.com/dao_govbot) on Twitter. 
The bot covers general general governance cases of Protocols, Proposals, Vote Alerts and Vote Results.

# Setup and Installation Requirements
- Login to Twitter, create developer account if you don't have, then create an app and a twitter account for the bot
- Obtain your consumer API, consumer Secret, Access token and Access Secret from Twitter
- Authorize the Twitter bot account from your developer account to be able to tweet from the bot
- Config your `.env` environment using the APIs and Token you have been given
- Run npm install 
- node app

# What is currently working
- The bot can make post using the Boardroom API to get all protocols and proposals of a particular protocol.
- It can get the protocol name, proposal details like startTime and endTime, totalVoteCount etc.

# Features to consider
- Daily / weekly Alert on onging / new proposals and their endTime
- Enable reply when user mention the bot handle
- Handle user search cases i.e when a user tweet @dao_govbot aave voters. It should reply with the result gotten from the API
- Add more search specific features as might be required by the user and as can be handled by the API



