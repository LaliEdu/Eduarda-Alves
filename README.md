
# MANUAL DE UTILIZAÇÃO DO SISTEMA/SITE
## CAPITULO 1 - Configuração do git no computador
### Instalação do Git
<p align="left">Primeiramente selecione o sistema operacional da sua maquina</p>
<p><img src="Img/Captura de tela 2025-01-22 103507.png" width ="400"></p> 
<br>
<p align="left">E faça o download</p>
<p><img src="Img/Captura de tela 2025-01-22 103825.png" width="400"></p>
  <a href= "https://git-scm.com/downloads/win" 
  target="_blank">Download do GIT</a>
  </p>

### No terminal do computador
```

git --version
         
   A partir daqui voce ja deve ter uma conta criada no GitHub

git config --global user.name "Nome de usuario"
git config --global user.email "Email utilizado"
ssh keygen (Criador de senha)
ls (Ver pastas existentes)
cd .\Nome da pasta\ (Entra na pasta em que está seu codigo)
ls
cat .ssh/id_  .pub
cd .. (Sair da pasta)

```

### Comandos Administrativos do GIT no Windows

```
git init                                                           (Inicia o github no Windows)
git status                                                         (Vizualiza o estado do diretorio de trabalho)
git add index.html or git add .                                    (Adiciona todos os arquivos ou um por vez)
git commit -m "Mensagem do desenvolvedor" ex:"Update file README"  (Dá um nome a atulização)
git push -u origin master                                          (Sobe o arquivo ao github)

```


### 
## CAPITULO 2 - Criando repositorio no GIT
<p align="left">Entre na opção 'Repositorios' e clique 'New'</p>
<p><img src="Img/Captura de tela 2025-01-22 112400.png" width="400"></p>

<br>

<p align="left">Siga as instruções e preencha conforme sua preferência</p>
<p><img src="Img/Captura de tela 2025-01-22 112538.png" width="400"></p>



## CAPITULO 3 - Subindo arquivos no GIT
###

```
 git status
 git add .
 git status
 git commit -m "Primeiro Commit"
 git push -u origin master or git push origin develop
```

### CAPITULO 4 - Alterando MASTER para DEVELOP

```
git branch 
git branch develop 
git branch
git pull origin master
```

### CAPITULO 5 - Trabalhando com o mesmo repositório em dispositivos diferentes 
```
Instalar GitHub
Reiniciar computador
Instalar Visual Code Studio
 
git --version
git config --global user.name "Nome de usuario"
git config --global user.email Email utilizado
ssh keygen (Enter e digitar a senha duas vezes)
cd .\.ssh
ls
cat .\pasta.pub
git clone (+ codigo ssh do seu github)
 (Entrar na pasta Docments e pasta com seu nome)
code .
```