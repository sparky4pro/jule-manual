import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.7cd3ab18.js";const h=JSON.parse('{"title":"std::unicode::utf8","description":"","frontmatter":{},"headers":[],"relativePath":"std/unicode-utf8.md","filePath":"std/unicode-utf8.md"}'),o={name:"std/unicode-utf8.md"},l=a('<h1 id="std-unicode-utf8" tabindex="-1">std::unicode::utf8 <a class="header-anchor" href="#std-unicode-utf8" aria-label="Permalink to &quot;std::unicode::utf8&quot;">​</a></h1><h2 id="globals" tabindex="-1">Globals <a class="header-anchor" href="#globals" aria-label="Permalink to &quot;Globals&quot;">​</a></h2><h3 id="const-rune-error" tabindex="-1"><code>const RUNE_ERROR</code> <a class="header-anchor" href="#const-rune-error" aria-label="Permalink to &quot;`const RUNE_ERROR`&quot;">​</a></h3><p>The &quot;error&quot; rune or &quot;Unicode replacement character&quot;</p><hr><h3 id="const-rune-self" tabindex="-1"><code>const RUNE_SELF</code> <a class="header-anchor" href="#const-rune-self" aria-label="Permalink to &quot;`const RUNE_SELF`&quot;">​</a></h3><p>Characters below RUNE_SELF are represented as themselves in a single byte.</p><hr><h3 id="const-max-rune" tabindex="-1"><code>const MAX_RUNE</code> <a class="header-anchor" href="#const-max-rune" aria-label="Permalink to &quot;`const MAX_RUNE`&quot;">​</a></h3><p>Maximum valid Unicode code point.</p><hr><h3 id="const-utf-max" tabindex="-1"><code>const UTF_MAX</code> <a class="header-anchor" href="#const-utf-max" aria-label="Permalink to &quot;`const UTF_MAX`&quot;">​</a></h3><p>Maximum number of bytes of a UTF-8 encoded Unicode character.</p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">full_rune</span><span style="color:#E1E4E8;">(p: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Reports whether the bytes in p begin with a full UTF-8 encoding of a rune. An invalid encoding is considered a full Rune since it will convert as a width-1 error rune.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">full_rune_str</span><span style="color:#E1E4E8;">(s: </span><span style="color:#F97583;">str</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Is like full_rune but its input is a string.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">decode_rune</span><span style="color:#E1E4E8;">(p: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): (r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">, size: </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Unpacks the first UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.</p><p>An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">decode_rune_str</span><span style="color:#E1E4E8;">(s: </span><span style="color:#F97583;">str</span><span style="color:#E1E4E8;">): (r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">, size: </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Is like decode_rune but its input is a string. If s is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.</p><p>An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">decode_last_rune</span><span style="color:#E1E4E8;">(p: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): (r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">, size: </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Unpacks the last UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.</p><p>An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">decode_last_rune_str</span><span style="color:#E1E4E8;">(s: </span><span style="color:#F97583;">str</span><span style="color:#E1E4E8;">): (r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">, size: </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Is like decode_last_rune but its input is a string. If s is empty it returns (RUNE_ERROR, 0). Otherwise, if the encoding is invalid, it returns (RUNE_ERROR, 1). Both are impossible results for correct, non-empty UTF-8.</p><p>An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rune_len</span><span style="color:#E1E4E8;">(r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">int</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Returns the number of bytes required to encode the rune. It returns -1 if the rune is not a valid value to encode in UTF-8.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">encode_rune</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> p: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">int</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Writes into p (which must be large enough) the UTF-8 encoding of the rune. If the rune is out of range, it writes the encoding of RUNE_ERROR. It returns the number of bytes written.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">append_rune</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> p: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">, r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">): []</span><span style="color:#F97583;">byte</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Appends the UTF-8 encoding of r to the end of p and returns the extended buffer. If the rune is out of range, it appends the encoding of RUNE_ERROR.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rune_count</span><span style="color:#E1E4E8;">(p: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): (n: </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Returns the number of runes in p. Erroneous and short encodings are treated as single runes of width 1 byte.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rune_count_str</span><span style="color:#E1E4E8;">(s: </span><span style="color:#F97583;">str</span><span style="color:#E1E4E8;">): (n: </span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Is like rune_count but its input is a string.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">rune_start</span><span style="color:#E1E4E8;">(b: </span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Reports whether the byte could be the first byte of an encoded, possibly invalid rune. Second and subsequent bytes always have the top two bits set to 10.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">valid</span><span style="color:#E1E4E8;">(p: []</span><span style="color:#F97583;">byte</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Reports whether p consists entirely of valid UTF-8-encoded runes.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">valid_str</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">mut</span><span style="color:#E1E4E8;"> s: </span><span style="color:#F97583;">str</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Reports whether s consists entirely of valid UTF-8-encoded runes.</p><hr><div class="language-jule line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">jule</span><pre class="shiki github-dark"><code><span class="line"><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">valid_rune</span><span style="color:#E1E4E8;">(r: </span><span style="color:#F97583;">rune</span><span style="color:#E1E4E8;">): </span><span style="color:#F97583;">bool</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Reports whether r can be legally encoded as UTF-8. Code points that are out of range or a surrogate half are illegal.</p>',62),t=[l];function r(p,i,c,d,u,E){return e(),n("div",null,t)}const b=s(o,[["render",r]]);export{h as __pageData,b as default};
