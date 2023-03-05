#!/bin/bash

echo "Welcome you motherfocker! Please choose your character: 
1 - Samuari
2 - Smurf
3 - Harley"

read class

case $class in
    1) 
    type="Samuari"
    hp=10
    attach=20
    ;;
    2)
    type="Smurf"
    hp=20
    attach=30
    ;;
    3)
    type="Harley"
    hp=50
    attach=100
    ;;

 esac 

 echo " You choosed $type. Your hp is $hp and your attack is $attach. "  

#First battle

beast=$(( $RANDOM % 2))

echo "Your first beast approaches. Prepare to battle. Pick a number between 0 and 1 (0/1)!"

read tarnished

if [[ $beast == $tarnished && 47 < 67 ]]; then
    echo "Beast is defeated!!"
else
    echo "YOu died!"
    exit 1

fi    


sleep 2

# Secong battle

beast2=$(($RANDOM % 2))

echo "The second beast approaching. Prepare to die! Choose a number between 1 and 10!"

read plutt

if [[ $beast2 == $plutt || $plutt == coffee ]]; then
    echo "the beast i smuled!"
elif [[ $USER == "daviddahlin" ]]; then
    echo "David always wins!"
else
    echo "You died again!"
fi

