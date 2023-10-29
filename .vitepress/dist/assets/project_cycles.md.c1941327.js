import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.7cd3ab18.js";const y=JSON.parse('{"title":"Cycles","description":"","frontmatter":{},"headers":[],"relativePath":"project/cycles.md","filePath":"project/cycles.md"}'),l={name:"project/cycles.md"},p=n(`<h1 id="cycles" tabindex="-1">Cycles <a class="header-anchor" href="#cycles" aria-label="Permalink to &quot;Cycles&quot;">​</a></h1><p>Illegal cycles occur when the program will have an invalid runtime cycle.</p><p>For example:</p><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> A {</span></span>
<span class="line"><span style="color:#E1E4E8;">    b: B</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> B {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: A</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>In the example above, both structures refer directly to each other. This is an illegal cycle.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> A {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: A</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>In the example above, structure refers directly to itself. This is an illegal cycle.</p>`,8),c=[p];function r(t,o,i,u,d,b){return a(),e("div",null,c)}const E=s(l,[["render",r]]);export{y as __pageData,E as default};
