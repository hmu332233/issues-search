const data = [
  {
      "id": 1174504631,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/35",
      "title": "templates",
      "contents": "## nextjs, typescript, tailwind\r\n\r\nhttps://nextjs.org/docs/basic-features/typescript\r\nhttps://tailwindcss.com/docs/guides/nextjs\r\n\r\n**daisyUI**\r\nhttps://daisyui.com/docs/install/\r\n\r\n**prettier, husky, lint-staged**\r\n\r\nhttps://typicode.github.io/husky/#/?id=automatic-recommended\r\nhttps://prettier.io/docs/en/install.html",
      "objectID": "1740ea26c5b8c7_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "templates",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "## nextjs, typescript, tailwind\r\n\r\nhttps://nextjs.org/docs/basic-features/typescript\r\nhttps://tailwindcss.com/docs/<em>g</em>uides/nextjs\r\n\r\n**daisyUI**\r\nhttps://daisyui.com/docs/install/\r\n\r\n**prettier, husky, lint-staged**\r\n\r\nhttps://typicode.<em>g</em>ithub.io/husky/#/?id=automatic-recommended\r\nhttps://prettier.io/docs/en/install.html",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 1123376181,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/33",
      "title": "github action",
      "contents": "## 다른 디렉토리에서 동작하기\r\n`working-directory` 이용\r\n```\r\n- name: Install\r\n  run: yarn install\r\n  working-directory: ${{ env.WORKING_DIRECTORY }}\r\n- name: Run\r\n  run: yarn start\r\n  env:\r\n    DB_URL: ${{ secrets.DB_URL }}\r\n  working-directory: ${{ env.WORKING_DIRECTORY }}\r\n```\r\n\r\n[내 레포에서 사용 예시](https://github.com/hmu332233/LetMeKnow.jbnu--lambda/blob/master/.github/workflows/parseFood.yml)\r\n\r\n## 캐싱\r\n\r\n`actions/cache@v2` 이용\r\nid 값을 통해서 output 값에 접근도 가능함, 예시에서는 steps.cache.outputs.cache-hit 값으로 캐싱된게 있는지 체크 가능\r\n```\r\n- name: Cache node modules\r\n  uses: actions/cache@v2\r\n  id: cache # 해당 step을 대표하는 id\r\n  with:\r\n    path: ${{ env.WORKING_DIRECTORY }}/node_modules # 캐싱할 대상\r\n    key: ${{ runner.os }}-yarn-parse-${{ hashFiles('**/yarn.lock') }} # 캐싱 여부를 판단할 key\r\n    restore-keys: |\r\n      ${{ runner.os }}-yarn-parse-\r\n```\r\n\r\n[내 레포에서 사용 예시](https://github.com/hmu332233/LetMeKnow.jbnu--lambda/blob/master/.github/workflows/parseFood.yml)\r\n",
      "objectID": "16183cd0043bb_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "<em>g</em>ithub action",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          },
          "contents": {
              "value": "## 다른 디렉토리에서 동작하기\r\n`working-directory` 이용\r\n```\r\n- name: Install\r\n  run: yarn install\r\n  working-directory: ${{ env.WORKING_DIRECTORY }}\r\n- name: Run\r\n  run: yarn start\r\n  env:\r\n    DB_URL: ${{ secrets.DB_URL }}\r\n  working-directory: ${{ env.WORKING_DIRECTORY }}\r\n```\r\n\r\n[내 레포에서 사용 예시](https://<em>g</em>ithub.com/hmu332233/LetMeKnow.jbnu--lambda/blob/master/.<em>g</em>ithub/workflows/parseFood.yml)\r\n\r\n## 캐싱\r\n\r\n`actions/cache@v2` 이용\r\nid 값을 통해서 output 값에 접근도 가능함, 예시에서는 steps.cache.outputs.cache-hit 값으로 캐싱된게 있는지 체크 가능\r\n```\r\n- name: Cache node modules\r\n  uses: actions/cache@v2\r\n  id: cache # 해당 step을 대표하는 id\r\n  with:\r\n    path: ${{ env.WORKING_DIRECTORY }}/node_modules # 캐싱할 대상\r\n    key: ${{ runner.os }}-yarn-parse-${{ hashFiles('**/yarn.lock') }} # 캐싱 여부를 판단할 key\r\n    restore-keys: |\r\n      ${{ runner.os }}-yarn-parse-\r\n```\r\n\r\n[내 레포에서 사용 예시](https://<em>g</em>ithub.com/hmu332233/LetMeKnow.jbnu--lambda/blob/master/.<em>g</em>ithub/workflows/parseFood.yml)\r\n",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 1091644804,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/32",
      "title": "ffmpeg 이슈 모음",
      "contents": "## 웹페이지에서 사용하기\r\n- ffmpeg load 방식은 외부에서 script를 가져오는 방식인데 이 경우 wasm 실행이나 SharedArrayBuffer의 사용이 불가능.\r\n- CORS에 걸리기 때문인데 issue를 읽어보니 이를 우회할 수 있는 방안이 있으므로 아래 링크를 참고할 것\r\nhttps://github.com/ffmpegwasm/ffmpeg.wasm/issues/106#issuecomment-903044180\r\n사용한 것: [coi-serviceworker](https://github.com/gzuidhof/coi-serviceworker)\r\n\r\n## 크롬 익스텐션에서 사용하기\r\n- extension의 경우 contents 보안 설정(content_security_policy)을 통해 wasm 실행 권한 및 외부 script를 실행할 수 있도록 열어줘야한다.\r\n- 보안상 좋은 방법인지는 의문\r\n",
      "objectID": "e376c5dae3169_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "ffmpeg 이슈 모음",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "## 웹페이지에서 사용하기\r\n- ffmpeg load 방식은 외부에서 script를 가져오는 방식인데 이 경우 wasm 실행이나 SharedArrayBuffer의 사용이 불가능.\r\n- CORS에 걸리기 때문인데 issue를 읽어보니 이를 우회할 수 있는 방안이 있으므로 아래 링크를 참고할 것\r\nhttps://<em>g</em>ithub.com/ffmpegwasm/ffmpeg.wasm/issues/106#issuecomment-903044180\r\n사용한 것: [coi-serviceworker](https://<em>g</em>ithub.com/<em>g</em>zuidhof/coi-serviceworker)\r\n\r\n## 크롬 익스텐션에서 사용하기\r\n- extension의 경우 contents 보안 설정(content_security_policy)을 통해 wasm 실행 권한 및 외부 script를 실행할 수 있도록 열어줘야한다.\r\n- 보안상 좋은 방법인지는 의문\r\n",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 992406218,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/29",
      "title": "크롬 익스텐션에 ga 달기",
      "contents": "크롬 익스텐션에서 ga가 동작하게 하려면 몇가지 셋팅이 필요하다.\r\n\r\n**gtag 대신 analytics 사용**\r\n아래와 같은 이유들로 gtag를 사용함에 있어서 가능한지 자료를 찾지 못했다.\r\n- ga는 프로토콜 검증 후에 보내도록 되어있는데 chrome-extension://이기 때문에 보내지지 않는다. `checkProtocolTask` 함수를 비워버리는 작업 필요\r\n- path도 검증하는게 있는건지 ga로 보낼때 특정 path를 지정해주는 작업이 필요했다.  `pageview`에 `/`를 추가해줬다.\r\n```js\r\n// ga 코드\r\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\r\n  \r\n  ga('create', 'UA-99767689-3', 'auto');\r\n  ga(\"set\", \"checkProtocolTask\", null); // 크롬익스텐션에서 필수\r\n  ga('send', 'pageview', '/'); // 크롬익스텐션에서 path 지정 필수\r\n```\r\n\r\n**CSP 허용**\r\ngoogle-analytics를 불러올 수 있도록 CSP 허용이 필요하다.\r\n```js\r\n\"content_security_policy\": \"script-src 'self'; script-src-elem 'self' https://www.google-analytics.com; object-src 'self'\"\r\n```",
      "objectID": "23a34f4b59c2_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "크롬 익스텐션에 <em>g</em>a 달기",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          },
          "contents": {
              "value": "크롬 익스텐션에서 <em>g</em>a가 동작하게 하려면 몇가지 셋팅이 필요하다.\r\n\r\n**<em>g</em>tag 대신 analytics 사용**\r\n아래와 같은 이유들로 <em>g</em>tag를 사용함에 있어서 가능한지 자료를 찾지 못했다.\r\n- <em>g</em>a는 프로토콜 검증 후에 보내도록 되어있는데 chrome-extension://이기 때문에 보내지지 않는다. `checkProtocolTask` 함수를 비워버리는 작업 필요\r\n- path도 검증하는게 있는건지 <em>g</em>a로 보낼때 특정 path를 지정해주는 작업이 필요했다.  `pageview`에 `/`를 추가해줬다.\r\n```js\r\n// <em>g</em>a 코드\r\n(function(i,s,o,<em>g</em>,r,a,m){i['<em>G</em>oogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n  m=s.<em>g</em>etElementsByTagName(o)[0];a.async=1;a.src=<em>g</em>;m.parentNode.insertBefore(a,m)\r\n  })(window,document,'script','https://www.<em>g</em>oogle-analytics.com/analytics.js','<em>g</em>a');\r\n  \r\n  <em>g</em>a('create', 'UA-99767689-3', 'auto');\r\n  <em>g</em>a(\"set\", \"checkProtocolTask\", null); // 크롬익스텐션에서 필수\r\n  <em>g</em>a('send', 'pageview', '/'); // 크롬익스텐션에서 path 지정 필수\r\n```\r\n\r\n**CSP 허용**\r\n<em>g</em>oogle-analytics를 불러올 수 있도록 CSP 허용이 필요하다.\r\n```js\r\n\"content_security_policy\": \"script-src 'self'; script-src-elem 'self' https://www.<em>g</em>oogle-analytics.com; object-src 'self'\"\r\n```",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 872456252,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/24",
      "title": "linux 명령어 모음",
      "contents": "https://github.com/hmu332233/TIL/blob/master/Linux/%EB%AA%85%EB%A0%B9%EC%96%B4%20%EB%AA%A8%EC%9D%8C.md",
      "objectID": "7435372a816a6_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "linux 명령어 모음",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "https://<em>g</em>ithub.com/hmu332233/TIL/blob/master/Linux/%EB%AA%85%EB%A0%B9%EC%96%B4%20%EB%AA%A8%EC%9D%8C.md",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 863783862,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/22",
      "title": "ELK 설정 config",
      "contents": "### 개요\r\n\r\n```\r\nfilebeat -> logstash -> elasticsearch\r\n```\r\nfilebeat: 파일 서빙 역할 (설치: https://www.elastic.co/guide/en/beats/filebeat/current/setup-repositories.html)\r\nlogstash: 파일 파싱 역할\r\n\r\n### filebeat\r\n\r\n```\r\nfilebeat:\r\n  inputs:\r\n    - type: log\r\n      paths:\r\n        - /log/example.log\r\n      fields:\r\n        service: example-log\r\n      fields_under_root: true\r\n\r\noutput:\r\n  logstash:\r\n    hosts: [\"0.0.0.0:5044\"]\r\n```\r\n\r\n### logstash\r\n```\r\ninput {\r\n        beats {\r\n                port => 5044\r\n        }\r\n}\r\nfilter {\r\n\tif [service] == \"example-log\" {\r\n\t\tjson {\r\n\t\t\tsource => \"message\"\r\n\t\t}\r\n\r\n\t\tdate {\r\n\t\t\tmatch => [\"time\", \"yyyy-MM-dd'T'HH:mm:ss.SSSZ\"]\r\n\t\t\ttarget => \"@timestamp\"\r\n\t\t}\r\n\t}\r\n}\r\noutput {\r\n        if [service] == \"example-log\" {\r\n                elasticsearch {\r\n                        hosts => [\"http://0.0.0.0:9200\"]\r\n\t\t\tindex => [\"example-log-%{+YYYY.MM.dd}\"]\r\n               \t\tuser => \"user\"\r\n                        password => \"password\"\r\n\t\t}\r\n        }\r\n}\r\n```",
      "objectID": "9f77baca54931_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "ELK 설정 config",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "### 개요\r\n\r\n```\r\nfilebeat -> logstash -> elasticsearch\r\n```\r\nfilebeat: 파일 서빙 역할 (설치: https://www.elastic.co/<em>g</em>uide/en/beats/filebeat/current/setup-repositories.html)\r\nlogstash: 파일 파싱 역할\r\n\r\n### filebeat\r\n\r\n```\r\nfilebeat:\r\n  inputs:\r\n    - type: log\r\n      paths:\r\n        - /log/example.log\r\n      fields:\r\n        service: example-log\r\n      fields_under_root: true\r\n\r\noutput:\r\n  logstash:\r\n    hosts: [\"0.0.0.0:5044\"]\r\n```\r\n\r\n### logstash\r\n```\r\ninput {\r\n        beats {\r\n                port => 5044\r\n        }\r\n}\r\nfilter {\r\n\tif [service] == \"example-log\" {\r\n\t\tjson {\r\n\t\t\tsource => \"message\"\r\n\t\t}\r\n\r\n\t\tdate {\r\n\t\t\tmatch => [\"time\", \"yyyy-MM-dd'T'HH:mm:ss.SSSZ\"]\r\n\t\t\ttarget => \"@timestamp\"\r\n\t\t}\r\n\t}\r\n}\r\noutput {\r\n        if [service] == \"example-log\" {\r\n                elasticsearch {\r\n                        hosts => [\"http://0.0.0.0:9200\"]\r\n\t\t\tindex => [\"example-log-%{+YYYY.MM.dd}\"]\r\n               \t\tuser => \"user\"\r\n                        password => \"password\"\r\n\t\t}\r\n        }\r\n}\r\n```",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 822710335,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/20",
      "title": "articles",
      "contents": "## JS\r\n### [JavaScript's Memory Management Explained](https://felixgerschau.com/javascript-memory-management/)\r\n  - 자바스크립트 메모리 관리에 대해 쉽게 설명되어 있는 글\r\n\r\n### [Test your JavaScript skills Series' Articles](https://dev.to/coderslang/series/11099)\r\n  - 자바스크립트에서 헷갈리기 쉬운 문제를 16가지 예제와 함께 정리해 놓은 글 모음\r\n\r\n### [자바스크립트 비동기 처리 과정과 RxJS Scheduler](http://sculove.github.io/blog/2018/01/18/javascriptflow/)\r\n-  자바스크립트 비동기 처리 과정에 대해 설명되어 있는 글. setTimeout이나 Promise와 같은 Web API를 이용한 비동기 처리시 작업이 처리되는 순서를 이해할 수 있다. 어느 단계에서 UI가 랜더링 되는지도 알 수 있다.",
      "objectID": "1cc378dcc21540_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "articles",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "## JS\r\n### [JavaScript's Memory Management Explained](https://felixgerschau.com/javascript-memory-management/)\r\n  - 자바스크립트 메모리 관리에 대해 쉽게 설명되어 있는 글\r\n\r\n### [Test your JavaScript skills Series' Articles](https://dev.to/coderslang/series/11099)\r\n  - 자바스크립트에서 헷갈리기 쉬운 문제를 16가지 예제와 함께 정리해 놓은 글 모음\r\n\r\n### [자바스크립트 비동기 처리 과정과 RxJS Scheduler](http://sculove.<em>g</em>ithub.io/blog/2018/01/18/javascriptflow/)\r\n-  자바스크립트 비동기 처리 과정에 대해 설명되어 있는 글. setTimeout이나 Promise와 같은 Web API를 이용한 비동기 처리시 작업이 처리되는 순서를 이해할 수 있다. 어느 단계에서 UI가 랜더링 되는지도 알 수 있다.",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 795362706,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/17",
      "title": "gatsby graphql 데이터 추가하는 방법",
      "contents": "gatsby에서 `gatsby-node.js`파일에서 `exports.sourceNodes` 내의 `actions.createNode()` 함수를 통해 query를 통해 사용할 수 있는 데이터를 추가할 수 있다.\r\n\r\n```js\r\nconst STORES = [\r\n  { name: '식당1', value: 0 },\r\n  { name: '식당2', value: 1 },\r\n];\r\n\r\nexports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {\r\n  const { createNode } = actions\r\n\r\n  STORES.forEach(store => {\r\n    createNode({\r\n      id: createNodeId(`store-${store.value}`),\r\n      name: store.name,\r\n      value: store,value,\r\n      internal: {\r\n        type: 'Store',\r\n        contentDigest: createContentDigest(store)\r\n      },\r\n    })\r\n  })\r\n}\r\n```\r\n\r\n그러면 아래와 같은 쿼리로 접근이 가능해진다.\r\n\r\n```graphql\r\nquery StoreQuery {\r\n  allStore {\r\n    nodes {\r\n      name\r\n      id\r\n    }\r\n  }\r\n}\r\n```\r\n\r\nhttps://www.gatsbyjs.com/docs/recipes/sourcing-data/#adding-data-to-graphql",
      "objectID": "7e7980a964a4e_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "<em>g</em>atsby <em>g</em>raphql 데이터 추가하는 방법",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          },
          "contents": {
              "value": "<em>g</em>atsby에서 `<em>g</em>atsby-node.js`파일에서 `exports.sourceNodes` 내의 `actions.createNode()` 함수를 통해 query를 통해 사용할 수 있는 데이터를 추가할 수 있다.\r\n\r\n```js\r\nconst STORES = [\r\n  { name: '식당1', value: 0 },\r\n  { name: '식당2', value: 1 },\r\n];\r\n\r\nexports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {\r\n  const { createNode } = actions\r\n\r\n  STORES.forEach(store => {\r\n    createNode({\r\n      id: createNodeId(`store-${store.value}`),\r\n      name: store.name,\r\n      value: store,value,\r\n      internal: {\r\n        type: 'Store',\r\n        contentDigest: createContentDigest(store)\r\n      },\r\n    })\r\n  })\r\n}\r\n```\r\n\r\n그러면 아래와 같은 쿼리로 접근이 가능해진다.\r\n\r\n```<em>g</em>raphql\r\nquery StoreQuery {\r\n  allStore {\r\n    nodes {\r\n      name\r\n      id\r\n    }\r\n  }\r\n}\r\n```\r\n\r\nhttps://www.<em>g</em>atsbyjs.com/docs/recipes/sourcing-data/#adding-data-to-<em>g</em>raphql",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 700089979,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/14",
      "title": "외부 js 라이브러리 불러오기",
      "contents": "```js\r\ncomponentDidMount() {\r\n      if (!document.getElementById('KakaoJSSDK')) {\r\n        const scriptKakaoJS = document.createElement('script');\r\n        scriptKakaoJS.id = 'KakaoJSSDK';\r\n        scriptKakaoJS.src = '//developers.kakao.com/sdk/js/kakao.min.js';\r\n        document.body.appendChild(scriptKakaoJS);\r\n      }\r\n}\r\n```",
      "objectID": "421fd42aba51e_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "외부 js 라이브러리 불러오기",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "```js\r\ncomponentDidMount() {\r\n      if (!document.<em>g</em>etElementById('KakaoJSSDK')) {\r\n        const scriptKakaoJS = document.createElement('script');\r\n        scriptKakaoJS.id = 'KakaoJSSDK';\r\n        scriptKakaoJS.src = '//developers.kakao.com/sdk/js/kakao.min.js';\r\n        document.body.appendChild(scriptKakaoJS);\r\n      }\r\n}\r\n```",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 625030909,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/11",
      "title": "gatsby graphql 사용법",
      "contents": "gatsby에서 graphql을 사용하는 방법에는 3가지 방법이 있다.\r\n\r\n1. 페이지 내에서 사용하는 방법\r\n2. 컴포넌트 내에서 `StaticQuery` 컴포넌트를 사용하는 방법\r\n3. 컴포넌트 내에서 `useStaticQuery`를 사용하는 방법\r\n\r\n### 페이지 내에서 사용하는 방법\r\nexport를 통해 graphql 쿼리를 넘겨주면 해당 컴포넌트의 props를 통해 데이터를 받을 수 있다.\r\n```jsx\r\nimport * as React from 'react'\r\nimport { graphql } from 'gatsby'\r\nconst HomePage = ({data}) => {\r\n  return (\r\n    <div>\r\n      {data.site.siteMetadata.description}\r\n    </div>\r\n  )\r\n}\r\nexport const query = graphql`\r\n  query HomePageQuery {\r\n    site {\r\n      siteMetadata {\r\n        description\r\n      }\r\n    }\r\n  }\r\n`\r\nexport default HomePage\r\n```\r\n\r\n### 컴포넌트 내에서 `StaticQuery` 컴포넌트를 사용하는 방법\r\nStaticQuery 컴포넌트의 query로 props를 넘겨주면 render라는 함수를 통해서 데이터를 받을 수 있다.\r\n```jsx\r\nimport React from \"react\"\r\nimport { StaticQuery, graphql } from \"gatsby\"\r\n\r\nexport default function Header() {\r\n  return (\r\n    <StaticQuery\r\n      query={graphql`\r\n        query HeadingQuery {\r\n          site {\r\n            siteMetadata {\r\n              title\r\n            }\r\n          }\r\n        }\r\n      `}\r\n      render={data => (\r\n        <header>\r\n          <h1>{data.site.siteMetadata.title}</h1>\r\n        </header>\r\n      )}\r\n    />\r\n  )\r\n}\r\n```\r\n\r\n### 컴포넌트 내에서 `useStaticQuery`를 사용하는 방법\r\nuseStaticQuery hook 함수에 graphql 쿼리를 넘겨주면 데이터를 받을 수 있다.\r\n```jsx\r\nimport React from \"react\"\r\nimport { useStaticQuery, graphql } from \"gatsby\"\r\nexport default function Header() {\r\n  const data = useStaticQuery(graphql`\r\n    query HeaderQuery {\r\n      site {\r\n        siteMetadata {\r\n          title\r\n        }\r\n      }\r\n    }\r\n  `)\r\n  return (\r\n    <header>\r\n      <h1>{data.site.siteMetadata.title}</h1>\r\n    </header>\r\n  )\r\n}\r\n```\r\n\r\n\r\n참고\r\n- https://www.gatsbyjs.org/docs/page-query/\r\n- https://www.gatsbyjs.org/docs/static-query/\r\n- https://www.gatsbyjs.org/docs/use-static-query/",
      "objectID": "597ded84ce8e1_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "<em>g</em>atsby <em>g</em>raphql 사용법",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          },
          "contents": {
              "value": "<em>g</em>atsby에서 <em>g</em>raphql을 사용하는 방법에는 3가지 방법이 있다.\r\n\r\n1. 페이지 내에서 사용하는 방법\r\n2. 컴포넌트 내에서 `StaticQuery` 컴포넌트를 사용하는 방법\r\n3. 컴포넌트 내에서 `useStaticQuery`를 사용하는 방법\r\n\r\n### 페이지 내에서 사용하는 방법\r\nexport를 통해 <em>g</em>raphql 쿼리를 넘겨주면 해당 컴포넌트의 props를 통해 데이터를 받을 수 있다.\r\n```jsx\r\nimport * as React from 'react'\r\nimport { <em>g</em>raphql } from '<em>g</em>atsby'\r\nconst HomePage = ({data}) => {\r\n  return (\r\n    <div>\r\n      {data.site.siteMetadata.description}\r\n    </div>\r\n  )\r\n}\r\nexport const query = <em>g</em>raphql`\r\n  query HomePageQuery {\r\n    site {\r\n      siteMetadata {\r\n        description\r\n      }\r\n    }\r\n  }\r\n`\r\nexport default HomePage\r\n```\r\n\r\n### 컴포넌트 내에서 `StaticQuery` 컴포넌트를 사용하는 방법\r\nStaticQuery 컴포넌트의 query로 props를 넘겨주면 render라는 함수를 통해서 데이터를 받을 수 있다.\r\n```jsx\r\nimport React from \"react\"\r\nimport { StaticQuery, <em>g</em>raphql } from \"<em>g</em>atsby\"\r\n\r\nexport default function Header() {\r\n  return (\r\n    <StaticQuery\r\n      query={<em>g</em>raphql`\r\n        query HeadingQuery {\r\n          site {\r\n            siteMetadata {\r\n              title\r\n            }\r\n          }\r\n        }\r\n      `}\r\n      render={data => (\r\n        <header>\r\n          <h1>{data.site.siteMetadata.title}</h1>\r\n        </header>\r\n      )}\r\n    />\r\n  )\r\n}\r\n```\r\n\r\n### 컴포넌트 내에서 `useStaticQuery`를 사용하는 방법\r\nuseStaticQuery hook 함수에 <em>g</em>raphql 쿼리를 넘겨주면 데이터를 받을 수 있다.\r\n```jsx\r\nimport React from \"react\"\r\nimport { useStaticQuery, <em>g</em>raphql } from \"<em>g</em>atsby\"\r\nexport default function Header() {\r\n  const data = useStaticQuery(<em>g</em>raphql`\r\n    query HeaderQuery {\r\n      site {\r\n        siteMetadata {\r\n          title\r\n        }\r\n      }\r\n    }\r\n  `)\r\n  return (\r\n    <header>\r\n      <h1>{data.site.siteMetadata.title}</h1>\r\n    </header>\r\n  )\r\n}\r\n```\r\n\r\n\r\n참고\r\n- https://www.<em>g</em>atsbyjs.org/docs/page-query/\r\n- https://www.<em>g</em>atsbyjs.org/docs/static-query/\r\n- https://www.<em>g</em>atsbyjs.org/docs/use-static-query/",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 586113481,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/10",
      "title": "node 버전 변경",
      "contents": "### 추천\r\n\r\nhttps://github.com/nodesource/distributions\r\n\r\n### nvm 방식\r\n\r\nhttps://github.com/hmu332233/TIL/blob/master/Nodejs/nodejs%20%EB%B2%84%EC%A0%84%20%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0.md",
      "objectID": "94fada65d47b4_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "node 버전 변경",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "### 추천\r\n\r\nhttps://<em>g</em>ithub.com/nodesource/distributions\r\n\r\n### nvm 방식\r\n\r\nhttps://<em>g</em>ithub.com/hmu332233/TIL/blob/master/Nodejs/nodejs%20%EB%B2%84%EC%A0%84%20%EB%B3%80%EA%B2%BD%ED%95%98%EA%B8%B0.md",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 561416620,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/7",
      "title": "bundle-analyzer",
      "contents": "- webpack: https://github.com/webpack-contrib/webpack-bundle-analyzer\r\n- parcel: https://github.com/gregtillbrook/parcel-plugin-bundle-visualiser",
      "objectID": "8de607e01d08a_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "bundle-analyzer",
              "matchLevel": "none",
              "matchedWords": []
          },
          "contents": {
              "value": "- webpack: https://<em>g</em>ithub.com/webpack-contrib/webpack-bundle-analyzer\r\n- parcel: https://<em>g</em>ithub.com/<em>g</em>regtillbrook/parcel-plugin-bundle-visualiser",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  },
  {
      "id": 550022468,
      "url": "https://api.github.com/repos/hmu332233/tips/issues/6",
      "title": "git",
      "contents": "## git stash\r\n```bash\r\n$ git stash list\r\n$ git stash show # 0번의 변경사항 요약 보기\r\n$ git stash show -p # 0번의 변경사항 자세히 보기\r\n$ git stash show -p stash@{1}\r\n$ git stash clear # stash list 모두 제거\r\n```\r\n\r\n## staged file diff\r\n```bash\r\n$ git diff --staged\r\n// 또는\r\n$ git diff --cached\r\n```\r\n\r\n## tag 기반 브랜치 생성\r\n```bash\r\n$ git checkout tags/v1.0.0 -b tags/v1.0.0\r\n```\r\n\r\n## stage 상태인 파일 unstage 상태로 변경하기\r\n```bash\r\n$ git reset HEAD [파일 이름]\r\n$ git reset HEAD . // 모든 파일\r\n```\r\n\r\n### 충돌 없이 pull 받기 (rebase하면서 pull 받기)\r\n```bash\r\n$ git pull --rebase\r\n```\r\n\r\n### rebase 실패시 재시작\r\n```bash\r\n$ git rebase --continue\r\n```",
      "objectID": "17ac0cd8b1364e_dashboard_generated_id",
      "_highlightResult": {
          "title": {
              "value": "<em>g</em>it",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          },
          "contents": {
              "value": "## <em>g</em>it stash\r\n```bash\r\n$ <em>g</em>it stash list\r\n$ <em>g</em>it stash show # 0번의 변경사항 요약 보기\r\n$ <em>g</em>it stash show -p # 0번의 변경사항 자세히 보기\r\n$ <em>g</em>it stash show -p stash@{1}\r\n$ <em>g</em>it stash clear # stash list 모두 제거\r\n```\r\n\r\n## staged file diff\r\n```bash\r\n$ <em>g</em>it diff --staged\r\n// 또는\r\n$ <em>g</em>it diff --cached\r\n```\r\n\r\n## tag 기반 브랜치 생성\r\n```bash\r\n$ <em>g</em>it checkout tags/v1.0.0 -b tags/v1.0.0\r\n```\r\n\r\n## stage 상태인 파일 unstage 상태로 변경하기\r\n```bash\r\n$ <em>g</em>it reset HEAD [파일 이름]\r\n$ <em>g</em>it reset HEAD . // 모든 파일\r\n```\r\n\r\n### 충돌 없이 pull 받기 (rebase하면서 pull 받기)\r\n```bash\r\n$ <em>g</em>it pull --rebase\r\n```\r\n\r\n### rebase 실패시 재시작\r\n```bash\r\n$ <em>g</em>it rebase --continue\r\n```",
              "matchLevel": "full",
              "fullyHighlighted": false,
              "matchedWords": [
                  "g"
              ]
          }
      }
  }
];

export default data;