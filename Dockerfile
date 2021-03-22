FROM node:12
RUN apt-get update && apt-get install -y openjdk-8-jdk && apt-get install maven -y && apt-get install gradle -y

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
