import{_ as e,o as a,c as s,Q as i}from"./chunks/framework.7cd3ab18.js";const b=JSON.parse('{"title":"Directives","description":"","frontmatter":{},"headers":[],"relativePath":"compiler/directives.md","filePath":"compiler/directives.md"}'),r={name:"compiler/directives.md"},t=i('<h1 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-label="Permalink to &quot;Directives&quot;">​</a></h1><p>Compiler directives (or pragmas) are statements that describe how the compiler should handle source code. Directives are safe to use. It is checked by the compiler and incorrect usage is warned.</p><p>For a directive to be valid, it must be used correctly in the right place. The directive must be strt with the <code>#</code> prefix.</p><p><br> For example to directives:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">#typedef</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="top-directives" tabindex="-1">Top Directives <a class="header-anchor" href="#top-directives" aria-label="Permalink to &quot;Top Directives&quot;">​</a></h2><p>Top directives are must be placed at top of source file. Usually contains specific compiler configurations for file or package.</p><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h2><p>The arguments of the directives are separated by spaces. The directive must be followed by the required arguments, separated by spaces.</p><p><br> For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">#derive</span><span style="color:#E1E4E8;"> Clone</span></span>\n<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> MyStruct {}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="directive-expressions" tabindex="-1">Directive Expressions <a class="header-anchor" href="#directive-expressions" aria-label="Permalink to &quot;Directive Expressions&quot;">​</a></h2><p>Some directives are evaluates the expression you wrote with a custom syntax, and if the expression returns <code>true</code> as a result, your file will be included in the build. Expression must always return boolean. Expressions are only logical. So the variables you will use are boolean and the binary operations you can do are only logical and and logical or.</p><p>Your variables are set automatically by your compiler. The variables you can use are the same as in file annotation. They are variables that are also described in the <a href="/compiler/platform-support.html">platform support</a> documentation.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Evaluation results in <code>false</code> on any syntax errors and empty expressions.</p></div><h3 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to &quot;Syntax&quot;">​</a></h3><p>The syntax is simple and easy to learn. The logical and operator is <code>&amp;&amp;</code> and the logical or operator is <code>||</code>. These are exactly the same as Jule. The precedence of these operators is also the same. First, the logical or (<code>||</code>) operator is evaluated, then the logical and (<code>&amp;&amp;</code>) operator is evaluated. You also have parentheses. The parentheses, of course, are evaluated first. In addition to these, logical not (<code>!</code>) operator is also available.</p><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Here is an example code via <code>build</code> directive:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">#build</span><span style="color:#E1E4E8;"> (darwin </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> windows) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> x64</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">#build</span><span style="color:#E1E4E8;"> unix </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">darwin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="directive-derive" tabindex="-1">Directive: <code>derive</code> <a class="header-anchor" href="#directive-derive" aria-label="Permalink to &quot;Directive: `derive`&quot;">​</a></h2><p>Specify what additions the compiler will make. Supported by only structures. See more information about <a href="/compiler/deriving.html">deriving</a>.</p><h2 id="directive-pass" tabindex="-1">Directive: <code>pass</code> <a class="header-anchor" href="#directive-pass" aria-label="Permalink to &quot;Directive: `pass`&quot;">​</a></h2><p>Directive pass is a top directive. Passes compiler flags to generated compile command for compiling source code. Uses string literal as argument, but literals are not processed, accepts directly. So, you can&#39;t use escape sequences like original string literals.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>There are no issue if you are using same passes. The compiler eliminates duplicate passes.</p></div><p><br> For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">#pass</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;-framework Foundation&quot;</span></span>\n<span class="line"><span style="color:#79B8FF;">#pass</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;-framework Cocoa&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// ...</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="directive-build" tabindex="-1">Directive: <code>build</code> <a class="header-anchor" href="#directive-build" aria-label="Permalink to &quot;Directive: `build`&quot;">​</a></h2><p>The <code>build</code> directive is a top directive. Different way of specific programming such as platform specific programming. It can be used with or instead of file annotation. Unlike file annotation, it is a directive, not a naming convention.</p><p>Plese look at the <a href="/compiler/specific-programming.html">specific programming</a> section for more information.</p><h2 id="directive-typedef" tabindex="-1">Directive: <code>typedef</code> <a class="header-anchor" href="#directive-typedef" aria-label="Permalink to &quot;Directive: `typedef`&quot;">​</a></h2><p>In C++-linked structs, if the structure is a <code>typedef</code> use this will configure code generation correctly. Otherwise, the struct will be treated as a classical structures.</p><h2 id="directive-cdef" tabindex="-1">Directive: <code>cdef</code> <a class="header-anchor" href="#directive-cdef" aria-label="Permalink to &quot;Directive: `cdef`&quot;">​</a></h2><p>In C++-linked functions, if the function is a <code>#define</code>, it configures code generation to be compatible.</p><h2 id="directive-namespace" tabindex="-1">Directive: <code>namespace</code> <a class="header-anchor" href="#directive-namespace" aria-label="Permalink to &quot;Directive: `namespace`&quot;">​</a></h2><p>Adds namesapce selection for supported C++-linked types. Uses string literal as argument, but literals are not processed, accepts directly. So, you can&#39;t use escape sequences like original string literals.</p><h2 id="directive-deprecated" tabindex="-1">Directive: <code>deprecated</code> <a class="header-anchor" href="#directive-deprecated" aria-label="Permalink to &quot;Directive: `deprecated`&quot;">​</a></h2><p>Definitions qualify as deprecated.</p><h2 id="directive-test" tabindex="-1">Directive: <code>test</code> <a class="header-anchor" href="#directive-test" aria-label="Permalink to &quot;Directive: `test`&quot;">​</a></h2><p>Declares test function.</p>',42),o=[t];function n(l,c,p,d,u,h){return a(),s("div",null,o)}const v=e(r,[["render",n]]);export{b as __pageData,v as default};
