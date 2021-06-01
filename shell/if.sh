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
a=1 
b=2
# (())可以运算
if (($a+$b==3))
then 
echo '你算对了'
else
echo '错了哦'
fi

#else, 和缩进无关，只要确保if,fi对应
if [ $a -eq $b ]
then 
  echo "2个参数相等"
else 

if [ $a -lt $b ]
then 
  echo "a<b"
else
  echo "test 2个参数不相等"
fi

fi