if [ $# == 0 ] 
then 
 echo '请输入参数'
 exit 1
fi
n=0
#写法1
for v in $@
 do
  let n=$v+$n
  echo "你输入了$v"
 done

echo "你输入的数字总和是${n}"

#写法2
for ((i=0;i<6;i++))
do 
 echo $i
done

#写法2
for i in `seq 6 1`
do 
 echo $i
done

#字符串
for i in  hello shell welcome to code world
do 
 echo $i
done