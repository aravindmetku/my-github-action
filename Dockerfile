FROM ubuntu:18.04

RUN apt-get update
RUN apt-get install -y \
  openjdk-11-jdk \
RUN apt-get install -y nodejs

RUN export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

COPY entrypoint.sh /entrypoint.sh
COPY . .

ENTRYPOINT ["/entrypoint.sh"]
