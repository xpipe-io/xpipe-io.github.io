============
Data Sources
============

A data source, as the name suggests, is a source of some kind of data.
Data sources work on top of a data store and represent
higher level information concerning how to interpret the stored data.

In short, a data store points to a location where data is stored
but does not know what kind of data is stored and how to interpret the stored data,
it only knows how to act as the raw data.
A data source then uses that data store and additional information on how to interpret the data
to allow you to access the contained data through X-Pipe, whether through read or write operations.

Categories of Data
==================

X-Pipe works on a higher level abstraction than normal pipes.
It differentiates between currently five major categories of data.
This differentiation allows you to connect producers and consumers in a data-aware fashion,
i.e. you can connect producers and consumers of the same category while X-Pipe handles the intermediation.
The different data categories are:

Tables
    Tabular data such as the contents of a .csv file, an Excel sheet, or a table of a relational database.

Data Structures
    Object data such as the contents of a ``.json`` file.

Texts
    Readable text data such as the contents of a ``.txt`` file.

Raw Data
    Any other binary data that has to be preserved byte by byte.

Collections
    A collections of multiple data sources such as the contents of a ``.zip`` file or a directory.

This category model is then used to perform conversions across data types and data formats within the same category.
For example, when you read table data from for example CSV file,
you can then pipe this table data into any other source that is categorized as a table.

It is also possible to convert data sources across categories, if this specific data source type allows for it.
For example, it is a trivial operation to convert a CSV table
source to a text source, as the CSV format is a text-based format.

Referring to Data Sources
=========================

As the amount of stored X-Pipe data sources can grow to a large number, some form of organization is very useful.
For starters, each data sources has a name that can be used to refer to it.
To allow for an organization of your data sources and also provide
namespaces to avoid conflicts between data sources with the same name,
data sources can also be organized into different data source collections.

Data Source IDs
---------------

As a result, all data sources in the X-Pipe storage have an unique identifier, the data source id.
These ids can be used to refer to a specific data source from the X-Pipe API or the X-Pipe command-line tools.
They consist out of the name of the collection they are in and a data source name, joined together with a colon::

    <collection>:<name>

For example, an canonical data source id could look like this::

    myproject:mysource

Therefore, there can be multiple data sources with the same name as long as they are located in different collections.

Short References
================

As typing out the full data source id can be cumbersome and is often not necessary, you can also apply some shortcuts.
In case the data source name is unique across all collections, you can also use
just the data source name without specifying the collection name.
For example, when wanting to peek the contents of the data source `myproject:mysource` using the CLI,
you can call::

    xpipe peek mysource

instead of::

    xpipe peek mycollection:mysource

as long as there are no other data source with the name `mysource` in other collections.

Temporary Data Sources
----------------------

In some cases when you only want to temporarily store a data source,
you can also add data source to the special temporary collection and
use a special data source id to indicate this.

There always exists the temporary collection, which is a special kind
of collection as its contents of it are removed on a system restart.
Using the temporary collection can be useful to prevent bloating your storage and having to manually remove data sources
afterwards in cases where you know that you only need the data source to be available in your current session.
Note that removing an X-Pipe data source does usually not
delete the underlying raw data source, e.g. the source file or database.

By keeping the collection name empty, you can indicate that
a data source is temporary and that it should be added to the temporary collection.
For example, you can store your data with

    xpipe add --id :mysource data.txt

to create a temporary data source, which will be removed on the next system restart.

Anonymous Data Sources
----------------------

In addition to storing data sources temporarily, there are also
some cases where you only require a data source for one or two immediate operations.
In these cases you can create an anonymous data source by omitting the data source ID all together.
For example, the following snippet makes use of anonymous data sources to read a JSON file and output an XML file::

    xpipe add data.json
    xpipe write data.xml

Every time you add a new data source, the anonymous data source ID
refers to the most recently added data source.
You can also manually select the data source to which the anonymous data source ID points to as follows::

    xpipe select <id>

