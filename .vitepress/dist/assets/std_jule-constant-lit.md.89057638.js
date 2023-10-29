import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.7cd3ab18.js";const h=JSON.parse('{"title":"std::jule::constant::lit","description":"","frontmatter":{},"headers":[],"relativePath":"std/jule-constant-lit.md","filePath":"std/jule-constant-lit.md"}'),t={name:"std/jule-constant-lit.md"},l=a('<h1 id="std-jule-constant-lit" tabindex="-1">std::jule::constant::lit <a class="header-anchor" href="#std-jule-constant-lit" aria-label="Permalink to &quot;std::jule::constant::lit&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">is_ascii</span><span style="color:#E1E4E8;">(r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Reports whether rune is byte actually. In other words, whether rune is ACII.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">to_rune</span><span style="color:#E1E4E8;">(bytes: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">rune</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Returns rune value string from bytes, not includes quotes.<br> Bytes are represents rune literal, allows escape sequences.<br> Returns empty string if bytes.len == 0</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">to_raw_str</span><span style="color:#E1E4E8;">(bytes: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">str</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Returns raw-string value string from bytes, not includes quotes.<br> Bytes are represents string characters.<br> Returns empty string if bytes.len == 0</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">to_str</span><span style="color:#E1E4E8;">(bytes: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">str</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Returns string value string from bytes, not includes quotes.<br> Bytes are represents string characters, allows escape sequences.<br> Returns empty string if bytes.len == 0</p>',13),r=[l];function o(p,c,i,u,d,y){return e(),n("div",null,r)}const E=s(t,[["render",o]]);export{h as __pageData,E as default};
