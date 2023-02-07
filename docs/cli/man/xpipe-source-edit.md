# xpipe source edit

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe-source-edit - Edits an existing data source</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe source edit</strong> [<strong>-o</strong>=<em>&lt;key=value&gt;</em>[,<em>&lt;key=value&gt;</em>&#8230;&#8203;]]&#8230;&#8203; [<em>&lt;source&gt;</em>]</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Changes the data source configuration of an existing data source. The configuration parameters can either be changed interactively or by passing them through the -o/--option arguments. By default, the command runs in interactive mode unless any --option argument is passed.</p>
</div>
<div class="paragraph">
<p>Only the existing configuration can be changed with the edit command, not the data source type itself. To also change the data source type, use the xpipe convert command instead.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_options">Options</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>-o</strong>, <strong>--option</strong>=<em>&lt;key=value&gt;</em>[,<em>&lt;key=value&gt;</em>&#8230;&#8203;]</dt>
<dd>
<p>Sets configuration options such that they do not need to be set or confirmed later on. Inputs should be in a key=value format where multiple inputs can be separated with a comma, e.g. --option key1=value1,key2=value2. In case the -q/--quiet switch is set, all configuration options for the output format must be supplied through this option. Otherwise, when some options are not given but required, the parameters are queried interactively.</p>
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
