#!/bin/bash

BASE_DIRECTORY='frontend/src/initialState/'
USER_INTRODUCTION='user.introduction_initial.js'
USER_ABOUT_ME='user.about_me_initial.js'

FILE_CONTENT="""const state = {};
export default state;"""

CURRENT_DIR="${PWD##*/}"

if [ $CURRENT_DIR = "scripts" ]; then
    cd ..
fi

declare -a USER_FILES=("$USER_INTRODUCTION" "$USER_ABOUT_ME")

for filename in "${USER_FILES[@]}"; do
    FILE_PATH=$BASE_DIRECTORY$filename
    if [ ! -f $FILE_PATH ]; then
        echo "File $filename does not exist"
        echo "$FILE_CONTENT" >>$FILE_PATH
    else
        echo "File $filename exists"
    fi
done
