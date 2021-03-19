FROM node:12
RUN apt-get update && apt-get install -y openjdk-8-jdk && apt-get install maven -y

RUN export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

COPY entrypoint.sh /entrypoint.sh
COPY . .

ENTRYPOINT ["/entrypoint.sh"]
