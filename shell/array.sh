list=(1 2 3 4 5)
echo "数组：${list[@]}"
echo "数组长度：${#list[*]}"
echo "数组索引：${!list[*]}"
echo "第一个元素：${list[0]}"
echo "第二个开始的元素：${list[@]:2}"
echo "第二个开始,显示2个元素：${list[@]:2:2}"

declare   link
link[gj]=zg
link[sf]=bj
link[cs]=cp
echo "关联数组：${link[@]}"
echo "数组长度：${#link[*]}"
echo "数组索引：${!link[*]}"
echo "第一个元素：${link[0]}"
echo "第一个元素：${link[gj]}"
echo "第二个开始的元素：${link[@]:2}"
echo "第二个开始,显示2个元素：${link[@]:2:2}"

declare col
col["red"]="#ff0000"
col["green"]="#00ff00"
col["blue"]="#0000ff"
col["white"]="#ffffff"
col["black"]="#000000"
echo "关联数组：${!col[@]}"