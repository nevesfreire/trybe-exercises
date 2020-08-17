#!/bin/bash
# 1-3
# echo "Shell Script é demais!"
# TEXTO="Shell script com variáveis é demais!"
# echo "$TEXTO"
# HOST=`hostname`
# echo "Esse script está rodando no computador: $HOST."

#4
# read -p "Qual o caminho para o arquivo?" PATH
# if [ -e $PATH ]
# then
#     echo "O caminho $PATH está habilitado."
# if [ -w $PATH ]
# then    
#     echo "Você tem permissão para editar $PATH"
# else
#     echo "Você NÃO foi autorizado a editar $PATH"
# fi
# fi

# fi
#5
#read -p "Digite o caminho:" $1 CAMINHO
#if [ -f $CAMINHO ]
#then 
#    echo "É arquivo"
#elif [ -d $CAMINHO ]
#then
#    echo "É diretório"
#else
#   echo "É outro tipo de arquivo"

#fi
 
#ls -l $CAMINHO

 #6
 
# if [ -f $1 ]
# then 
#     echo "É arquivo"
# elif [ -d $1 ]
# then
#     echo "É diretório"
# else
#     echo "É outro tipo de arquivo"

# fi
 
# ls -l $1

#7

# if [ -d $1 ]
# then
# LINHAS=`ls $1 | wc -l`
#     echo "O diretório $1 tem $LINHAS arquivos"
# else    
#     echo "O Argumento $1 não é um diretório"    

# fi

#Bonus

#1

# FRASE="shell script usando estrutura repetição"
# for item in $FRASE
#     do echo "$item"
#     done

#2
# for item in $@

# do
# if [ -f $item ]
# then 
#     echo "É arquivo"
# elif [ -d $item ]
# then
#     echo "É diretório"
# else
#     echo "É outro tipo de arquivo"

# fi
 
# ls -l $item

# done

#3
# DAY=$(date +%F) 
#  for FILE in `ls *.png` 
# do mv $FILE ${DAY}-${FILE} 
# done

#4

# DIRECTORY=$1
# EXTENSION=$2
# DAY=$(date +%F)
# cd $DIRECTORY 
#  for FILE in `ls *.$EXTENSION` 
# do mv $FILE ${DAY}-${FILE} 
# done



