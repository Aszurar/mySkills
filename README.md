<div>
    <img src="https://i.imgur.com/PN3xCfc.png" width="1000">
</div>

# MySkills

O projeto **myskills** é um aplicativo mobile para listar habilidades e tecnologias aprendidas.

<p> - O aplicativo foi enviando para produção com todo seu ciclo de CI/CD automatizado para o Android:</p>

<div display="flex">
  <div align="center">
    <h3>Google Play Store:</h3>
    <p> - Baixe e instale em seu dispositivo Android pela Google Play Store: <h6><a href="https://play.google.com/store/apps/details?id=com.aszurar_myskills">MySkills</a></h6></p>
    <div align="center" >
      <a href="https://play.google.com/store/apps/details?id=com.aszurar_myskills">
        <img src="https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png" width="200">
      </a>
    </div>
  </div>
</div>

---\*\*\*\*

<div>
        <h3 align="center">
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
          <a href="#art-design">Design</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-principais-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a
          href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h3>
</div>

---

<div align="center" >
    <img src="https://i.imgur.com/RBRKzXM.gif" width="200">____<img src="https://i.imgur.com/COthYiv.gif" width=200>
</div>

- [**Link do vídeo completo sobre o projeto**](https://youtube.com/shorts/RqFc1VMc_1g?feature=share)

---

## :information_source: Sobre

- A ideia desse aplicativo é poder listar todas suas habilidades e removê-las. Ou seja, é basicamente uma aplicação CRUD básica, onde temos uma listagem, cadastro e remoção de dados.
- É o 1º projeto do bootcamp **Ignite da trilha React Native 2021 da [Rocketseat](https://www.rocketseat.com.br/)**
  - **Originalmente o projeto não tinha funcionalidade de persistência de dados, mas foi adicionado o AsyncStorage para que os dados não sejam perdidos ao fechar o aplicativo.**
- Para a construção da interface desse projeto foi usado **[React Native](https://reactnative.dev/)** com **[TypeScript](https://www.typescriptlang.org/)**.
  - Usamos o **[AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/install/)** para armazenar os dados localmente.
  - A estilização é feita com StyleSheet já que a ideia é entender o básico do React Native.
- Na sessão de tecnologias temos linkado as referências para cada uma <a href="#rocket-principais-tecnologias-utilizadas">Tecnologias</a> estará mais detalhado.
  - Funcionalidadedes:
    - Adicionar habilidade.
    - Remover habilidade.
    - Lista todas habilidades adicionadas.
    - Remover uma habilidade por vez ou todas de uma vez.
    - Persistência de dados com AsyncStorage.

1. **Cadastro do nome e data do evento**
   <div align="center" >
      <img src="https://i.imgur.com/xdoaCIq.png" width="1000">
   </div>

2. **Remoção de habilidades**
<div align="center" >
  <img src="https://i.imgur.com/CWjUOXb.png" width="1000">
</div>

---

## :interrobang: Motivo

- Esse projeto tem o objetivo de praticar os conceitos básicos do React Native e seus componentes e suas propriedades, variável Estado, manipulações de variável Estado, estilização com StyleSheet, componentização e formas de passar dados/funções para componentes criados, além de praticar o uso de TypeScript e também de algumas libs como o AsyncStorage.
- É um projeto simples, mas que trata da base de um aplicativo mobile, onde temos uma listagem, cadastro e remoção.
- É o 1º projeto do bootcamp **Ignite da trilha React Native 2021 da [Rocketseat](https://www.rocketseat.com.br/)**
- Assim, nesse primeiro módulo focamos na interface e nos conceitos básicos do React Native. Com isso, **toda essa parte de persistência de dados com Async-Storage foram melhorados e adicionados por mim.**

---

## :art: Design
- O Design do projeto é baseado no visual do projeto ensinado no 1 módulo do bootcamp Ignite de React Native da Rockeseat.
- Não é disponibilizado o design do projeto no Figma nesse módulo por ser simples, fazemos baseado no vídeo. 
- Com isso, recriei todo design no Figma com as seções de:
 - Interface 
 - Componentes e Variantes
 - Guia de Cores
 - Ícones e Splash Screen
 - Assets para lojas da Google
- Além disso, adicionei navegação/interação demonstrando as ações que o usuário pode fazer com o protótipo do Figma.

<div align="center" >

[**MySkills**](https://www.figma.com/file/CnSmWyPuHQK2f3yne2pLP5/mySkills?type=design&node-id=0%3A1&t=8OVYpfr4XQghnqiV-1)

[![Design](https://i.imgur.com/mymP6jw.png)](https://www.figma.com/file/CnSmWyPuHQK2f3yne2pLP5/mySkills?type=design&node-id=0%3A1&t=8OVYpfr4XQghnqiV-1)

</div>

---

## :seedling: Requisitos Mínimos

- Android Studio
- Celular(Opcional)
- Node.js
- React
- React-Native
- TypeScript
- Yarn(ou NPM)

---

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Android Studio](https://developer.android.com/studio)
- [Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Native Splash Screen](https://www.npmjs.com/package/react-native-splash-screen)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

---

## :truck: Entrega e distribuição continua

- Para a publicação do aplicativo, primeiro foi gerada a build manualmente com o comando <code>**./gradlew bundleRelease**</code>, utilizando o build.gradle dentro da pasta android, que foi configurado com enableProguardInReleaseBuilds e enableHermes como true.
- Essa build foi enviada para o Google Play Console, onde todas as configurações do projeto Android foram personalizadas, incluindo a descrição, nome e imagens do aplicativo.

- Em seguida, foi integrado o repositório remoto do projeto, que está aqui no GitHub, com a plataforma **[App Center](https://appcenter.ms/) da Microsoft para realizar o CI/CD**.

  - **O App Center observa a branch main, que é a de produção, e toda vez que houver algum push nessa branch, ele automaticamente gera uma nova build do aplicativo e envia para a Google Play Store.**

- Antes de usar o App Center, foi realizada toda a configuração necessária para que a plataforma possa realizar esse processo de forma automática e também foi necessário configurações no Google Cloud Platform e no Google Play Console.
- Segue o link das plataformas usadas:
  - [App Center](https://appcenter.ms/);
  - [Github](https://github.com/);
  - [Google Play Console](https://play.google.com/console/about/);
  - [Google Cloud Platform](https://console.cloud.google.com/);

<div align="center">
<img src="https://i.imgur.com/29M1Y6R.png" width="1000">
</div>

---

## :package: Como baixar e executar o projeto

- Clonar o projeto:
  ```bash
   git clone https://github.com/Aszurar/myskills.git
  ```
- É necessário a instalação do yarn de acordo com seu sistema operacional, para isso veja como no site do [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)
- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto
  ```bash
    yarn
  ```
- É necessário a instalação do emulador [Android Studio](https://developer.android.com/studio) e das tecnologias requesitadas acima no **:seedling: Requisitos Mínimos**
- Também é necessário a instalação/configuração de outras tecnologias, para isso siga os passos indicados nessa página de acordo com seu sistema operacional: [Executando uma Aplicação React-Native emulando Windows/Linux/MacOS ou direto no dispositivo mobile Android/IOS](https://react-native.rocketseat.dev/android/linux)
- Execução
- Com o emulador android aberto ou o dispositivo móvel físico conecatdo via USB:
- **Abra a pasta do projeto com alguma IDE(Vscode) ou simplesmente abra o terminal na pasta do projeto e execute o comando abaixo:**

```bash
   yarn android
```

- Caso o metro-bundle não funcione, execute como abaixo:
  1. Executando o metro-bundle:
     ```bash
         yarn start
     ```
  2. Executando no android:
     ```bash
         yarn android
     ```
- Caso esteja no IOS, após as configurações faladas anteriormente até no link mencionado acima, então execute o comando abaixo:

  ```bash
      pod install
  ```

  ```bash
      yarn ios
  ```

- Lembrando que, caso seja executado pelo emulador, o ideal é sempre deixa-lo aberto antes de aplicar os comandos acima.

---

Desenvolvido por :star2: Lucas de Lima Martins de Souza.
