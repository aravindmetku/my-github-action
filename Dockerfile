FROM node:12
RUN apt-get update && apt-get install -y openjdk-8-jdk && apt-get install maven -y

RUN export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

RUN cd /usr/lib \
&& wget https://downloads.gradle.org/distributions/gradle-3.4.1-bin.zip -o   gradle-bin.zip \
&& unzip "gradle-3.4.1-bin.zip" \
&& ln -s "/usr/gradle-3.4.1/bin/gradle" /usr/bin/gradle \
&& rm "gradle-bin.zip"

# Set Gradle in the environment variables
ENV GRADLE_HOME=usr/lib/gradle-3.4.1
ENV PATH=$PATH:$GRADLE_HOME/bin

COPY entrypoint.sh /entrypoint.sh
COPY . .

ENTRYPOINT ["/entrypoint.sh"]
