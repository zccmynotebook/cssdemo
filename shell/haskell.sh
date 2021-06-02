i=1
while [ $i -lt 10 ]
do
    for((n=1;n<=$i;n++))
    do
        echo -e -n "$i * $n = $((i*n))\t"
    done
    #下面这个echo作用是换行
    echo  
    i=$((i+1))
done