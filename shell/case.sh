#!/bin/bash
echo "输入1-3之间的数"
read num
case $num in
1) 
  echo "你输入的是1"
  ;;
2) 
  echo "你输入的是2"
  ;;
3) 
  echo "你输入的是3"
  ;;
*)
  echo "不听话"
;;   
esac