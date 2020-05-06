FROM tomcat
MAINTAINER Madhumanti

RUN rm -rf $CATALINA_HOME/webapps/ROOT
COPY target/calculator.war $CATALINA_HOME/webapps/ROOT.war
