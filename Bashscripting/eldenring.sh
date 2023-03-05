#!/bin/bash


read -p "Do you drink coffee? (y/n)" USER_INPUT

if [[ $USER_INPUT == "y" ]]; then 
    echo "I love you!"
else
    echo "Go die!"
fi
