#!/bin/sh

mkdir ~/.ssh &&
echo "$SSH_KEY" >> ~/.ssh/id_rsa_ifsalas &&
chmod 400 ~/.ssh/id_rsa_ifsalas &&
echo -e "
  Host ifsalas\n\t \
    User ifsalas\n\t \
    Hostname 45.76.5.44\n\t \
    IdentityFile ~/.ssh/id_rsa_ifsalas\n\t \
    StrictHostKeyChecking No" >> ~/.ssh/config &&
rsync -avz --progress build/ ifsalas:/home/ifsalas/web/$1 --delete
