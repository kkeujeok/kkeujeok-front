#!/bin/sh
cd ..
output_directory="output"
destination_directory="[kkeujeok-front]"

mkdir $output_directory
cp -R ./$destination_directory/* ./$output_directory
cp -R ./$output_directory ./$destination_directory