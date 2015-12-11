#!/bin/sh

for file in slides/*
do
  python render.py "$file"
done