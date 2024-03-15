# this is for windows users

CONFIG=objection.cfg.json
ARCH=arm64-v8a
# ARCH=armeabi-v7a
SCRIPT=dist/agent.js
APK_PATH=Zombeast_0.36.3_apkcombo.com.apk

objection.exe patchapk`
    -s $APK_PATH`
    -c $CONFIG`
    -a $ARCH`
    -l $SCRIPT

