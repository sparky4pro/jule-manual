import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.7cd3ab18.js";const b=JSON.parse('{"title":"Packages","description":"","frontmatter":{},"headers":[],"relativePath":"packages/index.md","filePath":"packages/index.md"}'),l={name:"packages/index.md"},p=n(`<h1 id="packages" tabindex="-1">Packages <a class="header-anchor" href="#packages" aria-label="Permalink to &quot;Packages&quot;">​</a></h1><p>Jule treats each directory as a package. Each package has the ability to use its own defines.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// file: ./hello_print.jule</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">hello_print</span><span style="color:#E1E4E8;">(name: </span><span style="color:#F97583;">str</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">outln</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Hello &quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> name)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#6A737D;">// file: ./main.jule</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">main</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">hello_print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Packages&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>As shown in the example above, since both files are located in the same directory, they are considered the same package and therefore have access to each other&#39;s definitions.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Be careful to design the packages according to their definition order, otherwise you may not get the result you expect.</p></div>`,7),o=[p];function t(c,r,i,d,u,E){return a(),e("div",null,o)}const m=s(l,[["render",t]]);export{b as __pageData,m as default};
