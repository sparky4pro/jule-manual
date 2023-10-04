import { defineConfig } from 'vitepress'
import { ILanguageRegistration, getHighlighter } from 'shiki';
import { IGrammar } from 'vscode-textmate';
import { readFileSync } from 'fs';

class Jule implements ILanguageRegistration {
  id: string;
  scopeName: string;
  path: string;
  grammar?: IGrammar | undefined;
  aliases?: string[] | undefined;

  constructor() {
    this.id = "jule";
    this.scopeName = "source.jule";
    this.path = "";
    this.aliases = [ "jule" ];
    this.grammar = JSON.parse(readFileSync("jule/jule.tmLanguage.json"));
  }
}

const jule = new Jule();
(async () => {
  const highlighter = await getHighlighter({});
  await highlighter.loadLanguage(jule);
})();

export default defineConfig({
  srcDir: 'src',
  title: 'Jule Manual',
  description: 'Documentations of the Jule Programming Language.',

  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
    languages: [ jule ],
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: 'https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg' }
    ],
  ],
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Manual', link: '/' },
      { text: 'Standard Library', link: '/std/' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: {
      '/': [
        {
          items: [
            { text: 'The Jule Programming Language', link: '/' },
            { text: 'Foreword', link: '/foreword' },
            { text: 'Introduction', link: '/introduction' },
          ],
        },
        {
          text: 'Getting Started',
          link: '/getting-started/',
          items: [
            { text: 'Downloads', link: '/getting-started/downloads' },
            {
              text: 'Install from Source',
              link: '/getting-started/install-from-source/',
              items: [
                { text: 'Compile From IR', link: '/getting-started/install-from-source/compile-from-ir' },
                { text: 'Build Scripts', link: '/getting-started/install-from-source/build-scripts' },
                { text: 'Manual Compilation', link: '/getting-started/install-from-source/manual-compilation' },
              ],
            },
          ],
        },
        {
          text: 'Compiler',
          link: '/compiler/',
          items: [
            { text: 'Platform Support', link: '/compiler/platform-support' },
            { text: 'Directives', link: '/compiler/directives' },
            { text: 'Platform Specific Programming', link: '/compiler/platform-specific-programming' },
            { text: 'Deriving', link: '/compiler/deriving' },
            { text: 'Basic Commands', link: '/compiler/basic-commands' },
            { text: 'Compiler Options', link: '/compiler/compiler-options' },
            { text: 'Compiler Optimizations', link: '/compiler/compiler-optimizations' },
            { text: 'Cross Transpilation', link: '/compiler/cross-transpilation' },
            {
              text: 'Backend',
              link: '/compiler/backend/',
              items: [
                {
                  text: 'C++ Backend Compilers',
                  link: '/compiler/backend/cpp-backend-compilers/',
                  items: [
                    { text: 'Clang', link: '/compiler/backend/cpp-backend-compilers/clang' },
                    { text: 'GNU Compiler Collection', link: '/compiler/backend/cpp-backend-compilers/gnu-compiler-collection' },
                  ],
                },
              ],
            },
            {
              text: 'Compiling',
              link: '/compiler/compiling/',
              items: [
                { text: 'Using JuleC', link: '/compiler/compiling/using-julec' },
                { text: 'Using Backend Compiler', link: '/compiler/compiling/using-backend-compiler' },
              ],
            },
          ],
        },
        {
          text: 'Project',
          link: '/project/',
          items: [
            { text: 'Directory Order', link: '/project/directory-order' },
            { text: 'Code Style', link: '/project/code-style' },
            { text: 'Declarations', link: '/project/declarations' },
            { text: 'Cycles', link: '/project/cycles' },
          ],
        },
        {
          text: 'Introduction',
          link: '/introduction/',
          items: [
            { text: 'Comments', link: '/introduction/comments' },
            { text: 'Reserved Functions', link: '/introduction/reserved-functions' },
            { text: 'Data Types', link: '/introduction/data-types' },
            { text: 'Operators', link: '/introduction/operators' },
            { text: 'Syntax', link: '/introduction/syntax' },
            { text: 'Blocks', link: '/introduction/blocks' },
          ],
        },
        {
          text: 'Common Concepts',
          link: '/common-concepts/',
          items: [
            { text: 'Variables', link: '/common-concepts/variables' },
            { text: 'Functions', link: '/common-concepts/functions' },
            { text: 'Arrays', link: '/common-concepts/arrays' },
            { text: 'Slices', link: '/common-concepts/slices' },
            { text: 'Maps', link: '/common-concepts/maps' },
            {
              text: 'Control Flow',
              link: '/common-concepts/control-flow/',
              items: [
                { text: 'Iterations', link: '/common-concepts/control-flow/iterations' },
                { text: 'Conditional', link: '/common-concepts/control-flow/conditional' },
                { text: 'Match Statement', link: '/common-concepts/control-flow/match-statement' },
                { text: 'Labels', link: '/common-concepts/control-flow/labels' },
              ],
            },
            { text: 'Enums', link: '/common-concepts/enums' },
            {
              text: 'Structures', link: '/common-concepts/structures/',
              items: [
                { text: 'Destructors', link: '/common-concepts/structures/destructors' },
              ],
            },
          ],
        },
        {
          text: 'Traits',
          link: '/traits/',
          items: [
            { text: 'Implementing', link: '/traits/implementing' },
          ],
        },
        {
          text: 'Memory',
          link: '/memory/',
          items: [
            { text: 'Immutability', link: '/memory/immutability' },
            { text: 'Mutability', link: '/memory/mutability' },
            { text: 'Pointers', link: '/memory/pointers' },
            { text: 'References', link: '/memory/references' },
            {
              text: 'Management',
              link: '/memory/management/',
              items: [
                { text: 'Manual', link: '/memory/management/manual' },
              ],
            },
          ],
        },
        {
          text: 'Unsafe Jule',
          link: '/unsafe-jule/',
          items: [
            { text: 'Immutability', link: '/unsafe-jule/immutability' },
            { text: 'Raw Pointers', link: '/unsafe-jule/raw-pointers' },
            { text: 'Unsafe Defines', link: '/unsafe-jule/unsafe-defines' },
            { text: 'References', link: '/unsafe-jule/references' },
          ],
        },
        {
          text: 'Error Handling',
          link: '/error-handling/',
          items: [
            { text: 'Error Coding', link: '/error-handling/error-coding' },
            { text: 'Error Trait', link: '/error-handling/error-trait' },
            { text: 'Panics', link: '/error-handling/panics' },
            { text: 'Handling Panics', link: '/error-handling/handling-panics' },
          ],
        },
        {
          text: 'Types',
          link: '/types/',
          items: [
            { text: 'Aliasing', link: '/types/aliasing' },
            { text: 'Casting', link: '/types/casting' },
            { text: 'Generics', link: '/types/generics' },
            { text: 'Strings', link: '/types/strings' },
            { text: 'Arrays', link: '/types/arrays' },
            { text: 'Slices', link: '/types/slices' },
            { text: 'Maps', link: '/types/maps' },
          ],
        },
        {
          text: 'Concurrency',
          link: "/concurrency/",
          items: [
            { text: 'Synchronization', link: '/concurrency/synchronization' },
            { text: 'Atomicity', link: '/concurrency/atomicity' },
            { text: 'Threads', link: '/concurrency/threads' },
          ],
        },
        {
          text: 'Type Statics',
          link: '/type-statics/',
          items: [
            { text: 'i8', link: '/type-statics/i8' },
            { text: 'i16', link: '/type-statics/i16' },
            { text: 'i32', link: '/type-statics/i32' },
            { text: 'i64', link: '/type-statics/i64' },
            { text: 'u8', link: '/type-statics/u8' },
            { text: 'u16', link: '/type-statics/u16' },
            { text: 'u32', link: '/type-statics/u32' },
            { text: 'u64', link: '/type-statics/u64' },
            { text: 'f32', link: '/type-statics/f32' },
            { text: 'f64', link: '/type-statics/f64' },
            { text: 'int', link: '/type-statics/int' },
            { text: 'uint', link: '/type-statics/uint' },
          ],
        },
        {
          text: 'C/C++',
          link: '/cpp/',
          items: [
            { text: 'API', link: '/api/' },
            {
              text: 'Interoperability',
              link: '/cpp/interoperability/',
              items: [
                { text: 'Headers', link: '/cpp/interoperability/header-files' },
                { text: 'Variables', link: '/cpp/interoperability/variables' },
                { text: 'Functions', link: '/cpp/interoperability/functions' },
                { text: 'Structures', link: '/cpp/interoperability/structures' },
                { text: 'Types', link: '/cpp/interoperability/types' },
                { text: 'Macros', link: '/cpp/interoperability/macros' },
                { text: 'Namespaces', link: '/cpp/interoperability/namespaces' },
                { text: 'Jule Wrappers', link: '/cpp/interoperability/jule-wrappers' },
              ],
            },
            { text: 'Objective-C', link: '/cpp/objective-c' },
            { text: 'Objective-C++', link: '/cpp/objective-cpp' },
            { text: 'Integrated Jule', link: '/cpp/integrated-jule' },
          ],
        },
        {
          text: 'Packages',
          link: '/packages/',
          items: [
            { text: 'Using Packages', link: '/packages/using-packages' },
            { text: 'Exporting Definitions', link: '/packages/exporting-definitions' },
            { text: '3rd Party Packages', link: '/packages/3rd-party-packages' },
          ],
        },
        {
          items: [
            { text: 'Standard Library', link: '/std/' },
            { text: 'End', link: '/end' },
          ]
        },
      ],

      '/api/': [
        {
          text: 'API',
          link: '/api/',
          items: [
            {
              text: 'Implementation',
              link: '/api/implementation/',
              items: [
                { text: 'Disable RC', link: '/api/implementation/disable-rc' },
                { text: 'Disable Safety', link: '/api/implementation/disable-safety' },
              ],
            },
            {
              text: 'Environment',
              link: '/api/environment/',
              items: [
                { text: 'Command-Line Arguments', link: '/api/environment/command-line-arguments' },
                { text: 'Environment Variables', link: '/api/environment/environment-variables' },
                { text: 'Executable Path', link: '/api/environment/executable-path' },
              ],
            },
            {
              text: 'Process',
              link: '/api/process/',
              items: [
                { text: 'Signals', link: '/api/process/signals' },
                { text: 'Termination', link: '/api/process/termination' },
              ],
            },
            { text: 'Platform Specific', link: '/api/platform-specific' },
            {
              text: 'Types',
              link: '/api/types/',
              items: [
                { text: 'Primitive', link: '/api/types/primitive' },
                { text: 'Limits', link: '/api/types/limits' },
              ],
            },
            { text: 'Atomicity', link: '/api/atomicity' },
            { text: 'Deferred Blocks', link: '/api/deferred-blocks' },
            { text: 'Concurrency', link: '/api/concurrency' },
            {
              text: 'Unicode',
              link: '/api/unicode/',
              items: [
                { text: 'UTF-8', link: '/api/unicode/utf-8' },
                { text: 'UTF-16', link: '/api/unicode/utf-16' },
              ],
            },
            {
              text: 'Reference Counting',
              link: '/api/reference-counting/',
              items: [
                { text: 'Using', link: '/api/reference-counting/using' },
              ],
            },
            {
              text: 'Integrated Jule',
              link: '/api/integrated-jule/',
              items: [
                { text: 'Wrappers', link: '/api/integrated-jule/wrappers' },
              ],
            },
            {
              text: 'Using as Library',
              link: '/api/using-as-library/',
              items: [],
            },
          ],
        }
      ],

      '/std/': [
        {
          text: 'Standard Library',
          link: '/std/',
          items: [
            { text: 'builtin', link: '/std/builtin' },
            { text: 'std::conv', link: '/std/conv' },
            {
              text: 'std::debug',
              link: '/std/debug',
              items: [
                { text: 'std::debug::assert', link: '/std/debug-assert' },
              ],
            },
            {
              text: 'std::encoding',
              link: '/std/encoding',
              items: [
                { text: 'std::encoding::base32', link: '/std/encoding-base32' },
                { text: 'std::encoding::base64', link: '/std/encoding-base64' },
              ],
            },
            { text: 'std::env', link: '/std/env' },
            { text: 'std::errors', link: '/std/errors' },
            { text: 'std::flag', link: '/std/flag' },
            { text: 'std::fmt', link: '/std/fmt' },
            {
              text: 'std::fs',
              link: '/std/fs',
              items: [
                { text: 'std::fs::path', link: '/std/fs-path' },
              ],
            },
            { text: 'std::io', link: '/std/io' },
            {
              text: 'std::jule',
              link: '/std/jule',
              items: [
                { text: 'std::jule::ast', link: '/std/jule-ast' },
                { text: 'std::jule::build', link: '/std/jule-build' },
                {
                  text: 'std::jule::constant',
                  link: '/std/jule-constant',
                  items: [
                    { text: 'std::jule::constant::lit', link: '/std/jule-constant-lit' }
                  ]
                },
                { text: 'std::jule::integrated', link: '/std/jule-integrated' },
                { text: 'std::jule::lex', link: '/std/jule-lex' },
                { text: 'std::jule::parser', link: '/std/jule-parser' },
                { text: 'std::jule::sema', link: '/std/jule-sema' },
                { text: 'std::jule::types', link: '/std/jule-types' },
              ]
            },
            {
              text: 'std::math',
              link: '/std/math',
              items: [
                { text: 'std::math::bits', link:'/std/math-bits' },
                { text: 'std::math::rand', link:'/std/math-rand' },
              ],
            },
            {
              text: 'std::mem',
              link: '/std/mem',
              items: [],
            },
            { text: 'std::process', link: '/std/process' },
            { text: 'std::runtime', link: '/std/runtime' },
            {
              text: 'std::sync',
              link: '/std/sync',
              items: [
                { text: 'std::sync::atomic', link:'/std/sync-atomic' }
              ],
            },
            { text: 'std::sys', link: '/std/sys' },
            { text: 'std::thread', link: '/std/thread', },
            { text: 'std::time', link: '/std/time', },
            {
              text: 'std::unicode',
              link: '/std/unicode',
              items: [
                { text: 'std::unicode::utf16', link:'/std/unicode-utf16' },
                { text: 'std::unicode::utf8', link:'/std/unicode-utf8' },
              ],
            },
            { text: 'std::vec', link: '/std/vec' },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/julelang/manual' }
    ]
  }
})