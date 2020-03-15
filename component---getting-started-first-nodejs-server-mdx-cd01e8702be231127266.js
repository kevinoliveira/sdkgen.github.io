(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{JENP:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return o})),t.d(n,"default",(function(){return c}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var r=t("/FXl"),a=t("TjRS");t("aD51");function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"getting-started/first-nodejs-server.mdx"}});var p={_frontmatter:o},s=a.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,i({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"installing-sdkgen"},"Installing sdkgen"),Object(r.b)("p",null,"First of all you need Node.js ready on your machine. Versions 8, 10 or 12 are supported (all stable maintained release channels). Check for it here: ",Object(r.b)("a",i({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"https://nodejs.org/en/download/")),Object(r.b)("p",null,"Install the global CLI:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{}),"npm i -g @sdkgen/cli\n")),Object(r.b)("h1",{id:"creating-an-api-description"},"Creating an API description"),Object(r.b)("p",null,"Create an ",Object(r.b)("inlineCode",{parentName:"p"},"api.sdkgen")," to describe your API. For example:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{}),"type Post {\n    id: uuid\n    title: string\n    body: string\n    createdAt: datetime\n    author: {\n        name: string\n    }\n}\n\nfn getPost(id: uuid): Post?\n")),Object(r.b)("p",null,"You can then generate the TypeScript source for this description with ",Object(r.b)("inlineCode",{parentName:"p"},"sdkgen api.sdkgen -o api.ts -t typescript_nodeserver"),"."),Object(r.b)("h1",{id:"creating-base-project"},"Creating base project"),Object(r.b)("p",null,"Let's start a new project with TypeScript:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{}),"npm init -y\nnpm i --save-dev typescript\nnpm i @sdkgen/node-runtime\nnpx tsc --init -t esnext\n")),Object(r.b)("p",null,"Then create a ",Object(r.b)("inlineCode",{parentName:"p"},"main.ts")," file:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{className:"language-typescript"}),'// Import sdkgen\'s runtime and the generated file\nimport { SdkgenHttpServer } from "@sdkgen/node-runtime";\nimport { api } from "./api";\n\n// Every endpoint described must receive some implementation\napi.fn.getPost = async (ctx, {id}) => {\n    return {\n        id,\n        title: "Getting Started",\n        author: {\n            name: "John Doe"\n        },\n        body: "Lorem ipsum",\n        createdAt: new Date(),\n    };\n};\n\n// Start a HTTP server for the API\nconst server = new SdkgenHttpServer(api, {});\nserver.listen(8000);\n')),Object(r.b)("h1",{id:"run-the-project"},"Run the project"),Object(r.b)("p",null,"Build and run it:"),Object(r.b)("pre",null,Object(r.b)("code",i({parentName:"pre"},{}),"npx tsc\nnode main.js\n")))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"getting-started/first-nodejs-server.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---getting-started-first-nodejs-server-mdx-cd01e8702be231127266.js.map