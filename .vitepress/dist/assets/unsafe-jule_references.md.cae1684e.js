import{_ as e,o as s,c as n,Q as a}from"./chunks/framework.7cd3ab18.js";const h=JSON.parse('{"title":"References","description":"","frontmatter":{},"headers":[],"relativePath":"unsafe-jule/references.md","filePath":"unsafe-jule/references.md"}'),r={name:"unsafe-jule/references.md"},o=a(`<h1 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h1><h2 id="concurrent-calls-with-reference-parameters" tabindex="-1">Concurrent Calls with Reference Parameters <a class="header-anchor" href="#concurrent-calls-with-reference-parameters" aria-label="Permalink to &quot;Concurrent Calls with Reference Parameters&quot;">​</a></h2><p>References cannot be used with concurrent calls because of potantial reference dangling. Because there is no clear guarantee that the concurrent call is being followed and that the program is safely waiting for the concurrent call to terminate at a non-dangling point. Therefore, your compiler cannot be sure that what you are doing is safe.</p><p>If you are confident and aware that this concurrent call you make will be safe, you should take responsibility by showing that you know that the call you are making is unsafe. So your compiler will respect you and allow you to concurrent call a function with reference parameters.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">unsafe</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">co</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">my_function</span><span style="color:#E1E4E8;">(my_var) }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="access-reference-from-parent-scope" tabindex="-1">Access Reference from Parent Scope <a class="header-anchor" href="#access-reference-from-parent-scope" aria-label="Permalink to &quot;Access Reference from Parent Scope&quot;">​</a></h2><p>Anonymous functions copy the definitions of the scope in which they are defined for safety reasons, they do not refer to them. But a copied reference is still a reference and is in danger of dangling. Therefore, anonymous functions do not use references from parent scopes. But Unsafe Jule lets you do just that. Access the relevant reference only with Unsafe Jule.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">10</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">y </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> x</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">unsafe</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(y) }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,10),l=[o];function t(c,p,i,u,f,d){return s(),n("div",null,l)}const E=e(r,[["render",t]]);export{h as __pageData,E as default};
