#!/bin/sh

mkdir ~/.ssh &&
echo "$SSH_KEY" >> ~/.ssh/id_rsa_ifsalas &&
chmod 400 ~/.ssh/id_rsa_ifsalas &&
echo -e "Host ifsalas\n\tUser ifsalas\n\tHostname 45.76.5.44\n\tIdentityFile ~/.ssh/id_rsa_ifsalas\n\tStrictHostKeyChecking No" >> ~/.ssh/config &&
rsync -avz --progress build/ ifsalas:/home/ifsalas/web/$1 --delete
