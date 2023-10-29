import{_ as e,o as a,c as s,Q as i}from"./chunks/framework.7cd3ab18.js";const b=JSON.parse('{"title":"Specific Programming","description":"","frontmatter":{},"headers":[],"relativePath":"compiler/specific-programming.md","filePath":"compiler/specific-programming.md"}'),n={name:"compiler/specific-programming.md"},o=i('<h1 id="specific-programming" tabindex="-1">Specific Programming <a class="header-anchor" href="#specific-programming" aria-label="Permalink to &quot;Specific Programming&quot;">​</a></h1><p>You may want to do platform specific programming for various reasons. The code in your project is platform-specific and easy to organize. Your platform-specific files are not included in the compilation.</p><h2 id="file-annotation" tabindex="-1">File Annotation <a class="header-anchor" href="#file-annotation" aria-label="Permalink to &quot;File Annotation&quot;">​</a></h2><p>File Annotation enables a source file to be classified by operating system or architecture at compile time. If there is a platform or operating system that does not comply with Annotation, the source file is not included in the compilation. This is a compiler feature that can help with platform specific development. These annotations are available for all supported operating systems and architects. Check out <a href="/compiler/platform-support.html">platform support</a> documentations to see the supported operating systems and architectures.</p><p>Attachments should be placed at the end and separated by underscore. Up to two annotations can be used. If you use a single annotation, this annotation can be both an operating system and an archtitecture annotation. If you use two annotations, the first annotation must be the operating system and the second annotation must be architecture. If there is no underscore, the entire name can also be matched.</p><p>For example:</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">darwin.jule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">arm64.jule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">unix_amd64.jule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">example_amd64.jule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">example_windows_amd64.jule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">example_darwin_arm64.jule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark"><code><span class="line"><span style="color:#e1e4e8;">example_linux.jule</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="the-build-directive" tabindex="-1">The <code>build</code> Directive <a class="header-anchor" href="#the-build-directive" aria-label="Permalink to &quot;The `build` Directive&quot;">​</a></h2><p>The <code>build</code> directive is a top directive that includes the source code file in the build based on the evaluation result using directive expressions. For more information about expressions, you can read the <a href="/compiler/directives.html#directive-expressions">Directive Expressions</a> section.</p><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><p>Your variables are set automatically by your compiler. There are variables for many situations. You can also read the <a href="/compiler/platform-support.html">platform support</a> section to get more ideas about platform specific variables.</p><p>Here is the list of variables and their existence:</p><ul><li><code>windows</code>: operating system is windows</li><li><code>darwin</code>: operating system is darwin</li><li><code>linux</code>: operating system is linux</li><li><code>unix</code>: operating system is UNIX, or UNIX-like</li><li><code>i386</code>: cpu architecture is intel 386</li><li><code>amd64</code>: cpu architecture is AMD64</li><li><code>x32</code>: 32-bit cpu architecture</li><li><code>x64</code>: 64-bit cpu architecture</li><li><code>production</code>: production compilation enabled</li><li>``</li></ul><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Here is an example code:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">#build</span><span style="color:#E1E4E8;"> (darwin </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> windows) </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> x64</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The above expression will return <code>true</code> for windows and darwin operating systems with 64-bit architecture.</p><p>Another example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#79B8FF;">#build</span><span style="color:#E1E4E8;"> unix </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">darwin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>The above expression will return <code>true</code> for all unix operating systems except darwin.</p>',26),t=[o];function r(l,p,c,d,u,m){return a(),s("div",null,t)}const g=e(n,[["render",r]]);export{b as __pageData,g as default};
