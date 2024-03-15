#!/usr/bin/bash

CONFIG=objection.cfg.json
ARCH=arm64-v8a
# ARCH=armeabi-v7a
# ARCH=x86
# ARCH=x86_64
SCRIPT=dist/agent.js
APK_PATH=Zombeast_0.36.3_apkcombo.com.apk

objection patchapk\
    -c $CONFIG\
    -s $APK_PATH\
    -l $SCRIPT\
    -a $ARCH
