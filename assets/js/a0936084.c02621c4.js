(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1366],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,b=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7910:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={title:"MetadataChangeEvent (MCE) Consumer Job",hide_title:!0,slug:"/metadata-jobs/mce-consumer-job",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md"},u={unversionedId:"metadata-jobs/mce-consumer-job/README",id:"metadata-jobs/mce-consumer-job/README",isDocsHomePage:!1,title:"MetadataChangeEvent (MCE) Consumer Job",description:"MCE Consumer is a Kafka Streams job. Its main function is to listen",source:"@site/genDocs/metadata-jobs/mce-consumer-job/README.md",sourceDirName:"metadata-jobs/mce-consumer-job",slug:"/metadata-jobs/mce-consumer-job",permalink:"/docs/metadata-jobs/mce-consumer-job",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md",version:"current",frontMatter:{title:"MetadataChangeEvent (MCE) Consumer Job",hide_title:!0,slug:"/metadata-jobs/mce-consumer-job",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md"},sidebar:"overviewSidebar",previous:{title:"MetadataAuditEvent (MAE) Consumer Job",permalink:"/docs/metadata-jobs/mae-consumer-job"},next:{title:"Developing on Metadata Ingestion",permalink:"/docs/metadata-ingestion/developing"}},l=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Start via Docker image",id:"start-via-docker-image",children:[]},{value:"Start via command line",id:"start-via-command-line",children:[]},{value:"Debugging",id:"debugging",children:[]},{value:"Endpoints",id:"endpoints",children:[]}],c={toc:l};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MCE Consumer is a ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/streams/"},"Kafka Streams")," job. Its main function is to listen\n",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataChangeEvent")," Kafka topic for messages and process those messages and writes new metadata to ",(0,o.kt)("inlineCode",{parentName:"p"},"DataHub GMS"),".\nAfter every successful update of metadata, GMS fires a ",(0,o.kt)("inlineCode",{parentName:"p"},"MetadataAuditEvent")," and this is consumed by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE Consumer Job"),"."),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You need to have ",(0,o.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8")," installed on your machine to be\nable to build ",(0,o.kt)("inlineCode",{parentName:"li"},"DataHub GMS"),".")),(0,o.kt)("h2",{id:"build"},"Build"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job")," is already built as part of top level build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,o.kt)("p",null,"However, if you only want to build ",(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job")," specifically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:build\n")),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Before starting ",(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job"),", you need to make sure that ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/kafka-setup"},"Kafka, Schema Registry & Zookeeper"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms"},"DataHub GMS")," Docker containers are up and running."),(0,o.kt)("h2",{id:"start-via-docker-image"},"Start via Docker image"),(0,o.kt)("p",null,"Quickest way to try out ",(0,o.kt)("inlineCode",{parentName:"p"},"MCE Consumer Job")," is running the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-mce-consumer"},"Docker image"),"."),(0,o.kt)("h2",{id:"start-via-command-line"},"Start via command line"),(0,o.kt)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",(0,o.kt)("a",{parentName:"p",href:"#build"},"build"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:bootRun\n")),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"To debug with an IDE (i.e. IntelliJ), run the ",(0,o.kt)("inlineCode",{parentName:"p"},"bootRun")," task with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-jvm")," flag. This will launch the app and\nlisten on port 5005 for a remote debugger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:bootRun --debug-jvm\n")),(0,o.kt)("h2",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Spring boot actuator has been enabled for MCE Application.\n",(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"info")," web endpoints are enabled by default."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"healthcheck")," - http://localhost:9090/actuator/health"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"metrics")," - http://localhost:9090/actuator/metrics"),(0,o.kt)("p",null,"To retrieve a specific metric - http://localhost:9090/actuator/metrics/kafka.consumer.records.consumed.total"))}s.isMDXComponent=!0}}]);