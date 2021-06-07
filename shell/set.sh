#!/bin/bash

# From command line
echo -e "Basename=$0"
echo -e  "\$1=$1"
echo -e "\$2=$2"
echo -e "\$3=$3"

# From Set builtin
set First Second Third
echo -e  "\$1=$1"
echo -e "\$2=$2"
echo -e "\$3=$3"

# Store positional parameters with -(hyphen)
set - -f -s -t
echo -e  "\$1=$1"
echo -e "\$2=$2"
echo -e "\$3=$3"

set --
echo -e  "\$1=$1"
echo -e "\$2=$2"
echo -e "\$3=$3"

set -- 8 9 7
echo -e  "\$1=$1"
echo -e "\$2=$2"
echo -e "\$3=$3"
# Unset positional parameter
set --
echo -e  "\$1=$1"
echo -e "\$2=$2"
echo -e "\$3=$3"