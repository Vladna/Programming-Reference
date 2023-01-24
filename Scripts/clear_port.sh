#!/usr/bin/env bash
# coding: UTF-8

usage="$ clear_port.sh port_number"

if [ "$#" -ne 1 ]; then
    echo "Please provide a port number!"
    echo "Usage:"
    echo $usage
    exit
fi

echo "Port to clear is: $1"

processes_holding_port=$(sudo lsof -t -i:$1)
echo $processes_holding_port

for i in $processes_holding_port; do
    echo $i
    sudo kill -9 $i
done
