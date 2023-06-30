# teste-compayz

## Descrição
Esta é uma aplicação de seleção de planos e checkout com cartão de credito onde é possível selecionar o plano desejado, alterar parâmetros como quantidade de domínios,  a alteração de quantidades padrão acarreta alteração no preço final. Apos seleção de plano o usuário deve preencher o modal com suas informações pessoais, assim finalizando a aplicação.

Aplicação é Client-Side-Rendering onde seus componentes  foram organizados e construídos com base no pattern Atomic Design que consiste em fragmentar as partes de um componente maior reduzindo-o até que se obtenha partes ínfimas e totalmente desacopladas onde unidas constituem  o layout completo.

## Instalação
Certifique-se de ter Node.js e Yarn instalados em sua máquina antes de seguir os próximos passos.

# clone o repositório
git clone https://github.com/Rodrigokrvalho/nuxt-challenge.git

# navegue até o diretório do projeto
cd nuxt-challenge

# instale as dependências
yarn install

Scripts Disponíveis
No diretório do projeto, você pode rodar:

yarn dev
Roda a aplicação em modo de desenvolvimento.
Abra http://localhost:3000 para ver no navegador.

yarn build
Constrói a aplicação para produção na pasta dist.

yarn start
Inicia o servidor em modo de produção. É necessário ter executado yarn build antes.

yarn generate
Constrói a aplicação e cria todos os caminhos como HTML para uso em hospedagens estáticas.

yarn lint:js
Executa o ESLint para encontrar problemas no código.

yarn lintfix
Executa o ESLint e corrige problemas automaticamente.

yarn test
Executa testes unitários com o Jest.
