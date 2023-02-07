# xpipe-source-add (Manpage)

<h2 id="_name">Name</h2>
<div class="sectionbody">
<p>xpipe-source-add - Creates a data source from either a file, a data store, or data piped into stdin</p>
</div>
<div class="sect1">
<h2 id="_synopsis">Synopsis</h2>
<div class="sectionbody">
<div class="paragraph">
<p><strong>xpipe source add</strong> [<strong>-q</strong>] [<strong>--confirm</strong>] [<strong>-i</strong>=<em>&lt;id&gt;</em>] [<strong>-t</strong>=<em>&lt;type&gt;</em>] [<strong>-o</strong>=<em>&lt;key=value&gt;</em>[,
                 <em>&lt;key=value&gt;</em>&#8230;&#8203;]]&#8230;&#8203; [<em>&lt;input&gt;</em>]</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_description">Description</h2>
<div class="sectionbody">
<div class="paragraph">
<p>Reads the input, determines the appropriate data source type, and creates a data source from it.</p>
</div>
<div class="paragraph">
<p>The data source type is attempted to be automatically determined. In case the automatic detection does not return the correct results or is not desired, the input format can also be explicitly specified with the --type option.</p>
</div>
<div class="paragraph">
<p>To access the created data source later on, you can also specify a data source id with the --id option.This id consists out of a collection name and the actual data source name separated by a colon, e.g. mycollection:mysourceIf no id is specified, an anonymous data source is created. It can still be used until another one is created.</p>
</div>
<div class="paragraph">
<p>In case the input format type requires additional configuration parameters, they can either be passed through the -o/--option options or can be set interactively. The -q/--quiet switch can be used to enforce non-interactivity.</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_options">Options</h2>
<div class="sectionbody">
<div class="dlist">
<dl>
<dt class="hdlist1"><strong>--confirm</strong></dt>
<dd>
<p>Interactively confirm all determined configuration parameters</p>
</dd>
<dt class="hdlist1"><strong>-t</strong>, <strong>--type</strong>=<em>&lt;type&gt;</em></dt>
<dd>
<p>The data source type. Only needs to be explicitly specified in case the automatic detection does not return the correct results or is not desired.</p>
</dd>
<dt class="hdlist1"><strong>-i</strong>, <strong>--id</strong>=<em>&lt;id&gt;</em></dt>
<dd>
<p>The canonical data source reference that can be used to access the contents later on.</p>
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
<dt class="hdlist1">[<em>&lt;input&gt;</em>]</dt>
<dd>
<p>The input store. This can either be a data store name or a file name. If left empty, the stdin contents are used instead.</p>
</dd>
</dl>
</div>
</div>
</div>
