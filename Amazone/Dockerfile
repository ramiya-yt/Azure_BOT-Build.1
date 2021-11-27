FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ramiya-yt/Azure_BOT-Build.1 /root/ales
WORKDIR /root/ales/
RUN git clone https://github.com/mayadev20/files
RUN git clone https://github.com/jesonpro/Angela-x
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]


