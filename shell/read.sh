echo 'username,5s内完成'
read -t5  name
echo 'password,密码3位'
read -s -n 3 password

echo "$name 的密码是 $password"