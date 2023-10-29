import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.7cd3ab18.js";const b=JSON.parse('{"title":"Backend Emits","description":"","frontmatter":{},"headers":[],"relativePath":"integrated-jule/backend-emits.md","filePath":"integrated-jule/backend-emits.md"}'),l={name:"integrated-jule/backend-emits.md"},o=e(`<h1 id="backend-emits" tabindex="-1">Backend Emits <a class="header-anchor" href="#backend-emits" aria-label="Permalink to &quot;Backend Emits&quot;">​</a></h1><p>Your compiler allows you to emit backend code wherever you want. Integrated Jule should be used for this. The <code>std::jule::integrated</code> standard library included in Jule provides you with useful tools and functionalities for Integrated Jule. The <code>inline</code> function in the library allows you to emit backend code with Unsafe Jule.</p><p>When working with Integrated Jule, sometimes using use declarations and linking definitions may not be useful, or you may want to write as much Jule code as possible, in which case emitting backend code with the <code>inline</code> function can help you.</p><h2 id="emit-backend-code" tabindex="-1">Emit Backend Code <a class="header-anchor" href="#emit-backend-code" aria-label="Permalink to &quot;Emit Backend Code&quot;">​</a></h2><p>To emit backend code, use Unsafe Jule to call the <code>inline</code> function as the code you want as a constant string.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> integ </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> std::jule::integrated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">unsafe</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        integ::</span><span style="color:#79B8FF;">inline</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`std::cout &lt;&lt; &quot;Hello World!&quot; &lt;&lt; std::endl;\`</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="read-from-backend-code" tabindex="-1">Read from Backend Code <a class="header-anchor" href="#read-from-backend-code" aria-label="Permalink to &quot;Read from Backend Code&quot;">​</a></h2><p>To emit backend code and read result, use Unsafe Jule to call the <code>inline</code> function as the code you want as a constant string. Pass single generic type to specify return type of backend code.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">use</span><span style="color:#E1E4E8;"> integ </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> std::jule::integrated</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> x </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">unsafe</span><span style="color:#E1E4E8;"> { integ::inline[</span><span style="color:#F97583;">f64</span><span style="color:#E1E4E8;">](</span><span style="color:#9ECBFF;">\`jule::MAX_F64\`</span><span style="color:#E1E4E8;">) }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(x)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(x </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">f64</span><span style="color:#E1E4E8;">.MAX)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,11),t=[o];function p(c,r,i,d,u,E){return n(),a("div",null,t)}const m=s(l,[["render",p]]);export{b as __pageData,m as default};
