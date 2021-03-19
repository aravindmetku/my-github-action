FROM ubuntu:18.04

RUN set -x \
    \
    echo "===> Get latest system updates..."                                                            && \
    apt-get update -yq                                                                                  && \
    apt-get upgrade -yq                                                                                 && \
    \
    \
    apt-get clean                                                                                       && \
    rm -rf /var/lib/apt/lists/*

RUN apt-get install -y \
  openjdk-11-jdk \
RUN apt-get install -y nodejs

RUN export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

COPY entrypoint.sh /entrypoint.sh
COPY . .

ENTRYPOINT ["/entrypoint.sh"]
