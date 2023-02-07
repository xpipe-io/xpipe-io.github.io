# xpipe-source-write (Manpage)

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe-source-write - Writes the contents of a data source to a target destination, which can either be a file, stdout, another data store, or another data source.</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe source write</strong> [<strong>-q</strong>] [<strong>-m</strong>=<em>&lt;mode&gt;</em>] [<strong>--output-source</strong>=<em>&lt;output source&gt;</em>]
                   [<strong>--output-store</strong>=<em>&lt;output store&gt;</em>] [<strong>-t</strong>=<em>&lt;type&gt;</em>] [<strong>-o</strong>=<em>&lt;key=value&gt;</em>[,
                   <em>&lt;key=value&gt;</em>&#8230;&#8203;]]&#8230;&#8203; [<em>&lt;source&gt;</em>]</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Sequentially outputs the data source contents to a destination. The following output options are available:
- If a data store is specified through --output-store, the data is written to that data store with either the same type or a custom type passed through the --type option.
- If a data source name is specified through --output-source, the data is written to that data source.
- If no explicit output is specified, the data is written to stdout.</p>
</div>
<div class="paragraph">
<p>In case additional configuration parameters are required to convert to the output type, they can either be passed through -o options or can be set interactively.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_options">Options</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>-t</strong>, <strong>--type</strong>=<em>&lt;type&gt;</em></dt>
<dd>
<p>The output format type</p>
</dd>
<dt class="hdlist1"><strong>--output-store</strong>=<em>&lt;output store&gt;</em></dt>
<dd>
<p>The output store to write to.</p>
</dd>
<dt class="hdlist1"><strong>--output-source</strong>=<em>&lt;output source&gt;</em></dt>
<dd>
<p>The output source to write to.</p>
</dd>
<dt class="hdlist1"><strong>-m</strong>, <strong>--mode</strong>=<em>&lt;mode&gt;</em></dt>
<dd>
<p>The write mode</p>
</dd>
<dt class="hdlist1"><strong>-o</strong>, <strong>--option</strong>=<em>&lt;key=value&gt;</em>[,<em>&lt;key=value&gt;</em>&#8230;&#8203;]</dt>
<dd>
<p>Sets configuration options such that they do not need to be set or confirmed later on. Inputs should be in a key=value format where multiple inputs can be separated with a comma, e.g. --option key1=value1,key2=value2. In case the -q/--quiet switch is set, all configuration options for the output format must be supplied through this option. Otherwise, when some options are not given but required, the parameters are queried interactively.</p>
</dd>
<dt class="hdlist1"><strong>-q</strong>, <strong>--quiet</strong></dt>
<dd>
<p>The quiet switch indicates that the command must run non-interactively. In case interactivity is required to query further user input, the command will fail if this switch is set.</p>
</dd>
</dl>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_arguments">Arguments</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1">[<em>&lt;source&gt;</em>]</dt>
<dd>
<p>The data source reference</p>
</dd>
</dl>
</div>
</div>
</div>
