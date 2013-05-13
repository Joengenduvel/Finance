@echo off

REM Windows script for running unit tests
REM You have to run server and capture some browser first

set BASE_DIR=%~dp0
karma start "%BASE_DIR%\..\config\karma.conf.js" %*
