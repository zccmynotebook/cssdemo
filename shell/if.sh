#!/bin/bash
if [ $1 -eq $2 ]
then 
  echo "== 2个参数相等"
else 
  echo "== 2个参数不相等"
fi

if test $1 == $2
then 
  echo "test 2个参数相等"
else 
  echo "test 2个参数不相等"
fi