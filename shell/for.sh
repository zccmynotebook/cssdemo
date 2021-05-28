if [ $# == 0 ] 
then 
 echo '请输入参数'
 exit 1
fi
n=0
for v in $@
 do
  let n=$v+$n
  echo "你输入了$v"
 done

echo "你输入的数字总和是${n}"