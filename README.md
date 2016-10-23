# Slack slash commands

A simple dummy-server for using Slack slash commands against

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Deploy
1. Deploy this app to heroku using the button above or host it online some other way. Note down its URL.
2. Ensure it works, by seeing that it responds at [https://my-heroku-app.herokuapp.com/weather](https://my-heroku-app.herokuapp.com/weather) (HTTPS required)
3. Go to [Slack apps](https://slack.com/apps) and find [Slash Commands](https://slack.com/apps/A0F82E8CA-slash-commands)
4. Add a command, with URL pointing at on of the endpoints in the server above (e.g. ```https://my-heroku-app.herokuapp.com/weather```)
5. Change ```icon```, ```name```, ```command```, ```autocomplete help text``` as you see fit
6. Note down the ```Token``` for the Slash command. Add it to the environment variable ```SLACK_API_KEY``` on the server. *On heroku, this can be done on [Heroku dashboard](https://dashboard.heroku.com/), under ```your app``` > ```Settings``` > ```Config Variables```*
7. Save your Slash command and test it in your slack channel by typing ```/your-command```