#!/usr/bin/env bash
MICROSERVICES=(
    api-gateway
    users-service
)

for i in ${MICROSERVICES[@]}; do
    cd ../${i}
    yarn reinstall
done