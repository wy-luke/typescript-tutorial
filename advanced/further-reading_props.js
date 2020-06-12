import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "TypeScript 入门教程",
        "sidebar": [
            "README.md",
            {
                "link": "introduction/README.md",
                "children": [
                    "introduction/what-is-typescript.md",
                    "introduction/get-typescript.md",
                    "introduction/hello-typescript.md"
                ]
            },
            {
                "link": "basics/README.md",
                "children": [
                    "basics/primitive-data-types.md",
                    "basics/any.md",
                    "basics/type-inference.md",
                    "basics/union-types.md",
                    "basics/type-of-object-interfaces.md",
                    "basics/type-of-array.md",
                    "basics/type-of-function.md",
                    "basics/type-assertion.md",
                    "basics/declaration-files.md",
                    "basics/built-in-objects.md"
                ]
            },
            {
                "link": "advanced/README.md",
                "children": [
                    "advanced/type-aliases.md",
                    "advanced/string-literal-types.md",
                    "advanced/tuple.md",
                    "advanced/enum.md",
                    "advanced/class.md",
                    "advanced/class-and-interfaces.md",
                    "advanced/generics.md",
                    "advanced/declaration-merging.md",
                    "advanced/further-reading.md"
                ]
            },
            {
                "link": "engineering/README.md",
                "children": [
                    "engineering/lint.md",
                    "engineering/compiler-options.md"
                ]
            },
            "thanks/README.md"
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "赞助作者",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "本网站使用 Pagic 构建",
                "link": "https://github.com/xcatliu/pagic"
            }
        ],
        "gitalk": {
            "clientID": "29aa4941759fc887ed4f",
            "clientSecret": "33e355efdf3a1959624506a5d88311145208471b",
            "repo": "typescript-tutorial",
            "owner": "xcatliu",
            "admin": [
                "xcatliu"
            ]
        },
        "ga": {
            "id": "UA-45256157-14"
        }
    },
    'pagePath': "advanced/further-reading.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "advanced/further-reading.html",
    'title': "扩展阅读",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E6%89%A9%E5%B1%95%E9%98%85%E8%AF%BB">扩展阅读 <a class="header-anchor" href="#%E6%89%A9%E5%B1%95%E9%98%85%E8%AF%BB">§</a></h1>\n<p>此处记录了<a href="http://www.typescriptlang.org/docs/handbook/basic-types.html">官方手册</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/">中文版</a>）中包含，但是本书未涉及的概念。</p>\n<p>我认为它们是一些不重要或者不属于 TypeScript 的概念，所以这里只给出一个简单的释义，详细内容可以点击链接深入理解。</p>\n<ul>\n<li><a href="http://www.typescriptlang.org/docs/handbook/basic-types.html#never">Never</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Basic%20Types.html#never">中文版</a>）：永远不存在值的类型，一般用于错误处理函数</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/variable-declarations.html">Variable Declarations</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Variable%20Declarations.html">中文版</a>）：使用 <code>let</code> 和 <code>const</code> 替代 <code>var</code>，这是 <a href="http://es6.ruanyifeng.com/#docs/let">ES6 的知识</a></li>\n<li><a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Functions.html#this"><code>this</code></a>：箭头函数的运用，这是 <a href="http://es6.ruanyifeng.com/#docs/function">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/generics.html#using-class-types-in-generics">Using Class Types in Generics</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Generics.html#%E5%9C%A8%E6%B3%9B%E5%9E%8B%E9%87%8C%E4%BD%BF%E7%94%A8%E7%B1%BB%E7%B1%BB%E5%9E%8B">中文版</a>）：创建工厂函数时，需要引用构造函数的类类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type">Best common type</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E6%9C%80%E4%BD%B3%E9%80%9A%E7%94%A8%E7%B1%BB%E5%9E%8B">中文版</a>）：数组的类型推论</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type">Contextual Type</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html#%E4%B8%8A%E4%B8%8B%E6%96%87%E7%B1%BB%E5%9E%8B">中文版</a>）：函数输入的类型推论</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/type-compatibility.html">Type Compatibility</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Compatibility.html">中文版</a>）：允许不严格符合类型，只需要在一定规则下兼容即可</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types">Advanced Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E4%BA%A4%E5%8F%89%E7%B1%BB%E5%9E%8B%EF%BC%88intersection-types%EF%BC%89">中文版</a>）：使用 <code>&amp;</code> 将多种类型的共有部分叠加成一种类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types">Type Guards and Differentiating Types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E4%BF%9D%E6%8A%A4%E4%B8%8E%E5%8C%BA%E5%88%86%E7%B1%BB%E5%9E%8B%EF%BC%88type-guards-and-differentiating-types%EF%BC%89">中文版</a>）：联合类型在一些情况下被识别为特定的类型</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions">Discriminated Unions</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%8F%AF%E8%BE%A8%E8%AF%86%E8%81%94%E5%90%88%EF%BC%88discriminated-unions%EF%BC%89">中文版</a>）：使用 <code>|</code> 联合多个接口的时候，通过一个共有的属性形成可辨识联合</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types">Polymorphic <code>this</code> types</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E5%A4%9A%E6%80%81%E7%9A%84this%E7%B1%BB%E5%9E%8B">中文版</a>）：父类的某个方法返回 <code>this</code>，当子类继承父类后，子类的实例调用此方法，返回的 <code>this</code> 能够被 TypeScript 正确的识别为子类的实例。</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/symbols.html">Symbols</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Symbols.html">中文版</a>）：新原生类型，这是 <a href="http://es6.ruanyifeng.com/#docs/symbol">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/iterators-and-generators.html">Iterators and Generators</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Iterators%20and%20Generators.html">中文版</a>）：迭代器，这是 <a href="http://es6.ruanyifeng.com/#docs/iterator">ES6 的知识</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/namespaces.html">Namespaces</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Namespaces.html">中文版</a>）：避免全局污染，现在已被 <a href="http://es6.ruanyifeng.com/#docs/module">ES6 Module</a> 替代</li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/decorators.html">Decorators</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Decorators.html">中文版</a>）：修饰器，这是 <a href="http://es6.ruanyifeng.com/#docs/decorator">ES7 的一个提案</a></li>\n<li><a href="http://www.typescriptlang.org/docs/handbook/mixins.html">Mixins</a>（<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Mixins.html">中文版</a>）：一种编程模式，与 TypeScript 没有直接关系，可以参考 <a href="http://es6.ruanyifeng.com/#docs/class#Mixin%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%AE%9E%E7%8E%B0">ES6 中 Mixin 模式的实现</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href="declaration-merging.html">上一章：声明合并</a></li>\n<li><a href="../engineering/index.html">下一章：工程</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'sidebar': [
        {
            "text": "TypeScript 入门教程",
            "link": "index.html"
        },
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html"
                }
            ],
            "text": "简介"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html"
                }
            ],
            "text": "基础"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html"
                }
            ],
            "text": "进阶"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html"
                }
            ],
            "text": "工程"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "advanced/further-reading.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u6269\u5C55\u9605\u8BFB" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};