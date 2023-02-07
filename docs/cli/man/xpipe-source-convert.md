# xpipe-source-convert (Manpage)

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe-source-convert - Converts a data source to a different type</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe source convert</strong> [<strong>-q</strong>] [<strong>-c</strong>=<em>&lt;category&gt;</em>] [<strong>-n</strong>=<em>&lt;source id&gt;</em>] [<strong>-t</strong>=<em>&lt;type&gt;</em>]
                     [<strong>-o</strong>=<em>&lt;key=value&gt;</em>[,<em>&lt;key=value&gt;</em>&#8230;&#8203;]]&#8230;&#8203; [<em>&lt;source&gt;</em>]</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>The conversion is taking place on the data source view level, not the actual content itself. It can therefore be seen as a reinterpretation of existing data rather than an actual conversion.</p>
</div>
<div class="paragraph">
<p>The new data source type can either be specified explicitly with the --type option or in a more implicit way by passing a general category with the --category option. When the explicit type is specified, the conversion is performed forcefully. In case only the category is specified, it will check whether the current type of the data source supports conversion to that new category.</p>
</div>
<div class="paragraph">
<p>The data source can either be converted in-place or out of place by creating a new converted copy with the --new option.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_options">Options</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>-c</strong>, <strong>--category</strong>=<em>&lt;category&gt;</em></dt>
<dd>
<p>The general category to use for conversion instead of an explicit type. Valid values: table, raw, text, collection, structure</p>
</dd>
<dt class="hdlist1"><strong>-t</strong>, <strong>--type</strong>=<em>&lt;type&gt;</em></dt>
<dd>
<p>The data source type to convert to</p>
</dd>
<dt class="hdlist1"><strong>-n</strong>, <strong>--new</strong>=<em>&lt;source id&gt;</em></dt>
<dd>
<p>The data source id of a newly created copy</p>
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
<p>The data source reference. A data source reference supports multiple different formats:</p>
<div class="ulist">
<ul>
<li>
<p>If not specified, the latest data source will automatically be used</p>
</li>
<li>
<p>If a data source name is specified, the matching data source will be selected</p>
</li>
<li>
<p>In case there are multiple data sources with the same name, a fully qualified data source id can be used</p>
</li>
</ul>
</div>
</dd>
</dl>
</div>
</div>
</div>
